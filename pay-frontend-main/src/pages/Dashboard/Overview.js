import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { baseURL } from "../../constants/Constant";
import axios from "axios";
import "./Overview.css";
import {
  createPayment,
  createTransaction,
  createWithdrawal,
  getWalletByUserId,
  interWalletTransfer,
} from "../../services/walletService";
import { fetchDashboardData, sendOTP } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import PieChart from "../../components/Piechart";
import Wallets from "./overview/Wallets";
import Refer from "./overview/Refer";
import EarningCard from "./overview/EarningCard";
import DepositWallet from "./overview/wallets/DepositWallet";
import RoiWallet from "./overview/wallets/RoiWallet";
import RbWallet from "./overview/wallets/RbWallet";
import InterestWallet from "./overview/wallets/InterestWallet";
import OzoTokenWallet from "./overview/wallets/OzoTokenWallet";
import { tokenCodes, tokens } from "./overview/data";
import DepositModal from "./overview/modals/DepositModal";
import WithdrawModal from "./overview/modals/WithdrawModal";
import TransferModal from "./overview/modals/TransferModal";
import { fetchBinaryTreeData } from "../../services/rnbServices";
import Loader from "../../components/Loader";
import { Buisness } from "../../components/Buisness";
import CarrierPlan from "../../components/careers/CarrierPlan";
import CareerPlanWithdrawal from "../../components/careers/CareerPlanWithdrawal";
import CareerPlanReferral from "../../components/careers/CareerPlanReferral";
import CareerPlanDirect from "../../components/careers/CareerPlanDirect";
import WithdrawalWalletModel from "./overview/modals/WithdrawalWalletModal";
import LTCWithdrawalWalletModel from "./overview/modals/LTCWithdrawalWalletModel";

