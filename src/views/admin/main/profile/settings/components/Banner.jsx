import React from "react";
import profile from "assets/img/crm/vbz.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";

const Banner = () => {
  return (
    <Card extra={"items-center pt-[16px] pb-10 px-[16px] bg-cover"}>
      {/* background and profile */}
      <div
        className="jsu relative mt-1 flex h-28 w-full justify-center rounded-[20px] bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full bg-pink-400">
          <img className="h-full w-full rounded-full" src={profile} alt="" />
        </div>
      </div>
      {/* name and position */}
      <div className="mt-14 flex flex-col items-center">
        <h4 className="mt-1 text-xl font-bold text-navy-700 dark:text-white">
          Enter your details below!
        </h4>

      </div>
    </Card>
  );
};

export default Banner;
