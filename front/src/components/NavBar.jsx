import "../styles/NavBar.css";
import { Link } from "react-router-dom";

import iconProfile from "../assets/icons-user.png";
import iconExercices from "../assets/icons-fitness.png";
import iconPrograms from "../assets/icons-planning.png";

export default function NavBar() {
  return (
    <section className="nav_container">
      <Link to="/exercices">
        <img src={iconExercices} alt="" />
      </Link>
      <Link to="/programmes">
        <img src={iconPrograms} alt="" />
      </Link>
      <Link to="/profil">
        <img src={iconProfile} alt="" />
      </Link>
    </section>
  );
}
