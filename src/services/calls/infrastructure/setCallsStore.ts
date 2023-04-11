import { Call } from "../../../models/calls";
import { setCalls } from "../../../store/slices/calls/callsSlice";
import store from "../../../store/store";

export const setCallsStore = (calls: Call[]) => {
  store.dispatch(setCalls(calls));
};
