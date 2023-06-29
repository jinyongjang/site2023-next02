"use client";
import React, { useEffect, useState } from "react";
// import "./page.module.scss";
import MovieCont from "@/components/movie/MovieCont";
import ContTitle from "@/components/title/ContTitle";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=310e025fb6da176e86a5210874607f40"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setMovies(data.results);
    };
    getData();
  }, []);

  console.log(movies);

  return (
    <>
      <ContTitle title="movie" />
      <MovieCont movies={movies} />
    </>
  );
};

export default Movie;
