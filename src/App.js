import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { WebContext } from "./context/WebContext";
import { Home } from "./screens/Home";
import { Bio } from "./screens/Bio";
import { Contact } from "./screens/Contact";
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {

  return (
    <WebContext>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </WebContext>
  );
}

export default App;
