import { MovieCard } from './MovieCard';

import '../styles/content.scss';

interface MovieProps {
  selectedGenre: { title: string };
  movies: Array<{
    Title: string;
    Poster: string;
    Runtime: string;
    Ratings: Array<{ value: string }>;
  }>  
}

export function Content({movies, selectedGenre}: MovieProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard 
              key ={movie.Title}
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].value} 
            />
          ))}
        </div>
      </main>
    </div>
  )
}