import { setIsLogged } from "../../../store/slices/auth/userSlice";
import store from "../../../store/store";

export const setIsLoggedStore = (isLogged: boolean) => {
  store.dispatch(setIsLogged(isLogged));
};
