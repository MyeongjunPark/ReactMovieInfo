import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import MovieDetail from '../components/MovieDetail';
import LoadingPage from '../components/LoadingPage';

function Detail(){
    const [detailLoad,setDetailLoad] = useState(true)
    const [movieData,setMovieData] = useState([])
    const {id}=useParams()
    const getMovie =async()=>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        console.log(json.data.movie)
        setMovieData(json.data.movie)
        setDetailLoad(false)

    }
    useEffect(()=>{
        getMovie()
    }, [])
    return (
        <div>
        {detailLoad ?(<LoadingPage/>):<MovieDetail 
        title={movieData.title} 
        genres={movieData.genres}  
        description={movieData.description_full}
        rating={movieData.rating}
        runtime={movieData.runtime}
        bgImg={movieData.background_image}
        coverImg={movieData.medium_cover_image}
        smallCoverImg={movieData.small_cover_image}
        />}
        </div>
    )
}
export default Detail;