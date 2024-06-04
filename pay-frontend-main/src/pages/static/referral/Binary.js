import React from "react";
import { useNavigate } from "react-router";

const Binary = () => {
  const navigate = useNavigate();
  return (
    <div className="font-poppins px-6 md:px-0">
      {/* <div className="relative mb-64 md:mb-0">
        <img
          alt="Signup Background"
          src="./images/binary1.jpg"
          className="w-full max-h-[90vh] object-cover"
        />
        <div className="pt-44 md:pt-0 absolute flex flex-col gap-6 px-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center px-4">
          <div className="py-10 max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl font-bold">Unlock Exclusive Rewards</h1>
            <p className="font-medium text-3xl">
              Affiliates Earn Lucrative Commissions and <br /> More with One Ozo
            </p>
            <button className="border px-8 py-3 rounded-lg">
              Become an Affiliate
            </button>
          </div>
        </div>
      </div> */}

      {/* section 2 */}

      {/* <div className="text-center my-16 w-full px-6"> */}
      {/* <h2 className="text-4xl mb-9 font-medium">
          Affiliate Programme Commissions
        </h2> */}
      {/* w-full max-w-5xl text-left font-medium mx-auto flex space-x-6 items-center */}
      {/* <div className="md:px-24 flex flex-col md:flex-row gap-6 justify-center text-left items-center mt-12">
          <div className="w-full md:w-1/2  min-h-[300px] h-full border-2 border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl mb-4 px-2">Ozo Ventures</h2>
            <div className="mb-6 space-y-5 ">
              <div className="flex space-x-2">
                <img
                  alt="Signup Background"
                  src="./images/download.png"
                  className="w-6 h-6"
                />
                <p>
                  Unlock Growth with the World's Fastest-Growing Investment
                  Firm: One Ozo
                </p>
              </div>
              <div className="flex space-x-2">
                <img
                  alt="Signup Background"
                  src="./images/download.png"
                  className="w-6 h-6"
                />
                <p>
                  Diversify Your Portfolio with One Ozo: Invest in
                  Cryptocurrency, Forex, Commodities, and Casino Gaming.10%
                  Binary: Multiply Your Profits with One Ozo's Opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 min-h-[300px] h-full border-2 border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl mb-4 px-2">Securely Fast</h2>
            <div className="mb-6 space-y-5 ">
              <div className="flex space-x-2">
                <img
                  alt="Signup Background"
                  src="./images/download.png"
                  className="w-6 h-6"
                />
                <p>
                  Fastest and Most Secure: One Ozo, Your Trusted Investment
                  Firm.
                </p>
              </div>
              <div className="flex space-x-2">
                <img
                  alt="Signup Background"
                  src="./images/download.png"
                  className="w-6 h-6"
                />
                <p>
                  Invest with Confidence: Let Our Advanced AI Handle the Rest
                </p>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      {/* section 3 */}

      {/* <div className="w-full my-28 font-medium flex items-center max-w-6xl mx-auto px-6">
        <div>
          <h2 className="text-4xl mb-12">Benefits For Your Community</h2>
          <h3 className="text-3xl mb-6">Accelerated Earnings</h3>
          <h3 className="text-3xl mb-6">
            With the binary plan, you have the opportunity to earn accelerated
            returns on your investments, boosting your overall profitability.
          </h3>
          <div className="space-y-4 mb-10">
            <div className="flex space-x-2">
              <img
                alt="Signup Background"
                src="./images/download.png"
                className="w-6 h-6"
              />
              <span>
                Dual Team Synergy: The binary plan promotes teamwork and
                collaboration as you build two separate teams. This synergy can
                lead to enhanced support and motivation from your team members.
              </span>
            </div>
            <div className="flex space-x-2">
              <img
                alt="Signup Background"
                src="./images/download.png"
                className="w-6 h-6"
              />
              <span>
                Unlimited Depth: Unlike some other compensation plans, the
                binary plan allows for unlimited depth in your organization.
                This means there is no limit to how many levels deep you can
                build your binary network.
              </span>
            </div>

            <div className="flex space-x-2">
              <img
                alt="Signup Background"
                src="./images/download.png"
                className="w-6 h-6"
              />
              <span>
                Spillover Benefits: With the binary plan, you can benefit from
                spillover, where your upline may place new members under you.
                This can help you grow your network faster and increase your
                earning potential.
              </span>
            </div>

            <div className="flex space-x-2">
              <img
                alt="Signup Background"
                src="./images/download.png"
                className="w-6 h-6"
              />
              <span>
                Balanced Structure: The binary plan promotes balance in your
                organization as you strive to build and maintain equal strength
                in both legs of your binary structure. This balance ensures
                stability and steady growth.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img alt="Signup Background" className="./images/section.webp" />
        </div>
      </div> */}

      {/* section 4 */}

      <div className="flex max-w-2xl text-center my-24 mx-auto w-full px-6">
        <div className="w-full  flex flex-col items-center">
          <h3 className="text-4xl font-bold mb-6">
            Join Our Global Affiliate Team
          </h3>
          <p className="mb-6">
            If you have an established following on social media, come join us
            on our mission to accelerate the world’s transition to
            cryptocurrency
          </p>
          <button
            onClick={() => navigate("/login")}
            className="border px-8 py-3 rounded-lg bg-gradient-to-r from-newStart via-newMid to-newEnd text-white hover:text-black"
          >
            Become an Affiliate
          </button>
        </div>
      </div>

      {/* section 5 */}

      <div className="w-full max-w-6xl mx-auto text-center px-6">
        <h1 className="text-3xl font-medium mb-6">Getting Started</h1>
        <p className="mb-6">
          It takes just 3 steps to become a Crypto.com affiliate
        </p>
        <div className="flex flex-col md:flex-row w-full justify-between items-center mb-6">
          <div className="max-w-[300px] w-full min-h-[250px] text-center md:text-left mb-6 md:mb-0 ">
            <img
              alt="Signup Background"
              src="./images/registion.png"
              className="w-32 mb-6 mx-auto md:mx-0"
            />
            <h2 className="text-xl font-medium mb-2">Register</h2>
            <p>Sign up to the one ozo</p>
          </div>

          <div className="max-w-[300px] w-full min-h-[250px] text-center md:text-left  md:mb-0">
            <img
              alt="Signup Background"
              src="./images/promotion.png"
              className="w-32 h-[150px]  mx-auto md:mx-0"
            />
            <h2 className="text-xl font-medium mb-2">Promote one Ozo.com</h2>
            <p>Introduce the one ozo platform to your community</p>
          </div>

          <div className="max-w-[300px] w-full min-h-[250px] text-center md:text-left">
            <img
              alt="Signup Background"
              src="./images/rewards.png"
              className="w-40 h-[150px]  mx-auto md:mx-0"
            />
            <h2 className="text-xl font-medium mb-2">Get Rewarded</h2>
            <p>Earn commission and enjoy your exclusive rewards</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="border my-6 px-8 py-3 rounded-lg bg-gradient-to-r from-newStart via-newMid to-newEnd text-white hover:text-black"
        >
          Become an Affiliate
        </button>
        <p className="max-w-xl mb-24 mx-auto text-xs text-center w-full">
          Rest assured, One Ozo prioritizes the security of your information,
          ensuring the utmost confidentiality and protection in our binary plan.
        </p>
      </div>
    </div>
  );
};

export default Binary;
