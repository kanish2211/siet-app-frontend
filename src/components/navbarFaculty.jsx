import Logo from "./logo";
import React from "react";
import "../App.css";
const navbarItems = [
  { title: "Home", link: "" },
  { title: "General News", link: "" },
  { title: "College News", link: "" },
  { title: "Update College News", link: "" },
  { title: " View Suggestions", link: "" },
  { title: "Change Password", link: "" },
  { title: "Logout", link: "" }
];
const NavbarFaculty = () => {
  return (
    <div
      style={{
        backgroundColor: "#03910f",
        textAlign: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "100vh",
        width: "full"
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

export default NavbarFaculty;
