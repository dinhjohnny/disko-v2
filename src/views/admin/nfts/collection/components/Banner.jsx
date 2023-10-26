import NftBanner2 from "assets/img/nfts/NftBanner2.png";
import NftProfile from "assets/img/nfts/NftProfile.png";
import { MdVerified } from "react-icons/md";
import { FaEthereum, FaDollarSign } from "react-icons/fa";
import Card from "components/card";
import TimelineItem from "components/dataDisplay/TimelineItem";

const Banner = () => {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-[20px]">
      <div
        style={{ backgroundImage: `url(${NftBanner2})` }}
        className="relative flex h-[150px] w-full items-center justify-center rounded-[20px] bg-cover md:h-[120px] lg:h-[170px] 3xl:h-[220px]"
      >
        <div className="absolute -bottom-20 flex h-[180px] w-[180px] items-center justify-center rounded-full border-[10px] border-white bg-navy-700 dark:!border-navy-900">
          <img className="h-full w-full rounded-full" src={NftProfile} alt="" />
        </div>
      </div>
      {/* profile info */}
      <div className="mt-[85px] flex flex-col items-center">
        <h1 className="mt-2 text-[55px] font-bold text-navy-700 dark:text-white">
          New Venture Competition®
        </h1>
        <p className="mt-[10px] flex w-full items-center justify-center text-lg font-medium text-gray-600">
          Created by{" "}
          <p className="ml-1 text-base font-bold text-[#3965FF] dark:text-white">
            Jenn Huynh
          </p>
          <p className="ml-1 text-[#3965FF]">
            <MdVerified />
          </p>
        </p>
      </div>
      {/* eth owned */}
      <Card
        extra={
          "grid grid-cols-1 dark:shadow-none md:grid-cols-3 w-full md:w-[800px] h-full md:h-[160px] gap-2 py-4 mt-9"
        }
      >
        <div className="flex flex-col items-center justify-center border-gray-200 py-3 dark:border-white/10 md:border-r-2 md:py-0">
          <h3 className="text-4xl font-bold text-navy-700 dark:text-white">
            15
          </h3>
          <p className="text-base text-gray-600">Teams</p>
        </div>

        <div className="flex flex-col items-center justify-center border-gray-200 py-3 dark:border-white/10 md:border-r-2 md:py-0">
          <h3 className="text-4xl font-bold text-navy-700 dark:text-white">
            78
          </h3>
          <p className="text-base text-gray-600">Participants</p>
        </div>
        <div className="flex flex-col items-center justify-center border-gray-200 py-3 dark:border-white/10 md:py-0">
          <h3 className="flex items-center text-4xl font-bold text-navy-700 dark:text-white">
            <p className="text-3xl">
              <FaDollarSign />
            </p>
            100,000
          </h3>
          <p className="text-base text-gray-600">Prize</p>
        </div>
{/*         <div className="flex flex-col items-center justify-center py-3 md:py-0">
          <h3 className="flex items-center text-4xl font-bold text-navy-700 dark:text-white">
            <p className="text-3xl">
              <FaEthereum />
            </p>
            33.8
          </h3>
          <p className="text-base text-gray-600">Volume Traded</p>
        </div> */}
      </Card>
      <div className="flex h-full w-full items-center justify-center md:w-[760px] lg:w-[870px]">
        <p className="mt-10 w-[280px] text-center font-dm text-lg leading-8 text-navy-700 dark:text-white md:w-full md:text-lg">
        Calling All Creators, Inventors, and Aspiring Entrepreneurs!
        The UCI New Venture Competition offers you the opportunity to form a team, launch a startup and potentially fund a business idea 
        – all within seven months. The competition is open to all UCI students, staff members and researchers as well as community members. 
        Teams compete for $100,000 in cash prizes plus additional professional services!
        </p>
      </div>
      <Card extra={"w-full p-5"}>
      {/* Header */}
      <div>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Timeline
        </h4>
        <p className="text-base font-medium text-gray-600">
          See your products in our timelines:
        </p>
      </div>
 
      {/* Timeline items */}
      <div className="mt-[30px]">
        <TimelineItem
          title="Stella Zhang New Venture Competition Kickoff"
          day="1"
          weekday="Nov"
          hours="10:30 - 12:00"
          current="current"
          mb="mb-[16px]"
        />
        <TimelineItem
          mb="mb-[16px]"
          title="Concept Papers Due"
          day="10"
          weekday="Mar"
          hours="10:30 - 12:00"
        />
        <TimelineItem
          mb="mb-[16px]"
          title="Board Room Pitch"
          day="10"
          weekday="May"
          hours="09:00 - 14:00"
        />
        <TimelineItem
          title="Grand Finale and Awards"
          day="23"
          weekday="May"
          hours="20:00 - 22:30"
        />
      </div>
    </Card>
    </div>
  );
};

export default Banner;
