import {Link} from "react-router-dom"
const HomePage = () => {
    return (
        <section className='content-container '>
            <nav className="general-grid">
                <Link to="lessons" className="card card-effect row-span-4  col-span-4 ">
                    <span className="sub-title">Lecciones y actividades</span>
                </Link>
                <Link to="vocabulary" className="card card-effect row-span-2  col-span-4 ">
                    <span className="sub-title">Vocabulario</span>
                </Link>
                <Link className="card card-effect row-span-2 col-span-4 ">
                    <span className="sub-title">Videojuegos</span>
                </Link>
                <Link className="card card-effect row-span-2 col-span-4 ">
                    <span className="sub-title">Lecturas</span>
                </Link>
                <Link to="external-resources" className="card card-effect row-span-2 col-span-4 ">
                    <span className="sub-title">Recursos externos</span>
                </Link>
            </nav>
        </section>
    )
}
export default HomePage