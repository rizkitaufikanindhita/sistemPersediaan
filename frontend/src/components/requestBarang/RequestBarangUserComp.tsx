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
import AddRequestUserComp from "./requestUser/AddRequestUserComp";
import EditRequestUserComp from "./requestUser/EditRequestUserComp";

const token = Cookies.get("token");
const urlNamaPengadaan = import.meta.env.VITE_URL_NAMAPENGADAAN;
const urlRequestAdd = import.meta.env.VITE_URL_REQUESTADD;

const RequestBarangUserComp = () => {
  const navigate = useNavigate();
  const [tanggal, setTanggal] = useState<string | null>("");

  const getDate = () => {
    const dataTanggal = localStorage.getItem("tanggal");
    if (dataTanggal) {
      const [year, month, day] = dataTanggal.split("-");
      const tanggalRequest = [day, month, year].join("-");
      setTanggal(tanggalRequest);
    }
  };

  useEffect(() => {
    getDate();
  });

  const handleDelete = () => {
    localStorage.removeItem("tanggal");
    window.location.reload();
  };

  const submitData = async () => {
    const result = localStorage.getItem("barang");
    const resultTanggal = localStorage.getItem("tanggal");
    if (result) {
      const body = {
        tanggal: resultTanggal,
        requestDetails: JSON.parse(result),
      };
      await axios.post(urlRequestAdd, body, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
    }
    localStorage.removeItem("barang");
    localStorage.removeItem("tanggal");
    navigate("/dashboard/tracking")
  };

  return (
    <Fragment>
      <div className="w-full">

        <div className="mb-5 flex justify-between">
          <div className="mb-5 flex justify-between">
            <div className="flex justify-start">
              <div className="mt-2 text-xl font-bold">Request</div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="mt-2"></div>
          </div>
          <div>
            <AddRequestUserComp />
          </div>
        </div>
        <Table className="bg-slate-300 rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px] text-lg text-center">
                Tanggal Pengajuan
              </TableHead>
              <TableHead className="text-center text-lg">Action</TableHead>
            </TableRow>
          </TableHeader>
          {tanggal ? (
            <TableBody>
              <TableRow>
                <TableCell className="border text-center w-1/2">
                  {tanggal}
                </TableCell>
                <TableCell className="border text-center w-1/2">
                  <div className="flex justify-center gap-3">
                    <EditRequestUserComp />
                    <Button onClick={() => navigate(`detailRequestUser`)}>
                      Detail
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete</Button>
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
                    <Button onClick={submitData}>Submit</Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <div></div>
          )}
        </Table>
      </div>
    </Fragment>
  );
};

export default RequestBarangUserComp;
