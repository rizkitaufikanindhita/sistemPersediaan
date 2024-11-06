import { Fragment, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import { parse } from "path";
import { parseInt } from "lodash";
import { format, parseISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Barang {
  id: string;
  namaBarang: string;
  satuanBarang: string;
  stokBarang: number;
  gambarUrl: string;
  kategori: string;
}

const EditNamaPengadaanComp = ({ idClick }: any) => {
  const urlGetSpecificBarang = import.meta.env.VITE_URL_GETSPECIFICBARANG;
  const urlUpdateInput = import.meta.env.VITE_URL_UPDATEINPUTBARANG;
  const urlBulk = import.meta.env.VITE_URL_GETBULKBARANG;
  const urlNamaPengadaan = import.meta.env.VITE_URL_NAMAPENGADAAN;
  // const urlListPengadaan = import.meta.env.VITE_URL_INPUTLIST

  const navigate = useNavigate();
  const token = Cookies.get("token");
  // const [searchParams] = useSearchParams();
  const id = idClick;
  // const barangId = searchParams.get("barangId");
  const [tanggal, setTanggal] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [barangList, setBarangList] = useState<Barang[]>([]);
  const [idBarang, setIdBarang] = useState("");
  const [namaPengadaan, setNamaPengadaan] = useState("");
  // const [namaPengadaanList, setNamaPengadaanList] = useState<namaPengadaan[]>(
  //   []
  // );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(`${urlNamaPengadaan}?id=${id}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.data);
    const epoch = response.data.data.tanggal;
    const date = new Date(parseInt(epoch));
    setTanggal(date.toISOString());
    setNamaPengadaan(response.data.data.namaPengadaan);
  };

  // const getBarang = async () => {
  //   const result = await axios.get(urlBulk, {
  //     headers: {
  //       Authorization: token,
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   // console.log(result.data.data);
  //   setBarangList(result.data.data);
  // };

  // const getNamaPengadaan = async () => {
  //   const hasil = await axios.get(urlNamaPengadaan, {
  //     headers: {
  //       Authorization: token,
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setNamaPengadaanList(hasil.data.data);
  // };

  const handleTanggal = (e: any) => {
    setTanggal(format(e, "yyyy-MM-dd"));
  };

  // const handleNamaPengadaan = (e: any) => {
  //   setNamaPengadaan(e);
  // };

  // const handleBarang = (e: any) => {
  //   setIdBarang(e);
  // };

  const body = {
    tanggal: tanggal,
    namaPengadaan: namaPengadaan,
    // inputBarangDetails: [
    //   {
    //     barangId: idBarang,
    //     jumlah: parseInt(jumlah),
    //   },
    // ],
  };

  useEffect(() => {
    // getBarang();
    // getNamaPengadaan();
    fetchData();
  }, []);

  const updateBarang = async () => {
    const result = await axios.put(`${urlUpdateInput}/${id}`, body, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (result) {
      setIsDialogOpen(false);
    }
    console.log(result);
    window.location.reload();
  };

  return (
    <Fragment>
      <div className="">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setIsDialogOpen(true);
                fetchData();
              }}
            >
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Perbaharui Data Input</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="">
                <Label className="text-right">Nama Pengadaan</Label>
                {/* dropdown tapi ambil dari db */}
                <Input
                  value={namaPengadaan}
                  onChange={(e) => setNamaPengadaan(e.target.value)}
                />
              </div>
              <div>
                <div className="text-lg font-bold">Tanggal</div>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full md:w-full mt-2 justify-start text-left font-normal",
                          !tanggal && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {tanggal ? (
                          format(parseISO(tanggal), "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={tanggal ? parseISO(tanggal) : undefined}
                        onSelect={handleTanggal}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={updateBarang}>Update</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Fragment>
  );
};

export default EditNamaPengadaanComp;
