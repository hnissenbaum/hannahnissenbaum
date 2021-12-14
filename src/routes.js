import About from "pages/About";
import Landing from "pages/Home";
import NotFound from "pages/NotFound";
import Contact from "pages/Contact";
import { Route, Switch, withRouter } from "react-router-dom";


const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tech" component={Tech} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/photos" component={Photos} />
      <Route exact path="/art" component={Art} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default withRouter(Routes);