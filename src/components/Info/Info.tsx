import React from "react";
import Navbar from "../Navbar";
import ProfilePic from './ProfilePic.jpg'
import './Info.css'
const Info = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div id="contact" className="container contact">
          <h1 className="contact_header">Reach Out to me!</h1>
          <p className="contact_title">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </p>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="image-content-profile">
              <img
                className="profile-image"
                src={ProfilePic}
                alt="Haris Aqeel"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="right_contact">
              <div className="contact_aboutme">
                Jr. Software developer | Aspiring Software Developer 👾 | Open
                Source Contributor 🔥 | Speaker🎙 | Tech Writer ✍️
              </div>
              <div className="contact_location">
                <span>
                  <svg
                    viewBox="0 0 12 16"
                    version="1.1"
                    width="20"
                    height="18"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  Karachi , Pakistan
                </span>
              </div>
              <div className="contact_opp">Open for opportunities: Yes</div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Info;
