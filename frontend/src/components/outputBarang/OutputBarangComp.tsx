import { Fragment, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
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
// import AddNamaPengadaanComp from "./AddNamaPengadaanComp";
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

const token = Cookies.get("token");
const urlRequestDelete = import.meta.env.VITE_URL_REQUESTDELETE;
const urlRequestById = import.meta.env.VITE_URL_REQUESTBYID;

const urlOutputList = import.meta.env.VITE_URL_OUTPUTBARANGLIST;

const OutputBarangComp = () => {
  const navigate = useNavigate();
  const itemPerPage = 5;
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState<any[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");

  // state nama pengadaan saja
  const [namaPengadaanOptions, setNamaPengadaanOptions] = useState<string[]>(
    [],
  );

  const formatDate = (epochMillis: number) => {
    const date = new Date(epochMillis);
    return date.toLocaleDateString("en-GB"); // Tanggal-bulan-tahun (contoh: 01/01/2023)
  };

  const outputList = async () => {
    try {
      const hasil = await axios.get(urlOutputList, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      const hasilData = hasil.data.data;

      // setFilterData(hasilData);
      //
      // const updateData = hasilData.map((item: any) => ({
      //   ...item,
      //   requestId: `${item.id.slice(-4)}/${item.bagian}`,
      // }));

      setData(hasilData);
      console.log(hasilData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    outputList();
  }, []);

  // useEffect(() => {
  //   const applyFilter = () => {
  //     if (filter) {
  //       const filtered = data.filter((item) => item.namaPengadaan === filter);
  //       setFilterData(filtered);
  //     } else {
  //       setFilterData(data);
  //     }
  //   };
  //
  //   applyFilter();
  // }, [filter, data]);

  // handle delete request
  const handleDelete = async () => {
    await axios.delete(`${urlRequestDelete}/${id}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    window.location.reload();
  };

  // Calculate total pages based on data length
  // const totalPages = Math.ceil(filterData.length / itemPerPage);
  const totalPages = Math.ceil(data.length / itemPerPage);

  // sort filterData dengan tanggal ascending
  // const sortFilterData = filterData.sort((a, b) => a.tanggal - b.tanggal);
  const sortFilterData = data.sort((a, b) => a.tanggal - b.tanggal);

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
              {/* <Select */}
              {/*   onValueChange={(value) => */}
              {/*     setFilter(value === "all" ? null : value) */}
              {/*   } */}
              {/* > */}
              {/*   <SelectTrigger className="w-full"> */}
              {/*     <SelectValue placeholder="Pilih nama pengadaan" /> */}
              {/*   </SelectTrigger> */}
              {/*   <SelectContent> */}
              {/*     <SelectGroup> */}
              {/*       <SelectItem value="all">All</SelectItem> */}
              {/*       {namaPengadaanOptions.map((option, index) => ( */}
              {/*         <SelectItem value={option} key={index}> */}
              {/*           {option} */}
              {/*         </SelectItem> */}
              {/*       ))} */}
              {/*     </SelectGroup> */}
              {/*   </SelectContent> */}
              {/* </Select> */}
            </div>
          </div>
          {/* Add barang */}
          <div>{/* <AddNamaPengadaanComp /> */}</div>
        </div>
        <Table className="bg-slate-300 rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px] text-lg text-center">
                Tanggal
              </TableHead>
              <TableHead className="w-[400px] text-lg text-center">
                Request Id
              </TableHead>
              <TableHead className="text-lg text-center">Pengaju</TableHead>
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
                <TableCell className="text-md border text-center">
                  {item.requestId.toUpperCase()}
                </TableCell>
                <TableCell className="text-md border text-center w-[300px]">
                  {item.bagian.toUpperCase()}
                </TableCell>
                {/* <TableCell className="text-center border text-md"> */}
                {/*   {item.jumlah} */}
                {/* </TableCell> */}
                <TableCell className="border text-center">
                  <div className="flex justify-center gap-3">
                    <Button
                      onClick={() => navigate(`detailOutput?id=${item.id}`)}
                    >
                      Detail
                    </Button>
                    {/* <AlertDialog> */}
                    {/*   <AlertDialogTrigger asChild> */}
                    {/*     <Button */}
                    {/*       variant="destructive" */}
                    {/*       value={item.id} */}
                    {/*       onClick={() => setId(item.id)} */}
                    {/*     > */}
                    {/*       Delete */}
                    {/*     </Button> */}
                    {/*   </AlertDialogTrigger> */}
                    {/*   <AlertDialogContent> */}
                    {/*     <AlertDialogHeader> */}
                    {/*       <AlertDialogTitle> */}
                    {/*         Are you absolutely sure? */}
                    {/*       </AlertDialogTitle> */}
                    {/*       <AlertDialogDescription> */}
                    {/*         This action cannot be undone. This will permanently */}
                    {/*         delete and remove your data from our servers. */}
                    {/*       </AlertDialogDescription> */}
                    {/*     </AlertDialogHeader> */}
                    {/*     <AlertDialogFooter> */}
                    {/*       <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                    {/*       <AlertDialogAction onClick={handleDelete}> */}
                    {/*         Delete */}
                    {/*       </AlertDialogAction> */}
                    {/*     </AlertDialogFooter> */}
                    {/*   </AlertDialogContent> */}
                    {/* </AlertDialog> */}
                    {/**/}
                    {/* <AlertDialog> */}
                    {/*   <AlertDialogTrigger asChild> */}
                    {/*     <Button value={item.id} onClick={() => setId(item.id)}> */}
                    {/*       Submit */}
                    {/*     </Button> */}
                    {/*   </AlertDialogTrigger> */}
                    {/*   <AlertDialogContent> */}
                    {/*     <AlertDialogHeader> */}
                    {/*       <AlertDialogTitle> */}
                    {/*         Are you absolutely sure? */}
                    {/*       </AlertDialogTitle> */}
                    {/*       <AlertDialogDescription> */}
                    {/*         This action cannot be undone. This will permanently */}
                    {/*         delete and remove your data from our servers. */}
                    {/*       </AlertDialogDescription> */}
                    {/*     </AlertDialogHeader> */}
                    {/*     <AlertDialogFooter> */}
                    {/*       <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                    {/*                         </AlertDialogFooter> */}
                    {/*   </AlertDialogContent> */}
                    {/* </AlertDialog> */}
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

export default OutputBarangComp;
