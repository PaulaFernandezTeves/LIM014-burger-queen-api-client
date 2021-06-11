
import { Link,NavLink,Switch,Route,Redirect,useRouteMatch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Menu from "../pages/administrador/menu";
import Trabajadores from "../pages/administrador/trabajadores";
import CategoriesPage from "../pages/CategoriesPage";
import HistorialCocina from "../pages/cocina/historialCocina";
import Proceso from "../pages/cocina/proceso";
import HistorialMesero from "../pages/mesero/historialMesero";
import Home from "../pages/mesero/home";
import Status from "../pages/mesero/status";

export default function CategoriesRouter() {
    const { url } = useRouteMatch();
    return (
        <div>
            <ul>
                <li>
                    {/* url=categories, administrador = categorias  */}
                    <NavLink exact to={`${url}`} activeClassName="active">
                        hi
                    </NavLink>
                </li>
                <li>
                    {/* url=categories, administrador = categorias  */}
                    <NavLink exact to={`${url}/administrador`} activeClassName="active">
                        Administrador
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/mesero`} activeClassName="active">
                        Mesero
                     </NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/cocina`} activeClassName="active">
                        Cocina
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <PrivateRoute exact path="/categories" component={CategoriesPage} />
                <PrivateRoute path="/categories/mesero" component={MeseroRouter} />
                <PrivateRoute path="/categories/cocina" component={CocinaRouter} />
                <PrivateRoute path="/categories/administrador" component={AdministradorRouter} />

                <Route exact path="/categories/cocina">
                    <h1>Puesto: Cocinero</h1>
                </Route>
            
                <Route exact path="/categories/administrador">
                    <h1>Puesto: Administrador</h1>
                </Route>
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}

function MeseroRouter() {
    const { url } = useRouteMatch();
    return (
        <div>
            <ul>
                <li>
                    <Link to="/categories/mesero">Home</Link>
                </li>
                <li>
                    <Link to="/categories/mesero/status">Status</Link>
                </li>
                <li>
                    <Link to="/categories/mesero/historial">Historial</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${url}`} component={Home}/>

                <Route exact path={`${url}/status`} component={Status}/>
                  
                <Route exact path={`${url}/historial`} component={HistorialMesero}/>
                 
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}

function CocinaRouter() {
    const { url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to="/categories/cocina">Proceso</Link>
                </li>
                <li>
                    <Link to="/categories/cocina/historial">Historial</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${url}`} component={Proceso} />

                <Route exact path={`${url}/historial`} component={HistorialCocina} />

                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}

function AdministradorRouter() {
    const { url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
            <Link to="/categories/administrador">Menu</Link>
                </li>
                <li>
                    <Link to="/categories/administrador/trabajadores">Trabajadores</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${url}`} component={Menu}/>

                <Route exact path={`${url}/trabajadores`} component={Trabajadores}/>

                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}