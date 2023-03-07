import React from "react";

const Button = () => {
    return(
        <div>
        <a className="button-link" href="https://www.imdb.com/calendar/?region=gb">
        <button className="release-button">View more upcoming releases <span>&#62;</span><span>&#62;</span></button>
        </a>
        </div>
    )
};

export default Button;