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


const NftPage = () => {
  //Logic
  const options = { month: 'long', day: 'numeric' };

  const { circleID } = useParams();
  const { user } = useSelector((state) => state.user);
  const { allPosts } = useSelector((state) => state.allPosts);
  const { allUsers } = useSelector((state) => state.allUsers);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const currentUser = auth?.currentUser;
  const [circleData, setCircleData] = useState([]);
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (circleData?.length == 0) {
      // console.log(circleID + ": " + circleData)
      getCircle(circleID, setCircleData);
      console.log(circleID + "data has been fetched for Team Page!");
      setIsLoading(false);
      

      // setTimeout(() => {
      //   viewCount(circleID);
      //   setIsLoading(false);
      // }, 1000); // wait for 0.75 second before calling getCircle
    }
  }, [circleData]);

  const archive = async(e) =>{
    archiveCircle(`${circleID}`);
    navigate("/");
  }



  return (
    (!isLoading && (<div className="mt-20 grid h-full w-full grid-cols-1 gap-5 xl:mt-3">
    <div className="grid h-full w-full grid-cols-6 gap-[20px]">
      <div className="col-span-6 lg:col-span-3">
        <Banner className="h-[200px] w-[200px]" image={NftLarge1} />
        <Description
          creator={circleData?.creatorName}
          description={
            "In the heart of UCI's New Venture Competition, Disko stands as a pioneering force, revolutionizing the entrepreneurial landscape. It begins with users crafting intricate profiles that vividly portray their skills, expertise, and entrepreneurial aspirations. Disko's seamless interface ensures that every essential detail is captured, laying the foundation for meaningful connections. Fuelled by cutting-edge AI algorithms, Disko meticulously analyzes these profiles. It evaluates skills, experiences, and project requirements, ingeniously knitting together teams that complement each other's strengths. By eliminating the tedious manual process of team formation, Disko liberates participants to focus on refining their startup visions.Once teams are forged, Disko transforms collaboration. It unveils a shared workspace imbued with real-time tools. Within this virtual arena, teams find shared document editing, video conferencing, and task management at their fingertips. Communication becomes effortless, fostering an environment where ideas flow freely, and tasks are coordinated seamlessly. The synergy of minds is further enhanced by Disko's integration of experienced mentors. These industry veterans step in, offering invaluable guidance. They help teams refine their ideas, surmount challenges, and craft robust business strategies."
          }
          location={circleData?.competitionTrack}
        />
      </div>

      <div className=" col-span-6 lg:!col-span-3">
        <div className=" xl:px-16">
          <Auction
            name={""}
            creator={circleData?.creatorName}
            creatorAvatar={AvatarSimmmple}
            price=  {new Date(circleData?.date?.seconds*1000).toLocaleString("en-US", options)}
            bid={circleData?.name}
          />
        </div>

      </div>
    </div>
    {/* NFT card */}

    <div className="h-full w-full rounded-[20px]">
      <h4 className="mt-16 xl:mt-7 ml-5 text-2xl font-medium text-navy-700 dark:text-white">
        More Teams Like This One...
      </h4>
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
        <NftCard
          bidders={[avatar1, avatar2, avatar3]}
          title="Helios"
          author="Seed Stage"
          price="NVC 2023"
          image={Nft2}
        />
        <NftCard
          bidders={[avatar1, avatar2, avatar3]}
          title="Orii.Ai"
          author="Pre-Seed Stage"
          price="NVC 2023"
          image={Nft4}
        />
        <NftCard
          bidders={[avatar1, avatar2, avatar3]}
          title="Omni Pet Club"
          author="Pre-Seed Stage"
          price="NVC 2023"
          image={Nft5}
        />
        <NftCard
          bidders={[avatar1, avatar2, avatar3]}
          title="Help Belt"
          author="Pre-Seed Stage"
          price="NVC 2023"
          image={Nft6}
        />
      </div>
    </div>
  </div>))

    
  );
};

export default NftPage;
