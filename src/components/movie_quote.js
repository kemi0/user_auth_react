import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieQuote } from '../actions';

class MovieQuote extends Component {
    componentDidMount(){
        this.props.getMovieQuote();
    }

    render() {
        return (
            <div>
                <h1 className="center">Movie Quote</h1>
                <h2 className="center">{this.props.quote}</h2>
            </div>
        );
    }
}


function mapStateToProps( state ){
    return {
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps, {getMovieQuote} )(MovieQuote);