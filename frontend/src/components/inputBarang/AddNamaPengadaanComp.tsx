import { Fragment, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Cookies from "js-cookie";
import { Input } from "../ui/input";
import { format, parseISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";

const urlInput = import.meta.env.VITE_URL_INPUTBARANG;
const urlBulk = import.meta.env.VITE_URL_GETBULKBARANG;

const AddNamaPengadaanComp = () => {
  const token = Cookies.get("token");
  const [tanggal, setTanggal] = useState<string>("");
  const [namaPengadaan, setNamaPengadaan] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // const [dropdowns, setDropdowns] = useState<
  //   { id: number; barangId?: string; jumlah?: number }[]
  // >([{ id: 1 }]);
  // const [barangList, setBarangList] = useState<Barang[]>([]);
  //
  // const addDropdown = () => {
  //   setDropdowns([...dropdowns, { id: dropdowns.length + 1 }]);
  // };
  // const removeDropdown = (id: number) => {
  //   setDropdowns(dropdowns.filter((dropdown) => dropdown.id !== id));
  // };
  // const handleDropdownChange = (id: number, value: string) => {
  //   setDropdowns(
  //     dropdowns.map((dropdown) =>
  //       dropdown.id === id ? { ...dropdown, barangId: value } : dropdown,
  //     ),
  //   );
  // };

  // const handleJumlahChange = (id: number, value: string) => {
  //   setDropdowns(
  //     dropdowns.map((dropdown) =>
  //       dropdown.id === id
  //         ? { ...dropdown, jumlah: parseInt(value) || 0 }
  //         : dropdown,
  //     ),
  //   );
  // };

  const handleDate = (e: any) => {
    setTanggal(format(e, "yyyy-MM-dd"));
  };

  const handleSubmit = async () => {
    // const detailBarang = dropdowns.map((dropdown) => ({
    //   barangId: dropdown.barangId || "",
    //   jumlah: dropdown.jumlah || 0,
    // }));

    const body = {
      tanggal: tanggal,
      namaPengadaan: namaPengadaan.toUpperCase(),
      inputBarangDetails: [],
    };

    console.log(body);

    try {
      const result = await axios.post(urlInput, body, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      console.log(result);
      setIsDialogOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error adding barang:", error);
      alert("Gagal add barang");
    }
  };

  // useEffect(() => {
  //   const getBarang = async () => {
  //     const result = await axios.get(urlBulk, {
  //       headers: {
  //         Authorization: token,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     // console.log(result.data.data);
  //     setBarangList(result.data.data);
  //   };
  //
  //   getBarang();
  // }, []);

  return (
    <Fragment>
      <div className="">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
              Add Nama Pengadaan
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Masukan Informasi Barang</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="">
                <Label className="text-right">Nama Pengadaan</Label>
                <Input
                  placeholder="Nama Pengadaan"
                  onChange={(e) => setNamaPengadaan(e.target.value)}
                />
              </div>
              <div>
                <Label className="text-right">Tanggal</Label>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full md:w-full justify-start text-left font-normal",
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
                        onSelect={handleDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSubmit}>Simpan</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* <div className="grid grid-rows-12 grid-flow-col gap-1"> */}
      {/*   {dropdowns.map((dropdown) => ( */}
      {/*     <div */}
      {/*       key={dropdown.id} */}
      {/*       className="flex items-center space-x-2 ml-5 h-5 mt-3" */}
      {/*     > */}
      {/*       <Select */}
      {/*         onValueChange={(value) => */}
      {/*           handleDropdownChange(dropdown.id, value) */}
      {/*         } */}
      {/*       > */}
      {/*         <SelectTrigger className="w-36 text-xs text-left h-7"> */}
      {/*           <SelectValue placeholder="Select an option" /> */}
      {/*         </SelectTrigger> */}
      {/*         <SelectContent> */}
      {/*           <SelectGroup> */}
      {/*             {barangList.map((option) => ( */}
      {/*               <SelectItem value={option.id}> */}
      {/*                 {option.namaBarang} ({option.satuanBarang}) */}
      {/*               </SelectItem> */}
      {/*             ))} */}
      {/*           </SelectGroup> */}
      {/*         </SelectContent> */}
      {/*       </Select> */}
      {/*       <div className="w-[70px] text-xs"> */}
      {/*         <Input */}
      {/*           placeholder="jumlah" */}
      {/*           className="text-center h-7" */}
      {/*           onChange={(e) => */}
      {/*             handleJumlahChange(dropdown.id, e.target.value) */}
      {/*           } */}
      {/*         /> */}
      {/*       </div> */}
      {/*       <Button */}
      {/*         size="sm" */}
      {/*         className="bg-red-500 hover:bg-red-600 text-white h-7" */}
      {/*         onClick={() => removeDropdown(dropdown.id)} */}
      {/*       > */}
      {/*         - */}
      {/*       </Button> */}
      {/*     </div> */}
      {/*   ))} */}
      {/* </div> */}
      {/* {dropdowns.length < 36 ? ( */}
      {/*   <Button */}
      {/*     className="bg-blue-500 hover:bg-blue-600 text-white" */}
      {/*     onClick={addDropdown} */}
      {/*   > */}
      {/*     Add Item Barang */}
      {/*   </Button> */}
      {/* ) : ( */}
      {/*   <div className="text-xs text-red-700"> */}
      {/*     <div> */}
      {/*       Mencapai batas row, silahkan submit dan membuat input barang baru */}
      {/*     </div> */}
      {/*     <div>Pastikan nama pengadaan sama</div> */}
      {/*   </div> */}
      {/* )} */}
    </Fragment>
  );
};

export default AddNamaPengadaanComp;
