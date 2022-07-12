import logo from '../../assets/images/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="nbsales-logo-container">
                <img src={logo} alt="NBSales" />
                    <h1>NB Sales</h1>
                    <p>Desenvolvido por <a href="https://github.com/pedronb">@pedronb</a></p>
            </div>
        </header>
    )
}

export default Header