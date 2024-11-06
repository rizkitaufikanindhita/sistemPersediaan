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
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../../ui/input";
import _ from "lodash";
import AddRequestUserComp from "./AddRequestUserComp";
import AddBarangRequestUserComp from "./AddBarangRequestUserComp";
import EditBarangRequestUserComp from "./EditBarangRequestUserComp";

const token = Cookies.get("token");
const urlInputBarangDetails = import.meta.env.VITE_URL_INPUTBARANGDETAILS;
const urlNamaPengadaan = import.meta.env.VITE_URL_NAMAPENGADAAN;
const urlDeleteBarangDetails = import.meta.env
  .VITE_URL_INPUTBARANGDETAILSDELETE;

interface Barang {
  namaBarang: string; // Nama barang (contoh: "penggaris")
  satuanBarang: string; // Satuan barang (contoh: "buah")
}

interface InputBarang {
  namaPengadaan: string; // Nama pengadaan (contoh: "atk 4")
}

interface DetailBarang {
  barang: Barang; // Objek barang
  barangId: string; // ID barang (contoh: "cm0gehxts0001jitbc5vvlno3")
  inputBarang: InputBarang; // Objek input barang
  jumlah: number; // Jumlah barang (contoh: 75)
}

const DetailRequestUserComp = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [tanggal, setTanggal] = useState("");

  const getTanggal = () => {
    const dataTanggal = localStorage.getItem("tanggal");

    if (dataTanggal) {
      const [year, month, day] = dataTanggal.split("-");
      const tanggalRequest = [day, month, year].join("-");
      setTanggal(tanggalRequest);
    }
  };

  // const [inputBarangDetails, setInputBarangDetails] = useState([]);
  const [barangId, setBarangId] = useState("");
  const [barangLocal, setBarangLocal] = useState([]);

  const itemPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const getBarangLocal = () => {
    const result = localStorage.getItem("barang");
    if (result) {
      const resultNew = JSON.parse(result);
      setBarangLocal(resultNew);
    }
  };

  useEffect(() => {
    getTanggal();
    getBarangLocal();
  }, []);

  //handle delete barang details by id
  const handleDelete = () => {
    const result = localStorage.getItem("barang");
    if (result) {
      const hasil = JSON.parse(result);
      const updateHasil = hasil.filter(
        (item: any) => item.barangId !== barangId,
      );
      localStorage.setItem("barang", JSON.stringify(updateHasil)); // nambah array yang sudah ada
    }
    window.location.reload();
  };

  // Calculate total pages based on data length
  const totalPages = Math.ceil(barangLocal.length / itemPerPage);

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = barangLocal.slice(indexOfFirstItem, indexOfLastItem);

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
          <div className="flex justify-start">
            <div className="mt-2 font-bold">{tanggal}</div>
          </div>
          {/* Add barang */}
          <div>
            <AddBarangRequestUserComp />
          </div>
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
              <TableHead className="w-[400px] text-lg text-center">
                Satuan
              </TableHead>
              <TableHead className="text-lg text-center">Action</TableHead>
              {/* <TableHead className="text-center text-lg">Jumlah</TableHead> */}
            </TableRow>
          </TableHeader>
          {currentItems.map((item: any, index: any) => (
            <TableBody>
              <TableRow key={index}>
                <TableCell className="text-md border text-center">
                  {item.namaBarang.toUpperCase()}
                </TableCell>
                <TableCell className="text-md border text-center w-[400px]">
                  {item.jumlah}
                </TableCell>
                <TableCell className="text-center border text-md">
                  {item.satuanBarang.toUpperCase()}
                </TableCell>
                <TableCell className="border text-center w-[400px]">
                  <div className="flex justify-center gap-3">
                    <EditBarangRequestUserComp barang_id={item.barangId} />
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          value={item.barangId}
                          onClick={() => setBarangId(item.barangId)}
                        >
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={handleDelete}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
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

export default DetailRequestUserComp;
