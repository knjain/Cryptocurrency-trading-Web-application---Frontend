import { useState, useEffect } from "react";
import { fetchBinaryTreeData } from "../../services/rnbServices";

import { Binary } from "./BinaryNode";
import Loader from "../../components/Loader";
const FinalTree = () => {
  const [treeData, setTreeData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState([]);

  const [level1Node, setLevel1Node] = useState([]);
  const [level2Nodes, setLevel2Nodes] = useState([]);
  const [level3Nodes, setLevel3Nodes] = useState([]);
  const [level4Nodes, setLevel4Nodes] = useState([]);
  const getNodeByI = (i) => {
    return treeData.find((node) => node.i === i);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsDataLoaded(true);
        const response = await fetchBinaryTreeData();
        //console.log(response);
        if (response && response.data.data) {
          setTreeData(response.data.data);
          setLevel1Node(
            response.data.data.find((node) => node.level === 1) || null
          );
          setLevel2Nodes(
            response.data.data.filter((node) => node.level === 2) || []
          );
          setLevel3Nodes(
            response.data.data.filter((node) => node.level === 3) || []
          );
          setLevel4Nodes(
            response.data.data.filter((node) => node.level === 4) || []
          );
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsDataLoaded(false);
      }
    };

    fetchData();
  }, []);
  return isDataLoaded ? (
    <div className="mt-[-100px]">
      <Loader />
    </div>
  ) : (
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
  );
};

export default FinalTree;
