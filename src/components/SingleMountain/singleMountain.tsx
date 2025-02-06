import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./singleMountain.scss";


const API_KEY = "48648270-32e7d5bc229e52c5a6c3252bc";  
const BASE_URL = "https://pixabay.com/api/";



const SingleMountain: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [mountain, setMountain] = useState<TMountain>();
  const [error, setError] = useState<string>("");
  const [Isloading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (id) {
      axios
        .get(`${BASE_URL}?key=${API_KEY}&q=mountains&image_type=photo&per_page=18`)
        .then((res) => {
          const foundMountain = res.data.hits.find(
            (item: TMountain) => item.id === parseInt(id)
          );
          if (foundMountain) {
            setMountain(foundMountain); 
            setError(""); 
          } else {
            setError("Mountain not found."); 
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
          setError("An error occurred while fetching data."); 
        });
    }
  }, [id]);

  return (
    <div className="container">
    {Isloading ? (
      <p>Loading...</p> 
    ) : error ? (
      <p>{error}</p> 
    ) : mountain ? (
     <>
       
          <img src={mountain.largeImageURL} alt="Mountain Img"  className="Image"/>
         <div className="details">
          <p><strong>Name:</strong> {mountain.type}</p>
          <p><strong>Size:</strong> {mountain.imageSize} KB</p>
          <p><strong>Views:</strong> {mountain.views}</p>
          <p><strong>Downloads:</strong> {mountain.downloads}</p>
          <p><strong>Likes:</strong> {mountain.likes}</p>
          <p><strong>Comments:</strong> {mountain.comments}</p>
          <p><strong>Photographer:</strong> {mountain.user}</p>
           </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleMountain;
