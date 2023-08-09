"use client";

import Image from "next/image";
import styles from "./productLists.module.css";

import { useState } from "react";
import Menu from "../Menu/Menu";

export default function ProductLists() {
  const [selected, setSelected] = useState({
    about: true,
    education: false,
    technologies: false,
  });

  function handleClick(select) {
    setSelected(() => {
      return {
        about: select === "about" ? true : false,
        education: select === "education" ? true : false,
        technologies: select === "technologies" ? true : false,
      };
    });
  }

  const AboutText = (
    <>
      <h1 id="aboutHeading">G&apos;day I&apos;m David</h1>
      <p className={styles.description}>
        I was born and raised in rural Australia. Never having internet at home
        growing up I always went to my library to use their internet, given the
        slow internet there I always was fascinated by sites that loaded
        quickly. This and my enjoyment of clean designs fuels my passion for web
        development
        <br />
        <br /> I started playing around with web development a few years ago but
        didn&apos;t get into it until 2022 when taking a course on Front-End Web
        Development at Swinburne Universit
        <br />
        <br /> I am currently in my second year studying computer science while
        working on a personal project and freelancing on the side.
      </p>
    </>
  );

  const EducationText = (
    <>
      <h1 id="aboutHeading">My Education</h1>
      <ul className={`${styles.description} ${styles.descriptionList} `}>
        <li>
          CT50220 Dimploma of Information Technology (Front End Web Development)
          | 2022
        </li>
        <li>BA-CS Bachelor of Computer Science | 2023 - current</li>
        <li>Front end developer career path (72hrs) | Scrimba (online)</li>
        <li>
          React Native - The Practical Guide 2022 (26hrs) | Udemy (online)
        </li>
        <li>
          C# Basics for Beginners: Learn C# Fundamentals by Coding (6hrs) |
          Udemy (online)
        </li>
        <li>
          C# Intermediate: Classes, Interfaces and OOP (6hrs) | Udemy (online)
        </li>
      </ul>
    </>
  );
  const TechnologiesText = (
    <>
      <h1 id="aboutHeading">What I&apos;m confortable with</h1>
      <ul className={`${styles.description} ${styles.descriptionList} `}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Next.Js</li>
        <li>Contentful</li>
        <li>React.Js</li>
        <li>JavaScript</li>
        <li>C#</li>
      </ul>
    </>
  );

  let textContent;

  if (selected.about) {
    textContent = AboutText;
  }
  if (selected.technologies) {
    textContent = TechnologiesText;
  }
  if (selected.education) {
    textContent = EducationText;
  }
  return (
    <main className={styles.container}>
      <Menu selected={selected} onClick={handleClick} mobile={false} />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.paragraphContainer}>{textContent}</div>
          <div className={`${styles.desktopLink} ${styles.links}`}>
            <a href="https://github.com/David-Waite" target="_blank">
              GitHub
            </a>
            <a href="www.linkedin.com/in/davidwaitedev" target="_blank">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/davidwaitedev/" target="_blank">
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.moblieLinkContainer}>
          <Menu selected={selected} onClick={handleClick} mobile={true} />
          <div className={`${styles.moblieLink} ${styles.links}`}>
            <a href="https://github.com/David-Waite" target="_blank">
              GitHub
            </a>
            <a href="www.linkedin.com/in/davidwaitedev" target="_blank">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/davidwaitedev/" target="_blank">
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/logo.webp"
            fill={true}
            alt="David"
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,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"
          />
        </div>
      </div>
    </main>
  );
}
