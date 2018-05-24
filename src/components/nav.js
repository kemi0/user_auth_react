import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../actions';

class Nav extends Component {
    renderLinks(){
        const { auth, changeAuth } = this.props;
        // const btnStyle = {
        //     width: '131px'
        // };

        if(auth){
            return (
                <Fragment>
                    <li>
                        <Link to="/movie-quote">Movie Quote</Link>
                    </li>
                    <li>
                        <Link to="/secret-doc">Secret Doc</Link>
                    </li>
                    <li>
                        <Link to="/operative-list">Operative List</Link>
                    </li>
                    <li>
                        <Link to="/sign-out">Sign Out</Link>
                    </li>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <li>
                    <Link to="/sign-in"> Sign In</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </Fragment>
        );
    }

    render(){
        return (
            <nav className="yellow lighten-1" style={{ padding: '0 12px' }}>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo style={color: black}">TMZ Reloaded</Link>
                    <ul className="right ">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, { changeAuth: changeAuth })(Nav);
