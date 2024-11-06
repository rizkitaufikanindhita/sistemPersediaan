import { Fragment } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import store from "@/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_URL_GENERATEOTP;

const SubmitEmailComp = () => {
  const navigate = useNavigate();
  const { useResetPasswordStore } = store;
  const { email, setEmail } = useResetPasswordStore((state) => state);

  const body = {
    email: email,
  };

  const EmailRegistered = async () => {
    const result = await axios.post(url, body);
    const email = body.email;
    if (!result) {
      return alert("silahkan email diisi");
    }

    navigate(`/resetPassword?email=${email}`);
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="font-bold text-3xl px-8">
            Please fill email for reset password
          </div>
          <div className="items-start text-left mt-4">
            <div className="font-bold text-lg">Email</div>
            <Input
              className="mt-2"
              placeholder="Enter your email for otp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button className="w-full mt-4" onClick={EmailRegistered}>
            Sent OTP
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default SubmitEmailComp;
