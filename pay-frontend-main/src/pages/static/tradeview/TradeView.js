import React, { useEffect } from "react";
import "./TradeView.css";
import { ForexCrossRates } from "react-ts-tradingview-widgets";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { SymbolOverview } from "react-ts-tradingview-widgets";
import { MarketOverview } from "react-ts-tradingview-widgets";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { StockMarket } from "react-ts-tradingview-widgets";
import { TickerTape } from "react-ts-tradingview-widgets";

const Header = ({ color, title, description, content }) => {
  return (
    <div
      className={`w-full flex flex-col gap-3 md:flex-row   p-6 items-start md:items-center justify-between  mb-6 ${color}`}
    >
      <div className="w-full md:w-[50%]">
        <h3 className="text-4xl font-bold ">{title}</h3>
        {/* <p className="text-lg text-white">{description}</p> */}
      </div>
      <div className="w-full md:w-[50%] ">
        <p className="text-base text-white">{content}</p>
      </div>
    </div>
  );
};
const BelowHeader = ({ color, title, description, content }) => {
  return (
    <div
      className={`w-full flex flex-col gap-3  p-4 items-start md:items-center justify-between  mb-6 ${color}`}
    >
      <div className="">
        <h3 className="text-4xl font-bold ">{title}</h3>
      </div>
      <div className="">
        <p className="text-base text-white">{content}</p>
      </div>
    </div>
  );
};
const TradeView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-x-hidden mt-32 mb-20 flex flex-col justify-center mx-auto md:mx-20 lg:mx-32">
      <div className="p-3">
        {/* first */}
        <div className="flex flex-col">
          <Header
            color="bg-blue-900"
            title="Advanced Real-Time Charts."
            description="Some text below the heading. Describe more about your real-time charts here."
            content="Advanced Real-Time Charts in trading are like a trader's crystal ball. They're dynamic tools displaying live price movements, patterns, and indicators, helping traders navigate the market's ever-changing seas with confidence."
          />
          <AdvancedRealTimeChart
            theme="dark"
            height={600}
            width="100%"
          ></AdvancedRealTimeChart>
          <hr className="my-[60px] border-0 border-b-[1px] border-solid border-gray" />
        </div>
        {/* second */}
        <div className="flex flex-col">
          <Header
            color="bg-green-900"
            title=" Forex Cross Rates."
            description="Some text below the heading. Describe more about your real-time charts here."
            content="Forex Cross Rates are currency exchange rates that don't involve the U.S. dollar. They show the value of one currency in terms of another, excluding the USD, aiding in global currency comparisons."
          />

          <ForexCrossRates
            colorTheme="dark"
            height={400}
            width="100%"
          ></ForexCrossRates>
          <hr className="my-[60px] border-0 border-b-[1px] border-solid border-gray" />
        </div>
        {/* fifth */}
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <div className="w-full md:w-[30%]">
            <BelowHeader
              color="bg-purple-600"
              title="Market Overview."
              content="A Market Overview provides a snapshot of financial markets, summarizing key data such as indices, commodities, and currencies. It helps investors gauge market sentiment and make informed decisions."
            />
            <MarketOverview
              colorTheme="dark"
              height={400}
              width="100%"
              showFloatingTooltip
            ></MarketOverview>
          </div>
          <div className="w-full md:w-[30%]">
            <BelowHeader
              color="bg-purple-600"
              title="Technical Analysis."
              content="Technical Analysis is the study of historical price charts and trading volumes to forecast future price movements in financial markets. It helps traders identify trends, patterns, and potential entry or exit points."
            />
            <TechnicalAnalysis
              colorTheme="dark"
              height={400}
              width="100%"
            ></TechnicalAnalysis>
          </div>
          <div className="w-full md:w-[30%]">
            <BelowHeader
              color="bg-purple-600"
              title="Stock Market."
              content="The Stock Market is a marketplace where investors buy and sell shares or ownership stakes in publicly traded companies. It serves as a vital platform for capital raising and wealth creation."
            />
            <StockMarket
              colorTheme="dark"
              height={400}
              width="100%"
            ></StockMarket>
          </div>
        </div>
        <hr className="my-[60px] border-0 border-b-[1px] border-solid border-gray" />
        {/* fourth */}
        <div className="flex flex-col">
          <Header
            color="bg-yellow-600"
            title=" Symbol Overview."
            description="Some text below the heading. Describe more about your real-time charts here."
            content="A Symbol Overview provides essential information about a financial instrument, such as a stock or cryptocurrency. It includes details like the symbol, current price, trading volume, and other relevant data for quick reference and analysis."
          />
          <SymbolOverview
            colorTheme="dark"
            height={400}
            width="100%"
            chartType="candlesticks"
            downColor="#800080"
            borderDownColor="#800080"
            wickDownColor="#800080"
          />
          <hr className="my-[60px] border-0 border-b-[1px] border-solid border-gray" />
        </div>
        {/* third */}
        <div className="flex flex-col">
          <Header
            color="bg-green-700"
            title="Cryptocurrency Market."
            description="Some text below the heading. Describe more about your real-time charts here."
            content="The Cryptocurrency Market is a decentralized digital marketplace where various cryptocurrencies are traded. It enables individuals and institutions to buy, sell, and exchange digital assets like Bitcoin, Ethereum, and others."
          />
          <CryptoCurrencyMarket
            colorTheme="dark"
            width="100%"
            height={400}
          ></CryptoCurrencyMarket>
          {/* <hr className="my-[60px] border-0 border-b-[1px] border-solid border-gray" /> */}
        </div>
      </div>
    </div>
  );
};

export default TradeView;
