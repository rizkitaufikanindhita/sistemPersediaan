import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
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
} from "../ui/alert-dialog";
import _ from "lodash";

const token = Cookies.get("token");
const urlDeleteBarangById = import.meta.env.VITE_URL_REQUESTDELETEDETAIL;

const urlOutputBarangById = import.meta.env.VITE_URL_OUTPUTBARANGBYID;

interface Barang {
  namaBarang: string; // Nama barang (contoh: "penggaris")
  satuanBarang: string; // Satuan barang (contoh: "buah")
}

interface Barang {
  id: string;
  namaBarang: string;
  stokBarang: number;
}

const OutputBarangDetailComp = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [outputDetails, setOutputDetails] = useState([]);
  const [barandId, setBarangId] = useState("");
  const [bagian, setBagian] = useState("");
  const [requestId, setRequestId] = useState("");
  const [tanggal, setTanggal] = useState("");

  const itemPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const formatDate = (epochMillis: number) => {
    const date = new Date(epochMillis);
    return date.toLocaleDateString("en-GB"); // Tanggal-bulan-tahun (contoh: 01/01/2023)
  };

  const fetchOutputBarangDetailById = async () => {
    // fetch requestDetails
    const result = await axios.get(`${urlOutputBarangById}/${id}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    console.log(result.data.data);
    const hasil = result.data.data.outputBarangDetails;
    setOutputDetails(hasil);
    setBagian(result.data.data.bagian);
    setRequestId(result.data.data.requestId);
    const tanggalRaw = result.data.data.tanggal;
    setTanggal(formatDate(parseInt(tanggalRaw)));
  };

  // Proses data setelah fetch selesai dan menggabungkan data dari requestDetails dan barang
  useEffect(() => {
    fetchOutputBarangDetailById();
  }, []);

  // Calculate total pages based on data length
  const totalPages = Math.ceil(outputDetails.length / itemPerPage);

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = outputDetails.slice(indexOfFirstItem, indexOfLastItem);

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
              {bagian.toUpperCase()} - {tanggal}
            </div>
            <div className="mt-2 font-bold">{requestId.toUpperCase()}</div>
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
                  {item.barang.namaBarang.toUpperCase()}
                </TableCell>
                <TableCell className="text-md border text-center w-[400px]">
                  {item.jumlah}
                </TableCell>
                {/* <TableCell className="text-center border text-md"> */}
                {/*   {item.barang.satuanBarang.toUpperCase()} */}
                {/* </TableCell> */}
                {/* <TableCell className="border text-center w-[400px]"> */}
                {/*   <div className="flex justify-center gap-3"> */}
                {/*     <AlertDialog> */}
                {/*       <AlertDialogTrigger asChild> */}
                {/*         <Button */}
                {/*           variant="destructive" */}
                {/*           value={item.barangId} */}
                {/*           onClick={() => setBarangId(item.barangId)} */}
                {/*         > */}
                {/*           Delete */}
                {/*         </Button> */}
                {/*       </AlertDialogTrigger> */}
                {/*       <AlertDialogContent> */}
                {/*         <AlertDialogHeader> */}
                {/*           <AlertDialogTitle> */}
                {/*             Are you absolutely sure? */}
                {/*           </AlertDialogTitle> */}
                {/*           <AlertDialogDescription> */}
                {/*             This action cannot be undone. This will permanently */}
                {/*             delete your account and remove your data from our */}
                {/*             servers. */}
                {/*           </AlertDialogDescription> */}
                {/*         </AlertDialogHeader> */}
                {/*         <AlertDialogFooter> */}
                {/*           <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                {/*           <AlertDialogAction onClick={handleDelete}> */}
                {/*             Delete */}
                {/*           </AlertDialogAction> */}
                {/*         </AlertDialogFooter> */}
                {/*       </AlertDialogContent> */}
                {/*     </AlertDialog> */}
                {/*   </div> */}
                {/* </TableCell> */}
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

export default OutputBarangDetailComp;
