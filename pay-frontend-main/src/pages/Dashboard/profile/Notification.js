import React from "react";

const Notification = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-medium">Security Alerts</h1>
        <p className="text-gray-600 text-sm">
          You will get only those email notification what you want
        </p>
        {/* first  */}
        <div class="flex items-center  w-full my-4">
          <label for="toggleA" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggleA" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium">
              Email me whenever encounter unusual activity
            </div>
          </label>
        </div>
        {/* second  */}
        <div class="flex items-center  w-full my-4">
          <label for="toggleB" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggleB" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div class="dot2 absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium">
              Email me if the suspicious browser is used to sign in
            </div>
          </label>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-medium">News</h1>
        <p className="text-gray-600 text-sm">
          You will get only those email notification what you want
        </p>
        {/* first  */}
        <div class="flex items-center  w-full my-4">
          <label for="toggleC" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggleC" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium">
              Notify me by email about sales and latest news
            </div>
          </label>
        </div>
        {/* second  */}
        <div class="flex items-center  w-full my-4">
          <label for="toggleD" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggleD" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div class="dot2 absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium">
              Email me about new features and updates
            </div>
          </label>
        </div>
        {/* third  */}
        <div class="flex items-center  w-full my-4">
          <label for="toggleE" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggleE" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div class="dot2 absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium">
              Email me about tips on using account
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Notification;
