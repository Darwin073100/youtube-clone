import React from "react";

function VideoItem({miniatureImage,userImage,title}) {
  return (
    <div className="video">
      <div className="video-image">
        <img src={miniatureImage} alt="video" />
        <span>10:30</span>
      </div>
      <div className="video-title">
        <img src={userImage} alt="usuario" />
        <span>
          <strong>{title}</strong>
        </span>
      </div>
      <div className="video-information">
        <span>Meta@oficial</span>
        <span>100 k vistas · hace 2 semanas</span>
      </div>
    </div>
  );
}

export { VideoItem };
