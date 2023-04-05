import { getIsLoggedDomain } from "../../services/user/domain/getIsLoggedDomain";

interface Props {
  children: JSX.Element;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  const isLogged = getIsLoggedDomain(true);

  if (!isLogged) {
    return (
      <div className="max-h-screen overflow-hidden bg-pika bg-cover">
        <div className="w-full h-full flex  justify-center items-center backdrop-blur-md">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="backgroundShadow -z-10 absolute w-screen h-[200px]"></div>
      {children}
    </div>
  );
};
