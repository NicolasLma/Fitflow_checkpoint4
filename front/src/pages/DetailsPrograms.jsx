import NavBar from "../components/NavBar";
import { Link, useParams, useLocation } from "react-router-dom";
import iconBack from "../assets/icons-back.png";
import "../styles/DetailsPrograms.css";

export default function DetailsPrograms() {
  const { id } = useParams();
  const location = useLocation();
  const { program } = location.state || {};

  if (!program || !program.sessions) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="details_program_container">
        <section className="header_filtered_exo">
          <Link to="/programmes">
            <img src={iconBack} alt="icone retour en arrière" />
          </Link>
          <p>Programme : {program.name}</p>
        </section>
        <section className="details_program_content">
          <section className="sessions_container">
            {program.sessions.map((session, sessionIndex) => (
              <div key={sessionIndex} className="session_item">
                <h2>Séance {sessionIndex + 1}</h2>
                <section className="session_content">
                  {session.exercises.map((exercise, exerciseIndex) => (
                    <div key={exerciseIndex} className="exercise_session">
                      <h3>{exercise.name}</h3>
                      <img src={exercise.image} alt={exercise.name} />
                      <div className="session_exercise_details">
                        <p>Nombre de séries : {exercise.sets}</p>
                        <p>Nombre de répétitions : {exercise.reps}</p>
                        <p className="mb1rem">Temps de repos : {exercise.rest}</p>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            ))}
          </section>
        </section>
      </section>
      <NavBar />
    </>
  );
}
