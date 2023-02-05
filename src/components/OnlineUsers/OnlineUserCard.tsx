import { PhoneSvg } from "../../assets/phoneSvg";

export const OnlineUserCard: React.FC = () => {
  return (
    <div className="group relative flex items-center justify-center">
      <div className="bg-secondary-nose z-10 cursor-pointer w-[338px] h-[112px] text-4xl flex flex-row items-center justify-around gap-10 border shadow-purple transition duration-300 hover:duration-300 hover:shadow-orange border-secondary-gray text-[48px] text-white rounded-lg">
        Pau Rostoll
      </div>
      <div className="bg-secondary-main h-14 w-14 rounded-full flex items-center justify-center absolute bottom-[33px] -rotate-180 group-hover:-bottom-20 group-hover:rotate-0 transition-all duration-300">
        <PhoneSvg />
      </div>
    </div>
  );
};
