import React, { useState } from "react";
import './Theme.css'

function Theme() {

  const [showTheme, setShowTheme] = useState(false);

  const changeBodyColor = (color) => {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = color; // Body ka background color set karte hain
  };
  const changeBodyColor2 = (color) => {
    document.body.style.backgroundImage = color; // Body ka background color set karte hain
  };

  const changeTextColor = (color) => {
    document.body.style.color = color;
  };
  const changeTheme = (color) => {
    document.body.style.setProperty("--text-color", color);
  };
  return (
    < >

<div className="theme-main">
<div
        className="theme-toggle"
        onClick={() => setShowTheme(!showTheme)} // Toggle theme div visibility
        style={{
          
        }}
      >
        {showTheme ? ">" : "<"} 
        </div>
      
      {showTheme && (
          <div className="theme">
      <div>
        <h1>Choose Background</h1>
        
        <button
          style={{
            backgroundColor: "#fff",
          }}
          onClick={() => changeBodyColor("#fff")}
        ></button>
        <button
          style={{
            backgroundColor: "#FF5733 ",
          }}
          onClick={() => changeBodyColor("#FF5733 ")}
        ></button>
        <button
          style={{
            backgroundColor: "#17A2B8  ",
          }}
          onClick={() => changeBodyColor("#17A2B8  ")}
        ></button>
        <button
          style={{
            backgroundColor: "#6C757D   ",
          }}
          onClick={() => changeBodyColor("#6C757D   ")}
        ></button>
        <button
          style={{
            backgroundColor: "#98FF98",
          }}
          onClick={() => changeBodyColor("#98FF98")}
        ></button>
        <button
          style={{
            backgroundColor: "#F5F5DC",
          }}
          onClick={() => changeBodyColor("#F5F5DC")}
        ></button>
        <button
          style={{
            backgroundColor: "#008080",
          }}
          onClick={() => changeBodyColor("#008080")}
        ></button>
        <button
          style={{
            backgroundColor: "#D8BFD8",
          }}
          onClick={() => changeBodyColor("#D8BFD8")}
        ></button>
        <button
          style={{
            backgroundColor: "#FFC0CB",
          }}
          onClick={() => changeBodyColor("#FFC0CB")}
        ></button>
        <button
          style={{
            backgroundColor: "#E6E6FA",
          }}
          onClick={() => changeBodyColor("#E6E6FA")}
        ></button>
        <button
          style={{
            backgroundColor: "#007BFF",
          }}
          onClick={() => changeBodyColor("#007BFF")}
        ></button>
        <button
          style={{
            backgroundColor: "black",
          }}
          onClick={() => changeBodyColor("black")}
        ></button>
        <button
          style={{
            backgroundColor: "#ccc",
          }}
          onClick={() => changeBodyColor("#ccc")}
        ></button>
        <button
        style={{
          backgroundImage: "linear-gradient(to right, #00c6ff, #0072ff)",
          
        }}
        onClick={() =>
          changeBodyColor2("linear-gradient(to right, #00c6ff, #0072ff)")
        }
      >
      </button>
        <button
          style={{
            backgroundImage: "linear-gradient(to right, #FFC0CB, #FF69B4)", // Gradient background
          }}
          onClick={() =>
            changeBodyColor2("linear-gradient(to right, #FFC0CB, #FF69B4)")
          }
        ></button>
        <button
          style={{
            backgroundImage: "linear-gradient(to right, #ff7e5f, #feb47b)",
          }}
          onClick={() =>
            changeBodyColor2("linear-gradient(to right, #ff7e5f, #feb47b)")
          }
        ></button>
        <button
          style={{
            backgroundImage: "linear-gradient(to right, #ffecd2, #fcb69f)",
          }}
          onClick={() =>
            changeBodyColor2("linear-gradient(to right, #ffecd2, #fcb69f)")
          }
        ></button>
        <button
          style={{
            backgroundImage: "linear-gradient(to right, #8a2387, #e94057, #f27121)",
          }}
          onClick={() =>
            changeBodyColor2("linear-gradient(to right, #8a2387, #e94057, #f27121)")
          }
        ></button>
        <button
          style={{
            backgroundImage: "linear-gradient(to right, #ff6a00, #ee0979)",
          }}
          onClick={() =>
            changeBodyColor2("linear-gradient(to right, #ff6a00, #ee0979)")
          }
        ></button>
        <button
          style={{
            backgroundImage: "linear-gradient(to right, #30cfd0, #330867)",
          }}
          onClick={() =>
            changeBodyColor2("linear-gradient(to right, #30cfd0, #330867)")
          }
        ></button>
      </div>

      <div>
        <h1>Choose Text Color</h1>
        <button
          style={{
            backgroundColor: "#333333 ",
          }}
          onClick={() => changeTextColor("#333333 ")}
        ></button>
        <button
          style={{
            backgroundColor: "#FF6F61",
          }}
          onClick={() => changeTextColor("#FF6F61")}
        ></button>
        <button
          style={{
            backgroundColor: "#2ECC71 ",
          }}
          onClick={() => changeTextColor("#2ECC71 ")}
        ></button>
        <button
          style={{
            backgroundColor: "#FFBF00 ",
          }}
          onClick={() => changeTextColor("#FFBF00 ")}
        ></button>
        <button
          style={{
            backgroundColor: "#1ABC9C",
          }}
          onClick={() => changeTextColor("#1ABC9C")}
        ></button>
        <button
          style={{
            backgroundColor: "black",
          }}
          onClick={() => changeTextColor("black")}
        ></button>

        <button
          style={{
            backgroundColor: "#f9f9f9",
          }}
          onClick={() => changeTextColor("#f9f9f9")}
        ></button>

        <button
          style={{
            backgroundColor: "green",
          }}
          onClick={() => changeTextColor("green")}
        ></button>

        <button
          style={{
            backgroundColor: "#FFDAB9",
          }}
          onClick={() => changeTextColor("#FFDAB9")}
        ></button>
      </div>
      <div>
        <h1> Choose Theme</h1>
        <button
          style={{
            backgroundColor: "#FFDAB9",
          }}
          onClick={() => changeTheme("#FFDAB9")}
        ></button>

        <button
          style={{
            backgroundColor: "#FFf",
          }}
          onClick={() => changeTheme("#FFf")}
        ></button>

        <button
          style={{
            backgroundColor: "#111",
          }}
          onClick={() => changeTheme("#111")}
        ></button>

        <button
          style={{
            backgroundColor: "#20B2AA",
          }}
          onClick={() => changeTheme("#20B2AA")}
        ></button>

        <button
          style={{
            backgroundColor: "#98FF98",
          }}
          onClick={() => changeTheme("#98FF98")}
        ></button>
      </div>
      </div>
      )}
      </div>
    </>
  );
}

export default Theme;
