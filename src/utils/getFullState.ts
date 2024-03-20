import { usStates, StateNamesType } from "@/constants/usStates";

export function getFullState(st: keyof StateNamesType, withShort?: boolean): string {
    return withShort ? `${usStates[st]} (${st})` : usStates[st];
}