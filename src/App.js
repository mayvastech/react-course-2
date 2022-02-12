import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>

        <Route path="/favourites-page">
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// Router provides component page navigation via single page interactivity
// Router watches changes in URL then changes whats visible based on URL

// Initialise router package ensuring it listens to URL changes
// Define URLS to be supported and pages to be loaded for different URL's

// Route component defines different paths in the URL listening to and which component to load
// Switch tells router only one route should be rendered at one time

// The part after domain name is the path e.g- my-page.com/products

// Path= "/" handles initial default path. Between the tags we add the component to be loaded
