import Card from "components/card";
import React from "react";
import { useState, useEffect } from "react";
import { getUser } from "../../../../../../firebase/firebase-calls";
import { auth } from "../../../../../../firebase/firebase";

const General = () => {
  const [userData, setUserData] = useState([])
  const currentUser = auth?.currentUser;

  useEffect(
    () => {
      if (userData.length == 0) {
        getUser(currentUser, setUserData);

      }
    },
    // eslint-disable-next-line
    [currentUser]
  );

  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Bio
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
          {userData?.bio}
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="shadow-[30px] flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Major</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          {userData?.major}
          </p>
        </div>

        <div className="shadow-[30px] flex flex-col justify-center rounded-2xl bg-white  bg-clip-border px-3 py-4 shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Languages</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            English, Spanish, Italian
          </p>
        </div>

        <div className="shadow-[30px] flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Department</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Product Design
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Work History</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            English, Spanish, Italian
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Organization</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Simmmple Web LLC
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Birthday</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            20 July 1986
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 px-2 mt-4">
        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Networking Goals</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
            {userData?.networkingGoal}
            </p>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Dedication</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
            {userData?.dedicationl}
            </p>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Interests</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Tennis, Hiking, Jogging
            </p>
        </div>
      </div>

      


    </Card>
  );
};

export default General;
