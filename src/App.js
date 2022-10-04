import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countris></Countris>
    </div>
  );
}
function Countris() {
  const [cunris, setCountris] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountris(data))
  }, [])

  return (
    <div className="contris">
      <h2>All Countris {cunris.length}</h2>
      <hr style={{ "width": "40%", "color": "red" }}></hr>
      {
        cunris.map(country => <Country
          name={country.name.common}
          country={country}
          key={country.capital}
        ></Country>)
      }
    </div>
  )
}
function Country(props) {
  console.log(props.country)
  return (
    <div className="country">
      <h2>{props.name}</h2>
      <img src={props.country.flags.png} alt="" />
    </div>
  )
}


export default App;
