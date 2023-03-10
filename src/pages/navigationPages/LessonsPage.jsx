import styled from 'styled-components'
import {Link} from "react-router-dom"


const LessonsPage = () => {
    return (
        <section className='content-container '>
            <nav className="general-grid">
                <Link className="card card-effect row-span-4 col-span-4 ">
                    <span className="sub-title">Principiante</span>
                </Link>
                <Link className="card card-effect row-span-4 col-span-4 ">
                    <span className="sub-title">Intermedio</span>
                </Link>
                <Link className="card card-effect row-span-2 col-span-8 ">
                    <span className="sub-title">Avanzado</span>
                </Link>
            </nav>
        </section>
            
    )
}
export default LessonsPage