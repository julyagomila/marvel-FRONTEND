import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import mainPictureHome from "../assets/pictures/main-picture-home.jpeg";

// import Pagination from "../components/Pagination";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel---backend.herokuapp.com/getAllCharacters?limit=100&page=${page}"
        );

        setData(response.data.results);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <main className="main-home">
      <img className="mainPictureHome" src={mainPictureHome} />
      <span className="stars">
        ****************************************************************************************
      </span>
      <h1>
        ****************************** WELCOME IN THE MARVEL WORLD
        ******************************
      </h1>
      <span className="stars">
        ****************************************************************************************
      </span>
      <br />

      <div className="characters-all">
        {data.map((character, index) => {
          return (
            <div className="characters-card">
              <img
                src={
                  character.thumbnail.path +
                  "/standard_xlarge" +
                  "." +
                  character.thumbnail.extension
                }
                alt=""
              />
              <h2 key={index}>{character.name}</h2>
              <p>{character.description}</p>
            </div>
          );
        })}
      </div>
      <div className="pages">
        <button className="button-pages" onClick={() => setPage(page - 1)}>
          Page précédente
        </button>
        <button className="button-pages" onClick={() => setPage(page + 1)}>
          Page suivante
        </button>
      </div>
    </main>
  );
}

export default Home;
