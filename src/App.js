import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { WebContext } from "./context/WebContext";
import { Home } from "./screens/Home";
import { Bio } from "./screens/Bio";
import { Contact } from "./screens/Contact";

function App() {

  return (
    <WebContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </WebContext>
  );
}

export default App;
