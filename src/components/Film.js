import React from "react";

const Film = ({film}) => {

    return(
        <li key={film.id}><p><a href={film.url}>{film.name}</a></p></li>
    )
};

export default Film;