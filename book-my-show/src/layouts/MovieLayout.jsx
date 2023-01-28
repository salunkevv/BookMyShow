import React, { Component } from 'react'
import MovieNavbar from '../components/Navbarcomponet/MovieNavbar'

const MovieLayoutHoc =
(Component) =>
({...props}) => {
    return (
        <div>
            <MovieNavbar />
            <Component {...props} />
            <div>Footer</div>
        </div>
    )
}

export default MovieLayoutHoc