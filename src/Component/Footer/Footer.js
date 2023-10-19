import React from "react";
import Button from "@mui/material/Button";
import Footimg from "../Img/cust.png"
import Footimg1 from    '../Img/ticket.jpg'
import Footimg2 from    '../Img/newsletter.png'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-one">
          <div style={{ display: "flex", alignItems: "center" }} className="con">
            <img
              src="https://in.bmscdn.com/webin/common/icons/hut.svg"
              alt="alternate"
            />
            <p style={{ marginBottom: 0 }}>
              <strong>List your Show</strong>Get a show,event,activity or a
              great experience Patner with us & get listed on BookMyShow
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              color="error"
              style={{ textTransform: "none" }}
              sx={{ mr: 2, ml: 2, pt: 1, pb: 1 }}
            >
              Contact today!
            </Button>
          </div>
        </div>
        <div className="footer-two">
          <div className="foot-logo">
          <img
              src={Footimg}
              alt="alternate"
              className="image"
            />
            <span>24/7,CUSTOMER CARE</span>
          </div>
          <div className="foot-logo">
          <img
              src={Footimg1}
              alt="alternate"
              className="image"
            />
            <span>RESEND BOOKING CONFIRMATION</span>
          </div>
          <div className="foot-logo">
          <img
              src={Footimg2}
              alt="alternate"
              className="image"
            />
            <span>SUBSCRIBE TO THE NEWSLETTER</span>
          </div>
        </div>
        <div className="footer-three">
          <div className="footer-content">
            
            <div className="border1">
            </div>
            <img
              src={"https://in.bmscdn.com/webin/common/icons/logo.svg"}
              alt="alternat"
              className="book-icon"
            />
            <div className="border1">
            </div>
          </div>
          <div className="social-icon">
            <div className="icon">
             <a href="https://www.facebook.com/BookMyShowIN">< FaFacebookF/></a>
            </div>
            <div className="icon">
            <a href="https://www.facebook.com/BookMyShowIN"> <FaTwitter/></a>
            </div>

            <div className="icon">
            <a href="https://www.facebook.com/BookMyShowIN"> <FaInstagram/></a>
            </div>

            <div className="icon">
            <a href="https://www.facebook.com/BookMyShowIN"> <FaYoutube/></a>
            </div>

            <div className="icon">
            <a href="https://www.facebook.com/BookMyShowIN"><FaPinterestP/> </a>
            </div>

            <div className="icon">
            <a href="https://www.facebook.com/BookMyShowIN"><FaLinkedinIn/> </a>
            </div>
          </div>
          <div className="copy-right">
            Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights
            Reserved.
            <br></br>The content and images used on this site are copyright
            protected and copyrights vests with the respective owners. The usage
            of the content and images on this website is intended to promote the
            works and no endorsement of the artist shall be implied.
            Unauthorized use is prohibited and punishable by law.
          </div>
        </div>
      </div>
    </footer>
  );
};

