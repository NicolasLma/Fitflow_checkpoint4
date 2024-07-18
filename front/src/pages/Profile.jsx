import NavBar from "../components/NavBar";
import imgUser from "../assets/profile_users.jpg";
import logoFitflowBlack from "../assets/logo_fitflow_black.png";

import { useAuth } from "../context/AuthContext";

import "../styles/Profile.css";

export default function Profile() {
  const { logout, auth } = useAuth();

// Assurez-vous que auth est défini avant d'accéder à ses propriétés
const username = auth ? `${auth.firstname} ${auth.lastname}` : "";
console.log(username);
  return (
    <>
      <section className="logo_center">
        <img src={logoFitflowBlack} alt="Fitflow Logo" />
      </section>
      <section className="big_coontainer">

      <section className="container_profile">
        <section className="header_profile">
          <img src={imgUser} alt="" />
          <p>Bienvenue {username}</p>
        </section>
        <section>
          <h4>Vos exercices favoris</h4>
          <h4>Vos programmes favoris</h4>
        </section>
        <button onClick={logout} className="button_user">
          Déconnexion
        </button>
      </section>
      </section>
      <NavBar />
    </>
  );
}
