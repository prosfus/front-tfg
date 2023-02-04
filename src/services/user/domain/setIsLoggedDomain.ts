import { setIsLoggedStore } from "../infrastructure/setIsLoggedStore";

export const setIsLoggedDomain = (isLogged: boolean) => {
  setIsLoggedStore(true);
};
