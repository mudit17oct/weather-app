import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main';
import { Router } from '@reach/router';
import Details from './components/detail'
import Search from './components/main'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Router>
                    <Search path="/" />
                    <Details path="/details/:id" />
                </Router>
                <Footer />

            </div>
        );
    }
}
