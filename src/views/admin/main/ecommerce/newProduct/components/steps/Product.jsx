import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";
import Card from "components/card";
import MiniCalendar from "components/calendar/MiniCalendar";
import Calendar from "react-calendar";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import TimePicker from 'react-time-picker';
import { useStepperContext } from "../../contexts/StepperContext";


const Product = () => {
  const [dateValue, onDateChange, width] = useState(new Date());
  const [timeValue, onTimeChange] = useState('10:00');
  const [time, setTime] = useState('12:00');
  const [hour, setHour] = useState('12');
  const [min, setMin] = useState('00');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  //Create Context for saving data
  const { userData, setUserData } = useStepperContext();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };
  const handleOther = (id, value) => {
    setUserData({
      ...userData,
      [id]: value,
    });
  };



  
  const listboxClassName =
  'max-h-40 overflow-y-auto shadow-lg border rounded-lg focus:outline-none focus:ring focus:border-blue-300';


  // useEffect(
  // () => {
  //   console.log("current date: ", dateValue)
  //   console.log("hour: ", hour)
  //   console.log("time: ", min)
  //   console.log("location: ", location)
  //   console.log("name: ", name)
  //   console.log("description: ", description)

  // }
  // ,[dateValue, hour, min, location, name, description])

  return (
    <div className="h-full w-full rounded-[20px] px-3 pt-7 md:px-8">
      {/* Header */}
      <h4 className="pt-[5px] text-xl font-bold text-navy-700 dark:text-white">
        Event Info
      </h4>

      {/* content */}
      {/* inputs */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="col-span-2 md:col-span-1">
          <InputField
            extra="mb-4"
            label="Event Name"
            placeholder="eg. Bonfire Kickback"
            id="eventname"
            onChange={handleChange}
            value={userData.eventname || ''} // Add this line
            type="text"
          />
          <InputField
            extra="mb-4"
            label="Location"
            placeholder="eg. 17542 Wayne Ave"
            id="location"
            type="text"
            onChange={handleChange}
            value={userData.location || ''} // Add this line          
            />
        <Card extra={`max-w-full`}>
          <div className="text-navy-700 font-bold text-sm mt-2 mb-4 pl-4">Date</div>
          <Calendar
          onChange={(value) = handleOther('date', value)}
          value={dateValue}
          prevLabel={<MdChevronLeft className="ml-1 h-6 w-6" />}
          nextLabel={<MdChevronRight className="ml-1 h-6 w-6" />}
          view={"month"}
        />

        </Card>

        </div>

        {/* right side */}
        <div className="col-span-2 md:col-span-1">
        <div className="w-72 text-gray-200 mb-4">
          
          <label className="text-navy-700 font-bold text-sm pl-4">Event Time</label>
          <div className="flex-row flex space-x-4">

            <select className="h-[45px] mt-2 rounded-xl text-sm text-gray-600 border border-gray-200 dark:bg-navy-700 md:pr-8 xl:pr-8" onChange={(e) => setHour(e.target.value)}>
              <option value="12">12</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>        
          <select className="rounded-lg mt-2 text-sm text-gray-600 border border-gray-200 dark:bg-navy-700 md:pr-8 xl:pr-8" onChange={(e) => setMin(e.target.value)}>
              <option value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
          </select>
          <select className="rounded-lg mt-2 text-sm text-gray-600 border border-gray-200 dark:bg-navy-700 md:pr-8 xl:pr-8" onChange={(e) => setMin(e.target.value)}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
          </select>
          </div>

    </div>
    <div>
    <label className="text-navy-700 font-bold text-sm pl-4">Event Time</label>
          {/* text area */}
          <TextField
            className="py-8"
            placeholder="Write a short description for your event!"
            id="textarea"
            cols="30"
            rows="7" 
            onChange={(e) => setDescription(e.target.value)}
          />
    </div>

        </div>
      </div>
    </div>
  );
};

export default Product;
