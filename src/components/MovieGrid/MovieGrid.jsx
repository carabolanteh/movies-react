import React, {useState, useEffect} from 'react';
import { Card } from 'antd';
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import './MovieGrid.sass'
import { Pagination } from "antd";
import Loading from "../Loading";


const { Meta } = Card;

const MovieGrid = ({ url }) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const urlWithPagination = `${url}&page=${page}`;
      const response = await fetch(urlWithPagination);
      const moviesObj = await response.json();
      setTotalPages(moviesObj.total_pages);
      setMovies(moviesObj.results);
    };
    fetchMovies();
  }, [page, url]);

  const handlePageClick = (page) => {
    setPage(page);
  };

  if (movies === undefined) {
    return <Loading />;
  }
  return (
    <section className="cards-section">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
      <div className="paginator">
        <Pagination
          onChange={handlePageClick}
          currentPage={page}
          total={totalPages}
          hideOnSinglePage={true}
        />
        <br />
      </div>
    </section>
  );
};

const MovieCard = ({ movie: { id, title, poster_path } }) => (
  <Link to={`/movie/${id}`}>
    <Card
      hoverable
      style={{ width: 240 }}
      className="card"
      cover={<img alt="example" src={`https://image.tmdb.org/t/p/original${poster_path}`} />}
      actions={[<PlayCircleOutlined className="__icon" key="plus" />]}
    >
      <Meta title={title} />
    </Card>
  </Link>
);

export default MovieGrid;