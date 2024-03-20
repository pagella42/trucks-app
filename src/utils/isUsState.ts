import { usStates } from "@/constants/usStates";

export const isUsState = (state: string): boolean => {
  if (state.length > 2) return false;
  return Object.keys(usStates).includes(state);
};
