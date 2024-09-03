import iconBack from "../assets/icons-back.png";
import NavBar from "../components/NavBar";
import { useParams, useLocation, Link } from "react-router-dom";
import "../styles/FilteredExercices.css";

export default function FilteredExercices() {
  const { id, muscle } = useParams();
  const location = useLocation();
  const { exercises } = location.state || { exercises: [] };

  return (
    <>
      <section className="header_filtered_exo">
        <Link to="/exercices">
          <img src={iconBack} alt="icone retour en arrière" />
        </Link>
        <p>EXERCICES {muscle ? muscle.toUpperCase() : ""}</p>
      </section>

      <section className="exercises_list">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="exercise_item">
            <h3>{exercise.name}</h3>
            <Link
              to={`/détailsexercices/${exercise.id}`}
              state={{ exercise: exercise, muscleId: id, muscleName: muscle }}
            >
              <img src={exercise.image} alt={exercise.name} />
            </Link>
          </div>
        ))}
      </section>
      <NavBar />
    </>
  );
}
