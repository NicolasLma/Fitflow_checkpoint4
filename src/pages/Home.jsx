import imgHome from "../assets/accueil.jpg";
import iconesFitflowWhite from "../assets/logo_fitflow_white.png";

import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home_container">
      <section className="home_content">
        <img className="bg_img" src={imgHome} alt="" />
        <img className="icon_fitflow" src={iconesFitflowWhite} alt="" />
        <h2 className="mess_bvn">
          Bienvenus chez <span className="bold">FITFLOW</span> <br />{" "}
          <span className="no_pain">
            Planifiez votre entraînement avec nous
          </span>
        </h2>
      </section>
      <Link to="/connexion" className="button_home">
        <button>Connexion</button>
      </Link>
      <Link to="inscription" className="button_home">
        <button>Inscription</button>
      </Link>
    </section>
  );
}
