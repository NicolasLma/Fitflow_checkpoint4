import NavBar from "../components/NavBar";
import imgUser from "../assets/profile_users.jpg"
import logoFitflowBlack from "../assets/logo_fitflow_black.png";


import "../styles/Profile.css"

export default function Profile() {
  return (
    <>
    <section className="logo_center">
          <img src={logoFitflowBlack} alt="Fitflow Logo" />
        </section>
        <section className="container_profile">

      <section className="header_profile">
        <img src={imgUser} alt="" />
        <p>Bienvenue Sophie Dupont</p>
      </section>
      <section>
        <h4>Vos exercices favoris</h4>
        <h4>Vos programmes favoris</h4>
      </section>
      <button className="button_user">Déconnexion</button>
        </section>
      <NavBar/>
    </>
  );
}
