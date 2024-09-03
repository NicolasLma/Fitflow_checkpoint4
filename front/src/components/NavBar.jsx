import "../styles/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


import { useAuth } from "../context/AuthContext";


import iconProfile from "../assets/icons-user.png";
import iconExercices from "../assets/icons-fitness.png";
import iconPrograms from "../assets/icons-planning.png";

export default function NavBar() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <section className="nav_container">
     {auth ? (
        <>
          <Link to="/exercices">
            <img src={iconExercices} alt="Exercices Icon" />
          </Link>
          <Link to="/programmes">
            <img src={iconPrograms} alt="Programs Icon" />
          </Link>
          <Link to="/profil">
            <img src={iconProfile} alt="Profile Icon" />
          </Link>
        </>
      ) : (
        null
      )}
    </section>
  );
}
