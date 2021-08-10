import { useState } from 'react';
import {Row, Col, Button} from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import useFetch from '../../hooks/useFetch';
import {URL_API, API_KEY} from '../../utils/constants';
import Loading from '../../components/Loading';
import ModalVideo from '../../components/ModalVideo';
import { PlaySquareOutlined } from "@ant-design/icons";

import './movie.sass';

const Movie = () =>{
    const {id} = useParams();
    
    const urlInfo = `${URL_API}/movie/${id}?api_key=${API_KEY}&language=es-ES`;
    const urlVideo = `${URL_API}/movie/${id}/videos?api_key=${API_KEY}&language=en-EN`;
    const movieInfo = useFetch(urlInfo);

    const movieVideo = useFetch(urlVideo);


    if(movieInfo.loading || !movieInfo.result || !movieVideo.result){
        return <Loading/>;
    }
    if(movieVideo.result.results.length > 0){
        const{
            result: {
                results: [videoInfo],
            },
        } = movieVideo;
        return < RenderMovie movieInfo={movieInfo} videoInfo={videoInfo} />;
    }else{
        return(
            <h1 className="provisory-title">No encontramos datos de esa película</h1>
        )
    }
};

const RenderMovie = props =>{
    const {
        movieInfo: {
            result: {
                backdrop_path,
                poster_path
            }
        },
        videoInfo
    } = props;

    const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`

    return(
        <div 
            className="movie"
            style={{backgroundImage: `url('${backdropPath}')`}}
            >
                <div className="movie__dark">
                    <Row className="extra">
                        <Col 
                            span={8} 
                            offset={3} 
                            className="movie__poster"
                        >
                            <PosterMovie image={poster_path}/>
                            
                        </Col>
                        <Col 
                            span={10} 
                            className="movie__info"
                        >
                            <ComponentMovieInfo movieInfo={props.movieInfo} videoInfo={videoInfo}/>
                        </Col>
                    </Row>
                </div>
        </div>
    )
}

const PosterMovie = props =>{
    const { image } = props;
    const posterPath = `https://image.tmdb.org/t/p/original${image}`;

    return (
        <div style={{backgroundImage: `url('${posterPath}')`}}></div>
    )
}

const ComponentMovieInfo = ({
    movieInfo: {
        result: { 
            title, id, release_date, genres, overview 
        }
    },
    videoInfo: { key, site },
  }) => {
    
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const closeModal = () => setVisible(false);

    const renderVideo = () => {
        if (key && site) {
            return(
                <div>
                    <Button
                    icon={<PlaySquareOutlined />}
                    onClick={showModal}
                >
                    Ver Trailer 
                </Button>
                <ModalVideo
                        videoKey={key}
                        videoPlatform={site}
                        isOpen={visible}
                        isClose={closeModal}
                    />
                </div>
                
            )
        }
    }


    return(
        <div>
            <div className="movie__info">
                <h1>
                    {title}
                    <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
                </h1>
                {renderVideo()}
                
            </div>
            <div className="movie__content">
                <h3>General</h3>
                <p>{overview}</p>
                <h3>Géneros</h3>
                <ul>
                    {genres.map(gen=>(
                        <li key={gen.id}>{gen.name}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

export default Movie;