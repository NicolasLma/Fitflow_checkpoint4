import "../styles/Exercices.css";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

import logoFitflowBlack from "../assets/logo_fitflow_black.png";

export default function Exercices() {
  const [musclesData, setMusclesData] = useState({});

  useEffect(() => {
    axios
      .get("src/data/muscles.json")
      .then((response) => {
        try {
          console.log("Données récupérées avec succès :", response.data);
          setMusclesData(response.data);
        } catch (error) {
          console.error("Erreur lors de l'affichage dans la console :", error);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête Axios :", error);
      });
  }, []);

  if (!musclesData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="exercices_container">
        <section className="logo_center">
          <img src={logoFitflowBlack} alt="" />
        </section>
        <section className="exercices_content">
          <h1>EXERCICES</h1>
          <h2>Exercices par groupe musculaire</h2>
          <section className="test">

          {musclesData.parties_musculaires?.map((muscle) => (
            <div key={muscle.id} className="muscle_exo">
              <h3>{muscle.muscle}</h3>
              <img src={muscle.image} alt={muscle.muscle} />
            </div>
          ))}
          </section>
          <h2>Exercices par groupe musculaire</h2>
        </section>
      </section>
      <NavBar />
    </>
  );
}
