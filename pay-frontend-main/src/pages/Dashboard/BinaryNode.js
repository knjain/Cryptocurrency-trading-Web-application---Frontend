import { useState, useEffect } from "react";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
function Card({ children }) {
  return <div className="">{children}</div>;
}

const Tree = ({ data }) => (
  <Card className="p-6 border border-solid rounded-md border-gray-300 flex justify-center align-center ">
    <table
      className="w-full  text-white gap-2 rounded"
      style={{ backgroundColor: "gray.800" }}
    >
      <thead>
        <tr>
          <th className="w-1/3 text-center border border-gray-500 rounded-tl text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text font-semibold">
            {data?.name}
          </th>
          <th className="w-1/3 text-center px-4 border border-gray-500 text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text font-semibold">
            Left
          </th>
          <th className="w-1/3 text-center px-4 border border-gray-500 rounded-tr text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text font-semibold">
            Right
          </th>
        </tr>
      </thead>
      <tbody>
        <TreeNode
          name="Downlines"
          leftCount={data && data.left_downlines ? data.left_downlines : "0"}
          rightCount={data && data.right_downlines ? data.right_downlines : "0"}
        />
        {/* <TreeNode
          name="Users"
          leftCount={data && data.left_child ? data.left_child : "  "}
          rightCount={data && data.right_child ? data.right_child : "  "}
        /> */}
        <TreeNode
          name="Business"
          leftCount={data && data.left_business ? data.left_business : "0.00"}
          rightCount={
            data && data.right_business ? data.right_business : "0.00"
          }
        />
        <TreeNode
          name="Carry"
          leftCount={data && data.left_carry ? data.left_carry : "0.00"}
          rightCount={data && data.right_carry ? data.right_carry : "0.00"}
        />

        <TreeNode
          isSingle={true}
          name="Matching Due"
          leftCount={data && data.matching_due ? data.matching_due : "0.00"}
        />
        <TreeNode
          isSingle={true}
          name="Binary Due"
          leftCount={data && data.binary_due ? data.binary_due : "0.00"}
        />
        <TreeNode
          isSingle={true}
          name="Capping Limit"
          leftCount={data && data.capping_limit ? data.capping_limit : "0.00"}
          rounded="bottom"
        />
        {/* <TreeNode
          isSingle={true}
          name="Direct Business"
          leftCount={
            data && data.direct_business ? data.direct_business : "0.00"
          }
          rounded="bottom"
        /> */}
        {/* ... you can add more TreeNode instances here ... */}
      </tbody>
    </table>
  </Card>
);
const formatValue = (name, value) => {
  if (
    name === "Business" ||
    name === "Direct Business" ||
    name === "Matching Due" ||
    name === "Carry" ||
    name === "Binary Due"
  ) {
    return `$${value}`;
  }
  return value;
};

const TreeNode = ({ name, isSingle, leftCount, rightCount, rounded }) => (
  <tr>
    <td
      className={`px-4 border border-gray-500 text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text font-semibold ${
        rounded === "bottom" ? "rounded-bl" : ""
      }`}
    >
      {name}
    </td>

    {isSingle ? (
      <td className="text-center px-4 border border-gray-500" colSpan="2">
        {formatValue(name, leftCount)}
      </td>
    ) : (
      <>
        <td className="text-center px-4 border border-gray-500">
          {formatValue(name, leftCount)}
        </td>
        <td className="text-center px-4 border border-gray-500">
          {formatValue(name, rightCount)}
        </td>
      </>
    )}
  </tr>
);

