import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/HomePageComponents/heroSection";
import GridListing from "./pages/gridListing";
import Author from "./pages/author";
import Detail from "./pages/detail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const App = () => {

  return (
  <>
  <Router>
           
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/gridlisting' element={< GridListing />}></Route>
                 <Route exact path='/author' element={< Author />}></Route>
                 <Route exact path='/detail' element={< Detail />}></Route>
          </Routes>
        
       </Router>
  </>
  );
}

export default App;
