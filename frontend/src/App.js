import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import DashboardZahtjevi from './components/DashboardZahtjevi';
import MojiZahtjevi from './components/MojiZahtjevi';
import SviZahtjevi from './components/SviZahtjevi';
import Navbar from './components/Navbar';
import UnosZahtjeva from './components/UnosZahtjeva';
import UnosRjesenja from './components/DodavanjeRjesenja';
import PregledZahtjeva from './components/PregledZahtjeva';
import PregledRjesenja from './components/PregledRjesenja';
import ProsljedjivanjeZahtjeva from './components/ProsljedjivanjeZahtjeva';
import UredjivanjeZahtjeva from './components/UredjivanjeZahtjeva';
import Rjesenja from './components/Rjesenja';
import Agenti from './components/Agenti';
import ListaCertifikataPregled from './components/ListaCertifikataPregled';
import ListaCertifikataUredjivanje from './components/ListaCertifikataUredjivanje';
import UnosCertifikata from './components/UnosCertifikata';
import ListaEdukacijaUredjivanje from './components/ListaEdukacijaUredjivanje';
import UnosEdukacije from './components/UnosEdukacije';
import ListaEdukacijaPregled from './components/ListaEdukacijaPregled';
import AgentPregled from './components/AgentPregled';
import AgentUredjivanje from './components/AgentUredjivanje';
import Login from './components/Login';
import Register from './components/Register';
import Pocetna from './components/Pocetna';
import Profil from './components/Profil';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/zahtjevi" component={DashboardZahtjevi} />
          <Route path="/mojizahtjevi" component={MojiZahtjevi} />
          <Route path="/svizahtjevi" component={SviZahtjevi} />
          <Route path="/unoszahtjeva" component={UnosZahtjeva} />
          <Route path="/unosrjesenja" component={UnosRjesenja} />
          <Route path="/pregledzahtjeva" component={PregledZahtjeva} />
          <Route path="/pregledrjesenja" component={PregledRjesenja} />
          <Route path="/prosljedjivanjezahtjeva" component={ProsljedjivanjeZahtjeva} />
          <Route path="/uredjivanjezahtjeva" component={UredjivanjeZahtjeva} />
          <Route path="/rjesenja" component={Rjesenja} />
          <Route path="/agenti" component={Agenti} />
          <Route path="/uredicertifikate" component={ListaCertifikataUredjivanje} />
          <Route path="/pregledcertifikata" component={ListaCertifikataPregled} />
          <Route path="/unoscertifikata" component={UnosCertifikata} />
          <Route path="/urediedukacije" component={ListaEdukacijaUredjivanje} />
          <Route path="/preglededukacija" component={ListaEdukacijaPregled} />
          <Route path="/unosedukacije" component={UnosEdukacije} />
          <Route path="/pregledagenta" component={AgentPregled} />
          <Route path="/urediagenta" component={AgentUredjivanje} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/pocetna" component={Pocetna} />
          <Route path="/profil" component={Profil} />
          <Route path="/*" component={Pocetna} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
