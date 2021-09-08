import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./shared/Header";
import SideMenu from "./shared/SideMenu";
import Footer from './shared/Footer';
import Event from './core/Event';
import EvenList from './core/EventList';
import Atendees from './core/Atendees';
import Managers from './core/Managers';
import Comment from './core/Comment';

function App() {
  return (
    <Fragment>
      <div className="header">
        <Header />
      </div>
      <Router>
        <div className="container">
          <div className="container-side-menu">
            <SideMenu></SideMenu>
          </div>
          <div className="container-main-view">
            <Switch>
              <Route path="/getEvents">
                <EvenList></EvenList>
              </Route>
              <Route path="/newEvent">
                <Event/>
              </Route>
              <Route path="/registerAtendees">
                <Atendees></Atendees>
              </Route>
              <Route path="/registerManager">
                <Managers></Managers>
              </Route>
              <Route path="/commentEvent">
                <Comment></Comment>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
