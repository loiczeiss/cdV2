import React from "react";
import "../css/Home.css";
import Title from "../assets/Crystal_typo_site.png";
import { useMyContext } from "./MyContext";
function Home() {
    const {setActiveIndex} = useMyContext()
  return (
    <div className="homeDiv">
      <section className="homeHeader">
        <div className="HomeHeaderLeft">
          <img src={Title} alt="Crystal Digger" />
        </div>
        <div className="homeHeaderRight">
          <h2 className="HomeMenuItems" onClick={()=>{setActiveIndex(2)}}>Accueil</h2>
          <h2 className="HomeMenuItems" onClick={()=>{setActiveIndex(2)}}>Encyclopédie</h2>
          <h2 className="HomeMenuItems" onClick={()=>{setActiveIndex(2)}}>Shop</h2>
          <h2 className="HomeMenuItems" onClick={()=>{setActiveIndex(2)}}>Auteur</h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
