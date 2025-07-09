import '../styles/homestyles/animacionimagen1.css';
import naruto1 from '../src/assets/imgs/dados.png'

export const Carrusel=()=> {
  return (
    <>
    <div className="flex justify-center items-center w-full">
      <img src={naruto1} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain rounded shadow-lg animacion-slide-right" alt="Imagen carrusel"/>
      <p>hola no tengo animacion</p>
    </div>
    
    </>
  )
}
