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
import { Input } from "../../ui/input";
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
} from "../../ui/dialog";
import { Label } from "../../ui/label";

const AddRequestUserComp = () => {
  const token = Cookies.get("token");
  const [tanggal, setTanggal] = useState<string>("");
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
    try {
      localStorage.setItem("tanggal", tanggal);
      setIsDialogOpen(false);
      window.location.reload();
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
              Add Request Barang
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Masukan Tanggal Pengajuan</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
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
    </Fragment>
  );
};

export default AddRequestUserComp;
