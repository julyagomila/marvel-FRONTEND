import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Comics() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel---backend.herokuapp.com/getAllCharacters"
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
    <main className="main-favoris">FAVORIS</main>
  );
}

export default Comics;
