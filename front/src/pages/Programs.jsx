import "../styles/Programs.css";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logoFitflowBlack from "../assets/logo_fitflow_black.png";

export default function Programs() {
  const [programsData, setProgramsData] = useState([]);

  useEffect(() => {
    axios
      .get("/src/data/programs.json")
      .then((response) => {
        console.log("Données des programmes récupérées avec succès :", response.data);
        setProgramsData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête Axios :", error);
      });
  }, []);

  if (!programsData.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="programs_container">
        <section className="logo_center">
          <img src={logoFitflowBlack} alt="Fitflow Logo" />
        </section>
        <section className="programs_content">
          <h1>PROGRAMMES</h1>
          <section className="programs">
            {programsData.map((program) => (
              <Link
                key={program.id}
                to={`/programmesdetails/${program.id}`} // Utilisez l'ID ou un identifiant unique pour chaque programme
                state={{ program: program }} // Transmettez l'objet program entier via state
              >
                <div className="img_programs">
                  <h3>{program.name}</h3>
                  <img src={program.image} alt={program.name} />
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
