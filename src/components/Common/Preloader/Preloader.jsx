import React from 'react';
import preloader from "../../../static/images/Spinner-1s-200px.svg";

function Preloader(props) {
    return (
        <div>
            <img src={preloader} alt=""/>
        </div>
    );
}

export default Preloader;