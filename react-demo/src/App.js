import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoriesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoriesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
