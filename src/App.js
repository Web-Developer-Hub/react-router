import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/Notfound/NotFound';
import Hearder from './Components/Header/Hearder';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import BlogDetails from './Components/BlogDeatils/BlogDetails';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Hearder />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/blogs">
            <Blogs />
          </Route>

          <Route exact path="/details/blog/:blogID">
            <BlogDetails />
          </Route>

          <Route exact path="/about_me">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
