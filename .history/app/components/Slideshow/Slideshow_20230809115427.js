"use client";
import Image from "next/image";
import styles from "./slideshow.module.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect } from "react";

export default function SlideShow(props) {
  return (
    <div className="slideShowContainer">
      <div className="slideShow">
        <div className="leftImage">
          <img src={img.leftImage} alt="" />
          {length > 1 && (
            <>
              <div className="arrowRight" onClick={moveLeft}>
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="18" fill-opacity="0.1" />
                  <path
                    d="M36.4111 26.5137L23.9072 39.0176C23.6064 39.3184 23.2412 39.4688 22.8115 39.4688C22.3818 39.4688 22.0166 39.3184 21.7158 39.0176L20.2979 37.5996C19.9971 37.2988 19.8252 36.9336 19.7822 36.5039C19.7822 36.0742 19.9326 35.709 20.2334 35.4082L30.2236 25.418L20.2334 15.4277C19.9326 15.127 19.7822 14.7617 19.7822 14.332C19.8252 13.9023 19.9971 13.5371 20.2979 13.2363L21.7158 11.8184C22.0166 11.5176 22.3818 11.3672 22.8115 11.3672C23.2412 11.3672 23.6064 11.5176 23.9072 11.8184L36.4111 24.3223C36.7549 24.623 36.9268 24.9883 36.9268 25.418C36.9268 25.8477 36.7549 26.2129 36.4111 26.5137Z"
                    fill="#ff7000"
                  />
                </svg>
              </div>
              <div className="arrowLeft" onClick={moveRight}>
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="18" fill-opacity="0.1" />
                  <path
                    d="M15.4541 24.3223L27.958 11.8184C28.2588 11.5176 28.624 11.3672 29.0537 11.3672C29.4834 11.3672 29.8486 11.5176 30.1494 11.8184L31.5674 13.2363C31.8682 13.5371 32.0186 13.9023 32.0186 14.332C32.0615 14.7617 31.9326 15.127 31.6318 15.4277L21.6416 25.418L31.6318 35.4082C31.9326 35.709 32.0615 36.0742 32.0186 36.5039C32.0186 36.9336 31.8682 37.2988 31.5674 37.5996L30.1494 39.0176C29.8486 39.3184 29.4834 39.4688 29.0537 39.4688C28.624 39.4688 28.2588 39.3184 27.958 39.0176L15.4541 26.5137C15.1104 26.2129 14.9385 25.8477 14.9385 25.418C14.9385 24.9883 15.1104 24.623 15.4541 24.3223Z"
                    fill="#ff7000"
                  />
                </svg>
              </div>
            </>
          )}
          <div className="text">
            <h2 className="title">{img.leftName}</h2>
            <div
              className={`line ${templateStyles.line} ${templateStyles.lineOrange}`}
            ></div>
            <p className="des">
              {documentToReactComponents(img.leftDescription)}
            </p>
          </div>
        </div>
        <div className="centerImage">
          {length > 1 && (
            <>
              <div className="arrowRight" onClick={moveLeft}>
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="18" fill-opacity="0.1" />
                  <path
                    d="M36.4111 26.5137L23.9072 39.0176C23.6064 39.3184 23.2412 39.4688 22.8115 39.4688C22.3818 39.4688 22.0166 39.3184 21.7158 39.0176L20.2979 37.5996C19.9971 37.2988 19.8252 36.9336 19.7822 36.5039C19.7822 36.0742 19.9326 35.709 20.2334 35.4082L30.2236 25.418L20.2334 15.4277C19.9326 15.127 19.7822 14.7617 19.7822 14.332C19.8252 13.9023 19.9971 13.5371 20.2979 13.2363L21.7158 11.8184C22.0166 11.5176 22.3818 11.3672 22.8115 11.3672C23.2412 11.3672 23.6064 11.5176 23.9072 11.8184L36.4111 24.3223C36.7549 24.623 36.9268 24.9883 36.9268 25.418C36.9268 25.8477 36.7549 26.2129 36.4111 26.5137Z"
                    fill="#ff7000"
                  />
                </svg>
              </div>
              <div className="arrowLeft" onClick={moveRight}>
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="18" fill-opacity="0.1" />
                  <path
                    d="M15.4541 24.3223L27.958 11.8184C28.2588 11.5176 28.624 11.3672 29.0537 11.3672C29.4834 11.3672 29.8486 11.5176 30.1494 11.8184L31.5674 13.2363C31.8682 13.5371 32.0186 13.9023 32.0186 14.332C32.0615 14.7617 31.9326 15.127 31.6318 15.4277L21.6416 25.418L31.6318 35.4082C31.9326 35.709 32.0615 36.0742 32.0186 36.5039C32.0186 36.9336 31.8682 37.2988 31.5674 37.5996L30.1494 39.0176C29.8486 39.3184 29.4834 39.4688 29.0537 39.4688C28.624 39.4688 28.2588 39.3184 27.958 39.0176L15.4541 26.5137C15.1104 26.2129 14.9385 25.8477 14.9385 25.418C14.9385 24.9883 15.1104 24.623 15.4541 24.3223Z"
                    fill="#ff7000"
                  />
                </svg>
              </div>
            </>
          )}
          <img src={img.centerImage} alt="" />
          <div className="text">
            <h2 className="title">{img.centerName}</h2>
            <div
              className={`line ${templateStyles.line} ${templateStyles.lineOrange}`}
            ></div>
            <p className="des">
              {documentToReactComponents(img.centerDescription)}
            </p>
          </div>
        </div>
        <div className="rightImage">
          <img src={img.rightImage} alt="" />
          {length > 1 && (
            <>
              <div className="arrowRight" onClick={moveLeft}>
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="18" fill-opacity="0.1" />
                  <path
                    d="M36.4111 26.5137L23.9072 39.0176C23.6064 39.3184 23.2412 39.4688 22.8115 39.4688C22.3818 39.4688 22.0166 39.3184 21.7158 39.0176L20.2979 37.5996C19.9971 37.2988 19.8252 36.9336 19.7822 36.5039C19.7822 36.0742 19.9326 35.709 20.2334 35.4082L30.2236 25.418L20.2334 15.4277C19.9326 15.127 19.7822 14.7617 19.7822 14.332C19.8252 13.9023 19.9971 13.5371 20.2979 13.2363L21.7158 11.8184C22.0166 11.5176 22.3818 11.3672 22.8115 11.3672C23.2412 11.3672 23.6064 11.5176 23.9072 11.8184L36.4111 24.3223C36.7549 24.623 36.9268 24.9883 36.9268 25.418C36.9268 25.8477 36.7549 26.2129 36.4111 26.5137Z"
                    fill="#ff7000"
                  />
                </svg>
              </div>
              <div className="arrowLeft" onClick={moveRight}>
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="18" fill-opacity="0.1" />
                  <path
                    d="M15.4541 24.3223L27.958 11.8184C28.2588 11.5176 28.624 11.3672 29.0537 11.3672C29.4834 11.3672 29.8486 11.5176 30.1494 11.8184L31.5674 13.2363C31.8682 13.5371 32.0186 13.9023 32.0186 14.332C32.0615 14.7617 31.9326 15.127 31.6318 15.4277L21.6416 25.418L31.6318 35.4082C31.9326 35.709 32.0615 36.0742 32.0186 36.5039C32.0186 36.9336 31.8682 37.2988 31.5674 37.5996L30.1494 39.0176C29.8486 39.3184 29.4834 39.4688 29.0537 39.4688C28.624 39.4688 28.2588 39.3184 27.958 39.0176L15.4541 26.5137C15.1104 26.2129 14.9385 25.8477 14.9385 25.418C14.9385 24.9883 15.1104 24.623 15.4541 24.3223Z"
                    fill="#ff7000"
                  />
                </svg>
              </div>
            </>
          )}
          <div className="text">
            <h2 className="title">{img.rightName}</h2>
            <div
              className={`line ${templateStyles.line} ${templateStyles.lineOrange}`}
            ></div>
            <p className="des">
              {documentToReactComponents(img.rightDescription)}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        p {
          color: blue;
        }

        .line {
          margin-left: 0;
        }

        img {
          max-height: 330px;
          width: 50%;
          object-fit: cover;
        }

        .text {
          margin-left: 0;
          padding: 20px;
          text-align: left;
        }
        .title {
          text-align: left;
          color: #ff7000;
          font-size: 33px;
        }
        .des {
          padding-right: 30px;
          color: #666666;
          text-align: left !important;
        }

        .centerImage,
        .leftImage,
        .rightImage {
          height: 330px;
          width: 1000px;
          border-radius: 3px;
          overflow: hidden;
          display: flex;
          margin: 0;
          background-color: white;
          transition: ${transition}s;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }

        .slideShowContainer {
          margin-top: -10px;
          margin-bottom: -50px;
          overflow: hidden;
        }

        .slideShow {
          position: relative;
          width: 1000px;
          height: 330px;
        }

        .leftImage {
          position: absolute;
          left: ${sideProps.left};
        }

        .rightImage {
          position: absolute;
          left: ${sideProps.right};
          z-index: 1;
        }

        .centerImage {
          position: absolute;
          left: ${sideProps.center};
        }
        .arrowLeft,
        .arrowRight {
          cursor: pointer;

          position: absolute;
        }

        .arrowLeft {
          left: 1%;
          top: calc(39%);
          padding-right: 2px;
        }

        .arrowRight {
          right: 1%;
          top: 39%;
          padding-left: 2px;
        }
        @media (max-width: 1000px) {
          .slideShow {
            width: 95vw;
          }
          .centerImage,
          .leftImage,
          .rightImage {
            width: 95vw;
          }
        }

        @media (max-width: 768px) {
          .slideShow {
            height: 450px;
          }

          .arrowLeft {
            left: 1%;
            top: calc(39%);
            padding-right: 2px;
          }

          .arrowRight {
            right: 5%;
            top: 39%;
            padding-left: 2px;
          }
          .centerImage,
          .leftImage,
          .rightImage {
            display: flex;
            flex-direction: column;
            text-align: center;
            height: auto;
          }

          .title {
            text-align: center;
            margin-top: -35px;
            margin-bottom: -10px;
          }

          .line {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 5px;
          }
          img {
            width: 100%;
            height: 250px;
          }
          .des {
            padding-right: 20px;

            margin-bottom: auto;
          }
        }

        @media (max-width: 675px) {
          .slideShow {
            height: 500px;
          }

        @media (max-width: 490px) {
          .slideShow {
            height: 550px;
          }
        }

        @media (max-width: 355px) {
          .slideShow {
            height: 600px;
          }
        }
      `}</style>
    </div>
  );
}
