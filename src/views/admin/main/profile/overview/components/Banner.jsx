import React from "react";
import avatar from "assets/img/avatars/avatar11.png";
import { useEffect, useState } from "react";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import {auth} from "../../../../../../firebase/firebase"
import { getUser } from "../../../../../../firebase/firebase-calls";

const Banner = () => {
  const [userData, setUserData] = useState([])
  const currentUser = auth?.currentUser;

  useEffect(
    () => {
      if (userData.length <= 10) {
        getUser(currentUser, setUserData);

      }
    },
    // eslint-disable-next-line
    [currentUser]
  );


  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={userData?.profilePic } alt="ne" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
        {userData?.fullName}
        </h4>
        <h5 className="text-base font-normal text-gray-600">{userData?.linkedIn}</h5>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            24
          </h4>
          <p className="text-sm font-normal text-gray-600">Teams</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            3
          </h4>
          <p className="text-sm font-normal text-gray-600">Wins</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            4th
          </h4>
          <p className="text-sm font-normal text-gray-600">Ranking</p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
