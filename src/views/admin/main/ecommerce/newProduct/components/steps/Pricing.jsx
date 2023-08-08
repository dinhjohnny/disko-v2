// components
import Auction from "./assets/Auction";
import Description from "./assets/Description";
import TableLastOffer from "./assets/TableLastOffer";
import Banner from "./assets/Banner";
import tableDataLastOffer from "views/admin/nfts/page/variables/tableDataLastOffer.json";
import { tableColumnsLastOffer } from "views/admin/nfts/page/variables/tableColumnsLastOffer";
import NftCard from "components/card/NftCard";

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

import { useStepperContext } from "../../contexts/StepperContext";



const Pricing = () => {

  //use context
  const {userData} = useStepperContext();

  // const { handleSubmit } = useForm({ defaultValues: userData });

  const submitData = () => {
    console.info("Me from Review Rawr: "+ userData.eventname);
    // Submit data to the server
  };
  return (
    <div className="mt-4 grid h-full w-full grid-cols-1 gap-5 xl:mt-3">
      <div className="grid h-full w-full grid-cols-6 gap-[20px]">
        <div className="col-span-6 lg:col-span-3">
          <Banner image={NftLarge1} />
          <Description
            creator={"simmmple.web"}
            description={
              " The Abstractus® project is an online art show and the First Art NFTs on Ethereum, launched on May 9, 2017. Abstractus® features 28 unique series of cards from 7 different artists. Abstractus® are referenced with CryptoAbstractus® and Crypto in the original ERC-721 Non-Fungible Token Standard, and pre-dates them both. Join the Abstractus® Discord and check out theAbstractus® Docs to find out more."
            }
          />
        </div>

        <div className=" col-span-6 lg:!col-span-3">
          <div className=" xl:px-16">
            <Auction
              name={userData.eventname}
              creator="Simmmple"
              creatorAvatar={AvatarSimmmple}
              price="3.87 ETH"
              bid="2.82 ETH"
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

      <button
      onClick={submitData}
        className="cursor-pointer rounded-xl bg-brand-900 px-16 py-2 font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90 md:ml-2"
      >
        Submit
      </button>
    </div>
  );
};

export default Pricing;
