import { Fragment, useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Cookies from "js-cookie";
import { parseInt } from "lodash";
import { useSearchParams } from "react-router-dom";

const urlDetailRequest = import.meta.env.VITE_URL_REQUESTDETAIL;
const urlUpdateDetail = import.meta.env.VITE_URL_REQUESTUPDATEDETAIL;
const urlUpdateStatusRequest = import.meta.env.VITE_URL_REQUESTUPDATESTATUS;
const urlRequestDataById = import.meta.env.VITE_URL_REQUESTBYID;

interface Barang {
  barangId: string;
  id: string;
  jumlah: number;
  requestId: string;
}

const EditRequestDetailAdminComp = ({ barang_id, nama_barang }: any) => {
  const token = Cookies.get("token");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [jumlah, setJumlah] = useState("");
  const [barang, setBarang] = useState<Barang | null>(null);
  const [barangId, setBarangId] = useState(barang_id);
  const [namaBarang, setNamaBarang] = useState(nama_barang);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleBarangId = (e: string) => {
    setBarangId(e);
  };

  const getBarang = async () => {
    const result = await axios.get(`${urlDetailRequest}/${id}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    // console.log(result.data.data);
    const hasilFilter = result.data.data.filter(
      (item: any) => item.barangId == barangId,
    );

    setBarang(hasilFilter[0]);
    setJumlah(hasilFilter[0].jumlah);
  };

  useEffect(() => {
    getBarang();
  }, []);

  const body = {
    jumlah: parseInt(jumlah),
  };

  const handleSimpan = async () => {
    const result = await axios.put(
      `${urlUpdateDetail}/${id}/${barangId}`,
      body,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      },
    );

    if (result) {
      setIsDialogOpen(false);
    }

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
                getBarang();
              }}
            >
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Perbaharui Informasi Barang</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="">
                <Label className="text-right">Nama Barang</Label>
                <div className="mt-2">
                  {/* dropdown tapi ambil dari db */}
                  <div>{namaBarang.toUpperCase()}</div>
                </div>
              </div>
              <div>
                <Label className="text-right">Jumlah</Label>
                <div className="mt-2">
                  <Input
                    value={jumlah}
                    placeholder="Jumlah Barang"
                    onChange={(e) => {
                      setJumlah(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSimpan}>
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Fragment>
  );
};

export default EditRequestDetailAdminComp;
