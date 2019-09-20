import React from 'react';

const Result = (props) => {

  const splitDate = props.movie.release_date.split('-');
  const formattedDate = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
  const releaseDate = formattedDate.toDateString();

  return (
    <li>
      <div className="result-list">
        <div className="result-poster">
          <img src={`http://image.tmdb.org/t/p/w154/${props.movie.poster_path}`} alt={ props.movie.title }/>
        </div>
        <div className="result-detail">
          <h3>{ props.movie.title }</h3>
          <p><span>Overview:</span> { props.movie.overview }</p>
          <p><span>Release Date:</span> { releaseDate }</p>
          <p><span>Average Vote:</span> { props.movie.vote_average } / 10</p>
        </div>
      </div>
    </li>
  )
}

export default Result;
