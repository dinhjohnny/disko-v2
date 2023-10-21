import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, profileUpdate } from "../../../../../../firebase/firebase-calls";
import { auth } from "../../../../../../firebase/firebase";


import Card from 'components/card';
import InputField from 'components/fields/InputField';
import TextField from 'components/fields/TextField';

const Information = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const authToken = localStorage.getItem('authToken');
  if (!authToken) { navigate('/auth/sign-in/centered'); }
  
  // console.log("Auth Token in User Profile: " + authToken);
  const currentUser = auth?.currentUser;
  console.log("Current user in User Profile: " + currentUser?.uid);

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
    setUserData({
      ...userData,
      [id]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await profileUpdate( userData, currentUser);  // Assuming updateUser updates the user data
  };

  return (
    (!loading && <Card extra={'w-full mt-3 px-6 py-6'}>
    {/* Header */}
    <div className="w-full px-[8px]">
      <h4 className="text-xl font-bold text-navy-700 dark:text-white">
        Account Settings
      </h4>
      <p className="mt-1 text-base text-gray-600">
        Here you can change user account information
      </p>
    </div>
    {/* inputs */}
    <div className="mt-[37px] grid grid-cols-1 gap-3 md:grid-cols-2">
    <InputField
        extra="mb-3"
        label="Full Name"
        placeholder="John Doe"
        id="fullName"
        type="text"
        value={userData?.fullName || ''}
        onChange={handleInputChange}
      />
      <InputField
        extra="mb-3"
        label="Instagram"
        placeholder="@john.doe"
        id="instagram"
        type="text"
        value={userData?.instagram || ''}
        onChange={handleInputChange}
      />
      <InputField
        extra="mb-3"
        label="LinkedIn"
        placeholder="https://www.linkedin.com/in/johndoe"
        id="linkedIn"
        type="text"
        value={userData?.linkedIn || ''}
        onChange={handleInputChange}
      />
      <InputField
        extra="mb-3"
        label="Major"
        placeholder="Computer Science"
        id="major"
        type="text"
        value={userData?.major || ''}
        onChange={handleInputChange}
      />
    </div>
    {/* full width inputs */}
    {/* ...other InputFields */}
    <TextField
      extra="mb-4"
      label="Bio"
      placeholder="Tell us more about your background"
      id="bio"
      cols="30"
      rows="5"
      value={userData?.bio || ""}
      onChange={handleInputChange}
    />
    <TextField
      extra="mb-4"
      label="Dedication"
      placeholder="What drives you?"
      id="dedication"
      cols="30"
      rows="5"
      value={userData?.dedication || ''}
      onChange={handleInputChange}
    />
    <TextField
      extra="mb-4"
      label="Networking Goal"
      placeholder="What are you looking to achieve through networking?"
      id="networkingGoal"
      cols="30"
      rows="5"
      value={userData?.networkingGoal || ''}
      onChange={handleInputChange}
    />
    <InputField
      extra="mb-3"
      label="Profile Picture URL"
      placeholder="https://example.com/your-photo.jpg"
      id="profilePic"
      type="text"
      value={userData?.profilePic || ''}
      onChange={handleInputChange}
    />
    <div className="flex w-full justify-end">
      <button 
        onClick={handleFormSubmit}
        className="rounded-xl bg-brand-500 px-8 py-2 text-base font-medium text-white transition duration-200 hover:cursor-pointer hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
      >
        Save Changes
      </button>
    </div>
  </Card>)
    
  );
};

export default Information;
