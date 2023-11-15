import "./Header.css" /* ESTOY IMPORTANDO EL CSS */

function Header(){



    return(
        <div>
            <section className="encabezado">
                <span>Logo</span>
                <nav className="lista">
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Nosotros</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
            </section>
        </div>

    )
}

export default Header;