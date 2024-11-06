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

const urlBulk = import.meta.env.VITE_URL_GETBULKBARANG;
const urlUpdateDetails = import.meta.env.VITE_URL_INPUTBARANGDETAILSUPDATE;

const AddInputBarangDetailComp = () => {
  const token = Cookies.get("token"); const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [barangList, setBarangList] = useState([]);
  const [barangId, setBarangId] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBarangId = (e: string) => {
    setBarangId(e);
  };

  useEffect(() => {
    const getBarang = async () => {
      const result = await axios.get(urlBulk, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      // console.log(result.data.data);
      setBarangList(result.data.data);
    };

    getBarang();
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
            <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
              Add Input Barang
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Masukan Informasi Barang</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="">
                <Label className="text-right">Nama Barang</Label>
                <div className="mt-2">
                  {/* dropdown tapi ambil dari db */}
                  <Select onValueChange={(e) => handleBarangId(e)}>
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
                    placeholder="Jumlah Barang"
                    onChange={(e) => setJumlah(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSimpan}>
                Simpan
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Fragment>
  );
};

export default AddInputBarangDetailComp;
