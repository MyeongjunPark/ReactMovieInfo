import React from "react";
import Loading from '../img/loading.gif'
import '../css/Loading.css'
function LoadingPage() {
    return(
        <div id="loading-body">
            <img src={Loading} alt="loadimg" />
        </div>
    )
}

export default LoadingPage;