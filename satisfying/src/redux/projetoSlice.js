import { createSlice } from "@reduxjs/toolkit"

const initialValues = {
    id: null
}


export const projetoSlice = createSlice({
    name: "projeto",
    initialState: initialValues,
    reducers: {
        reducerSetProjeto: (state, action) => {
            state.id = action.payload.id
        }
    }
})

export const { reducerSetProjeto } = projetoSlice.actions 

export default projetoSlice.reducer