import React from "react";
import Loading from '/Users/mjoon/Desktop/dev/NomadCoders/react-for-beginners/src/img/loading.gif'
import '../css/Loading.css'
function LoadingPage() {
    return(
        <div id="loading-body">
            <img src={Loading} alt="loadimg" />
        </div>
    )
}

export default LoadingPage;