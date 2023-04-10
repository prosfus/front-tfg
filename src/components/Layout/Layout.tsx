import { getIsLoggedDomain } from "../../services/user/domain/getIsLoggedDomain";

interface Props {
  children: JSX.Element;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  const isLogged = getIsLoggedDomain(true);

  return (
    <div className="h-screen overflow-hidden bg-pika bg-cover">
      <div className="w-full h-full backdrop-blur-md">{children}</div>
    </div>
  );
};
