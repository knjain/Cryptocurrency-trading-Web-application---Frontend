import React from "react";

const Content = ({ readMore, setreadMore }) => {
  return (
    <div className="mx-auto w-full text-center space-y-10 my-10 py-20 max-w-7xl px-6">
      <h1 className="text-5xl md:text-6xl font-bold">Ozo Investment </h1>
      <p className="max-w-[700px] text-center w-full mx-auto">
        Earn up to 252% returns on your investment. Explore our cryptocurrency,
        forex, commodities, and casino gaming options. Experience lucrative
        opportunities and financial growth with one Ozo. Invest wisely for a
        prosperous future.
      </p>
      <div className="rounded-2xl  bg-neutral-800 p-8 flex gap-6 flex-col md:flex-row items-center justify-between">
        {!readMore && (
          <>
            {" "}
            <div className="text-left flex justify-center items-start space-y-3 flex-col">
              <p className="text-purple-900 text-xl">Services</p>
              <h2 className="text-3xl font-bold">
                Invest with One Ozo:
                <br /> Lucrative Packages, High Returns,
                <br /> and Generous Referral Bonuses
              </h2>
            </div>
            <div className="w-full md:w-1/2 space-y-3 flex  pt-5 justify-center items-start flex-col ">
              <p className="max-w-[200px] w-full border-t-2 border-purple-900"></p>
              <p className="text-justify">
                Unlock the potential of your investments with One Ozo, a trusted
                platform offering a range of lucrative packages designed to suit
                your financial goals. With our transparent and secure investment
                system, you can maximize your returns and enjoy an impressive
                array of benefits.
              </p>
              <button
                onClick={() => setreadMore((prev) => !prev)}
                className="px-6 py-3 font-bold bg-black rounded-md"
              >
                Read more
              </button>
            </div>
          </>
        )}
        {readMore && (
          <>
            <div className="text-center w-full">
              {" "}
              <p className="text-purple-900 text-xl mb-4">Services</p>
              <h2 className="text-3xl font-bold mb-6 ">
                Invest with One Ozo:
                <br /> Lucrative Packages, High Returns,
                <br /> and Generous Referral Bonuses
              </h2>
              <div className="text-justify max-w-5xl mx-auto w-full mb-2">
                Unlock the potential of your investments with One Ozo, a trusted
                platform offering a range of lucrative packages designed to suit
                your financial goals. With our transparent and secure investment
                system, you can maximize your returns and enjoy an impressive
                array of benefits. Choose from our carefully crafted packages
                tailored to different investment levels. Package 1, with a
                minimum deposit of $100 to $3,999, offers a package duration of
                200 days and a return on investment (ROI) of 1.2%. You will
                receive a total return of 240%, plus your initial investment
                back. The capping limit for this package is $600. But that's not
                all! One Ozo values its members and offers generous referral
                bonuses. Earn a referral bonus of 5% on level 1, 3% on level 2,
                and 1.5% on level 3. From level 4 to level 7, enjoy 5% Ozo
                tokens, which will be created and deposited into your Ozo token
                wallet. As your investment commitment grows, so do the rewards.
                Package 2, with a minimum deposit of $4,000 to $14,999, offers a
                higher ROI of 1.4% and a total return of 252% plus principle
                amount back, with a capping limit of $2,100. Likewise, Package 3
                and Package 4 offer even more substantial returns and attractive
                referral bonuses, providing you with an opportunity for
                significant financial growth. Investing with One Ozo is not only
                financially rewarding but also secure. Our platform ensures the
                safety and privacy of your investments, backed by advanced
                security measures. Start your prosperous journey today and
                experience the potential of investing with One Ozo.
              </div>
              <button
                onClick={() => setreadMore((prev) => !prev)}
                className="px-6 py-3 font-bold bg-black rounded-md"
              >
                Read Less
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
