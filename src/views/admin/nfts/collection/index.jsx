import NftCard from "components/card/NftCard";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

//show right startups
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const NftCollection = () => {
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

  return (
    <div className="mt-3 h-full w-full rounded-[20px]">
      <Banner />
      <div className="mt-[70px] w-full">
        <Search />
      </div>

      <h4 className="ml-[23px] mt-8 text-2xl font-bold text-navy-700 dark:text-white">
        Join a team!
      </h4>

      <div className="mt-[38px] grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {allCircles?.length > 0 ? (
                allCircles?.map((circles) => (
                  <Link className="button rounded-lg h-full w-full md:mb-4"
                    to={`/admin/nfts/${circles?.circleID}`}
                  >
                    <NftCard
                      bidders={[avatar1, avatar2, avatar3]} // images for those that have rsvped
                      title={circles.name} // event title
                      author={circles?.competitionTrack}
                      price={circles?.competitionTrack}
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
  );
};

export default NftCollection;
