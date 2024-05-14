//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import {Counter} from "./component/Counter.jsx";
import {SimpleCounter} from "./component/SimpleCounter.jsx";


//render your react application
let counter = 0;

ReactDOM.render(<SimpleCounter counter={counter}/>, document.querySelector("#app"))