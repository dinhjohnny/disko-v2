import Card from "components/card";
import InputField from "components/fields/InputField";

const Teams = () => {
  return (
    <Card extra={"w-full px-[20px] py-[22px] h-full"}>
      {/* Header */}
      <div className="w-full px-[8px]">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Add teammates
        </h4>
        <p className="mt-1 text-base text-gray-600">
          Here you can add your teammates
        </p>
      </div>
      {/* inputs */}
      <div className="mt-7 grid grid-cols-1 gap-3">
        <InputField
          label="Teammate #1"
          placeholder="Email"
          id="username"
          type="text"
        />
        <InputField
          label="Teammate #2"
          placeholder="Email"
          id="username"
          type="text"
        />
        <InputField
          label="Teammate #3"
          placeholder="Email"
          id="username"
          type="text"
        />
        <InputField
          label="Teammate #4"
          placeholder="Email"
          id="username"
          type="text"
        />
      </div>
      {/* full width inputs */}
    </Card>
  );
};

export default Teams;
