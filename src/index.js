//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";
const name = "AMogh";
const year = new Date().getFullYear();
// the above is syntax to get the current date in JS

ReactDOM.render(
  <div>
    <p>Created by {name};</p>
    <p>copyright {year};</p>
  </div>,
  document.getElementById("root")
);
