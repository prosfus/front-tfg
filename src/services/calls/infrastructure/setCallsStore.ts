import { Call } from "../../../models/calls";
import { setCalls } from "../../../store/slices/calls/callsSlice";
import store from "../../../store/store";

export const setCallsStore = (call: Call | null) => {
  store.dispatch(setCalls(call));
};
