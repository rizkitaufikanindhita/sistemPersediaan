import { Fragment, useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Label } from "../../ui/label";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import Cookies from "js-cookie";
import { parseInt } from "lodash";
import { useSearchParams } from "react-router-dom";

const urlBulk = import.meta.env.VITE_URL_GETBULKBARANG;
const urlUpdateDetails = import.meta.env.VITE_URL_INPUTBARANGDETAILSUPDATE;

type Barang = {
  id: string;
  namaBarang: string;
  satuanBarang: string;
};

const AddBarangRequestUserComp = () => {
  const token = Cookies.get("token");

  const [barangList, setBarangList] = useState<Barang[]>([]);
  const [barangId, setBarangId] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [num, setNum] = useState(() => {
  //   return parseInt(localStorage.getItem("num") || "0");
  // });
  const [namaBarang, setNamaBarang] = useState("");
  const [satuanBarang, setSatuanBarang] = useState("");

  const handleBarangId = (id: string) => {
    const selectedOption = barangList.find((option: any) => option.id == id);
    if (selectedOption) {
      setBarangId(selectedOption.id);
      setNamaBarang(selectedOption.namaBarang);
      setSatuanBarang(selectedOption.satuanBarang);
    }
  };

  const getBarang = async () => {
    const result = await axios.get(urlBulk, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    console.log(result.data.data);
    setBarangList(result.data.data);
  };

  useEffect(() => {
    getBarang();
  }, []);

  const body = {
    barangId: barangId,
    namaBarang: namaBarang,
    jumlah: jumlah,
    satuanBarang: satuanBarang,
  };

  const handleSimpan = async () => {
    // const result = await axios.put(`${urlUpdateDetails}/${id}`, body, {
    //   headers: {
    //     Authorization: token,
    //     "Content-Type": "application/json",
    //   },
    // });

    const item = localStorage.getItem("barang");
    if (item) {
      const parsedItem = JSON.parse(item);
      const updateItem = [...parsedItem, body];
      localStorage.setItem("barang", JSON.stringify(updateItem)); // nambah array yang sudah ada
    } else {
      localStorage.setItem(`barang`, JSON.stringify([body])); //nyimpan sebagai arrray baru
    }
    setIsDialogOpen(false);
    window.location.reload();
  };

  return (
    <Fragment>
      <div className="">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
              Add Barang Request
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
                  <Select
                    onValueChange={(value: string) => handleBarangId(value)}
                  >
                    <SelectTrigger className="w-full text-left">
                      <SelectValue placeholder="Pilih Nama Barang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {barangList.map((option: any) => (
                          <SelectItem key={option.id} value={option.id}>
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

export default AddBarangRequestUserComp;
