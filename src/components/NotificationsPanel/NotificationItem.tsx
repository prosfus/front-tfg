import { PhoneSvg } from "../../assets/phoneSvg";
import { User } from "../../models/user";

interface NotificationItemProps {
  notification: User;
}

export const NotificationItem = ({ notification }: NotificationItemProps) => {
  return (
    <div className="w-2/3 h-24 flex flex-row items-center justify-around bg-white rounded-md border border-black">
      <div className="flex items-center justify-center flex-1">
        <h1>{notification.name}</h1>
      </div>
      <div className="h-5/6 w-[1px] bg-black"></div>
      <div className="flex flex-1 flex-row justify-center items-center gap-9">
        <div className="bg-green-600 h-12 w-12 rounded-full flex items-center justify-center">
          <PhoneSvg />
        </div>
        <div className="bg-red-500 h-12 w-12 rounded-full flex items-center justify-center">
          <PhoneSvg />
        </div>
      </div>
    </div>
  );
};