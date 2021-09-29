import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

export const FetchingDataFromApi = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    const getResData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=bd5708ca741fb05a92db321568fee43f"
        );
        setResData(response.data);
        console.log(resData);
      } catch (error) {
        console.log(error);
      }
    };
    getResData();
  }, []);

  return (
    <div>
      <h1>Popular Movies:</h1>
      <Row>
        {resData.results &&
          resData.results.map((item) => (
            <Card style={{ width: "18rem" }} md={4}>
              <Card.Img variant="top" src={item.poster_path} />
              <Card.Body>
                <Card.Title>Release Date: {item.release_date}</Card.Title>
                <Card.Title>Title : {item.title}</Card.Title>
                <Card.Title>Overview : {item.overview}</Card.Title>
              </Card.Body>
            </Card>
          ))}

        <h1>Latest Movies:</h1>

        {resData.results &&
          resData.results.map((item) => (
            <Card style={{ width: "18rem" }} md={4}>
              <Card.Img variant="top" url={item.poster_path} />
              <Card.Body>
                <Card.Title>Release Date: {item.release_date}</Card.Title>
                <Card.Title>Title : {item.title}</Card.Title>
                <Card.Title>Overview : {item.overview}</Card.Title>
              </Card.Body>
            </Card>
          ))}
      </Row>
    </div>
  );
};
