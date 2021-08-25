import Historia from './historia.js';
import Home from './home.js';
import Precios from './precios.js';
import Contacto from './contacto.js';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="header__nav-active" className="hover-nav header__link">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/historia" activeClassName="header__nav-active" className="hover-nav header__link">Historia</NavLink>
                    </li>
                    <li>
                        <NavLink to="/precios" activeClassName="header__nav-active" className="hover-nav header__link">Precios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" activeClassName="header__nav-active" className="hover-nav header__link">Contacto</NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/historia">
                    <Historia />
                </Route>
                <Route path="/precios">
                    <Precios />
                </Route>
                <Route path="/contacto">
                    <Contacto />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>

    )
}

export default Nav;