import React from "react";
import Header from "./components/Header";
import MyInfo from "./components/MyInfo";
import RecentPosts from "./components/RecentPosts";
import FeaturedWorks from "./components/FeaturedWorks";
import SocialLinks from "./components/SocialLinks";

export function App() {
  return (
    <>
      <Header />
      <MyInfo />
      <RecentPosts />
      <FeaturedWorks />
      <SocialLinks />
    </>
  );
}
