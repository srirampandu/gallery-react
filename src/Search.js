import React, { useEffect } from "react";

const Search = ({ match }) => {
  return <div></div>;
};

export default Search;

// import Card from "../components/Card";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function Search() {
//   const { imgname } = useParams();
//   const [searchedMovies, setSearchedMovies] = useState([]);

//   useEffect(() => {
//     getSearchMovie();
//   }, []);

//   const getSearchMovie = async () => {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/search/movie?&query=${imgname}&api_key=facf4cd1a869697ee4194de6e94a4ef4`
//     );
//     const data = await response.json();
//     setSearchedMovies(data.results);
//   };

//   return (
//     <section>
//       <h1>Search results for "{imgname}"</h1>
//       <div>
//         {searchedMovies.map((movie) => {
//           return (
//             <div key={movie.id} movie={movie}>
//               <img
//                 src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Search;
