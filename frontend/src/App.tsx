import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import SubmitEmail from "./pages/resetPassword/SubmitEmail";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Dashboard from "./pages/Dashboard";
import BarangComp from "./components/BarangComp";
import InputBarangComp from "./components/inputBarang/InputBarangComp";
import DashboardContentComp from "./components/DashboardContentComp";
import EditBarangComp from "./components/EditBarangComp";
import EditNamaPengadaanComp from "./components/inputBarang/EditNamaPengadaanComp";
import AddNamaPengadaanComp from "./components/inputBarang/AddNamaPengadaanComp";
import DetailPengadaanComp from "./components/inputBarang/DetailPengadaanComp";
import EditInputBarangDetailComp from "./components/inputBarang/EditInputBarangDetailComp";
import RequestBarangAdminComp from "./components/requestBarang/RequestBarangAdminComp";
import RequestBarangUserComp from "./components/requestBarang/RequestBarangUserComp";
import DetailRequestBarangAdminComp from "./components/requestBarang/DetailRequestBarangAdminComp";
import OutputBarangComp from "./components/outputBarang/OutputBarangComp";
import OutputBarangDetailComp from "./components/outputBarang/OutputBarangDetailComp";
import DetailRequestUserComp from "./components/requestBarang/requestUser/DetailRequestUserComp";
import TrackingComp from "./components/tracking/TrackingComp";
import DetailsTrackingComp from "./components/tracking/details/DetailsTrackingComp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/submitEmail" element={<SubmitEmail />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="dashboardContent" element={<DashboardContentComp />} />
            <Route path="barang" element={<BarangComp />} />
            <Route path="barang/editBarang" element={<EditBarangComp />} />
            <Route path="inputBarang" element={<InputBarangComp />} />
            <Route
              path="inputBarang/addInputBarang"
              element={<AddNamaPengadaanComp />}
            />
            <Route
              path="inputBarang/editNamaPengadaan"
              element={<EditNamaPengadaanComp />}
            />
            <Route
              path="inputBarang/detailPengadaan"
              element={<DetailPengadaanComp />}
            />
            <Route
              path="inputBarang/detailPengadaan/editInputBarangDetail"
              element={<EditInputBarangDetailComp />}
            />
            <Route path="outputBarang" element={<OutputBarangComp />} />
            <Route
              path="outputBarang/detailOutput"
              element={<OutputBarangDetailComp />}
            />
            <Route path="requestAdmin" element={<RequestBarangAdminComp />} />
            <Route
              path="requestAdmin/detailRequest"
              element={<DetailRequestBarangAdminComp />}
            />
            <Route path="requestUser" element={<RequestBarangUserComp />} />
            <Route
              path="requestUser/detailRequestUser"
              element={<DetailRequestUserComp />}
            />
            <Route path="tracking" element={<TrackingComp />} />
            <Route path="tracking/detailsTracking" element={<DetailsTrackingComp />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
