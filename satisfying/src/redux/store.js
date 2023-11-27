import { configureStore } from "@reduxjs/toolkit";
import projetoSlice from "./projetoSlice";


export const store = configureStore({
    reducer: {
        idProj: projetoSlice
    }
})