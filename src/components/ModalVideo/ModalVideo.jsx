import React from 'react';
import { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import "./ModalVideo.sass";

const ModalVideo = ({ videoKey, videoPlatform, isOpen, isClose }) => {
  const [urlVideo, setUrlVideo] = useState(null);
  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
  }, [videoPlatform, videoKey]);
  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={isClose}
      footer={false}
    >
      <ReactPlayer url={urlVideo} controls muted />
    </Modal>
  );
};

export default ModalVideo;