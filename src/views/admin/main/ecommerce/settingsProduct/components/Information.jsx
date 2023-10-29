import Card from "components/card";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, createCircle, uploadImage } from "../../../../../../firebase/firebase-calls";
import { auth } from "../../../../../../firebase/firebase";

import DropZonefile from "./DropZonefile";
// Assets
import { MdOutlineCloudUpload } from "react-icons/md";
import toast from "react-hot-toast";


const Information = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [startupData, setStartupData] = useState({
    name: '',
    track: '',
    stage: '',  // Set default value
    description: '',
    funding: '',
    logo: 'test',
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
  const handleUserImage = async (e) => {
    console.log("handleUserBeingCalled")
    const file = e.target.files[0];
    const field = e.target.name;
    const loader = toast.loading("uploading image");
    const path = `images/${currentUser.uid}/${file.name}`;
    const fieldURL = await uploadImage(path, file);
    toast.success("uploaded image", { id: loader });
    console.log("image uploaded successfully: " + fieldURL)
    setUserData({ ...userData, [field]: fieldURL });
  };

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


  //code for upload button
  const fileInputRef = React.useRef(null);
  const handleDropZoneClick = () => {
    console.log("opening upload screen")
    fileInputRef.current.click();
};
const input = document.getElementById('create_input');

  

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
        
     
            
        {/* inputs */}
      </div>
      <Card extra={"w-full py-[26px] px-[30px] h-[330px]"}>
            <p className="mt-1 text-xl font-bold text-navy-700 dark:text-white">
                Product Images
            </p>
           
          
            {/* <input
              type="file"
              id="pic"
              name="pic"
              accept="image/*, .gif"
              className="hidden"
              onChange={handleUserImage}
            />        */}
          
          <div className="left-4 text-white mt-4 mb-12 cursor-pointer md:cursor-default relative aspect-[16/9] h-[120px] w-[120px] md:h-1/3 md:w-1/3 hover:scale-105">
          <label
            htmlFor="pic"
           
          >
            <input
              type="file"
              id="pic"
              name="pic"
              accept="image/*, .gif"
              className="hidden"
              onChange={handleUserImage}
            />          
             <img 
            src={userData?.logo ? userData?.logo : ""}
            alt="No Photo Selected"
            className="object-cover h-full w-full cursor-pointer rounded-lg"
          />
          </label>
          Edit Cover Pic
          </div>
        </Card>
     
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
