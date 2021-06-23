import React from "react";
import "./styles.css";

function RecentPosts() {
  return (
    <div className="block_2">
      <div className="box">
        <div className="posts-header">
          <h3 className="information-text">Recent posts</h3>
          <a href="" className="view">
            View all
          </a>
        </div>
        <div className="posts-header-mobile">
          <h3 className="information-text">Recent posts</h3>
        </div>

        <div className="information">
          <div className="infomation-box">
            <h1 className="information-header">
              Making a design system from scratch
            </h1>
            <p className="information-date">12 Feb 2020 | Figma, Icon Design</p>
            <p className="descrpinformation">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="infomation-box">
            <h1 className="information-header">
              Creating pixel perfect icons in Figma
            </h1>
            <p className="information-date">12 Feb 2020 | Design, Pattern</p>
            <p className="descrpinformation">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
