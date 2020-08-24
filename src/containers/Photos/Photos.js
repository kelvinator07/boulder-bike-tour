import React, { Component } from 'react';
import './Photos.css';
import Loader from '../../components/UI/Loader/Loader';

class Photos extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            error: null,
            page: 1,
            perPage: 40,
            photos: []
        };
    }

    
    componentDidMount() {
        this.fetchPhotos(this.state.page, this.state.perPage)
    }

    componentDidUpdate(e) {
        console.log('componentDidUpdate > ', e)
        // this.setState({ isLoading: true })
    }

    fetchPhotos = (page) => {
        const url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=736e2f4414385f87df595b0691038f22&tags=bikerace,BoulderBikeTour&page="+page+"&per_page="+this.state.perPage+"&format=json&nojsoncallback=1";
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('Data > ', result)
                    this.setState({
                        isLoading: false,
                        photos: result.photos.photo
                    });
                },
                (error) => {
                    console.log('Error > ', error)
                    this.setState({
                        isLoading: false,
                        error
                    });
                }
            )
        this.setState({ page })
    }

    handlePageClick = (page) => {
        this.setState({ isLoading: true })
        console.log("handlePageClick for page ", page)
        this.fetchPhotos(page);
    }

    handlePage = (type) => {
        this.setState({ isLoading: true })
        const page = type === "pre" ? this.state.page - 1 : this.state.page + 1
        if (page === 0) return
        this.fetchPhotos(page);
    }

    render() {

        const { error, isLoading, photos } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (isLoading) {
            return <Loader show={this.state.isLoading} />;
        } else {
            return (
                <div className="Photos">

                    <div className="d-flex row justify-content-between py-5">
                        <div className="section-title">
                            <h2>Flickr Photos</h2>
                        </div>

                        <div className="pagination">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination ">
                                    <li className={ this.state.page == 1 ? "page-item disabled" : "page-item" }>
                                    <a className="page-link" onClick={() => this.handlePage("pre")} >Previous</a>
                                    </li>
                                    {
                                        [1,2,3,4].map(page => {
                                            return (
                                                    <li className={ this.state.page == page ? "page-item active" : "page-item" }>
                                                        <a className="page-link" onClick={() => this.handlePageClick(page)}>{page}</a>
                                                    </li>
                                            ) 
                                        })
                                    }
                                    <li className={ this.state.page == 4 ? "page-item disabled" : "page-item" }>
                                    <a className="page-link" onClick={() => this.handlePage("next")}>Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    

                    <div className="row card-deck">
                        {photos.map(photo => (
                            <div className="col-lg-3 col-md-6" key={photo.id}>
                                <div className="card">
                                    <img className="card-img-top" src={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"} />
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            );
        }
    }

}

export default Photos;