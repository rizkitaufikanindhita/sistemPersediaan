import { Fragment, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import DashboardComp from "@/components/DashboardComp";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);
  return (
    <Fragment>
      <div className="flex">
        <DashboardComp />
      </div>
      <div className="ml-64 p-4 flex items-center justify-center h-screen bg-slate-200">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Dashboard;
