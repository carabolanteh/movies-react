import { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { URL_API, API_KEY } from "../utils/constants";
import { Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import './movie/movie.sass';
const { Title } = Typography;

const Search = () => {
  const [currentSearch, setCurrentSearch] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (currentSearch !== "") {
        setUrl(`${URL_API}/search/movie?api_key=${API_KEY}&languaje=es-ES&query=${currentSearch}`);
      }
    }, 2000);
  }, [currentSearch]);

  const handlerOnChange = (input) => setCurrentSearch(input.target.value);

  return (
    <div className="page">
      <Title className="__title">Busca una película</Title>
      <Input
        prefix={<SearchOutlined />}
        placeholder="Ingresá el nombre"
        onChange={handlerOnChange}
        className="input-search"
        size="large"
      />
      <MovieGrid url={url} />
    </div>
  );
};

export default Search;