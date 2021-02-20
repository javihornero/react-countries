import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryMain from "./pages/CountryMain/CountryMain";
import CountryDetails from "./pages/CountryDetails.js/CountryDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <div className="container">
          <Switch>
            <Route exact path="/">
              <CountryMain />
            </Route>
            <Route path="/:countryName">
              <CountryDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
