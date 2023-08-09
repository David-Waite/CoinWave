"use client";

import Image from "next/image";
import styles from "./productLists.module.css";

import { useState } from "react";
import Menu from "../Menu/Menu";

export default function ProductLists() {
  const [selected, setSelected] = useState({
    art: true,
    memberships: false,
    PFP: false,
    photography: false,
  });

  function handleClick(select) {
    setSelected(() => {
      return {
        art: select === "art" ? true : false,
        memberships: select === "memberships" ? true : false,
        PFP: select === "PHP" ? true : false,
        photography: select === "photography" ? true : false,
      };
    });
  }

  const Art = (
    <>
      <h1 id="aboutHeading">art</h1>
    </>
  );

  const Memberships = (
    <>
      <h1 id="aboutHeading">Memberships</h1>
    </>
  );
  const PFP = (
    <>
      <h1 id="aboutHeading">PFP</h1>
    </>
  );

  const Photography = (
    <>
      <h1 id="aboutHeading">photography</h1>
    </>
  );
  let filteredProucts;

  if (selected.art) {
    filteredProucts = Art;
  }
  if (selected.memberships) {
    filteredProucts = Memberships;
  }
  if (selected.PFP) {
    filteredProucts = PFP;
  }
  if (selected.photography) {
    filteredProucts = Photography;
  }
  return (
    <main className={styles.container}>
      <Menu selected={selected} onClick={handleClick} mobile={false} />
    
          {filteredProucts}
        
        
       
      </div>
    </main>
  );
}
