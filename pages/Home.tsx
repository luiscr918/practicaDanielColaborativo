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
    <p>estoy actualizando daniel esto va a generar conflictos</p>
    <p>no te asustes</p>
    <Link to={'/carrusel'} >ir carrusel</Link>
    <p>hoklkjlkfdsjhfd</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo enim distinctio consequatur excepturi dolore iusto, assumenda tempora ipsam magnam dolorum, vero repudiandae nam eaque optio nemo eligendi exercitationem. Consequuntur, voluptatem?</p>
    <h1>master cambiada</h1>
     <p>hoklkjlkfdsjhfd</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo enim distinctio consequatur excepturi dolore iusto, assumenda tempora ipsam magnam dolorum, vero repudiandae nam eaque optio nemo eligendi exercitationem. Consequuntur, voluptatem?</p>
    <h1>master cambiada</h1>
     <p>hoklkjlkfdsjhfd</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo enim distinctio consequatur excepturi dolore iusto, assumenda tempora ipsam magnam dolorum, vero repudiandae nam eaque optio nemo eligendi exercitationem. Consequuntur, voluptatem?</p>
    <h1>master cambiada</h1>
     <p>hoklkjlkfdsjhfd</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo enim distinctio consequatur excepturi dolore iusto, assumenda tempora ipsam magnam dolorum, vero repudiandae nam eaque optio nemo eligendi exercitationem. Consequuntur, voluptatem?</p>
    <h1>master cambiada</h1>
    </>
  );
};
