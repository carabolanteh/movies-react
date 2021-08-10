import {URL_API, API_KEY} from '../utils/constants';
import { Typography } from "antd";
import MovieGrid from "../components/MovieGrid";
import './movie/movie.sass';


const { Title } = Typography;

const NewMovies = () => {

  const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;
  console.log(url)
  
    return (
        <div className="page">
            <Title className="__title">Últimos Lanzamientos</Title>
            <MovieGrid url={url} />
        </div>
    )
}

export default NewMovies;