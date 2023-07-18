// components
import Auction from "./components/Auction";
import Description from "./components/Description";
import TableLastOffer from "./components/TableLastOffer";
import tableDataLastOffer from "views/admin/nfts/page/variables/tableDataLastOffer.json";
import { tableColumnsLastOffer } from "views/admin/nfts/page/variables/tableColumnsLastOffer";
import NftCard from "components/card/NftCard";
import Banner from "./components/Banner";

//assets
import NftLarge1 from "assets/img/nfts/NftLarge1.png";
import AvatarSimmmple from "assets/img/avatars/avatarSimmmple.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../../../firebase/firebase";
import { joinCircle, getCircle, viewCount, textBlast,archiveCircle} from "../../../../firebase/firebase-calls";
//import EditProfileModal from "./EditProfileModal";
// import {  Questions } from "components/components";
// import { ResponseModal } from "components/ResponseModal"

import { Link } from "react-router-dom";
// import SignUpPop from "./Signup";
import { format } from 'date-fns'
// import { RWebShare } from "react-web-share";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
// import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
// import IosShareIcon from '@mui/icons-material/IosShare';
// import GoogleCalendar from "components/GoogleCalendar";
// import ICalendarLink from "react-icalendar-link";
// import EditCircle from "./editCircle";
// import { getAnalytics, logEvent } from "firebase/analytics";
// import backgroundImage from "assets/BI2.jpg"
// import confetti from 'canvas-confetti';

const NftPage = () => {
  //Logic
  const options = { month: 'long', day: 'numeric' };

  const circleID = "9wBSc8EgOjPcerHmrVJQ";
  const { user } = useSelector((state) => state.user);
  const { allPosts } = useSelector((state) => state.allPosts);
  const { allUsers } = useSelector((state) => state.allUsers);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const currentUser = auth?.currentUser;
  const [circleData, setCircleData] = useState([]);
  const authToken = localStorage.getItem("authToken");
  const [showSignUp, setShowSignUp] = useState(false)
  const [userData, setUserData] = useState([])
  const [choice, setChoice] = useState("")
  const website = `https://disko.rsvp/circle/${circleID} `
  const [showEdit, setShowEdit] = useState(false)


  //get the one discussion for the circle
  const filteredPosts = allPosts?.filter(
    (post) => post.circle == circleID
  );

  //join the circle with the response if logged in
 const signUp = async(choice) =>{
    if (authToken){
      console.log("User Selected:" + choice)
      joinCircle (currentUser, circleData, choice)
      if (choice === "Yes") {
        // onClickConfetti();
      }
    }else{
      //open the popup for signin 
      setChoice(choice)
      setShowSignUp((prev) => !prev)
    }
  }
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
 

  useEffect(() => {
    if (circleData?.length == 0) {
      getCircle(circleID, setCircleData);
      console.log("circleData" + circleData);
      

      setTimeout(() => {
        viewCount(circleID);
        setIsLoading(false);
      }, 750); // wait for 0.75 second before calling getCircle
    }
  }, [circleData]);

  const archive = async(e) =>{
    archiveCircle(`${circleID}`);
    navigate("/");
  }



  return (
    <div className="mt-4 grid h-full w-full grid-cols-1 gap-5 xl:mt-3">
      <div className="grid h-full w-full grid-cols-6 gap-[20px]">
        <div className="col-span-6 lg:col-span-3">
          <Banner image={circleData?.pic} />
          <Description
            creator={circleData?.creatorName}
            description={
              circleData?.circleDescription
            }
            location={circleData?.circleCosts}
          />
        </div>

        <div className=" col-span-6 lg:!col-span-3">
          <div className=" xl:px-16">
            <Auction
              name={circleData?.circleName}
              creator={circleData?.creatorName}
              creatorAvatar={AvatarSimmmple}
              price=  {new Date(circleData?.date?.seconds*1000).toLocaleString("en-US", options)}
              bid={`${circleData?.views} views`}
            />
          </div>
          <div className="pt-4">
            <TableLastOffer
              tableData={tableDataLastOffer}
              columnsData={tableColumnsLastOffer}
            />
          </div>
        </div>
      </div>
      {/* NFT card */}

      <div className="h-full w-full rounded-[20px]">
        <h4 className="mt-7 ml-5 text-2xl font-medium text-navy-700 dark:text-white">
          More from this collection
        </h4>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price=" 0.91"
            image={Nft2}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price=" 0.7"
            image={Nft4}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price=" 2.91"
            image={Nft5}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price=" 2.91"
            image={Nft6}
          />
        </div>
      </div>
    </div>
  );
};

export default NftPage;
