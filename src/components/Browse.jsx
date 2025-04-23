import Header from "./Header";
import useTrendingMovies from "../Hooks/useTrendingMovies";
const Browse = ()=>{

    useTrendingMovies();
    return(
        <div>
            <Header/>
        </div>
    );
}

export default Browse;