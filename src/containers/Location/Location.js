import React, { Component } from 'react';
import './Location.css';

class Location extends Component {

    constructor() {
        super();
        this.state = { 
            error: null,
            isLoading: true,
            locations: [] 
        }
    }

    componentDidMount() {
        this.setState({ isLoading: false,
            locations: 
                [
                    { city: "Hickory Hills, IL" },
                    { city: "Huntington Beach, CA" },
                    { city: "Hale, MO" }
                ]
             });
        
    }

    render() {
        const { error, isLoading, locations } = this.state;
        return (
            <div className="Location">
                <div className="container">

                    <div className="section-title">
                        <h2>Riders Location</h2>
                    </div>

                    <div className="row d-flex justify-content-center">
                        
                        <ul class="list-group list-group-flush">
                            {
                                locations.map(location => (
                                    <li class="list-group-item">{location.city}</li>
                                ))
                            }
                        </ul>
                        
                    </div>
                </div>
            </div>
            
        );
    }

}

export default Location;