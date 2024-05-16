import { createContext, useReducer } from "react";
// import { initialState, reducerMethod } from "../../Utility/ReducerMethod";
export const DataContext = createContext()
export const DataProvider = ({childern,reducerMethod,initialState}) => (
    <DataProvider value={useReducer(reducerMethod,initialState)}>
        {childern}
</DataProvider>
)
