import { Fragment, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import store from "@/store";
import Cookies from "js-cookie";
const urlUpload = import.meta.env.VITE_URL_UPLOADBARANG;
const urlAdd = import.meta.env.VITE_URL_ADDBARANG;

const AddBarangComp = () => {
  const token = Cookies.get("token");
  const { useAddBarang } = store;
  const {
    namaBarang,
    satuanBarang,
    kategori,
    setNamaBarang,
    setSatuanBarang,
    setKategori,
  } = useAddBarang((state) => state);

  const [gambar, setGambar] = useState<File | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Fungsi untuk menangani perubahan file yang dipilih
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setGambar(e.target.files[0]);
    }
  };

  const submitBarang = async () => {
    // uplaod gambar
    if (!gambar) {
      alert("Pilih file gambar terlebih dahulu");
      return;
    }

    const formData = new FormData();
    formData.append("gambar", gambar);

    try {
      const response = await axios.post(
        urlUpload, // Sesuaikan URL backend
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token, // Sertakan token jika dibutuhkan
          },
        },
      );

      const uploadGambarUrl = response.data.gambarUrl;

      if (uploadGambarUrl) {
        const body = {
          namaBarang: namaBarang,
          satuanBarang: satuanBarang,
          kategori: kategori,
          gambarUrl: uploadGambarUrl,
        };
        const result = await axios.post(urlAdd, body, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        if (!result) {
          alert("gagal add barang");
        } else {
          alert("add barang berhasil");
          setIsDialogOpen(false);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Fragment>
      <div className="">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
              Add Barang
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Masukan Informasi Barang</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="">
                <Label className="text-right">Nama Barang</Label>
                <Input
                  id="barangName"
                  placeholder="e.g kertas a4"
                  className="mt-2"
                  onChange={(e) => setNamaBarang(e.target.value)}
                />
              </div>
              <div>
                <Label className="text-right">Satuan Barang</Label>
                <div className="mt-2">
                  <Select onValueChange={(value) => setSatuanBarang(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Satuan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="rim">Rim</SelectItem>
                        <SelectItem value="buah">Buah</SelectItem>
                        <SelectItem value="dus">Dus</SelectItem>
                        <SelectItem value="set">Set</SelectItem>
                        <SelectItem value="pak">Pak</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="text-right">Kategori Barang</Label>
                <div className="mt-2">
                  <Select onValueChange={(value) => setKategori(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="cetakan">Cetakan</SelectItem>
                        <SelectItem value="atk">Atk</SelectItem>
                        <SelectItem value="toner">Toner</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="text-right">Gambar Barang</Label>
                <div className="mt-3">
                  <Input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
                <p
                  className="mt-1 text-xs text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  PNG, JPG or JPEG (MAX. 30KB).
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={submitBarang}>
                Simpan
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Fragment>
  );
};

export default AddBarangComp;
