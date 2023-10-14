/* بسم الله الرحمن الرحيم */

// REACT BOOTSTRAP COMPONENTS:
import { Container } from 'react-bootstrap';

// REACT COMPONENTS:
import NavBar from "./components/NavBar/NavBar";
import Category from "./components/Category/Category";
import Cards from "./components/Cards/Cards";

import items from "./data";

// STYLING
import "./App.css";
import {useState} from "react";

function App() {
    const [data, setData] = useState(items);

    function filtering(eat) {
        const list = items.filter(item => item.category === eat);
        (eat === "الكل") ? setData(items) : setData(list)
    }
  return (
    <div className="App">
        <NavBar />

        <Container>
            <Category filtering={filtering}/>
            <Cards data={data} />
        </Container>

    </div>
  );
}

export default App;

/* الحمد لله رب العالمين */