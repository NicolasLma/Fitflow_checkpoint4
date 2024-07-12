import "../styles/FilteredExercicesEquipement.css";

export default function FilteredExercicesEquipement() {
  return (
    <>
      <section className="header_filtered_exo">
        <Link to="/exercices">
          <img src={iconBack} alt="icone retour en arrière" />
        </Link>
        <p>EXERCICES {muscle ? muscle.toUpperCase() : ""}</p>
      </section>
      <NavBar />
    </>
  );
}
