import React, { useState } from "react";
import imgRegister from "../assets/accueil.jpg";
import iconesFitflowWhite from "../assets/logo_fitflow_white.png";

import "../styles/Registration.css";

export default function Registration() {
  const [inscription, setInscription] = useState({
    email: "",
    nom: "",
    prenom: "",
    mp: "",
    confirmationMp: "",
  });

  const [error, setError] = useState("");

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setInscription({ ...inscription, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const togglePopup = (event) => {
    event.preventDefault();

    if (inscription.nom === "") {
      setError("Le nom est requis.");
    } else if (inscription.prenom === "") {
      setError("Le prénom est requis.");
    } else if (!isValidEmail(inscription.email)) {
      setError("L'adresse e-mail est invalide.");
    } else if (inscription.mp === "") {
      setError("Le mot de passe est requis.");
    } else if (inscription.confirmationMp === "") {
      setError("Veuillez confirmer votre mot de passe.");
    } else if (inscription.confirmationMp !== inscription.mp) {
      setError("Les mots de passe ne correspondent pas.");
    } else {
      setError("");
      // Ici vous pouvez traiter l'inscription ou réinitialiser le formulaire
      setInscription({
        email: "",
        nom: "",
        prenom: "",
        mp: "",
        confirmationMp: "",
      });
    }
  };

  return (
    <section className="register_container">
      <section className="register_content">
        <img className="bg_img_register" src={imgRegister} alt="" />
        <img
          className="icon_fitflow_register"
          src={iconesFitflowWhite}
          alt=""
        />
      </section>
      <form action="">
        <input
          className="inputIns"
          type="text"
          name="nom"
          value={inscription.nom}
          onChange={handleChangeForm}
          placeholder="Nom"
        />
        <input
          className="inputIns"
          type="text"
          name="prenom"
          value={inscription.prenom}
          onChange={handleChangeForm}
          placeholder="Prénom"
        />
        <input
          type="email"
          name="email"
          value={inscription.email}
          onChange={handleChangeForm}
          placeholder="Adresse email"
          required
        />
        <input
          type="password"
          name="mp"
          value={inscription.mp}
          onChange={handleChangeForm}
          placeholder="Mot de passe"
          required
        />
        <input
          type="password"
          name="confirmationMp"
          value={inscription.confirmationMp}
          onChange={handleChangeForm}
          placeholder="Confirmer le mot de passe"
          required
        />
        {error && <p className="error">{error}</p>}
        <button
          className="button_register"
          type="submit"
          onClick={togglePopup}
        >
          S'inscrire
        </button>
      </form>
    </section>
  );
}
