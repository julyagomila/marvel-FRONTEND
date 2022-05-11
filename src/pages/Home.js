import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          " https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=4tg5BgseTdxVpl5H"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <span>{data.title}</span>
      <br />
      <ul>
        {data.characters.map((character, index) => {
          return <li key={index}>{character.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Home;
