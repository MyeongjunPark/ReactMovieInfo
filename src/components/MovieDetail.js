import "../css/reset.css";
import "../css/MovieDetail.css";
function MovieDetail({ title, genres, description, rating, runtime, bgImg, coverImg }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('${bgImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div id="detail-body">
        <div id="cover-img">
          <img src={coverImg} alt="coverImg" />
        </div>
        <div id="info-body">
          <div id="title">
            <span>{title}</span>
          </div>

          <div id="rating-genres">
            <div>Rating: {rating} / 10</div>
            <div>{genres.map((item) => `${item}`).join(`/`)}</div>
            <div>Runtime: {runtime} minute</div>
          </div>

          <div id="description">
            <div>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
