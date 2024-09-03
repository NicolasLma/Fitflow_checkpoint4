import React, { useState } from "react";
import imgRegister from "../assets/accueil.jpg";
import iconesFitflowWhite from "../assets/logo_fitflow_white.png";
import axios from "axios";  // Importer axios
import { useNavigate } from "react-router-dom";  // Importer useNavigate
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
  const [success, setSuccess] = useState(false);  // Ajout d'un état pour le succès
  const navigate = useNavigate();  // Initialiser useNavigate

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setInscription({ ...inscription, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const togglePopup = async (event) => {
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

      try {
        const apiUrl = import.meta.env.VITE_API_URL;  // URL de votre API
        const response = await axios.post(`${apiUrl}/auth/register`, {
          email: inscription.email,
          password: inscription.mp,
          firstname: inscription.prenom,
          lastname: inscription.nom,
        });

        if (response.data.success) {
          setSuccess(true);  // Définir le succès sur true si l'inscription réussit
          setInscription({
            email: "",
            nom: "",
            prenom: "",
            mp: "",
            confirmationMp: "",
          });
          navigate("/profil");  // Rediriger vers la page profil
        } else {
          setError(response.data.message || "Erreur lors de l'inscription.");
        }
      } catch (error) {
        setError(error.response?.data?.message || "Erreur lors de l'inscription.");
      }
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
      <form onSubmit={togglePopup}>
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
        {success && <p className="success">Inscription réussie !</p>} {/* Afficher le succès */}
        <button
          className="button_register"
          type="submit"
        >
          S'inscrire
        </button>
      </form>
    </section>
  );
}
