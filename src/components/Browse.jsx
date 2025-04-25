import Header from "./Header";
import useTrendingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
const Browse = ()=>{

    useTrendingMovies();
    usePopularMovies();
    
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
}

export default Browse;