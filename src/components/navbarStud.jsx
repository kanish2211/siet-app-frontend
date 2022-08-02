import React from "react";
import Logo from "./logo";
import "../App.css";
const navbarItems = [
  { title: "Dashboard", link: "" },
  { title: "General News", link: "" },
  { title: "College News", link: "" },
  { title: "Suggestions", link: "" },
  { title: "Change Password", link: "" },
  { title: "Logout", link: "" }
];
const NavbarStud = () => {
  return (
    <div
      style={{
        backgroundColor: "#03910f",
        textAlign: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        Height:"100vh",
        width: "full",
        scrollbarColor:"blue",
        overflowY:"hidden",
        overflowX:"hidden"
      }}
      className={"navbarColumn"}
    >
      <div height="32px" width="12px">
        <Logo />

        {navbarItems.map((item, index) => {
          return (
            <div
              className={"navbar"}
              style={{ marginTop: "28px", marginBottom: "29px" }}
              // onClick={{}}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarStud;
