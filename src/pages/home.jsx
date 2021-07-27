import React from "react";
import useFetch from "../hooks/useFetch";

import {URL_API, API_KEY} from '../utils/constants';
import { Row, Col } from "antd";

import SliderMovies from '../components/SliderMovies';

import MovieList from "../components/MovieList/MovieList";
import Footer from "../components/Footer";



const Home = () =>{
    
    const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;
    const urlPopular =  `${URL_API}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
    const urlRanked = `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`

    const newMovies = useFetch(url);
    const popularMovies = useFetch(urlPopular);
    const topRanked = useFetch(urlRanked);

    return (
        <div>
            <SliderMovies newMovies={newMovies}/>
            <Row>
                <Col span={12}>
                    <MovieList 
                        title="Películas Populares"
                        popularMovies={popularMovies}
                    />
                </Col>
                <Col span={12}>
                    <MovieList 
                        title="Top Mejores Películas"
                        popularMovies={topRanked}
                    />
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

export default Home;