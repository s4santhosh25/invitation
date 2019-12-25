import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import SwitchToggle from './switch';

class NavBar extends Component {

    state = {
        checked: false
    };

    changetheme(checked) {
        this.setState({ checked }, () => {
            this.props.dispatch({ type: "THEME", data: this.state.checked })
        })
    }

    render() {
        const { mode } = this.props.store.theme;
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Nav>
                    <Link className={`navbar-brand ${mode}`} to={'/'}>Wedding Invitation</Link>
                    <SwitchToggle {...this.props} checked={this.state.checked} changetheme={(data) => this.changetheme(data)} />
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#countdown" className={mode}>Count Down</Nav.Link>
                        <Nav.Link href="#address" className={mode}>Address</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#time-line" className={mode}>Time Line</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#map" className={mode}>Location</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

export default connect(
    mapStateToProps
)(NavBar)
