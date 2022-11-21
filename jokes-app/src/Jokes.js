import React, {useState} from 'react'
import './App.css'
import Button from "@mui/material/Button";
import "./card.css";


function Jokes(){
  
    const [data, setData] = useState("");
    const [category, setCategory] = useState('Any')
    const [string, setString] = useState(null)

  // -----------------------------------

    async function getJoke(){

        const path = `https://v2.jokeapi.dev/joke/${category}?type=single`;
        const res = await fetch(path)
        const json = await res.json()
        const joke = json.joke
        console.log(joke)
        setData(joke)

    }


  // -----------------------------------

  return (
    <>
      <div class="main-container">
        <div class="heading">
          <h1 class="heading__title">
            Potentially Inappropriate Joke Generator
          </h1>
          <p class="heading__credits">
            <a
              class="heading__link"
              target="_blank"
              href="https://dribbble.com/sl"
              rel="noreferrer"
            >
              * * *
            </a>
          </p>
        </div>
        <div class="cards">
          <div class="card card-1">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  getJoke();
                }}
              >
                <p>Select Category:</p>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Any">Any</option>
                  <option value="Programming">Programming</option>
                  <option value="Misc">Misc</option>
                  <option value="Dark">Dark</option>
                </select>
                <br></br>
                <br></br>
                <p>Search for a joke that contains this search string:</p>
                <input
                  placeholder="(optional)"
                  value={string}
                  onChange={(e) => setString(e.target.value)}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">
                  Get Joke
                </Button>
              </form>
            </h2>
            <br></br>
            <h2 class="card__title">{data}</h2>

            <p class="card__apply"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jokes