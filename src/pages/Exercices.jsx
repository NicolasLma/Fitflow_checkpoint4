import "../styles/Exercices.css"
import NavBar from "../components/NavBar"

import logoFitflowBlack from "../assets/logo_fitflow_black.png"

export default function Exercices() {
  return (
    <>
    <section className="exercices_container">
      <section className="logo_center">
      <img src={logoFitflowBlack} alt="" />
      </section>
        <section className="exercices_content">
<h1>EXERCICES</h1>
<h2>Exercices par groupe musculaire</h2>
        </section>
    </section>
    <NavBar/>
    </>
  );
}
