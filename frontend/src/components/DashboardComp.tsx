import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignOutComp from "./SignOutComp";
import Cookies from "js-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const DashboardComp = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  interface CustomJwtPayload extends JwtPayload {
    isAdmin?: boolean;
  }
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode<CustomJwtPayload>(token);
      setIsAdmin(decodedToken.isAdmin ?? false);
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    <Fragment>
      <div className="flex">
        <div className="w-64 h-screen bg-gray-800 text-white fixed flex flex-col">
          <div className="mt-10 font-bold text-lg">Aplikasi Persediaan</div>
          <nav className="mt-10 flex-grow">
            <ul>
              {isAdmin && (
                <li className="mb-2">
                  <Link
                    to="/dashboard/dashboardContent"
                    className="block py-2 px-4 hover:bg-gray-700 flex"
                  >
                    <img
                      src="../../public/dashboard.png"
                      alt="dashboard icon"
                      className="invert w-3 h-3 mt-1 ml-5"
                    />
                    <div className="ml-5 text-sm">Dashboard</div>
                  </Link>
                </li>

              )}
              <li className="mb-2">
                <Link
                  to={
                    isAdmin
                      ? "/dashboard/requestAdmin"
                      : "/dashboard/requestUser"
                  }
                  className="block py-2 px-4 hover:bg-gray-700 flex"
                >
                  <img
                    src="../../public/request.png"
                    alt="request icon"
                    className="invert w-3 h-3 mt-1 ml-5"
                  />
                  <div className="ml-5 text-sm">Request</div>
                </Link>
              </li>

              {!isAdmin && (
                <li className="mb-2">
                  <Link
                    to="/dashboard/tracking"
                    className="block py-2 px-4 hover:bg-gray-700 flex"
                  >
                    <img
                      src="../../public/tracking.png"
                      alt="tracking icon"
                      className="invert w-4 h-4 mt-0.5 ml-4"
                    />
                    <div className="ml-5 text-sm">Tracking</div>
                  </Link>
                </li>
              )}

              {isAdmin && (
                <>
                  <li className="mb-2">
                    <Link
                      to="/dashboard/barang"
                      className="block py-2 px-4 hover:bg-gray-700 flex"
                    >
                      <img
                        src="../../public/product.png"
                        alt="product icon"
                        className="invert w-4 h-4 mt-0.5 ml-4"
                      />
                      <div className="ml-5 text-sm">Barang</div>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/dashboard/inputBarang"
                      className="block py-2 px-4 hover:bg-gray-700 flex"
                    >
                      <img
                        src="../../public/input-product.png"
                        alt="input-product icon"
                        className="invert w-4 h-4 mt-0.5 ml-4"
                      />
                      <div className="ml-5 text-sm">Input Barang</div>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/dashboard/outputBarang"
                      className="block py-2 px-4 hover:bg-gray-700 flex"
                    >
                      <img
                        src="../../public/output-product.png"
                        alt="output-product icon"
                        className="invert w-4 h-4 mt-0.5 ml-4"
                      />
                      <div className="ml-5 text-sm">Output Barang</div>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <div className="mb-10 px-4">
            <SignOutComp />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardComp;
