
interface Props{
    nombre:string;
}

export const Saludo=({nombre}:Props)=> {
  return (
    <div>
        <p>Bienvenido{nombre}</p>
    </div>
  )
}
