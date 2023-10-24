import Card from "components/card";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, createCircle } from "../../../../../../firebase/firebase-calls";
import { auth } from "../../../../../../firebase/firebase";

const Information = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [startupData, setStartupData] = useState({
    name: '',
    track: '',
    stage: '',  // Set default value
    description: '',
    funding: ''
  })
  const [loading, setLoading] = useState(true);

  const authToken = localStorage.getItem('authToken');
  if (!authToken) { navigate('/auth/sign-in/centered'); }
  
  // console.log("Auth Token in User Profile: " + authToken);
  const currentUser = auth?.currentUser;

  useEffect(
    () => {
      if (currentUser) {
        // Check if userData is an empty object
        if (Object.keys(userData).length === 0) {
          getUser(currentUser, setUserData)
            .then(() => {
              // Update loading state after fetching user data
              setLoading(false);
            })
            .catch(error => {
              console.error("Error fetching user data:", error);
            });
        }
    }
  },
    // eslint-disable-next-line
    [currentUser]
  );

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setStartupData({
      ...startupData,
      [id]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await createCircle(currentUser, startupData);  // Assuming updateUser updates the user data
  };

  return (
    <Card extra={"w-full px-[20px] py-[22px] h-fit"}>
      {/* Header */}
      <div className="w-full px-[8px]">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Startup Information
        </h4>
        <p className="mt-1 text-base text-gray-600">
          Here you can change your team information
        </p>
      </div>
      {/* inputs */}
      <div className="mt-9 grid grid-cols-2 gap-3">
        <div className="col-span-2 md:col-span-1">
          <InputField
            extra="mb-3"
            label="Team Name"
            placeholder="eg. ScrubDaddy"
            id="name"
            type="text"
            onChange={handleInputChange}

          />
          <InputField
            extra="mb-3"
            label="Competition Track"
            placeholder="eg. Tech startup"
            id="track"
            type="text"
            onChange={handleInputChange}

          />
          <InputField
            label="Other"
            placeholder="eg. privately funded"
            id="funding"
            type="text"
            onChange={handleInputChange}

          />
        </div>
        {/* right side */}
        <div className="col-span-2 md:col-span-1">
          <InputField
            extra="mb-3"
            label="Stage"
            placeholder="eg. Classics"
            id="stage"
            type="text"
            onChange={handleInputChange}

          />
          {/* text area */}
          <TextField
            label="Description"
            placeholder="Short description about the product"
            id="description"
            cols="30"
            rows="6"
            onChange={handleInputChange}

          />
        </div>
        <div className="flex w-full justify-end">
          <button 
            onClick={handleFormSubmit}
            className="rounded-xl bg-brand-500 px-8 py-2 text-base font-medium text-white transition duration-200 hover:cursor-pointer hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Information;
