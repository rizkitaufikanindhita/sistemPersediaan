import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { ChevronLeft } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";
import _ from "lodash";

const token = Cookies.get("token");
const urlRequestById = import.meta.env.VITE_URL_REQUESTBYID
const urlBarangById = import.meta.env.VITE_URL_GETBARANGBYID
const urlOutputById = import.meta.env.VITE_URL_OUTPUTBARANGBYID

const DetailsTrackingComp = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const requestId = searchParams.get("requestId");
  const tanggal = searchParams.get("tanggal");
  const bagian = searchParams.get("bagian");

  const [requestDetails, setRequestDetails] = useState<any[]>([]);
  const [bagianNew, setBagianNew] = useState(bagian);
  const [tanggalNew, setTanggalNew] = useState(tanggal);
  const [requestIdNew, setRequestIdNew] = useState(requestId)

  const itemPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const formatDate = (epochMillis: number) => {
    const date = new Date(epochMillis);
    return date.toLocaleDateString("en-GB"); // Tanggal-bulan-tahun (contoh: 01/01/2023)
  };

  const fetchRequestBarangDetailById = async () => {
    try {
      // fetch requestDetails
      const result = await axios.get(`${urlRequestById}/${id}`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      const hasil = result.data?.data?.requestDetails;

      if (hasil) {
        const detailsWithNamaBarang = await Promise.all(
          hasil.map(async (item: any) => {
            const barangResult = await axios.get(`${urlBarangById}/${item.barangId}`, {
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
            });
            const namaBarang = barangResult.data.data.namaBarang;

            // Return a new object that includes namaBarang along with the other details
            return { ...item, namaBarang };
          })
        );

        // Update state with the new array containing namaBarang
        setRequestDetails(detailsWithNamaBarang);
      } else {
        // const result = await axios.get(`${urlOutputById}/${id}`)
        const result = await axios.get(`${urlOutputById}/${id}`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        })

        const resultData = result.data.data.outputBarangDetails
        setRequestDetails(resultData);
      }
    } catch (e) {
      console.error(e)
    }
  }

  // Proses data setelah fetch selesai dan menggabungkan data dari requestDetails dan barang
  useEffect(() => {
    fetchRequestBarangDetailById();
  }, []);

  // Calculate total pages based on data length
  const totalPages = Math.ceil(requestDetails.length / itemPerPage);

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = requestDetails.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className="w-full">
        <div className="text-left" onClick={() => window.history.back()}>
          <Button variant="outline" size="icon" className="w-[150px]">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="mb-5 flex justify-between">
          <div className="flex justify-between w-full">
            <div className="mt-2 font-bold">
              {bagianNew?.toUpperCase()} - {formatDate(parseInt(tanggalNew ?? "0"))}
            </div>
            <div className="mt-2 font-bold">{requestIdNew?.toUpperCase()}</div>
          </div>

          {/* Add barang */}
          <div>{/* <AddInputBarangDetailComp /> */}</div>
        </div>
        <Table className="bg-slate-300 rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px] text-lg text-center">
                Nama Barang
              </TableHead>
              <TableHead className="w-[400px] text-lg text-center">
                Jumlah
              </TableHead>
              {/* <TableHead className="w-[400px] text-lg text-center"> */}
              {/*   Satuan */}
              {/* </TableHead> */}
              {/* <TableHead className="text-lg text-center">Action</TableHead> */}
            </TableRow>
          </TableHeader>
          {currentItems.map((item: any, index: any) => (
            <TableBody>
              <TableRow key={index}>
                <TableCell className="text-md border text-center w-[400px]">
                  {item.namaBarang
                    ? item.namaBarang.toUpperCase()
                    : item.barang.namaBarang.toUpperCase()}
                </TableCell>
                <TableCell className="text-md border text-center w-[400px]">
                  {item.jumlah}
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

export default DetailsTrackingComp;
