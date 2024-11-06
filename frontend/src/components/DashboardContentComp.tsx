import { Fragment, useState, useEffect } from "react";
import { Label } from "./ui/label";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Cookies from "js-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";

const urlBulk = import.meta.env.VITE_URL_GETBULKBARANG;
const urlBarangById = import.meta.env.VITE_URL_GETBARANGBYID;

const DashboardContentComp = () => {
  const token = Cookies.get("token");
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [barangList, setBarangList] = useState([]);
  const [barangId, setBarangId] = useState("");
  const [barangMasuk, setBarangMasuk] = useState(0);
  const [barangKeluar, setBarangKeluar] = useState(0);
  const [stokBarang, setStokBarang] = useState(0);
  const [namaBarang, setNamaBarang] = useState("");
  const handleBarangId = (e: string) => {
    setBarangId(e);
  };

  interface CustomJwtPayload extends JwtPayload {
    isAdmin?: boolean;
  }

  const getBarangData = async () => {
    if (barangId) {
      const result = await axios.get(`${urlBarangById}/${barangId}`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      const inputBarangDetails = result.data.data.inputBarangDetails;
      const barangMasukJumlah = inputBarangDetails.reduce(
        (acc: any, item: any) => acc + item.jumlah,
        0
      );
      setBarangMasuk(barangMasukJumlah);

      const outputBarangDetails = result.data.data.outputBarangDetails;
      const barangKeluarJumlah = outputBarangDetails.reduce(
        (acc: any, item: any) => acc + item.jumlah,
        0
      );
      setBarangKeluar(barangKeluarJumlah);

      setStokBarang(result.data.data.stokBarang);
      setNamaBarang(result.data.data.namaBarang);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode<CustomJwtPayload>(token);
      setIsAdmin(decodedToken.isAdmin ?? false);

      const getBarang = async () => {
        const result = await axios.get(urlBulk, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        setBarangList(result.data.data);
      };

      getBarang();
    }
  }, []);

  useEffect(() => {
    getBarangData();
  }, [barangId]);

  return (
    <Fragment>
      <div className="w-full h-fit mx-10">
        <div className="text-left">
          <div className="w-[400px] mb-5">
            <div className="mt-2">
              {/* Dropdown yang diambil dari DB */}
              <Select onValueChange={(e) => handleBarangId(e)}>
                {isAdmin ? (
                  <SelectTrigger className="w-full text-left">
                    <SelectValue placeholder="Pilih Nama Barang" />
                  </SelectTrigger>
                ) : (
                  <div></div>
                )}
                <SelectContent>
                  <SelectGroup>
                    {barangList.map((option: any) => (
                      <SelectItem value={option.id} key={option.id}>
                        {option.namaBarang} ({option.satuanBarang})
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 w-full h-full">
          <div className="w-1/3 h-[300px] border rounded-md bg-slate-300 p-5 grid grid-rows-3">
            <div className="flex justify-center items-center text-lg">Barang Masuk</div>
            <div className="flex justify-center items-center font-bold text-9xl text-center text-blue-500">{barangMasuk}</div>
            <div className="flex justify-center items-center text-lg">RIM</div>
          </div>
          <div className="w-1/3 h-[300px] border rounded-md bg-slate-300 p-5 grid grid-rows-3">
            <div className="flex justify-center items-center text-lg">Barang Keluar</div>
            <div className="flex justify-center items-center font-bold text-9xl text-center text-orange-500">{barangKeluar}</div>
            <div className="flex justify-center items-center text-lg">RIM</div>
          </div>
          <div className="w-1/3 h-[300px] border rounded-md bg-slate-300 p-5 grid grid-rows-3">
            <div className="flex justify-center items-center text-lg">Stok Barang</div>
            <div className="flex justify-center items-center font-bold text-9xl text-center text-green-500">{stokBarang}</div>
            <div className="flex justify-center items-center text-lg">RIM</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardContentComp;
