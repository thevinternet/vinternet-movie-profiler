import React from 'react';

const Form = (props) => {

  return (
    <div className="panel">
      <div className="control">
        <form onSubmit={ props.loadMovies }>
          <input type="hidden" name="filter" value="now_playing" />
          <input type="hidden" name="title" value="Movies Now Showing" />
          <input type="submit" value="Movies Now Showing" />
        </form>
        <form onSubmit={ props.loadMovies }>
          <input type="hidden" name="filter" value="upcoming" />
          <input type="hidden" name="title" value="Upcoming Movies" />
          <input type="submit" value="Upcoming Movies" />
        </form>
        <form onSubmit={ props.loadMovies }>
          <input type="hidden" name="filter" value="popular" />
          <input type="hidden" name="title" value="Most Popular Movies" />
          <input type="submit" value="Most Popular Movies" />
        </form>
      </div>
    </div>
  )
}

export default Form;
