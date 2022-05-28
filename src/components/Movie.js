import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import '../css/Movie.css'


function Movie({id, coverImg, title}){


    return(
    <div key={id}>


      <div id="movie-box">
            <Link to={`/movie/${id}`}>
              <img style={{borderRadius:'10px'}} src={coverImg} alt={title}/>
            </Link>
      </div>


    </div>
    )
}



export default Movie;