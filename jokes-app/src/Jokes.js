import React, {useState} from 'react'

function Jokes(){
  
    const [data, setData] = useState("");
    const [category, setCategory] = useState(null)

  // -----------------------------------

    async function getJoke(){

        const path = `https://v2.jokeapi.dev/joke/Any?type=single`
        const res = await fetch(path)
        const json = await res.json()
        const joke = json.joke
        console.log(joke)
        setData(joke)

    }


  // -----------------------------------

  return (
    <div>
      <h1>{data}</h1>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        getJoke()
      }}>

      <button type='submit'>Get Joke</button>


      </form>
    </div>
  );
}

export default Jokes