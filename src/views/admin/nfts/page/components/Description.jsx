import Card from "components/card";
import { MdVerified } from "react-icons/md";

const Description = (props) => {
  const { creator, description, location} = props;
  return (
    <Card extra="w-full mt-3 px-[30px] py-[30px]">
      <h4 className="text-xl font-bold text-navy-700 dark:text-white">
        Description
      </h4>
      <div className="mt-4 flex items-center gap-2">
        <p className="text-lg text-gray-600">Created by</p>
        <p className=" text-base font-semibold text-[#3965FF] dark:text-white">
          {" "}
          {creator}{"  "}

        </p>
        <div className="text-base text-[#3965FF]">
          <MdVerified />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg text-gray-600">Location: </p>
        <p className=" text-base font-semibold text-[#3965FF] dark:text-white">
          {" "}
          {location}{"  "}

        </p>

      </div>
      <p className=" text-base text-navy-700 dark:text-white">
        {description}
      </p>
    </Card>
  );
};

export default Description;
