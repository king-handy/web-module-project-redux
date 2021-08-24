import React from 'react';

import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    const movies = [];

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title {props.title}</th>
                    <th>Director {props.director}</th>
                    <th>Genre {props.genre}</th>
                    <th>Metascore {props.metascore}</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=> (<MovieListItem key={props.movie.id} movie={props.movie}/>))
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        title: state.title,
        director: state.director,
        genre: state.genre,
        metascore: state.metascore
    }
}

export default connect(mapStateToProps, {})(MovieList); 