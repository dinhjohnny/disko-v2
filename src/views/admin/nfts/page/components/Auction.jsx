// Assets
import { IoMdTrendingUp} from "react-icons/io";

import { MdVerified, MdOutlineMonetizationOn, MdCalendarMonth } from "react-icons/md";

const Auction = (props) => {
  const { name, price, creator, creatorAvatar, bid } = props;
  return (
    <div className="flex h-full w-full flex-col items-center rounded-[20px] px-[1px] pt-[3px] dark:bg-navy-900 sm:px-[150px] lg:px-[0px] xl:px-[35px]">
      <h1 className="mx-auto mt-14 text-[35px] font-bold text-navy-700 dark:text-white md:px-[10px] lg:text-[30px] xl:text-[53px] xl:mt-0">
        {name}
      </h1>
      {/* */}
      <div className="mt-9 flex w-full flex-row items-center justify-between md:pl-4 xl:mt-0">
      { /* 
        <div className="flex items-center justify-between gap-2 rounded-[20px] md:!gap-[12px] md:px-2">
          <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full md:h-[60px] md:w-[60px]">
            <img
              src={creatorAvatar}
              className="h-full w-full rounded-full"
              alt=""
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 md:text-base">
              Host
            </p>
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-navy-700 dark:text-white md:text-lg">
              <p>{creator}</p>

              <p className="text-sm text-brand-500 md:text-base">
                <MdVerified />
              </p>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-between gap-2 rounded-[20px] px-2 md:!gap-[12px]">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-[40px] text-white md:h-[60px] md:w-[60px]">
            <MdCalendarMonth />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 md:text-base">
              Date
            </p>
            <div className="flex items-center justify-center gap-1 text-sm font-semibold text-navy-700 dark:text-white md:gap-2 md:text-lg">
              <p> {price} </p>

              <p className="text-sm text-green-500 md:text-xl">
                <IoMdTrendingUp />
              </p>
            </div>
          </div>
        </div>
        */ }
      </div>

      {/* curret bide */}
      <div className="flex h-full w-full flex-col xl:px-3">
        <div className="mt-14 flex mx-auto h-[450px] w-full flex-col items-center rounded-[20px] border border-gray-200 pt-10 shadow-xl shadow-gray-100 dark:!border-none dark:bg-navy-800 dark:shadow-none md:h-[515px]">
          <h1 className="mt-2 text-[45px] font-bold text-navy-700 dark:text-white md:text-[60px]">
            {" "}
            {bid}{" "}
          </h1>
          <div className="mt-2 flex items-center gap-2">
            <h3 className="text-2xl font-bold text-gray-500">Student Improvement Track</h3>
          </div>
          <h5 className="mt-[24px] text-xl font-light text-navy-700 dark:text-white md:mt-[27px] px-6">
          Pitch: Disko, an AI-powered platform, revolutionizes team formation in UCI's New Venture Competition. By smartly matching students based on skills and startup needs, it bridges the gap between ideation and execution, fostering a vibrant entrepreneurial ecosystem.
          </h5>
            <div className="mt-[24px] flex gap-2 md:mt-10">
              <p>Mentored by </p>
              <p className="text-base font-bold text-[#3965FF]">Kyle, Johnny, Tommy</p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Auction;