export const Binary = ({ data, last, first, ofTwo }) => {
  const authToken = JSON.parse(localStorage.getItem("user_data"));
  const isClickable = data && data?.user_id !== authToken?.userId;
  //console.log(authToken, isClickable);
  const navigate = useNavigate();
  const [showTree, setShowTree] = useState(false);
  const handleImageClick = () => {
    setShowTree(!showTree);
  };
  const handleImageHover = () => {
    setShowTree(true);
  };

  const handleImageLeave = () => {
    setShowTree(false);
  };
  const renderImageByPackage = () => {
    if (!data) {
      return (
        <img
          src="/images/Ellipse 6.png"
          alt="Package 4"
          width="50"
          height="50"
          className="pt-[4px]"
        />
      );
    }
    if (!data?.package_id) {
      if (data?.verified === 1) {
        return (
          <img
            src="/images/12 1.png" // path to the image for verified users
            alt="Verified User Default"
            width="36"
            height="50"
            className="contain"
          />
        );
      } else {
        return (
          <img
            src="/images/Ellipse 5.png"
            alt="Package 4"
            width="50"
            height="50"
            className="pt-[4px]"
          />
        );
      }
    }
    switch (data?.package_id) {
      case 1:
        return (
          <img
            src="/images/package1.png"
            alt="Package 1"
            width="40"
            height="40"
          />
        );
      case 2:
        return (
          <img
            src="/images/package2.png"
            alt="Package 2"
            width="50"
            height="50"
          />
        );
      case 3:
        return (
          <img
            src="/images/package3.png"
            alt="Package 3"
            width="50"
            height="50"
          />
        );
      case 4:
        return (
          <img
            src="/images/package4.png"
            alt="Package 4"
            width="50"
            height="50"
            className="pt-[4px]"
          />
        );
      case 6:
        return (
          <img
            src="/images/icons/6.png"
            alt="Package 4"
            width="50"
            height="50"
            className="pt-[4px]"
          />
        );
      case 5:
        return (
          <img
            src="/images/packages/goldicon.png"
            alt="Package 4"
            width="50"
            height="50"
            className="pt-[4px]"
          />
        );
      case 7:
        return (
          <img
            src="/images/packages/primeicon.png"
            alt="Package 4"
            width="50"
            height="50"
            className="pt-[4px]"
          />
        );
      case 8:
        return (
          <img
            src="/images/packages/powericon.png"
            alt="Package 4"
            width="50"
            height="50"
            className="pt-[4px]"
          />
        );
      case 9:
        return (
          <img
            src="/images/packages/thundericon.png"
            alt="Package 4"
            width="50"
            height="50"
            className="pt-[4px]"
          />
        );
      default:
        // return <FontAwesomeIcon icon={faChessKing} color="black" />;
        return (
          <img
            src="/images/Ellipse 6.png"
            alt="Package 4"
            width="50"
            height="50"
            className="pt-[4px]"
          />
        );
    }
  };
  return (
    <div
      className={`flex items-center justify-center flex-col relative ${
        isClickable ? "cursor-pointer" : ""
      }`}
      onClick={
        isClickable
          ? () =>
              navigate(`/dashboard/genealogy/binary-network/${data?.user_id}`)
          : undefined
      }
    >
      <div>
        {!first && (
          <div
            style={{ height: ofTwo ? "10px" : "30px", paddingTop: 0 }}
            className="w-1 bg-white"
          ></div>
        )}
      </div>
      <div
        className="flex flex-col justify-center items-center p-0 md:p-2 border border-white rounded-lg border-4 w-[120px] h-[120px]"
        style={{
          height: ofTwo ? "100px" : "120px",
          width: ofTwo ? "120px" : "120px",
        }}
      >
        <div
          className="w-12 h-12 bg-[#373737] flex items-center justify-center rounded-full "
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
          onClick={handleImageClick}
        >
          {/* <FontAwesomeIcon icon={faChessKing} color="black" /> */}
          {renderImageByPackage()}

          {showTree && !ofTwo && data && !first && (
            <div
              className="absolute top-0 left-1/2 w-[450px] rounded-2xl transform -translate-x-1/2 -mt-40 -500 p-2 bg-gray-900 z-100 "
              style={{ zIndex: "100" }}
            >
              <Tree data={data} />
            </div>
          )}
          {showTree && !ofTwo && data && first && (
            <div
              className="absolute bottom-0 left-1/2 w-[450px] rounded-2xl transform -translate-x-1/2 -mt-40 -500 p-2 bg-gray-900 z-100 "
              style={{ zIndex: "100" }}
            >
              <Tree data={data} />
            </div>
          )}
        </div>
        <span
          className={` text-sm md:text-md ${
            !data ? "text-white mt-2 " : "text-white mt-2"
          }`}
        >
          {data ? data.user_id : ""}
        </span>
      </div>
      <div>
        {!last && (
          <div
            style={{
              height: ofTwo ? "10px" : "30px",
              paddingBottom: 0,
              marginBottom: 0,
            }}
            className="w-1 bg-white"
          ></div>
        )}
      </div>
    </div>
  );
};
