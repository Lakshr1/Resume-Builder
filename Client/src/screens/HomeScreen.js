import React from "react";
import HomeTemplates from "../components/HomeTemplates";
import SideBar from "../components/SideBar";






export default function HomeScreen() {
  return (
    <div class="main-container">
      <div class="content-container">
        <SideBar />
        <HomeTemplates />
      </div>
    </div>
  );
}
