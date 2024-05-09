import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const details = [
  {
    name: "Rakteem Mullick",
    college: "Meghnad Saha Institute Of Technology",
    subject: "Computer Science",
  },
  {
    name: "Sayak Singha",
    college: "Meghnad Saha Institute Of Technology",
    subject: "Computer Science",
  },
  {
    name: "Shivam Gupta",
    college: "Raghiv Gandhi Medical Insitute Of Ayurveda",
    subject: "Biology",
  },
  {
    name: "Anish Singh",
    college: "Kalinga Institute Of Technology",
    subject: "Computer Science",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App details={details} />
  </React.StrictMode>
);
