import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardZahtjevi from './components/Dashboard/DashboardZahtjevi';
import MojiZahtjevi from './components/MojiZahtjevi/MojiZahtjevi';
import SviZahtjevi from './components/MojiZahtjevi/SviZahtjevi';
import Navbar from './components/Navbar/Navbar';
import UnosZahtjeva from './components/ZahtjevForma/UnosZahtjeva';
import UnosRjesenja from './components/Rjesenje/DodavanjeRjesenja';
import PregledZahtjeva from './components/ZahtjevForma/PregledZahtjeva';
import PregledRjesenja from './components/Rjesenje/PregledRjesenja';
import ProsljedjivanjeZahtjeva from './components/ZahtjevForma/ProsljedjivanjeZahtjeva';
import UredjivanjeZahtjeva from './components/ZahtjevForma/UredjivanjeZahtjeva';
import Rjesenja from './components/MojiZahtjevi/Rjesenja';
import Agenti from './components/Agenti/Agenti';
import ListaCertifikataPregled from './components/Edukacija/ListaCertifikataPregled';
import ListaCertifikataUredjivanje from './components/Edukacija/ListaCertifikataUredjivanje';
import UnosCertifikata from './components/Rjesenje/UnosCertifikata';
import ListaEdukacijaUredjivanje from './components/Edukacija/ListaEdukacijaUredjivanje';
import UnosEdukacije from './components/Rjesenje/UnosEdukacije';
import ListaEdukacijaPregled from './components/Edukacija/ListaEdukacijaPregled';
import AgentPregled from './components/Edukacija/AgentPregled';
import AgentUredjivanje from './components/Edukacija/AgentUredjivanje';
import Login from './components/Login/Login';
import Register from './components/Registracija/Register';
import Pocetna from './components/Pocetna/Pocetna';
import Profil from './components/Profil/Profil';
import PageNotFound from "./components/PageNotFound";
import Statistics from "./components/Statistics";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Pocetna}/>
                        <Route path="/pocetna" component={Pocetna}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/zahtjevi" component={DashboardZahtjevi}/>
                        <Route path="/mojizahtjevi" component={MojiZahtjevi}/>
                        <Route path="/svizahtjevi" component={SviZahtjevi}/>
                        <Route path="/unoszahtjeva" component={UnosZahtjeva}/>
                        <Route path="/unosrjesenja" component={UnosRjesenja}/>
                        <Route path="/pregledzahtjeva" component={PregledZahtjeva}/>
                        <Route path="/pregledrjesenja" component={PregledRjesenja}/>
                        <Route path="/prosljedjivanjezahtjeva" component={ProsljedjivanjeZahtjeva}/>
                        <Route path="/uredjivanjezahtjeva" component={UredjivanjeZahtjeva}/>
                        <Route path="/rjesenja" component={Rjesenja}/>
                        <Route path="/agenti" component={Agenti}/>
                        <Route path="/uredicertifikate" component={ListaCertifikataUredjivanje}/>
                        <Route path="/pregledcertifikata" component={ListaCertifikataPregled}/>
                        <Route path="/unoscertifikata" component={UnosCertifikata}/>
                        <Route path="/urediedukacije" component={ListaEdukacijaUredjivanje}/>
                        <Route path="/preglededukacija" component={ListaEdukacijaPregled}/>
                        <Route path="/unosedukacije" component={UnosEdukacije}/>
                        <Route path="/pregledagenta" component={AgentPregled}/>
                        <Route path="/urediagenta" component={AgentUredjivanje}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/profil" component={Profil}/>
                        <Route path="/statistika" component={Statistics}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default App;
