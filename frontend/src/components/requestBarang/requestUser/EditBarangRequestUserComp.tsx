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

const urlBarangById = import.meta.env.VITE_URL_GETBARANGBYID;
const urlGetBulk = import.meta.env.VITE_URL_GETBULKBARANG;

type Barang = {
  id: string;
  namaBarang: string;
  satuanBarang: string;
};

const EditBarangRequestUserComp = ({ barang_id }: any) => {
  const token = Cookies.get("token");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [jumlah, setJumlah] = useState(0);
  const [barangList, setBarangList] = useState<Barang[]>([]);
  const [barangId, setBarangId] = useState(barang_id);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [namaBarang, setNamaBarang] = useState("");
  const [satuanBarang, setSatuanBarang] = useState("");

  // const handleBarangId = async (id: string) => {
  //   const result = await axios.get(`urlBarangById/${id}`);
  //   setBarangId(result.data.data.id);
  //   setNamaBarang(result.data.data.namaBarang);
  //   setSatuanBarang(result.data.data.satuanBarang);
  // };

  const getBarangLocal = async () => {
    const result = localStorage.getItem("barang");
    if (result) {
      const hasilLocal = JSON.parse(result);
      const hasilById = hasilLocal.filter(
        (item: any) => item.barangId === barangId,
      );
      console.log(hasilById[0]);
      setJumlah(hasilById[0].jumlah);
      setNamaBarang(hasilById[0].namaBarang);
      setSatuanBarang(hasilById[0].satuanBarang);
    }
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
    barangId: barangId,
    namaBarang: namaBarang,
    jumlah: jumlah,
    satuanBarang: satuanBarang,
  };

  const handleSimpan = async () => {
    const result = localStorage.getItem("barang");
    if (result) {
      const dataHasil = JSON.parse(result);
      const hasilTahan = dataHasil.filter(
        (item: any) => item.barangId !== barangId,
      );
      const updateData = [...hasilTahan, body];
      localStorage.setItem("barang", JSON.stringify(updateData)); // nambah array yang sudah ada
      setIsDialogOpen(false);
      window.location.reload();
    }
  };

  return (
    <Fragment>
      <div className="">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setIsDialogOpen(true);
                getBarangLocal();
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
                  {namaBarang.toUpperCase()}
                  {/* <Select */}
                  {/*   onValueChange={(e) => handleBarangId(e)} */}
                  {/*   value={barangId} */}
                  {/* > */}
                  {/*   <SelectTrigger className="w-full text-left"> */}
                  {/*     <SelectValue placeholder="Pilih Nama Barang" /> */}
                  {/*   </SelectTrigger> */}
                  {/*   <SelectContent> */}
                  {/*     <SelectGroup> */}
                  {/*       {barangList.map((option: any) => ( */}
                  {/*         <SelectItem key={option.id} value={option.id}> */}
                  {/*           {option.namaBarang} ({option.satuanBarang}) */}
                  {/*         </SelectItem> */}
                  {/*       ))} */}
                  {/*     </SelectGroup> */}
                  {/*   </SelectContent> */}
                  {/* </Select> */}
                </div>
              </div>
              <div>
                <Label className="text-right">Jumlah</Label>
                <div className="mt-2">
                  <Input
                    value={jumlah}
                    placeholder="Jumlah Barang"
                    onChange={(e) => {
                      const value = e.target.value;
                      setJumlah(value === "" ? 0 : parseInt(value));
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

export default EditBarangRequestUserComp;
