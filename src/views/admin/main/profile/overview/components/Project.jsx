import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { MdModeEditOutline } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
import image2 from "assets/img/profile/image2.png";
import image3 from "assets/img/profile/image3.png";
import Card from "components/card";
import {getUser} from "../../../../../../firebase/firebase-calls"
import {auth} from "../../../../../../firebase/firebase"
import { Link } from "react-router-dom";


const Project = () => {

  const [userData, setUserData] = useState([])
  const currentUser = auth?.currentUser

  const { allCircles } = useSelector((State) => State.allCircles);

  const filteredCircles = allCircles?.filter(
    (circle) => circle.circleCreator === userData?.uid
  );

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
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <p className="text-xl font-bold text-navy-700 dark:text-white">
          All events...
        </p>
        <p className="mt-2 text-base text-gray-600">
          Here you can find more details about your events. Keep your user
          engaged by providing meaningful information.
        </p>
      </div>
      {filteredCircles?.length > 0 ? (
                filteredCircles?.map((circles) => (
                  <Link className="button rounded-lg h-full w-full md:mb-4"
                    to={`/admin/nfts/${circles?.circleID}`}
                  >
                <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-2xl shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
                  <div className="flex items-center">
                    <div className="">
                      <img className="h-[83px] w-[83px] rounded-lg" src={circles?.pic} alt="" />
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-navy-700 dark:text-white">
                        {circles?.circleName}
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Event
                        <a
                          className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                          href=" "
                        >
                          See project details
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                    <MdModeEditOutline />
                  </div>
                </div>
                  </Link>
          )))
          : (
          <div className="h-[30vh] w-full ml-6 overflow-none"><p className="text-sm md:text-md">Find Events to RSVP for on the <a href="/home" className="underline text-blue-300">home screen</a></p></div>

          )
      }
      {/* Project 1 Template */}
      {/* 
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-2xl shadow-gray-200 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Technology behind the Blockchain
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Project #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See product details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div>
    */}

    </Card>
  );
};

export default Project;
