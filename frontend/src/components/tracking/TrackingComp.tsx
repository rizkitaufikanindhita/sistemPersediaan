import { Fragment, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import Cookies from "js-cookie";
import axios from "axios";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const token = Cookies.get("token") || "";
const urlRequestDataById = import.meta.env.VITE_URL_REQUESTBYID;
const urlOutputById = import.meta.env.VITE_URL_OUTPUTBARANGBYID;

const TrackingComp = () => {
  const navigate = useNavigate();
  const [dataTracking, setDataTracking] = useState<any[] | null>([])

  const formatDate = (epochMillis: number) => {
    const date = new Date(epochMillis);
    return date.toLocaleDateString("en-GB"); // Tanggal-bulan-tahun (contoh: 01/01/2023)
  };

  const [lengthData, setLengthData] = useState(1)
  const itemPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async () => {
    try {
      const [result1, result2] = await Promise.all([
        axios.get(`${urlRequestDataById}/data/byId`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }),

        axios.get(urlOutputById, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }),
      ]);

      const hasilData1 = result1.data.data || [];
      const hasilData2 = result2.data.data || [];

      const updateData1 = hasilData1.map((item: any) => ({
        ...item,
        requestId: `${item.id.slice(-4)}/${item.bagian}`,
      }));

      const combinedData = [...updateData1, ...hasilData2];

      combinedData.sort((a: any, b: any) => b.tanggal - a.tanggal);

      setDataTracking(combinedData);
      setLengthData(combinedData.length)
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Calculate total pages based on data length
  const totalPages = Math.ceil(lengthData / itemPerPage);

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = dataTracking?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className="w-full">
        <div className="mb-5 flex justify-between">
          <div className="flex justify-start">
            <div className="mt-2 text-xl font-bold">Tracking</div>
          </div>
        </div>
        <Table className="bg-slate-300 rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg text-center">Tanggal</TableHead>
              <TableHead className="text-lg text-center">RequestId</TableHead>
              <TableHead className="text-center text-lg">Action</TableHead>
              <TableHead className="text-center text-lg">Status</TableHead>
            </TableRow>
          </TableHeader>
          {currentItems?.map((item: any, index: any) => (
            <TableBody>
              <TableRow key={index}>
                <TableCell className="border text-center w-1/4">
                  {formatDate(parseInt(item.tanggal))}{" "}
                </TableCell>
                <TableCell className="border text-center w-1/4">
                  {item.requestId.toUpperCase()}
                </TableCell>
                <TableCell className="border text-center w-1/4">
                  <div className="flex justify-center gap-3">
                    <Button onClick={() => navigate(`detailsTracking?id=${item.id}&requestId=${item.requestId}&tanggal=${item.tanggal}&bagian=${item.bagian}`)}>
                      Detail
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="border text-center w-1/4">
                  <div className="cursor-default">{item.status === 0 ? "On Process" : item.status === 1 ? "Ready To Pick Up" : "DONE"}</div>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
        <Pagination className="mt-3">
          <PaginationContent>
            {/* Previous Button */}
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => paginate(currentPage - 1)}
                />
              </PaginationItem>
            )}

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => paginate(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Next Button */}
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => paginate(currentPage + 1)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </Fragment>
  );
};

export default TrackingComp;
