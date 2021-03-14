
import React from "react";
import{Route, BrowserRouter} from 'react-router-dom';
import {Home} from "./pages/Home";
import {UserProvider} from './contexts/UserProvider';

const App =() => {
  return (
    <BrowserRouter>
     <UserProvider>
     </UserProvider>
     <Route path="/" exact component={Home}/> 
   </BrowserRouter>
  );
}

export default App;
