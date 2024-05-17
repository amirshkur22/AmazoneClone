import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PageRouter from "./PageRouter";
import { createContext, useReducer } from "react";
import { initialState, reducerMethod } from "./Utility/ReducerMethod";
export const DataContext = createContext();
function App() {
  return (
    <BrowserRouter>
      <DataContext.Provider value={useReducer(reducerMethod, initialState)}>
        <PageRouter />
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
