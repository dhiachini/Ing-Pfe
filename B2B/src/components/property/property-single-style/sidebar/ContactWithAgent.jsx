// src/components/ContactWithAgent.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserDetails } from "../../../../../Redux/Slices/userDetailsSlice";

const ContactWithAgent = ({ id }) => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.userDetails);

  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [dispatch, user]);

  console.log("The user details is:", user);
  console.log("Status:", status);
  console.log("Error:", error);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {user && (
        <div className="agent-single d-sm-flex align-items-center pb25">
          <div className="single-contant ml20 ml0-xs">
            <h6 className="title mb-1">{user.Fullname}</h6>
            <div className="agent-meta mb10 d-md-flex align-items-center">
              <a
                className="text fz15"
                href={`tel:${user.Telephonecode}${user.Phonenumber}`}
              >
                <i className="flaticon-call pe-1" />({user.Telephonecode}){" "}
                {user.Phonenumber}
              </a>
            </div>
            <div className="agent-meta mb10 d-md-flex align-items-center">
              <a
                className="text fz15"
                href={`mailto:${user.Professionalemail}`}
              >
                <i className="flaticon-email pe-1" />
                {user.Professionalemail}
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="d-grid">
        <Link to={`/agent-single/${id}`} className="ud-btn btn-white2">
          Contacter
          <i className="fal fa-arrow-right-long" />
        </Link>
      </div>
    </>
  );
};

export default ContactWithAgent;
