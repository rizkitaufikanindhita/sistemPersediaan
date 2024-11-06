import { Fragment, useEffect } from "react";
import store from "@/store";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const url = import.meta.env.VITE_URL_SIGNUP;

const SignUpComp = () => {
  const navigate = useNavigate();
  const { useSignUpStore } = store;
  const {
    name,
    nip,
    bagian,
    password,
    email,
    setName,
    setNip,
    setBagian,
    setPassword,
    setEmail,
  } = useSignUpStore((state) => state);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  type userSignUpType = {
    name: string;
    nip: string;
    bagian: string;
    password: string;
    email: string;
  };

  const body: userSignUpType = {
    name: name,
    nip: nip,
    bagian: bagian,
    password: password,
    email: email,
  };

  const signUpFunction = async () => {
    try {
      const result = await axios.post(url, body, {
        withCredentials: true,
      });

      if (result.status === 200) {
        alert("Sign up berhasil dan silakan sign in");
        navigate("/signin");
      } else {
        return alert(result.data.msg || "Tolong coba lagi");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="font-bold text-3xl px-8">Create an account</div>
          <div className="font-light mt-2 px-5">
            Already have an account? <Link to={"/signin"}>Sign in</Link>
          </div>
          <div className="items-start text-left mt-4">
            <div className="font-bold text-lg">Full Name</div>
            <Input
              className="mt-2"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
            />
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
            <div className="font-bold text-lg">email</div>
            <Input
              className="mt-2"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="items-start text-left mt-4">
            <div className="font-bold text-lg">Bagian</div>
            <Input
              className="mt-2"
              placeholder="Enter your username"
              onChange={(e) => setBagian(e.target.value)}
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
          <Button className="w-full mt-4" onClick={signUpFunction}>
            Sign up
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUpComp;
