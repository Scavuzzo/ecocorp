import ReactDOM from 'react-dom';
import './index.scss';
import Header from './header.js';
import Footer from './footer.js';
import Nav from './nav.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './fontello/css/fontello.css';


const App = () => {
  return (
    <div>
    <Header/>
    <Router>
      <Nav/>
    </Router>
    <Footer/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));