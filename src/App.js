// import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import HomeScreen from "./components/tuiter/home-screen";
import ExploreScreen from "./components/tuiter/explore-screen";
import ProfileScreen from './components/tuiter/profile-screen';

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
       return (
         <BrowserRouter>
           <div className="container">
              <Routes>

                     <Route path="/">
                            <Route path="labs"
                                   element={<Labs/>}/>
                            <Route path="hello"
                                   element={<HelloWorld/>}/>
                            <Route path="tuiter"
                                   element={<Tuiter/>}>
                                   <Route index
                                          element={<HomeScreen/>}/>
                                   <Route path="explore"
                                          element={<ExploreScreen/>}/>
                                   <Route path="profile"
                                          element={<ProfileScreen/>}/>
                                   {/* <Route path="notifications" 
                                          element={<NotificationScreen/>}/> */}
                            </Route>
                     </Route>

              </Routes>
           </div>
         </BrowserRouter>
       );
}
      
export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/*Edit <code>src/App.js</code> and save to reload.*/}
//           Welcome to Web Dev
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
