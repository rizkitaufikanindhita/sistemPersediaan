import { Fragment } from "react";
import store from "@/store";
import { useSearchParams } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_URL_RESETPASSWORD;

const ResetPasswordComp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const { useResetPasswordStore } = store;

  const { otp, newPassword, setOTP, setNewPassword } = useResetPasswordStore(
    (state) => state,
  );

  const body = {
    email: email,
    otp: otp,
    newPassword: newPassword,
  };

  const resetFunction = async () => {
    const result = await axios.post(url, body);

    if (!result) {
      alert("tolong reload");
    }

    alert("password berhasil direset");
    navigate("/signin");
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="font-bold text-3xl px-8">
            Please fill otp and new password
          </div>
          <div className="items-start text-left mt-4">
            <div className="font-bold text-lg">OTP</div>
            <Input
              className="mt-2"
              placeholder="Enter your otp"
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
          <div className="items-start text-left mt-4">
            <div className="font-bold text-lg">New Password</div>
            <Input
              className="mt-2"
              placeholder="Enter your new password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <Button className="w-full mt-4" onClick={resetFunction}>
            Reset Password
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPasswordComp;
