import "../styles/FilteredExercicesEquipement.css"; // Importation des styles CSS
import { Link, useParams, useLocation } from "react-router-dom"; // Importation de Link pour la navigation et useParams pour obtenir les paramètres de l'URL
import iconBack from "../assets/icons-back.png";
import NavBar from "../components/NavBar"; // Importation de la barre de navigation

export default function FilteredExercicesEquipment() {
  const { id, equipement } = useParams(); // Récupération des paramètres de l'URL
  const location = useLocation();
  const exercises = location.state?.exercises || []; // Récupération des exercices passés via le state

  return (
    <>
      <section className="header_filtered_exo">
        <Link to="/exercices">
          <img src={iconBack} alt="icone retour en arrière" />
        </Link>
        <p>EXERCICES {equipement ? equipement.toUpperCase() : ""}</p>
      </section>

      <section className="exercises_list">
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <div key={exercise.id} className="exercise_item">
              <h3>{exercise.name}</h3>
              <img src={exercise.image} alt={exercise.name} />
            </div>
          ))
        ) : (
          <p>Aucun exercice trouvé pour cet équipement.</p>
        )}
      </section>
      
      <NavBar />
    </>
  );
}