const Overview = () => {
  //console.log("begin");
  const [data, setData] = useState([]);
  const [dashboardData, setDashboardData] = useState([]);
  // Overview state
  const navigate = useNavigate();
  const [walletType, setWalletType] = useState("");
  const [withdrawWalletModel, setWithdrawWalletModel] = useState(false);
  const [withdrwawfrom, setWithdrawfrom] = useState("");

  const [totalInvestmentRevenue, setTotalInvestmentRevenue] = useState("");

  const [totalReturns, settotalReturns] = useState("0");

  const [totalWithdrawal, settotalWithdrawal] = useState("0");
  const [totalWithdrawalRemaining, settotalWithdrawalRemaining] = useState("0");

  const [totalEarning, settotalEarning] = useState("0");
  const [totalEarningByPercentage, settotalEarningByPercentage] = useState("0");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLTCModalOpen, setIsLTCModalOpen] = useState(false);
  const handleClose = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleCloseLTC = () => {
    setIsLTCModalOpen((prev) => !prev);
  };
  //wallets
  const [depositWallet, setdepositWallet] = useState("0");
  const [roiWallet, setroiWallet] = useState("0");
  const [rbWallet, setrbWallet] = useState("0");
  const [interestWallet, setinterestWallet] = useState("0");
  const [ozoToken, setozoToken] = useState("0");
  const [LeftReferral, setLeftReferral] = useState("left");
  const [RightReferral, setRightReferral] = useState("right");
  const [render, setRender] = useState(false);
  const [piedata, setPieData] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  useEffect(() => {
    const fetchWallet = async (userData) => {
      try {
        // setIsDataLoaded(false);
        const response = await getWalletByUserId();

        if (response.data.success) {
          const walletData = response.data.data[0];

          setData(response.data.data);
          setdepositWallet(walletData.deposit_wallet_tec);
          setroiWallet(walletData.roi_wallet_mac);
          setrbWallet(walletData.referral_binary_wallet);
          setinterestWallet(walletData.interest_wallet);
          setozoToken(walletData.token_wallet);
          setTotalInvestmentRevenue(walletData.total_investment);
          settotalReturns(walletData.total_earning);
          settotalWithdrawal(walletData.total_withdrawal);
          settotalWithdrawalRemaining(walletData.total_withdrawal_remaining);
          settotalEarning(walletData.total_earning);

          const deposit = walletData.total_investment;
          const totalEarning = walletData.total_earning;

          let percentage;

          if (deposit && deposit > 0) {
            percentage = ((totalEarning - deposit) / deposit) * 100;
            percentage = parseFloat(percentage.toFixed(0));
          } else {
            percentage = 0; // default value when deposit is null or zero
          }

          settotalEarningByPercentage(percentage);

          setLeftReferral(`https://oneozo.com/signup/${userData.userId}/left`);
          setRightReferral(
            `https://oneozo.com/signup/${userData.userId}/right`
          );

          const tempdata = [
            {
              id: "ROI",
              label: "ROI",
              value: walletData.roi_wallet_mac, // Assume this corresponds to the ROI wallet
              color: "#889AFF",
            },
            {
              id: "Referral bonus",
              label: "Referral bonus",
              value: walletData.referral_wallet_trade, // Assume this corresponds to the Referral bonus
              color: "#B4B3FE",
            },
            {
              id: "Interest",
              label: "Interest",
              value: walletData.interest_wallet, // This corresponds to the Interest wallet
              color: "#B594F3",
            },
            {
              id: "Binary bonus",
              label: "Binary bonus",
              value: walletData.binary_wallet, // Assume this corresponds to the Binary bonus
              color: "#F1ACFE",
            },
          ];
          setPieData(tempdata);
          const sumOfPieValues = tempdata.reduce(
            (sum, item) => Number(sum) + Number(item.value),
            0
          );

          // If the sum is 0, update the values for each to represent 25% each.
          const adjustedPieData =
            sumOfPieValues === 0
              ? tempdata.map((item) => ({ ...item, value: 25 }))
              : tempdata;
          setPieData(adjustedPieData);
        } else {
          toast.error("Something went wrong");
        }
        const response1 = await fetchBinaryTreeData();
        if (response1 && response1.data.data) {
          setTreeData(response1.data.data);
        } else {
          toast.error("Something went wrong");
        }
        const response2 = await fetchDashboardData();
        console.log(response2);
        if (response2 && response2.data.data) {
          setDashboardData(response2.data.data);
          if (response2.data.data?.isWithdrawalWalletUpdated === true) {
            setIsModalOpen(false);
          } else {
            setIsModalOpen(true);
          }

          if (
            response2.data.data?.isltcWithdrawalWalletUpdated === false &&
            response.data.data[0]?.country === "Japan"
          ) {
            setIsLTCModalOpen(true);
          } else {
            setIsLTCModalOpen(false);
          }
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        // setIsDataLoaded(true);
      }
    };

    const userData = JSON.parse(localStorage.getItem("user_data"));

    if (userData) {
      fetchWallet(userData);
    } else {
      toast.error("Please sign in again");
    }
    // Automatically set isDataLoaded after 10 seconds
    const timeoutId = setTimeout(() => {
      setIsDataLoaded(true);
    }, 5000); // 10000 milliseconds = 10 seconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [render]);
  const [Transferfrom, setTransferfrom] = useState("");
  const [Transferto, setTransferto] = useState("Token");
  const [depositWalletModel, setDepositWalletModel] = useState(false);

  const [amount, setamount] = useState("");
  const [token, setToken] = useState("");
  const [openTOKEN, setOpenTOKEN] = useState(false);
  const [isDepositLoading, setIsDepositLoading] = useState(false);

  const getNodeByI = (i) => {
    return treeData.find((node) => node.i === i);
  };

  const [transferModalOpen, settransferModalOpen] = useState(false);

  const handleDeposit = async () => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData.token && userData.email && userData.userId) {
      const headers = {
        Authorization: userData.token,
      };
      setIsDepositLoading(true);
      const tokenMap = tokens.reduce((map, token, index) => {
        map[token] = tokenCodes[index];
        return map;
      }, {});
      try {
        const tokenCode = tokenMap[token];
        const formData = {
          from_currency: "USD",
          to_currency: tokenCode,
          amount,
          buyer_name: userData?.email,
          buyer_email: userData?.email,
          custom: `["${userData?.userId}","${tokenCode}"]`,
          ipn_endpoint: "/api/payment/deposit/ipn",
          email: userData?.email,
        };

        const response = await createPayment(formData);

        if (response.data.success) {
          // // Open the checkout window in a new window/tab
          // window.open(response.data.data.checkout_url);
          // Check if the device is a mobile device
          const isMobile = window.innerWidth <= 768; // You can adjust the threshold as needed

          // Open the checkout window in the same tab for mobile devices, otherwise in a new tab
          if (isMobile) {
            window.location.href = response.data.data.checkout_url;
          } else {
            window.open(response.data.data.checkout_url);
          }
        } else {
          console.error("Error creating transaction:", data);
          toast.error("Error creating transaction:");
        }
      } catch (error) {
        toast.error("Error creating transaction:");
        console.error("Error creating transaction:", error);
      } finally {
        setIsDepositLoading(false);
        setamount("");
        setToken("");
        setDepositWalletModel(false);
      }
    }
  };
  return (
    <>
      {!isDataLoaded ? (
        <div className="mt-[-100px]">
          <Loader />
        </div>
      ) : (
        <div className="xl:overflow-x-hidden lg:overflow-auto bg-black relative  w-full">
          {/* Modals  */}

          {/* Deposit Modal  */}
          {depositWalletModel && (
            <DepositModal
              depositWalletModel={depositWalletModel}
              setDepositWalletModel={setDepositWalletModel}
              amount={amount}
              setamount={setamount}
              token={token}
              setOpenTOKEN={setOpenTOKEN}
              openTOKEN={openTOKEN}
              tokens={tokens}
              setToken={setToken}
              handleDeposit={handleDeposit}
              isDepositLoading={isDepositLoading}
            />
          )}

          {/* Withdraw modal  */}

          {withdrawWalletModel && (
            <WithdrawModal
              setWithdrawWalletModel={setWithdrawWalletModel}
              data={data}
              withdrwawfrom={withdrwawfrom}
              walletType={walletType}
              setRender={setRender}
            />
          )}

          {/* OTP MODAL   */}

          {/* Transfer fund modal  */}
          {transferModalOpen && (
            <TransferModal
              transferModalOpen={transferModalOpen}
              settransferModalOpen={settransferModalOpen}
              Transferfrom={Transferfrom}
              walletType={walletType}
              setTransferfrom={setTransferfrom}
              Transferto={Transferto}
              setTransferto={setTransferto}
              roiWallet={roiWallet}
              openTOKEN={openTOKEN}
              rbWallet={rbWallet}
              interestWallet={interestWallet}
              setRender={setRender}
            />
          )}

          <div className="flex flex-col lg:flex-row w-full gap-2 justify-center p-6">
            <div className="flex flex-col w-full gap-2 justify-center items-center lg:pl-6 max-w-[1440px]">
              <div className="w-full">
                <Wallets
                  totalWithdrawal={totalWithdrawal}
                  totalInvestmentRevenue={totalInvestmentRevenue}
                  totalReturns={totalReturns}
                />
              </div>
              <div className="flex flex-wrap lg:flex-row lg:flex-nowrap gap-2 justify-center items-center w-full">
                <DepositWallet
                  depositWallet={depositWallet}
                  setDepositWalletModel={setDepositWalletModel}
                />

                <RoiWallet
                  roiWallet={roiWallet}
                  setWalletType={setWalletType}
                  setWithdrawfrom={setWithdrawfrom}
                  setWithdrawWalletModel={setWithdrawWalletModel}
                  settransferModalOpen={settransferModalOpen}
                  setTransferfrom={setTransferfrom}
                  dashboardData={dashboardData}
                />

                <RbWallet
                  rbWallet={rbWallet}
                  setWalletType={setWalletType}
                  setWithdrawfrom={setWithdrawfrom}
                  setWithdrawWalletModel={setWithdrawWalletModel}
                  settransferModalOpen={settransferModalOpen}
                  dashboardData={dashboardData}
                  setTransferfrom={setTransferfrom}
                />

                <InterestWallet
                  interestWallet={interestWallet}
                  setWalletType={setWalletType}
                  setWithdrawfrom={setWithdrawfrom}
                  setWithdrawWalletModel={setWithdrawWalletModel}
                  settransferModalOpen={settransferModalOpen}
                  dashboardData={dashboardData}
                  setTransferfrom={setTransferfrom}
                />

                <OzoTokenWallet
                  ozoToken={ozoToken}
                  setDepositWalletModel={setDepositWalletModel}
                />
              </div>
              <div>
                {/* <div className="w-full flex justify-between items-center">
                <div>Refer and Earn</div>
                <div>Binary Status</div>
                <div>Interest wallet earning</div>
              </div> */}
                <Refer
                  dashboardData={dashboardData}
                  getNodeByI={getNodeByI}
                  setWithdrawWalletModel={setWithdrawWalletModel}
                  setWithdrawfrom={setWithdrawfrom}
                  settransferModalOpen={settransferModalOpen}
                  navigate={navigate}
                  data={data}
                  downlineCount={
                    treeData[0]?.left_downlines + treeData[0]?.right_downlines
                  }
                  LeftReferral={LeftReferral}
                  RightReferral={RightReferral}
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center lg:w-1/3 lg:mr-4">
              <EarningCard
                totalEarning={totalEarning}
                piedata={piedata}
                totalEarningByPercentage={totalEarningByPercentage}
                PieChart={PieChart}
                setWithdrawWalletModel={setWithdrawWalletModel}
                story={dashboardData?.story}
                is_story_seen={dashboardData?.is_story_seen}
              />
            </div>
          </div>
          <CarrierPlan dashboardData={dashboardData} />
          <CareerPlanDirect dashboardData={dashboardData} />
          <CareerPlanReferral dashboardData={dashboardData} />
          <CareerPlanWithdrawal dashboardData={dashboardData} />
          {isModalOpen && <WithdrawalWalletModel handleClose={handleClose} />}
          {isLTCModalOpen && (
            <LTCWithdrawalWalletModel handleClose={handleCloseLTC} />
          )}
          {/* <div className="overflow-x-auto w-full max-w-full px-12 pb-24 ">
        <Referral isDashboard={true} />
      </div> */}
        </div>
      )}
    </>
  );
};

export default Overview;
