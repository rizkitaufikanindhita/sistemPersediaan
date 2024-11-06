import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
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
import { Input } from "../ui/input";
import AddInputBarangDetailComp from "./AddInputBarangDetailComp";
import _ from "lodash";
import EditInputBarangDetailComp from "./EditInputBarangDetailComp";

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

const DetailPengadaanComp = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  const [inputBarangDetails, setInputBarangDetails] = useState([]);
  const [namaPengadaan, setNamaPengadaan] = useState("");
  const [barandId, setBarangId] = useState("");

  const itemPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<DetailBarang[]>([]);
  const [query, setQuery] = useState("");

  const fetchInputBarangDetailsByInputBarangId = async () => {
    const namaPengadaanResult = await axios.get(
      `${urlNamaPengadaan}?id=${id}`,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      },
    );

    const result = await axios.get(
      `${urlInputBarangDetails}?inputBarangId=${id}`,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      },
    );
    if (result) {
      console.log(namaPengadaanResult);
      console.log(result.data.data);
      setInputBarangDetails(result.data.data);
      setNamaPengadaan(namaPengadaanResult.data.data.namaPengadaan);
    }
  };

  useEffect(() => {
    fetchInputBarangDetailsByInputBarangId();
  }, []);

  //handle delete barang details by id
  const handleDelete = async () => {
    await axios.delete(`${urlDeleteBarangDetails}/${id}/${barandId}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  };

  // Calculate total pages based on data length
  const totalPages = Math.ceil(inputBarangDetails.length / itemPerPage);

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = inputBarangDetails.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // debounce
  const filterData = (query: any) => {
    return _.filter(currentItems, (item: any) =>
      item.barang.namaBarang.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const debouncedFilter = _.debounce((query) => {
    const result = filterData(query);
    setFilteredData(result);
  }, 300);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    debouncedFilter(query);
    return () => {
      debouncedFilter.cancel();
    };
  }, [query]);

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
            <div className="mt-2 font-bold">{namaPengadaan.toUpperCase()}</div>
          </div>
          <div className="flex justify-start">
            <Input
              placeholder="Search barang"
              className="w-[200px]"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Add barang */}
          <div>
            <AddInputBarangDetailComp />
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
          {(query ? filteredData : currentItems).map(
            (item: any, index: any) => (
              <TableBody>
                <TableRow key={index}>
                  <TableCell className="text-md border text-center">
                    {item.barang.namaBarang.toUpperCase()}
                  </TableCell>
                  <TableCell className="text-md border text-center w-[400px]">
                    {item.jumlah}
                  </TableCell>
                  <TableCell className="text-center border text-md">
                    {item.barang.satuanBarang.toUpperCase()}
                  </TableCell>
                  <TableCell className="border text-center w-[400px]">
                    <div className="flex justify-center gap-3">
                      <EditInputBarangDetailComp barang_id={item.barangId} />
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
                              This action cannot be undone. This will
                              permanently delete your account and remove your
                              data from our servers.
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
            ),
          )}
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

export default DetailPengadaanComp;
