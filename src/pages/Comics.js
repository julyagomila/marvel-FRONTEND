import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import mainPictureComics from "../assets/pictures/team-marvel-2.jpeg";

function Comics() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel---backend.herokuapp.com/getAllComics"
        );

        setData(response.data.results);
        console.log(data);
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
    <main className="main-comics">
      <img className="mainPictureComics" src={mainPictureComics} />
      <div className="comics-all">
        {data.map((comic, index) => {
          return (
            <div className="comics-card">
              <img
                src={
                  comic.thumbnail.path +
                  "/standard_xlarge" +
                  "." +
                  comic.thumbnail.extension
                }
                alt=""
              />
              <h2 key={index}>{comic.title}</h2>
              <p>{comic.description}</p>
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

export default Comics;
