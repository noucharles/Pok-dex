import React from 'react';
import PokemonList from "./pages/pokemon-list";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import PokemonDetail from "./pages/pokemon-detail";
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonAdd from "./pages/pokemon-add";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";

const App: React.FC = () => {

    return (
        <Router>
            <div>
                {/*La barre de navigation commun à toutes les pages*/}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                </nav>
                {/* Le systéme de gestion des routes de notre application*/}
                <Switch>
                    <PrivateRoute exact path="/" component={PokemonList}/>
                    <Route exact path="/login" component={Login}/>
                    <PrivateRoute exact path="/pokemons" component={PokemonList}/>
                    <PrivateRoute exact path="/pokemon/add" component={PokemonAdd}/>
                    <PrivateRoute path="/pokemons/edit/:id" component={PokemonEdit}/>
                    <PrivateRoute path="/pokemons/:id" component={PokemonDetail}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    )
};

export default App;