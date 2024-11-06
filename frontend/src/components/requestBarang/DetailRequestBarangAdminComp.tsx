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
import EditRequestDetailAdminComp from "./EditRequestDetailAdminComp";
import _ from "lodash";

const token = Cookies.get("token");
const urlRequestDetail = import.meta.env.VITE_URL_REQUESTDETAIL;
const urlGetBarang = import.meta.env.VITE_URL_GETBULKBARANG;
const urlDeleteBarangById = import.meta.env.VITE_URL_REQUESTDELETEDETAIL;
const urlUpdateStatusRequest = import.meta.env.VITE_URL_REQUESTUPDATESTATUS;
const urlRequestDataById = import.meta.env.VITE_URL_REQUESTBYID;

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

interface Barang {
  id: string;
  namaBarang: string;
  stokBarang: number;
}

const DetailRequestBarangAdminComp = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const bagian = searchParams.get("bagian");
  const tanggal = searchParams.get("tanggal");

  const [namaBagian, setNamaBagian] = useState(bagian);
  const [requestDetails, setRequestDetails] = useState([]);
  const [listBarang, setListBarang] = useState<Barang[]>([]);
  const [barandId, setBarangId] = useState("");
  const [processDetail, setProcessDetail] = useState<any[]>([]);
  const [requestId, setRequestId] = useState("");

  const [statusData, setStatusData] = useState(null)

  const itemPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  // const [filteredData, setFilteredData] = useState<DetailBarang[]>([]);
  // const [query, setQuery] = useState("");

  const fetchRequestDetailByRequestId = async () => {
    const resultStatus = await axios.get(`${urlRequestDataById}/${id}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
    const statusData = resultStatus.data.data.status;
    setStatusData(statusData)

    // fetch requestDetails
    const result = await axios.get(`${urlRequestDetail}/${id}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (result) {
      setRequestDetails(result.data.data);
      console.log(result.data.data)
      const idReq = `${result.data.data[0].requestId.slice(-4)}/${bagian}`;
      setRequestId(idReq);
    }



    // fetch barang
    const getBarang = await axios.get(`${urlGetBarang}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (getBarang) {
      setListBarang(getBarang.data.data);
    }
  };

  // Proses data setelah fetch selesai dan menggabungkan data dari requestDetails dan barang
  useEffect(() => {
    if (requestDetails.length > 0 && listBarang.length > 0) {
      const hasil = requestDetails.map((item: any) => {
        const barang = listBarang.find((b: Barang) => b.id === item.barangId);

        if (barang) {
          return {
            ...item,
            namaBarang: barang.namaBarang,
            stokBarang: barang.stokBarang,
          };
        } else {
          return {
            ...item,
            namaBarang: "Barang tidak ditemukan",
            stokBarang: 0,
          };
        }
      });

      setProcessDetail(hasil); // Set hasil ke state baru
    }
  }, [requestDetails, listBarang]);

  useEffect(() => {
    fetchRequestDetailByRequestId();
  }, []);

  //handle delete barang details by id
  const handleDelete = async () => {
    await axios.delete(`${urlDeleteBarangById}/${id}/${barandId}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  };

  // ready to pickup
  const handleReady = async () => {
    await axios.put(
      `${urlUpdateStatusRequest}?id=${id}`,
      {},
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      },
    );
    const result = await axios.get(`${urlRequestDataById}/${id}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
    const statusData = result.data.data.status;

    setStatusData(statusData)
  };

  // Calculate total pages based on data length
  const totalPages = Math.ceil(processDetail.length / itemPerPage);

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = processDetail.slice(indexOfFirstItem, indexOfLastItem);

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
              {namaBagian?.toUpperCase()} - {tanggal}
            </div>
            <>
              {statusData == 1 ? (
                <div></div>
              ) : (
                <Button onClick={handleReady}>Ready to pickup</Button>
              )}
            </>
            <div className="mt-2 font-bold">{requestId.toUpperCase()}</div>
          </div>
          {/* <div className="flex justify-start"> */}
          {/*   <Input */}
          {/*     placeholder="Search barang" */}
          {/*     className="w-[200px]" */}
          {/*     onChange={(e) => setQuery(e.target.value)} */}
          {/*   /> */}
          {/* </div> */}

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
              <TableHead className="text-lg text-center">Action</TableHead>
              <TableHead className="text-lg text-center">
                Stok Sekarang
              </TableHead>
              {/* <TableHead className="text-center text-lg">Jumlah</TableHead> */}
            </TableRow>
          </TableHeader>
          {currentItems.map((item: any, index: any) => (
            <TableBody>
              <TableRow key={index}>
                <TableCell className="text-md border text-center w-[400px]">
                  {item.namaBarang.toUpperCase()}
                </TableCell>
                <TableCell className="text-md border text-center w-[400px]">
                  {item.jumlah}
                </TableCell>
                {/* <TableCell className="text-center border text-md"> */}
                {/*   {item.barang.satuanBarang.toUpperCase()} */}
                {/* </TableCell> */}
                <TableCell className="border text-center w-[400px]">
                  <div className="flex justify-center gap-3">
                    <div>
                      <EditRequestDetailAdminComp
                        barang_id={item.barangId}
                        nama_barang={item.namaBarang}
                      />
                    </div>

                    {/* <EditInputBarangDetailComp barang_id={item.barangId} /> */}
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
                <TableCell className="text-md border text-center w-[400px]">
                  {item.stokBarang}
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

export default DetailRequestBarangAdminComp;
