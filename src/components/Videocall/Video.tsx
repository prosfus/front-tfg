import { useEffect, useRef } from "react";
import { CallStream } from "../../models/calls";
import { getOnlineUsersDomain } from "../../services/onlineUsers/domain/getOnlineUsersDomain";

export const Video = (props: { stream: CallStream }) => {
  const { stream } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const users = getOnlineUsersDomain(true);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream.stream;
    }
  }, [stream]);

  return (
    <div className="relative">
      <div className="p-2 absolute top-2 left-2 bg-primary-dark/50 rounded-md">
        <label className=" text-2xl">
          {users.find((u) => u.id === stream.user)?.name}
        </label>
      </div>
      <video
        className="rounded-lg h-[600px] border border-primary-dark/60"
        autoPlay
        height={800}
        ref={videoRef}
      />
    </div>
  );
};
