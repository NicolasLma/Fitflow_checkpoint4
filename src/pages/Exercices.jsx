import "../styles/Exercices.css";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import logoFitflowBlack from "../assets/logo_fitflow_black.png";

export default function Exercices() {
  const [musclesData, setMusclesData] = useState({});
  const [equipmentData, setEquipmentData] = useState({});

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

  useEffect(() => {
    axios
      .get("src/data/equipment.json")
      .then((response) => {
        try {
          console.log("Données récupérées avec succès :", response.data);
          setEquipmentData(response.data);
        } catch (error) {
          console.error("Erreur lors de l'affichage dans la console :", error);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête Axios :", error);
      });
  }, []);

  if (!equipmentData) {
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
              <Link key={muscle.id}
              to={`/exercicesfiltrés/${muscle.id}/${muscle.muscle}`}
              state={{ exercises: muscle.exercises }}>
                <div className="muscle_exo">
                  <h3>{muscle.muscle}</h3>
                  <img src={muscle.image} alt={muscle.muscle} />
                </div>
              </Link>
            ))}
          </section>
          <h2>Exercices par équipement</h2>

          <section className="test">
            {equipmentData.equipments_exos?.map((equipment) => (
              <Link key={equipment.id} to={`/exercicesfiltrés/${equipment.id}`}>
                <div className="muscle_exo">
                  <h3>{equipment.equipment}</h3>
                  <img src={equipment.image} alt={equipment.equipment} />
                </div>
              </Link>
            ))}
          </section>
        </section>
      </section>
      <NavBar />
    </>
  );
}
