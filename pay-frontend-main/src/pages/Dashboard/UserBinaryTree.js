import React, { useEffect, useState } from "react";
import { fetchBinaryTreeDataOfUser } from "../../services/rnbServices";
import { useNavigate, useParams } from "react-router";
import { Binary } from "./BinaryNode";
import Loader from "../../components/Loader";

const UserBinaryTree = () => {
  const authToken = JSON.parse(localStorage.getItem("user_data"));

  const { userId } = useParams();
  const [treeData, setTreeData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState([]);
  const navigate = useNavigate();
  const getNodeByI = (i) => {
    return treeData.find((node) => node.i === i);
  };
  useEffect(() => {
    const fetchData = async (userId) => {
      setIsDataLoaded(true);
      try {
        const response = await fetchBinaryTreeDataOfUser(userId);
        //console.log(response);
        if (response && response.data.data) {
          setTreeData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsDataLoaded(false);
      }
    };

    fetchData(userId);
  }, [userId]);
  return isDataLoaded ? (
    <div className="mt-[-100px]">
      <Loader />
    </div>
  ) : (
    <div className=" bg-[#0a090d]">
      <div className="flex justify-end w-full">
        <button
          className="w-1/10 py-3 mt-3 mx-3 px-6 bg-gradient-to-r from-newStart via-newMid to-newEnd text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
          onClick={() => {
            if (authToken?.userId === getNodeByI(1)?.parent_id) {
              navigate(`/dashboard/genealogy`, {
                state: { genealogyType: "Binary" },
              });
            } else {
              navigate(
                `/dashboard/genealogy/binary-network/${
                  getNodeByI(1)?.parent_id
                }`
              );
            }
          }}
        >
          Upline
        </button>

        <button
          className="w-1/10 py-3 mt-3 mx-3 px-6 bg-gradient-to-r from-newStart via-newMid to-newEnd text-black font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
          onClick={() => {
            navigate(`/dashboard/genealogy`, {
              state: { genealogyType: "Binary" },
            });
          }}
        >
          Reset
        </button>
      </div>
      <div className="overflow-x-auto min-h-[100vh]  w-full md:mt-0">
        <div className="mx-auto max-w-[100vw] px-[800px] lg:px-0 ">
          <div className="flex flex-col items-center justify-center mt-20">
            <Binary data={getNodeByI(1)} first={true} />

            <div className="flex items-center justify-center">
              {/* <div className="w-4 h-4 bg-white rounded-full"></div> */}
              {/* <div className="h-1 bg-white w-[460px] md:w-[525px]"></div> */}
              <div className="h-1 bg-white w-[528px]"></div>
              {/* <div className="w-4 h-4 bg-white rounded-full"></div> */}
            </div>

            <div className="flex " style={{ gap: 404 }}>
              <Binary data={getNodeByI(2)} />
              <Binary data={getNodeByI(3)} />
            </div>

            <div className="flex relative " style={{ gap: 338, marginTop: 0 }}>
              <div
                // style={{ width: "248px", right: "120px" }}
                // className="h-1 bg-white absolute w-[204px] right-[100px]  md:w-[230px] xl:w-[272px] md:right-[118px] xl:right-[130px]"
                className="h-1 bg-white absolute w-[268px] right-[135px]"
              ></div>
              <div
                // style={{ width: "248px", left: "120px" }}
                className="h-1 bg-white absolute w-[272px] left-[135px]"
              ></div>
            </div>
            <div className="flex" style={{ gap: 150 }}>
              <Binary data={getNodeByI(4)} />
              <Binary data={getNodeByI(5)} />
              <Binary data={getNodeByI(6)} />
              <Binary data={getNodeByI(7)} />
            </div>

            <div className="flex relative" style={{ gap: 157 }}>
              <div className="h-1 bg-white absolute w-[143px] right-[360px]"></div>
              <div className="h-1 bg-white absolute w-[145px] right-[71px] "></div>
              <div className="h-1 bg-white absolute w-[141px] left-[73px]"></div>
              <div className="h-1 bg-white absolute w-[145px] left-[358px]"></div>
            </div>

            <div className="flex gap-6 px-0">
              <Binary last={true} data={getNodeByI(8)} />
              <Binary last={true} data={getNodeByI(9)} />
              <Binary last={true} data={getNodeByI(10)} />
              <Binary last={true} data={getNodeByI(11)} />
              <Binary last={true} data={getNodeByI(12)} />
              <Binary last={true} data={getNodeByI(13)} />
              <Binary last={true} data={getNodeByI(14)} />
              <Binary last={true} data={getNodeByI(15)} />
            </div>
          </div>
          <div className="flex justify-center px-2">
            <img
              src="/images/binaryicons.png"
              className="w-full md:p-12 md:w-3/4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserBinaryTree;
