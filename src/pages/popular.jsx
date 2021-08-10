import { URL_API, API_KEY } from "../utils/constants";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { Typography } from "antd";
import './movie/movie.sass';
const { Title } = Typography;


const Popular = () => {
  const url = `${URL_API}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;
  return (
    <div className="page">
      <Title className="__title">Películas Populares</Title>
      <MovieGrid url={url} />
    </div>
  );
};

export default Popular;