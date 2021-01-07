import React, { memo } from "react";
import ReactPlayer from "react-player/file";
import Header from "../Header/Header";
import "./VideoPlayer.scss";

const VideoPlayer = (props) => (
  <div className="playerWrapper">
    <div className="playerMask" />
    <div className="onLoadVideoBackgroundMask" />
    <Header {...props} />
    <ReactPlayer
      className="reactPlayer"
      loop
      muted
      playing
      volume={0}
      url="https://res.cloudinary.com/dwfzniyyh/video/upload/v1605920873/hongkong/hongkong.mp4"
      width="100%"
      height="auto"
      style={{
        overflow: "hidden",
      }}
    />
  </div>
);

export default memo(VideoPlayer);
