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
import { Detail } from './screens/Detail';
import { PreloadImages } from './components/PreloadImg';

function App() {

  // document.addEventListener("contextmenu", function(e){e.preventDefault()})

  return (
    <WebContext>
      <PreloadImages />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:type/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </WebContext>
  );
}

export default App;
