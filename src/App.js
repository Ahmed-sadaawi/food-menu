/* بسم الله الرحمن الرحيم */

// REACT BOOTSTRAP COMPONENTS:
import { Container } from 'react-bootstrap';

// REACT COMPONENTS:
import NavBar from "./components/NavBar/NavBar";
import Category from "./components/Category/Category";
import Cards from "./components/Cards/Cards";

// STYLING
import "./App.css";


function App() {
  return (
    <div className="App">
        <NavBar />

        <Container>
            <Category />
            <Cards />
        </Container>

    </div>
  );
}

export default App;

/* الحمد لله رب العالمين */