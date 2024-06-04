import React from "react";
const dummyDATA = [
  "notification ",
  "notify",
  "November december ",
  "wallet",
  " abe 123456789",
  "dec",
  "Pavelion2",
  "ASUS APPKE IZI",
];
const NotifyComponent = ({ OpenNotification, setOpenNotification }) => {
  return (
    <div className="w-full md:max-w-[250px] absolute top-28 right-0 left-0 md:right-40 md:left-auto min-h-[280px] max-h-[280px] z-50 no-scrollbar h-full overflow-y-scroll bg-neutral-800 rounded-xl px-6 py-2">
      <div className="space-y-2 text-xs relative">
        <button
          onClick={() => setOpenNotification((prev) => !prev)}
          className="absolute -top-1 right-0 rounded-full bg-[#0a090d] p-2"
        >
          <img src="../images/icons/close.png" className="w-4" alt="Close" />
        </button>
        <h1 className="text-lg">Notification</h1>
        {dummyDATA.map((e) => (
          <p className="border-b pb-2 border-gray-600" key={e}>
            {e}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NotifyComponent;
