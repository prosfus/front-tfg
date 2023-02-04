import { User } from "../../../models/user";
import { setUserStore } from "../infrastructure/setUserStore";

export const setUserDomain = (user: User) => {
  setUserStore(user);
};
