import React from 'react';
import { useParams } from 'react-router-dom'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

async function fetchMovie(id) {
    try {
        const response = await fetch(`http://localhost:9000/movies/${id}`);
        const json = await response.json();
        return json
		} catch (error) {
        console.log("error", error);
		}
}

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        }
    }

    async componentDidMount() {
        const movie = await fetchMovie(this.props.params.movieId)
        this.setState({ movie: movie });
    }

    useEffects() {
        console.log("fuck")
    }

    render() {
        return (
            <div className='movie-detail container'>
                <img className='movie-banner' src={this.state.movie.banner} alt=""/>
                <div className="detail-body">
                    <div>
                        <h2 className="card-title">{this.state.movie.title}
                            <span className='release-year'> {this.state.movie.release_year}</span>
                        </h2>
                        <div className='detail-description'>
                            <p className='card-description'>{this.state.movie.description}</p>
                        </div>
                    </div>
                    <div className='images'>
                        <img className='detail-img' src={this.state.movie.image} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
export default withParams(MovieDetail);