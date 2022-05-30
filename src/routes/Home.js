
import {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import '../css/Home.css'
import styled, { createGlobalStyle } from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingPage from '../components/LoadingPage'

const SliderStyle = styled(Slider)`
`
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
         ...style, display: "block",
          background: "transparent",
          right:"30px"
        }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",
       background: "transparent", 
       left:"30px",
      zIndex:'999'}}
      onClick={onClick}
    />
  );
}

function Home() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState('')
  const getMovies = async()=>{
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
      const json = await response.json();
      setMovies(json.data.movies)
      setLoading(false)
  }
  useEffect(()=>{
    getMovies();
  },[]);


  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    autoplay:true,
    pauseOnHover:true,
    arrows:true,
    prevArrow:<SamplePrevArrow/>,
    nextArrow:<SampleNextArrow/>,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };


  return (
    <div id='home'>
      {loading ? (<LoadingPage/>) :
      (
      <div id='home-body'>
        <div id="home-title">
          <h1>Movie Information</h1>
        </div>
        <div id='home-movie'>
        <Slider {...settings}>
          {movies.map((movie)=>{
          return <Movie 
            key={movie.id} 
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            genres={movie.genres}
            rating={movie.rating}
            runtime={movie.runtime}/>
          })}
          </Slider>
        
        </div>

      </div>
      
      )}
    </div>)
}

export default Home;