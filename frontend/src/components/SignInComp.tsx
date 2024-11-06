import { Fragment, useEffect } from "react";
import store from "@/store";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const url = import.meta.env.VITE_URL_SIGNIN;

const SignInComp = () => {
  const navigate = useNavigate();
  const { useSignInStore } = store;
  const { nip, password, setNip, setPassword } = useSignInStore(
    (state) => state,
  );

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/dashboard/tracking")
    }
  }, []);

  type userSignInType = {
    nip: string;
    password: string;
  };

  const body: userSignInType = {
    nip: nip,
    password: password,
  };

  const signIn = async () => {
    const result = await axios.post(url, body, {
      withCredentials: true,
    });

    if (result.data.msg == "password salah") {
      return alert("password salah");
    } else if (result.data.msg == "nip salah") {
      return alert("nip salah");
    }

    alert("sign in berhasil");
    navigate("/dashboard/tracking");
    // setcookies di be
    // belum ada
    //
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="font-bold text-3xl px-8">Welcome</div>
          <div className="font-light mt-2 px-5">
            {/* Already have an account? <Link to={"/signin"}>Login</Link> */}
            Please sign in using your account
          </div>
          <div className="items-start text-left mt-4">
            <div className="font-bold text-lg">NIP</div>
            <Input
              className="mt-2"
              placeholder="Enter your NIP"
              onChange={(e) => setNip(e.target.value)}
            />
          </div>
          <div className="items-start text-left mt-4">
            <div className="font-bold text-lg">Password</div>
            <Input
              className="mt-2"
              type="password"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full mt-4" onClick={signIn}>
            Sign in
          </Button>
          <div className="text-sm mt-5">
            <Button className="bg-white text-slate-500 hover:bg-white">
              <Link to={"/submitEmail"}>Forgot password?</Link>
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignInComp;
