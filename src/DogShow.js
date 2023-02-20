import React, { Component } from "react";
import { Link } from "react-router-dom";
import './DogShow.css'

export default class DogShow extends Component { 
    render() { 
        const {dog} = this.props
        return (
                <div className="DogShow row justify-content-center mt-5">
                    <div className="col-11 col-lg-5">
                        <div className="DogShow-card card">
                            <img src={dog.src} className="card-img-top" alt={dog.name}/>
                            <div className="card-body">
                                <h5 className="card-title">Name: {dog.name}</h5>
                                <p className="card-text text-muted">age: {dog.age} years old</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                {dog.facts.map((fact, i) =>
                                    <li key={`Fact ${i}`} className="list-group-item">{fact}</li>
                                )}
                            </ul>
                            <div className="card-body">
                                <Link to='/dogs' className="btn btn-info">Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}