import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Featuredjobs from "./components/Featuredjobs";
import Position from "./components/Positon";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components

// function Tacos({ routes }) {
//   return (
//     <div>
//       <h2>Home</h2>
//       <ul>
//         <li>
//           <Link to="/home/jobs">Jobs</Link>
//         </li>
//         <li>
//           <Link to="/home/positon">Position</Link>
//         </li>
//       </ul>

//       {routes.map((route, i) => (
//         <RouteWithSubRoutes key={i} {...route} />
//       ))}
//     </div>
//   );
// }

// function Bus() {
//   return <h3>Bus</h3>;
// }

// function Cart() {
//   return <h3>Cart</h3>;
// }

// ////////////////////////////////////////////////////////////
// // then our route config
// const routes = [
//   {
//     path: "/home",
//     component: Home,
//     routes: [
//       {
//         path: "/home/jobs",
//         component: Featuredjobs
//       },
//       {
//         path: "/home/positon",
//         component: Position
//       }
//     ]
//   }
// ];

// // wrap <Route> and use this everywhere instead, then when
// // sub routes are added to any route it'll work
// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

// function RouteConfigExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           {/* <li>
//             <Link to="/sandwiches">Sandwiches</Link>
//           </li> */}
//         </ul>

//         {routes.map((route, i) => (
//           <RouteWithSubRoutes key={i} {...route} />
//         ))}
//       </div>
//     </Router>
//   );
// }



export default RouteConfigExample;
