import { Route, Routes, Outlet, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./pages/static/about/AboutUs";
import Earning from "./pages/static/investment/Earning";
import Legal from "./pages/Legal";
import Resources from "./pages/static/resources/Resources";
import Referral from "./pages/static/referral/Referral";
import Signup from "./pages/Signup";
import ExrtaBonus from "./pages/ExrtaBonus";
import { useState } from "react";
import Verification from "./pages/Verification";
import Tickets from "./pages/Dashboard/tickets/Tickets";
import Investment from "./pages/Dashboard/Investment";
import Genealogy from "./pages/Dashboard/Genealogy";
import Reports from "./pages/Dashboard/Reports";
import Overview from "./pages/Dashboard/Overview";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/profile/Profile";
import PrivateRoutes from "./components/PrivateRoutes";
import TradeView from "./pages/static/tradeview/TradeView";
import ForgotPassword from "./pages/ForgotPassword";
import Share from "./components/Share";
import Photos from "./pages/Photos";
import FAQ from "./pages/static/home/FAQ";
import { TickerTape } from "react-ts-tradingview-widgets";
import TermsAndCondition from "./pages/static/home/TermsAndCondition";
import PrivacyPolicy from "./pages/static/home/PrivacyPolicy";
import { TradeReport } from "./pages/TradeReport";
import UserBinaryTree from "./pages/Dashboard/UserBinaryTree";
import Banner from "./pages/Banner";
import { TeamMember } from "./pages/static/about/TeamMember";
import { useLocation } from "react-router-dom";
import { Video } from "./pages/Video";
import TeamPhotos from "./pages/TeamPhotos";
import LoginToUserDashboard from "./pages/LoginToUserDashboard";
// import Chat from "./components/Chat";
import NewSidebar from "./components/NewSidebar";
import CertificateDownloadButton from "./pages/Dashboard/overview/wallets/CertificateDownloadButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const location = useLocation();

  // Define an array of routes where you want to hide the TickerTape component
  const routesToHideTickerTape = ["/login", "/signup", "/forgot-password"];

  // Check if the current route is in the array of routes to hide TickerTape
  // const isTickerTapeHidden = routesToHideTickerTape.includes(location.pathname);
  const isTickerTapeHidden = routesToHideTickerTape.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="App text-white">
      <div className="">
        {!isTickerTapeHidden && (
          <div className="fixed-ticker" style={{ bottom: "-31px" }}>
            <TickerTape colorTheme="dark"></TickerTape>
          </div>
        )}
        <Routes>
          <Route path="/" element={<OutletLayout isLoggedIn={isLoggedIn} />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="team" element={<TeamMember />} />
            <Route path="contact" element={<ContactUs />} />
            {/* <Route path="blog" element={<Blog />} /> */}
            {/* <Route path="trade" element={<Trade />} /> */}
            <Route path="earning" element={<Earning />} />
            <Route path="referral" element={<Referral />} />
            <Route path="extrabonus" element={<ExrtaBonus />} />
            <Route path="legal" element={<Legal />} />
            <Route path="pdf" element={<Resources />} />
            <Route path="tradeview" element={<TradeView />} />
            <Route path="faq" element={<FAQ />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndCondition />}
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="photos" element={<Photos />} />
            <Route path="videos" element={<Video />} />
            <Route path="team-photos" element={<TeamPhotos />} />
            <Route path="banners" element={<Banner />} />
            <Route path="trade-report" element={<TradeReport />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Overview />} />
              <Route path="tickets" element={<Tickets />} />
              <Route path="investment" element={<Investment />} />
              <Route path="genealogy" element={<Genealogy />} />
              {/* <Route path="genealogy/binary" element={<FinalTree />} /> */}
              <Route path="reports" element={<Reports />} />
              <Route path="profile" element={<Profile />} />
              <Route
                path="genealogy/binary-network/:userId"
                element={<UserBinaryTree />}
              />
              <Route
                path="download-withdrawal-certificate"
                element={<CertificateDownloadButton />}
              />
              <Route
                path="download-deposit-certificate"
                element={<CertificateDownloadButton />}
              />
              {/* <Route path="deposit" element={<Deposit />} /> */}
            </Route>
          </Route>
          {/* <Route path="checkout" element={<Checkout />} /> */}
          <Route path="forgot-password" element={<ForgotPassword />} />
          {/* <Route path="reset-password/:userId" element={<ResetPassword />} /> */}

          <Route
            path="login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="verify/:userId" element={<Verification />} />

          <Route
            path="/dashboard/login-to-user-dashboard/:userid"
            element={<LoginToUserDashboard setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            exact
            path="signup/:sponsorId/:positionVal"
            element={<Signup />}
          />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

function OutletLayout({ isLoggedIn }) {
  return (
    <div className="overflow-x-hidden flex">
      <div className="w-full fixed top-0 left-0 z-10 position-fixed ">
        <div className="py-1 w-full  flex justify-center items-center bg-newStart text-white px-2 md:px-0">
          <Link
            className="text-xs md:text-base blinking-point1 font-bold cursor-pointer text-[#D22B2B] pl-20 md:pl-0"
            to="/login"
          >
            Get $70 Free in Ozo Tokens! Share About One Ozo on Social Media for
            Easy Rewards! 🎉
          </Link>
        </div>
      </div>
      <NewSidebar className="relative" />
      <div className="w-[80%] md:w-full">
        <Outlet />
        <Share />
        {/* <Chat/> */}
        <Footer />
      </div>
    </div>
  );
}
