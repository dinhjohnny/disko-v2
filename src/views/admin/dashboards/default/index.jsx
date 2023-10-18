import React from "react";
import Balance from "./components/Balance";
import DailyTraffic from "./components/DailyTraffic";
import MostVisited from "./components/MostVisited";
import OverallRevenue from "./components/OverallRevenue";
import ProfitEstimation from "./components/ProfitEstimation";
import ProjectStatus from "./components/ProjectStatus";
import YourCard from "./components/YourCard";
import YourTransfers from "./components/YourTransfers";
import Widget from "components/widget/Widget";
//import Widget from "./components/widget/Widget";
import { tableColumnsMostVisited } from "./variables/tableColumnsMostVisited";
import tableDataMostVisited from "./variables/tableDataMostVisited";
import { auth } from "../../../../firebase/firebase";
import { useSelector } from "react-redux";
import { getUser } from "../../../../firebase/firebase-calls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

// new import
import NftCard from "components/card/NftCard";
import Banner from "views/admin/nfts/collection/components/Banner";
import Search from "views/admin/nfts/collection/components/Search";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import { Link } from "react-router-dom";



const Dashboard = () => {
  //Data from the old dashboard
  const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

  function formatAMPM(date1, date2) {
    var hours1 = date1.getHours();
    var hours2 = date2.getHours();
    var ampm1 = hours1 >= 12 ? 'pm' : 'am';
    hours1 = hours1 % 12;
    hours1 = hours1 ? hours1 : 12; // the hour '0' should be '12'

    console.log(hours2);
    var ampm2 = hours2 >= 12 ? 'pm' : 'am';
    hours2 = hours2 % 12;
    hours2 = hours2 ? hours2 : 12; // the hour '0' should be '12'

    var strTime = hours1 + ' ' + ampm1 + ' - ' + hours2 + ' ' + ampm2;
    return strTime;
  }

  const { allCircles } = useSelector((State) => State.allCircles);
  const [userData, setUserData] = useState([])

  //add check for authentication
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  //if (!authToken) {navigate("/auth/sign-in/centered")}


  useEffect(
    () => {
      if (!authToken) { navigate("/auth/sign-in/centered") }
    },
    // eslint-disable-next-line
    [authToken]
  );
  // 
  const currentUser = auth?.currentUser
  // console.log("current user:" + currentUser.displayName);

  var eventViews = 0;
  var responses = 0;
  var yes = 0;
  var no = 0;
  var maybe = 0;
  var allResponses = []

  const filteredCircles = allCircles?.filter(
    (circle) => circle.circleCreator === currentUser?.uid
  );

  filteredCircles.map((circle) => {
    eventViews += circle.views;
    responses += circle.memberCount.length;
    allResponses.push(circle.memberCount)

  })

  allResponses = allResponses.flatMap(array => array)
  allResponses.forEach((response) => {
    const choice = response.response;
    if (choice === "Yes") {
      yes += 1;
    } else if (choice === "No") {
      no += 1;
    } else if (choice === "Maybe") {
      maybe += 1;
    }
  });

  const { maxCircle, maxRatio } = filteredCircles.reduce((acc, circle) => {
    const ratio = circle.memberCount.length / circle.views;
    if (ratio > acc.maxRatio) {
      return { maxCircle: circle?.circleName, maxRatio: ratio };
    } else {
      return acc;
    }
  }, { maxCircle: null, maxRatio: 0 });
  useEffect(
    () => {
      if (userData.length == 0) {
        getUser(currentUser, setUserData);

      }
    },
    // eslint-disable-next-line
    [currentUser]
  );

  console.log(eventViews)
  return (
    <div className="mt-3 flex h-full w-full flex-col gap-[20px] rounded-[20px] xl:flex-row">
      <div className="h-full w-full rounded-[20px]">
        {/* left side */}
        <div className="col-span-9 h-full w-full rounded-t-2xl xl:col-span-6">
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
            <Widget
              icon={<MdBarChart className="h-7 w-7" />}
              title={"Profile Views"}
              subtitle={userData?.views ? userData.views : 0}
            />
            <Widget
              icon={<IoDocuments className="h-6 w-6" />}
              title={"Event Views"}
              subtitle={eventViews}
            />
            <Widget
              icon={<MdBarChart className="h-7 w-7" />}
              title={"Event Responses"}
              subtitle={responses}
            />
            <Widget
              icon={<MdDashboard className="h-6 w-6" />}
              title={"CTR"}
              subtitle={`${(responses / eventViews * 100).toFixed(2)}%`}
            />
            <Widget
              icon={<MdBarChart className="h-7 w-7" />}
              title={"# of Events"}
              subtitle={filteredCircles?.length}
            />
            <Widget
              icon={<IoMdHome className="h-6 w-6" />}
              title={"Best CTR Event"}
              subtitle={`${maxCircle}`}
            // subtitle={`${maxCircle} @ ${(maxRatio * 100).toFixed(2)}% CTR`}
            />
    
            <div className="h-[45vh] w-full flex 3xl:flew-row space-x-48">


              {filteredCircles?.length > 0 ? (
                filteredCircles?.map((circles) => (
                  <Link className="button rounded-lg h-full w-full md:mb-4"
                    to={`/admin/nfts/${circles?.circleID}`}
                  >
                    <NftCard
                      bidders={[avatar1, avatar2, avatar3]} // images for those that have rsvped
                      title={circles.circleName} // event title
                      author={circles?.creatorName}
                      price={formatAMPM(new Date(circles?.start), new Date(circles?.end))}
                      image={circles.pic}
                    />
                  </Link>
                )))
                : (
                  <div className="h-[30vh] w-full ml-6 overflow-none"><p className="text-sm md:text-md">Find Events to RSVP for on the <a href="/home" className="underline text-blue-300">home screen</a></p></div>

                )
              }
            </div>






          </div>
          {/* overall & Balance */}
          <div className="mt-10 md:mt-5 mb-5 grid grid-cols-6 gap-5">
            <div className="col-span-6 h-full w-full rounded-xl 3xl:col-span-4">
              <OverallRevenue />
            </div>
            <div className="col-span-6 w-full 3xl:col-span-2">
              <Balance />
            </div>
          </div>
          {/* Daily Traffic and.. */}
          <div className="mt-5 grid w-full grid-cols-6 gap-5">
            <div className="col-span-6 md:col-span-3 3xl:col-span-2">
              <DailyTraffic />
            </div>
            <div className="col-span-6 md:col-span-3 3xl:col-span-2">
              <ProjectStatus />
            </div>
            <div className="col-span-6 3xl:col-span-2">
              <ProfitEstimation />
            </div>
          </div>
          {/* Your Transfers & tables */}
          <div className="mt-5 grid w-full grid-cols-6 gap-5">
            <div className="col-span-6 3xl:col-span-2">
              <YourTransfers />
            </div>
            <div className="col-span-6 3xl:col-span-4">
              <MostVisited
                tableData={tableDataMostVisited}
                columnsData={tableColumnsMostVisited}
              />
            </div>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="flex w-0 bg-gray-200 dark:bg-navy-700 xl:w-px" />

      {/* right section */}
      <div className="h-full w-full xl:w-[400px] xl:min-w-[300px] 2xl:min-w-[400px]">
        <YourCard />
      </div>
    </div>
  );
};

export default Dashboard;
