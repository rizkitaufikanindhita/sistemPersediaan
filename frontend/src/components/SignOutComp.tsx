import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL_SIGNOUT;

const SignOutComp = () => {
  const navigate = useNavigate();
  const signout = async () => {
    await axios.post(url, {}, { withCredentials: true });
    navigate("/signin");
  };
  return (
    <Fragment>
      <Button className="text-xl w-full text-sm" size="sm" onClick={signout}>
        Sign out
      </Button>
    </Fragment>
  );
};

export default SignOutComp;
