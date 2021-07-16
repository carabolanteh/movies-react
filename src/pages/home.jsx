import useFetch from "../hooks/useFetch";
// import Loading from "../components/Loading"

import {URL_API, API_KEY} from '../utils/constants';
import SliderMovies from '../components/SliderMovies';




const Home = () =>{
    
    const url = `${URL_API}/movie/now-playing?api_key=${API_KEY}&language=en-ES&page=1`;

    const newMovies = useFetch(url);

    // const movies = useFetch(url);
    // const url = "https://api.themoviedb.org/3/movie/popular?api_key=20734de95bb307848273312ec09fe030&language=en-ES&page=1"
    // const movies = useFetch(url);
    

    return (
        <div>
            <SliderMovies newMovies={newMovies}/>
        </div>
    )
}

export default Home;