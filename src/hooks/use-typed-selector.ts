import { TypedUseSelectorHook } from "react-redux";
import { store } from "../store/store";
import { useSelector } from "react-redux";


type RootState = ReturnType<typeof store.getState>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector