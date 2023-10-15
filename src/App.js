/* بسم الله الرحمن الرحيم */

import {useState} from "react";

// REACT BOOTSTRAP COMPONENTS:
import { Container } from 'react-bootstrap';

// REACT COMPONENTS:
import NavBar from "./components/NavBar/NavBar";
import Category from "./components/Category/Category";
import Cards from "./components/Cards/Cards";

import items from "./data";

// STYLING
import "./App.css";

function App() {
    const [data, setData] = useState(items);
    const [searchValue,setSearchValue] = useState('');

    const uniqueValue = ["الكل", ...new Set(items.map(i => i.category))];

    function filtering(eat) {
        const list = items.filter(item => item.category === eat);
        (eat === "الكل") ? setData(items) : setData(list)
    }

    function handleClick (e, searchValue){
        e.preventDefault();

        if(searchValue !== "") {
            const list = items.filter(item => item.title === searchValue);
            setData(list)
            setSearchValue('')
        }
    }

  return (
    <div className="App">
        <NavBar searchValue={searchValue} setSearchValue={setSearchValue} handleClick={handleClick}/>

        <Container>
            <Category filtering={filtering} uniqueValue={uniqueValue}/>
            <Cards data={data} />
        </Container>

    </div>
  );
}

export default App;

/* الحمد لله رب العالمين */