import React, { useState } from "react";
import UploadPhotoGallery from "./UploadPhotoGallery";
import VideoOptionFiled from "./VideoOptionFiled";

const UploadMedia = ({m,setM}) => {
console.log(m)
  return (
    <>
      <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
        <h4 className="title fz17 mb30">
          Téléchargez des photos de votre offre
        </h4>
        <form className="form-style1">
          <div className="row">
            <div className="col-lg-12">
              <UploadPhotoGallery m={m} setM={setM}/>
            </div>
          </div>
        </form>
      </div>{" "}
    </>
  );
};

export default UploadMedia;
