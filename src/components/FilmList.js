import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {

    // const filmNodes = films.map(film => {
    //     return <li key={film.id}><a href={film.url}>{film.name}</a></li>
    // })

    const filmNodes = films.map(film => {
        return <Film key={film.id} film={film}/>
    })
    
    return(
        <>
        <ul>
        {filmNodes}
        </ul>
        </>
    )

};

export default FilmList;