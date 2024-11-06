import { Fragment, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Cookies from "js-cookie";
import axios from "axios";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import AddNamaPengadaanComp from "./AddNamaPengadaanComp";
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
import EditNamaPengadaanComp from "./EditNamaPengadaanComp";

const token = Cookies.get("token");
const urlNamaPengadaan = import.meta.env.VITE_URL_NAMAPENGADAAN;
const urlDeletePengadaan = import.meta.env.VITE_URL_DELETEPENGADAAN;

interface Barang {
  id: string;
  tanggal: number;
  namaPengadaan: string;
  // userId: string;
  // barangId: string;
  // jumlah: number;
  // namaBarang: string;
}

const InputBarangComp = () => {
  const navigate = useNavigate();
  const itemPerPage = 5;
  const [data, setData] = useState<Barang[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState<Barang[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [id, setId] = useState("");

  // state nama pengadaan saja
  const [namaPengadaanOptions, setNamaPengadaanOptions] = useState<string[]>(
    [],
  );

  const formatDate = (epochMillis: number) => {
    const date = new Date(epochMillis);
    return date.toLocaleDateString("en-GB"); // Tanggal-bulan-tahun (contoh: 01/01/2023)
  };

  const inputBarangDataAll = async () => {
    try {
      const hasil = await axios.get(urlNamaPengadaan, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      const hasilData = hasil.data.data;

      // const flattenedData = resultData.flatMap((inputBarang: any) =>
      //   inputBarang.inputBarangDetails.map((detail: any) => ({
      //     id: inputBarang.id,
      //     tanggal: inputBarang.tanggal,
      //     namaPengadaan: inputBarang.namaPengadaan,
      //     userId: inputBarang.userId,
      //     barangId: detail.barangId,
      //     jumlah: detail.jumlah,
      //   })),
      // );
      //
      // const fetchedDetails: Barang[] = [];
      // for (const data of flattenedData) {
      //   const response = await axios.get(urlGetBarangById, {
      //     params: { id: data.barangId },
      //     headers: {
      //       Authorization: token,
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   fetchedDetails.push({
      //     ...data,
      //     namaBarang: response.data.data.namaBarang,
      //   });
      // }

      setData(hasilData);
      setFilterData(hasilData);
      setNamaPengadaanOptions(
        hasilData.map((item: { namaPengadaan: string }) => item.namaPengadaan),
      );

      console.log(hasilData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    inputBarangDataAll();
  }, []);

  useEffect(() => {
    const applyFilter = () => {
      if (filter) {
        const filtered = data.filter((item) => item.namaPengadaan === filter);
        setFilterData(filtered);
      } else {
        setFilterData(data);
      }
    };

    applyFilter();
  }, [filter, data]);

  // handle delete pengadaan
  const handleDelete = async () => {
    await axios.delete(`${urlDeletePengadaan}/${id}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    window.location.reload();
  };

  // Calculate total pages based on data length
  const totalPages = Math.ceil(filterData.length / itemPerPage);

  // sort filterData dengan tanggal ascending
  const sortFilterData = filterData.sort((a, b) => a.tanggal - b.tanggal);

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = sortFilterData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className="w-full">
        <div className="mb-5 flex justify-between">
          <div className="flex justify-start">
            <div className="mt-2">
              {/* dropdown tapi ambil dari db */}
              <Select
                onValueChange={(value) =>
                  setFilter(value === "all" ? null : value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih nama pengadaan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All</SelectItem>
                    {namaPengadaanOptions.map((option, index) => (
                      <SelectItem value={option} key={index}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Add barang */}
          <div>
            <AddNamaPengadaanComp />
          </div>
        </div>
        <Table className="bg-slate-300 rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px] text-lg text-center">
                Tanggal
              </TableHead>
              {/* <TableHead className="w-[400px] text-lg text-center"> */}
              {/*   Nama Barang */}
              {/* </TableHead> */}
              <TableHead className="text-lg text-center">
                Nama Pengadaan
              </TableHead>
              {/* <TableHead className="text-center text-lg">Jumlah</TableHead> */}
              <TableHead className="text-center text-lg">Action</TableHead>
            </TableRow>
          </TableHeader>
          {currentItems.map((item: any, index: any) => (
            <TableBody>
              <TableRow key={index}>
                <TableCell className="border text-md text-center">
                  {formatDate(parseInt(item.tanggal))}{" "}
                </TableCell>
                {/* <TableCell className="text-md border text-center"> */}
                {/*   {item.namaBarang} */}
                {/* </TableCell> */}
                <TableCell className="text-md border text-center w-[600px]">
                  {item.namaPengadaan.toUpperCase()}
                </TableCell>
                {/* <TableCell className="text-center border text-md"> */}
                {/*   {item.jumlah} */}
                {/* </TableCell> */}
                <TableCell className="border text-center">
                  <div className="flex justify-center gap-3">
                    <EditNamaPengadaanComp idClick={item.id} />
                    <Button
                      onClick={() => navigate(`detailPengadaan?id=${item.id}`)}
                    >
                      Detail
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          value={item.id}
                          onClick={() => setId(item.id)}
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
                            delete and remove your data from our servers.
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

export default InputBarangComp;
