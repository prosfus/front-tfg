import { getOnlineUsersDomain } from "../../services/onlineUsers/domain/getOnlineUsersDomain";
import { getWebsocketIdDomain } from "../../services/user/domain/getWebsocketIdDomain";
import { OnlineUserCard } from "./OnlineUserCard";

export const OnlineUsersList: React.FC = () => {
  const websocketId = getWebsocketIdDomain(true);
  const onlineUsers = getOnlineUsersDomain(true).filter((u) => {
    return u.id !== websocketId;
  });

  if (onlineUsers.length === 0) {
    return <div className="mt-10 text-white text-3xl">No online users</div>;
  }

  return (
    <div className="mt-5 w-4/5 h-[215px] flex flex-row gap-10 overflow-x-auto justify-center items-start ">
      {onlineUsers.map((user) => {
        return <OnlineUserCard key={user.id} user={user} />;
      })}
    </div>
  );
};
