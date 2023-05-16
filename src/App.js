import React                                      from 'react'
import { QueryClient, QueryClientProvider }       from 'react-query'
import { Students }                               from "./components/students"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const GlobalContext = React.createContext({});

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={ queryClient }>
      <BrowserRouter>
        <GlobalContext.Provider value={ {} }>
          <Routes>
            <Route exact path="/" element={ <Navigate to="/index"/> }/>
            <Route path="/index" element={ <Students/> }/>
          </Routes>
        </GlobalContext.Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
