import React from 'react';
import { Carousel, Button } from 'antd'
import { Link } from 'react-router-dom'
import './SliderMovies.sass';
import Loading from '../Loading';


const SliderMovies = props => {

    const { newMovies } = props;

    if(newMovies.loading || !newMovies.result){
        return <Loading/>
    }else{
        const { results } = newMovies.result;

        return (
            <Carousel outplay className='slider-movies'>
            {results.map(movie=>(
                <Movie
                        key={movie.id}
                        movie={movie}
                    />
            ))}
            </Carousel>
        );
    }

    
};

// componente dendro de componente
const Movie = props =>{
    const {
        movie:{
            id,
            backdrop_path,
            title,
            overview
        }
    } = props;

    const backDropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`

    return(
        <div    
            className="slider-movies__movie"
            style={{backgroundImage:`url('${backDropPath}')`}}
        >
            <div className="slider-movies__movie-info">
                <div>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <Link to={`/movie/${id}`}>
                        <Button type="primary">Ver más</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SliderMovies;