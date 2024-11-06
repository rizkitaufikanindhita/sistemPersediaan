import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const urlGetById = import.meta.env.VITE_URL_GETBARANGBYID;
const urlUpdate = import.meta.env.VITE_URL_UPDATEBARANG;

const EditBarangComp = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [namaBarang, setNamaBarang] = useState("");
  const [satuanBarang, setSatuanBarang] = useState("");
  const [kategori, setKategori] = useState("");

  const handleSatuanBarang = (e: any) => {
    setSatuanBarang(e);
  };

  const handleKategori = (e: any) => {
    setKategori(e);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${urlGetById}/${id}`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      setNamaBarang(response.data.data.namaBarang);
      setSatuanBarang(response.data.data.satuanBarang);
      setKategori(response.data.data.kategori);
    };

    fetchData();
  }, []);

  const body = {
    namaBarang: namaBarang,
    satuanBarang: satuanBarang,
    kategori: kategori,
  };

  const updateBarang = async () => {
    const result = await axios.put(`${urlUpdate}/${id}`, body, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (result) {
      navigate("/dashboard/barang");
    }
  };

  return (
    <Fragment>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-lg text-left">
            Perbarui Informasi Barang
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 py-4">
            <div className="">
              <Label>
                <div className="text-left">Nama Barang</div>
              </Label>
              <Input
                id="barangName"
                placeholder="e.g kertas a4"
                className="mt-2"
                onChange={(e) => setNamaBarang(e.target.value)}
                value={namaBarang}
              // onChange={(e) => setNamaBarang(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-left">
                <div className="text-left">Satuan Barang</div>
              </Label>
              <div className="mt-2">
                <Select
                  onValueChange={handleSatuanBarang}
                  value={satuanBarang}
                // onValueChange={(value) => setSatuanBarang(value)}
                >
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
              <Label className="text-right">
                <div className="text-left">Kategori Barang</div>
              </Label>
              <div className="mt-2">
                <Select
                  onValueChange={handleKategori}
                  value={kategori}
                // onValueChange={(value) => setKategori(value)}
                >
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
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/dashboard/barang")}
          >
            Cancel
          </Button>
          <Button onClick={updateBarang}>Update</Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

export default EditBarangComp;
