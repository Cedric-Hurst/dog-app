import React, { Component } from "react";
import { Link } from "react-router-dom";
import './DogHome.css'

export default class DogHome extends Component { 
    render() { 
        return (
            <div>
                <h1 className="display-1 text-center my-4">Pick a Dog</h1>
                <div className="row">
                    {this.props.dogs.map((dog, i) =>
                        <div key={i} className='col-lg-4 Dog text-center'>
                            <Link className='Dog-underline' to={`/dogs/${dog.name}`}>
                                <img src={dog.src} alt={dog.name}/>
                                <h1 className="mt-4" >{dog.name}</h1>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
    )}
}