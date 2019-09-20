import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ResultsList from './components/ResultsList';
import Footer from './components/Footer';

const apiKey = process.env.REACT_APP_API_KEY;

class App extends React.Component {

  state = {
    isLoading: true,
    title: '',
    filter: '',
    movies: [],
    errors: null
  }

  getMovies = (event) => {
    const title = event ? event.target.elements.title.value : 'Movies Now Showing';
    const filter = event ? event.target.elements.filter.value : 'now_playing';
    if (event) { event.preventDefault(); }
    fetch(`https://api.themoviedb.org/3/movie/${filter}?api_key=${apiKey}&language=en-GB&page=1`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: title,
          filter: filter,
          movies: data.results,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, error } = this.state;
    return (
      <div>
        <Header />
        <main>
          <div className='container'>
            <Form loadMovies={ this.getMovies } />
            <div className="panel">
              <div className="card">
                { error ? <p>{error.message}</p> : null }
                { !isLoading ? (
                  <div>
                    <h2>Top 20 { this.state.title }</h2>
                    <ResultsList movies={ this.state.movies } />
                  </div>
                ) : (
                  <h2>Loading...</h2>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
