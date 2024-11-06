import { Fragment, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Cookies from "js-cookie";
import axios from "axios";
import AddBarangComp from "./AddBarangComp";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import _ from "lodash";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const token = Cookies.get("token");
const url = import.meta.env.VITE_URL_GETBULKBARANG;

const BarangComp = () => {
  const navigate = useNavigate();
  const itemPerPage = 5;
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  const barangData = async (filter: string) => {
    if (filter) {
      try {
        const response = await axios.get(url, {
          params: { filter },
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        setData(response.data.data);
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        const response = await axios.get(url, {
          params: {},
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        setData(response.data.data);
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    }
  };

  //debounce
  const debouncedBarangData = _.debounce(barangData, 300);

  useEffect(() => {
    debouncedBarangData(filter);

    if (filter) {
      setCurrentPage(1);
    }

    return () => {
      debouncedBarangData.cancel();
    };
  }, [filter]);

  // Calculate total pages based on data length
  const totalPages = Math.ceil(data.length / itemPerPage);

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className="w-full">
        <div className="mb-5 flex justify-between ">
          <div className="flex justify-start">
            <Input
              placeholder="Search barang"
              className="w-[200px]"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          {/* Add barang */}
          <div>
            <AddBarangComp />
          </div>
        </div>
        <Table className="bg-slate-300 rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px] text-lg text-center">
                Gambar
              </TableHead>
              <TableHead className="w-[400px] text-lg text-center">
                Nama Barang
              </TableHead>
              <TableHead className="text-lg text-center">Satuan</TableHead>
              <TableHead className="text-center text-lg">Stok</TableHead>
              <TableHead className="text-center text-lg">Action</TableHead>
            </TableRow>
          </TableHeader>
          {currentItems.map((item: any) => (
            <TableBody key={item.id}>
              <TableRow>
                <TableCell className="font-medium border">
                  <img
                    src={item.gambarUrl}
                    className="w-12 h-12 ml-5"
                    alt="Gambar Barang"
                  />
                </TableCell>
                <TableCell className="font-medium text-md border text-center">
                  {item.namaBarang.toUpperCase()}
                </TableCell>
                <TableCell className="text-md border text-center">
                  {item.satuanBarang.toUpperCase()}
                </TableCell>
                <TableCell className="text-center border text-md">
                  {item.stokBarang}
                </TableCell>
                <TableCell className="border text-center">
                  <Button
                    onClick={() =>
                      navigate(`/dashboard/barang/editBarang?id=${item.id}`)
                    }
                  >
                    Edit
                  </Button>
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

export default BarangComp;
