import React from 'react';
import './App.scss';
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Home from './../ResourceFramework/Common/Resource/Template/HomePage';
import Settings from './Main/Settings/Settings';
import Patients from './Main/Patients/Patients';
import Cashier from './Main/Cashier/Cashier';
import Reports from './Main/Reports/Reports';
import MediaSettings from './Main/Media/Media';
import Layout from './../ResourceFramework/Common/Resource/Template/Layout';

const App: React.FC = () => {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.pathname && location.pathname.background;
  return (
    <div className="App">
      <Layout />
        <>
          <Switch location={background || location}>
            <Route exact path="/" children={<Home/>} />
            <Route path="/Patients" children={<Patients/>} />
            <Route path="/Media" children={<MediaSettings/>} />
            <Route path="/Cashier" children={<Cashier/>} />
            <Route path="/Reports" children={<Reports />} />
            <Route path="/Settings" children={<Settings />} />
          </Switch>
      </>
    </div>
  );
}

export default App;
