import {Link} from "react-router-dom"
import adColors from "../../../assets/images/adColors.jpg"
import adColors2 from "../../../assets/images/adColors2.jpg"
const AdjectivesMainPage = () => {
    return (
      <section className='content-container'>
          <article>
            <h1 className='title'>Adjetivos</h1>
              <p className="">
                Los adjetivos son palabras que describen o modifican sustantivos o
                pronombres. Proporcionan más información sobre el sustantivo o
                pronombre de una frase, como su tamaño, forma, color, textura,
                origen o calidad. Algunos ejemplos de adjetivos son: 
                rojo - red, bonito - beautiful, alto - tall, redondo - round, suave - soft e 
                italiano - Italian.
              </p>
              
              <p>
                Mientras que los adjetivos en español pueden ir despues o antes del sustantivo, 
                por ejemplo: "la casa nueva" o "el nuevo hospital", en ingles los adjetivos siempre
                deberan ir antes que el sustantivo, por ejemplo: "the new house" o "the new hospital".
                Sin embargo, tambien podrias decir: "The house is new", en este caso el adjetivo se encuentra
                despues del sustantivo pero con requisito de hacer uso del verbo To Be. 
              </p>
          
          </article>
            
          <nav className="general-grid">
            <Link className="card card-effect col-span-4 row-span-1">
              <h2 className="">Lecciones y actividades - lessons and activities</h2>
            </Link>
            <Link className="card card-effect col-span-4 row-span-1">
              <h2 className="">Videojuegos - Videogames</h2>
            </Link>
            <Link to="/vocabulary/adjectives/colors" className="card card-effect col-span-4 row-span-4 gap-4 sm:gap-8 flex flex-col">
              <div  className="bg-gradient-to-b from-[#1C5CAF] via-[#A055A0] to-[#FE6C76] w-full grow rounded-3xl bg-red-100 overflow-hidden"/>
              <h2>Colores - Colors</h2>
            </Link>
            <Link className="card card-effect col-span-4 row-span-2">
              <h2 className="">Numeros - Numbers</h2>
            </Link>
            <Link className="card card-effect col-span-4 row-span-2">
              <h2 className="">Materiales - Materials</h2>
            </Link>
          </nav>
      </section>
    )
}
export default AdjectivesMainPage