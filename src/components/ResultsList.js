import React from 'react';
import Result from './Result';

const ResultsList = (props) => {
  return (
    <ul>
      { props.movies.map((movie) => (
        <Result key={ movie.id } movie={ movie } />
      )) }
    </ul>
  )
}

export default ResultsList;
