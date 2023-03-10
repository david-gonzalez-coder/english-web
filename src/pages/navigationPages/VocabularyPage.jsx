import {Link} from "react-router-dom"

import bgIntroduccion from "../../assets/images/bgIntroduccion.png"

const VocabularyPage = () => {
    return (
        <section className='content-container'>
            <nav className="general-grid">
                <Link 
                    style={{backgroundImage: `url(${bgIntroduccion})` }}
                    className="text-white flex-col bg-cover card card-effect  col-span-8 row-span-3 rounded-3xl bg-[#D8D9DD] ">
                    <h2 className="text-4xl mb-4 font-semibold">Introduccion</h2>
                    <p className="text-center">
                        En esta seccion descubriras como se clasifican las palabras y el rol que ocupa cada 
                        una de estas en la formacion de nuevas oraciones.
                        Con una explicacion simple y amena. De tal forma que te sea mucho mas facil adquirir
                        nuevo vocabulario.
                    </p>
                </Link>
                <Link className="card card-effect row-span-4  col-span-4 ">
                    <span className="sub-title">Vocabulario gramatical</span>
                </Link>
                <Link className="card card-effect row-span-2  col-span-4 ">
                    <span className="sub-title">verbos</span>
                </Link>
                <Link className="card card-effect row-span-2 col-span-4 ">
                    <span className="sub-title">sustantivos</span>
                </Link>
                <Link to="/vocabulary/adjectives" className="card card-effect row-span-2 col-span-4 ">
                    <span className="sub-title">adjetivos</span>
                </Link>
                <Link className="card card-effect row-span-2 col-span-4 ">
                    <span className="sub-title">advervios</span>
                </Link>
                <Link className="card card-effect row-span-2 col-span-8 md:col-span-6">
                    <span className="sub-title">Phrasal verbs</span>
                </Link>
                <Link className="card card-effect row-span-2 col-span-8 md:col-span-2 ">
                    <span className="sub-title">Frases utiles</span>
                </Link>
                <Link className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 card card-effect row-span-2 col-span-8 ">
                    <span className="sub-title">Las 3000 palabras mas utilizadas</span>                
                </Link>

            </nav>
         
        </section>
    
    )
}
export default VocabularyPage

//nombres, numeros y numerales