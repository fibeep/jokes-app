import React, {useState} from 'react'
import './App.css'
function Jokes(){
  
    const [data, setData] = useState("");
    const [category, setCategory] = useState('Any')
    const [string, setString] = useState(null)
    const [number, setNumber] = useState('1')

  // -----------------------------------

    async function getJoke(){

        const path = `https://v2.jokeapi.dev/joke/${category}?type=single&contains=${string}`;
        const res = await fetch(path)
        const json = await res.json()
        const joke = json.joke
        console.log(joke)
        setData(joke)

    }


  // -----------------------------------

  return (
    <div className="App">
      <h1>{data}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getJoke();
        }}
      >
        <p>Select Category:</p>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Any">Any</option>
          <option value="Programming">Programming</option>
          <option value="Misc">Misc</option>
          <option value="Dark">Dark</option>
        </select>
        <p>Search for a joke that contains this search string:</p>
        <input
          placeholder="(optional)"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <button type="submit">Get Joke</button>
      </form>
    </div>
  );
}

export default Jokes