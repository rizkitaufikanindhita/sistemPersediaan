import { Fragment, useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import { parse } from "path";
import { parseInt } from "lodash";
import { format, parseISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const EditRequestUserComp = () => {
  const token = Cookies.get("token");
  const [tanggal, setTanggal] = useState<string>("");

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTanggal = (e: any) => {
    setTanggal(format(e, "yyyy-MM-dd"));
  };

  useEffect(() => {
    const dataTanggal = localStorage.getItem("tanggal");
    if (dataTanggal) {
      setTanggal(dataTanggal);
    }
  }, []);

  const updateTanggal = async () => {
    localStorage.setItem("tanggal", tanggal);
    setIsDialogOpen(false);
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
              }}
            >
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Perbaharui Tanggal Pengajuan Barang</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <div className="text-lg font-bold">Tanggal</div>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full md:w-full mt-2 justify-start text-left font-normal",
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
                        onSelect={handleTanggal}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={updateTanggal}>Update</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Fragment>
  );
};

export default EditRequestUserComp;
