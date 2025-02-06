import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./allMontains.scss"
import {  Button } from '@mui/material';

const API_KEY = "48648270-32e7d5bc229e52c5a6c3252bc";  
const BASE_URL = "https://pixabay.com/api/";

 export const AllMountains = () => {
  const [mountains, setMountains] = useState<TMountain[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?key=${API_KEY}&q=mountains&image_type=photo&per_page=12`)
      .then((res) => setMountains(res.data.hits))
      .catch((err) => console.log(err));
  }, []);

  return (
   
    <div className="container">
      {mountains.map((el) => (
        <div className="mountain" key={el.id}>
          <img alt={el.type} src={el.webformatURL} />
          <Link to={`/mountains/${el.id}`} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" className="button">
              Read More
            </Button>
          </Link>
        </div>
      ))}
    </div>
 
    )};