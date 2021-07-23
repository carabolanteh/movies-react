import {List, Avatar, Button} from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { RightOutlined } from '@ant-design/icons';
import './MovieList.sass';

const MovieList = props => {

    const {title, popularMovies} = props;


    if(popularMovies.Loading || !popularMovies.result){
        return (
            <Loading />
        )
    }
    
    return(
        <List
            className="movie-list"
            size="default"
            header={<h2>{title}</h2>}
            bordered
            dataSource={popularMovies.result.results}
            renderItem={movie=> <RenderMovie movie={movie} />}
        />
    )
}

const RenderMovie = props => {
    const {
        movie: {
            poster_path,
            id,
            title
        } 
    } = props;

    
    const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`


    return(
        <List.Item className="movie-list__movie">
            <List.Item.Meta
                avatar={<Avatar src={posterPath} />}
                title={<Link to={`/movie/${id}`}>{title}</Link>}
            />
            <Link to={`/movie/${id}`}>
                <Button 
                    type="primary"
                    shape="circle"
                    icon={<RightOutlined />} 
                >
                </Button>
            </Link>
        </List.Item >
    )
}

export default MovieList;