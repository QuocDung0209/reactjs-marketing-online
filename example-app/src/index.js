import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import NotFound from './NotFound';

// import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';

// function Routing() {
//     return (
//         <Router>
//             <div>
//                 <ul>
//                     <li>
//                         <NavLink to="/" exact activeStyle={{color:"red"}}>App</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/users/1" exact activeStyle={{color:"red"}}>Users</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/contact" axact activeStyle={{color:"red"}}>Contact</NavLink>
//                     </li>
//                 </ul>
//                 <Switch>
//                     <Route exact path="/" component={App} />
//                     <Route exact path="/users/:id" component={User} />
//                     <Route path="/contact" component={Contact} />
//                     <Route component={NotFound} />
//                 </Switch>

//             </div>
//         </Router>
//     )
// }

ReactDOM.render(<App />, document.getElementById("root"));