import iconBack from "../assets/icons-back.png";
import NavBar from "../components/NavBar";
import { useParams, useLocation, Link } from "react-router-dom";

export default function DetailsFilteredExercices() {
  const { id } = useParams();
  const location = useLocation();
  console.log("Location state:", location.state);
  const { exercise, muscleId, muscleName } = location.state || {
    exercise: null,
    muscleId: null,
    muscleName: null,
  };

  return (
    <>
      <section className="header_filtered_exo">
      <Link to="/exercices">
          <img src={iconBack} alt="icone retour en arrière" />
        </Link>
        <p>{exercise.name ? exercise.name.toUpperCase() : ""}</p>
      </section>

      <section className="exercise_details">
        <h2>{exercise.name}</h2>
        <img src={exercise.image} alt={exercise.name} />
        <h4>Description de l'exercice</h4>
            <p>{exercise.description}</p>

      </section>

      <NavBar />
    </>
  );
}
