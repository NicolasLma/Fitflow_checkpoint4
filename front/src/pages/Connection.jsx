import { useState } from "react";
import imgConnection from "../assets/accueil.jpg";
import iconesFitflowWhite from "../assets/logo_fitflow_white.png";

import "../styles/Connection.css";

import axios from 'axios';
import { useAuth } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Connection() {
  // const [identifier, setIdentifier] = useState({
  //   identifiant: "",
  //   password: "",
  // });

  // const [error, setError] = useState("");

  // const handleChangeForm = (event) => {
  //   const { name, value } = event.target;
  //   setIdentifier({ ...identifier, [name]: value });
  // };

  // const isValidEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  // const togglePopup = () => {
  //   if (!isValidEmail(identifier.identifiant)) {
  //     setError("L'adresse e-mail est invalide.");
  //   } else if (identifier.password === "") {
  //     setError("Le mot de passe est requis.");
  //   } else {
  //     setError("");
  //     setIdentifier({
  //       identifiant: "",
  //       password: "",
  //     });
  //   }
  // };

  const apiUrl = import.meta.env.VITE_API_URL;


  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate(); // Initialisez useNavigate


  const {auth, login} = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {email, password})
      login(response.data.user);
      navigate("/profil"); // Redirigez vers la page profil après une connexion réussie
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };
  return (
    <section className="connection_container">
      <section className="connection_content">
        <img className="bg_img_connection" src={imgConnection} alt="" />
        <img
          className="icon_fitflow_connection"
          src={iconesFitflowWhite}
          alt=""
        />
        <h2 className="mess_bvn">
          Bienvenus chez <span className="bold">FITFLOW</span> <br />{" "}
          <span className="no_pain">
            Planifiez votre entraînement avec nous
          </span>
        </h2>
      </section>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        {/* {error && <p className="error">{error}</p>} */}
        <button
          type="submit"
          className="button_connection"
          // onClick={togglePopup}
        >
          Se connecter
        </button>
      </form>
    </section>
  );
}
