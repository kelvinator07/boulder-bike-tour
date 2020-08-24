import React from 'react';
import './Homee.css';
import aux from '../../hoc/Aux';

const Homee = (props) => {
    return(
        <div className="Homee">

        <div class="bg-boston h-80vh d-flex flex-column justify-content-center align-items-center text-center">
            <div class="col-md-6 px-auto">
                <h1 class="display-4">Watch It Outside Boston 2020 Edition</h1>
                <p class="lead my-3 font-weight-bold text-white">From Aug 5th to 8th, From 6pm to Midnight Everyday</p>
                <p><a class="btn btn-lg btn-primary" href="#preregister" role="button">Pre-Register</a></p>
            </div>
        </div>    

        <main id="main">
            <section id="about" class="section-with-bg">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6">
                            <h2>About Boston Film Festival</h2>
                            <p>Watch it outside Boston edition is an outdoor film festival coming live to Boston to show movies
                             in Boston Public Garden this year from August 5th through 8th, from 6pm to midnight. We can't wait to help the public discover awesome films!.</p>
                        </div>
                        <div className="col-lg-3">
                            <h2>Where</h2>
                            <p>Boston Public Garden, Boston</p>
                        </div>
                        <div className="col-lg-3">
                            <h2>When</h2>
                            <p>Friday to Monday<br/>5th-8th August</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>

    );
}

export default Homee;