import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        position: undefined
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            console.log('map', position)
            this.setState({
                position
            })
        }
        )
    }

    render() {
        const { position } = this.state;
        return (
            <React.Fragment>
                {position && <Map google={this.props.google}

                    initialCenter={{
                        lat: position ? position.coords.latitude : 0,
                        lng: position ? position.coords.longitude : 0
                    }}>
                    <Marker onClick={this.onMarkerClick} name={'Current location'} />

                    <InfoWindow
                        marker={position}
                        visible={true}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>}
            </React.Fragment>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCXbFJsFnT48tbM4rRPfZW4hSTuQlFaxRg"
})(MapContainer)