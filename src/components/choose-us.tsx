import { chooseUs } from "@/constants";
import { ChooseUsCards } from "./ui/choose-us-cards";

const ChooseUs = () => {
  return (
    <div className="mt-10 mb-36 rounded-md flex flex-col bg-white items-center justify-center relative overflow-hidden">
      <ChooseUsCards items={chooseUs} direction="right" speed="slow" />
    </div>
  );
};

export default ChooseUs;
