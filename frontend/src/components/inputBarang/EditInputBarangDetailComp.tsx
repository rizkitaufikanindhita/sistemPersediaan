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
import { parse } from "path";

const urlSpecificBarang = import.meta.env.VITE_URL_GETSPECIFICBARANG;
const urlUpdateDetails = import.meta.env.VITE_URL_INPUTBARANGDETAILSUPDATE;
const urlGetBulk = import.meta.env.VITE_URL_GETBULKBARANG;

const EditInputBarangDetailComp = ({ barang_id }: any) => {
  const token = Cookies.get("token");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [jumlah, setJumlah] = useState(0);
  const [barangList, setBarangList] = useState([]);
  const [barangId, setBarangId] = useState(barang_id);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBarangId = (e: string) => {
    setBarangId(e);
  };

  const getBarang = async () => {
    const result = await axios.get(`${urlSpecificBarang}/${id}/${barangId}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    // console.log(result.data.data);
    setJumlah(result.data.data.jumlah);
  };

  const getAllBarang = async () => {
    const hasil = await axios.get(urlGetBulk, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    // console.log(hasil.data.data);
    setBarangList(hasil.data.data);
  };

  useEffect(() => {
    getAllBarang();
  }, []);

  const body = {
    inputBarangDetails: [
      {
        barangId: barangId,
        jumlah: jumlah,
      },
    ],
  };

  const handleSimpan = async () => {
    const result = await axios.put(`${urlUpdateDetails}/${id}`, body, {
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
                  <Select
                    onValueChange={(e) => handleBarangId(e)}
                    value={barangId}
                  >
                    <SelectTrigger className="w-full text-left">
                      <SelectValue placeholder="Pilih Nama Barang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {barangList.map((option: any) => (
                          <SelectItem value={option.id}>
                            {option.namaBarang} ({option.satuanBarang})
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="text-right">Jumlah</Label>
                <div className="mt-2">
                  <Input
                    value={jumlah}
                    placeholder="Jumlah Barang"
                    onChange={(e) => {
                      setJumlah(parseInt(e.target.value));
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

export default EditInputBarangDetailComp;
