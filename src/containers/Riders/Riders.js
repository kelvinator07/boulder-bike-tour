import React, {Component } from 'react';
import './Riders.css';
import Loader from '../../components/UI/Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';

class Riders extends Component {

    constructor() {
        super();
        this.state = { 
            error: null,
            isLoading: true,
            riders: [] 
        }
    }

    componentDidMount() {
        this.setState({ isLoading: false,
            riders: 
                [
                    { firstName: "Dustin", lastName: "Green", city: "Hickory Hills, IL" },
                    { firstName: "Jason", lastName: "Finn", city: "Huntington Beach, CA" },
                    { firstName: "Howard", lastName: "Thompson", city: "Hale, MO" }
                ]
             });

        // fetch("https://www.google.com")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoading: true,
        //                 riders: result.riders
        //             });
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoading: true,
        //                 error
        //             });
        //         }
        //     )
    }

    // template = (className, data) => {
    //     return "<div className="+className+">
    //                 <div className="container">

    //                     <div className="section-title">
    //                         <h2>Riders</h2>
    //                     </div>

    //                     <div className="row d-flex justify-content-center">
    //                         "+data+"
    //                     </div>
                        
    //                     </div>
    //             </div>"
    // }

    render() {

        const { error, isLoading, riders } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (isLoading) {
            return <Loader show={this.state.isLoading} />;
        } else {
            return (

                <div className="Riders">
                    <div className="container">

                        <div className="section-title">
                            <h2>Riders</h2>
                        </div>

                        <div className="row">

                                <div className="card-deck">
                                    {riders.map(rider => (
                                        <div className="col-lg-3 col-md-6" key={rider.name}>
                                            <div className="card">
                                                {/* <span><FontAwesomeIcon icon={faFacebook} /></span> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57 58.25-49.92zm116 39a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64z"/></svg>

                                                {/* <svg class="bd-placeholder-img card-img-top" width="80%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Profile Picture</text></svg> */}
                                                <div className="card-body">
                                                    <h4 className="card-title">{rider.firstName} {rider.lastName}</h4>
                                                    <p className="card-text">City: {rider.city}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                        </div>
                    </div>
                </div>


                
            );
        }
    }

}

export default Riders;