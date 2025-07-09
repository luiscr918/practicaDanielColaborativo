import { HeroSectionHome } from "../components/homeComponents/HeroSectionHome";
import { Navbar } from "../components/Navbar";
import { Saludo } from "../components/homeComponents/Saludo";
import { Link } from "react-router-dom";
export const Home = () => {

  return (
    <>
      <Navbar />
      <HeroSectionHome />
      <h1>NOMBRE</h1>
    <Saludo nombre="luis"/>
    <Link to={'/carrusel'} >ir carrusel</Link>
    </>
  );
};
