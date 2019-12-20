import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Countdown from 'react-countdown-now';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Card extends Component {

    renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <div className="count-down">
                <div className="mt-1 ml-1 block">
                    <span className="days">Time up!</span>
                    <div className="smalltext">Time</div>
                </div>
            </div>
        } else {
            return (
                <div className="count-down">
                    {[...new Array(4)].map((item, index) => (<div className="mt-1 ml-1 block" key={index}>
                        <span className="days">{index === 0 ? days : index === 1 ? hours : index === 2 ? minutes : seconds}</span>
                        <div className="smalltext">{index === 0 ? 'Days' : index === 1 ? 'Hours' : index === 2 ? 'Minutes' : 'Seconds'}</div>
                    </div>))}
                </div>)
        }
    };

    render() {
        return (
            <div className="App" >
                <div className="card">
                    <div className="image-container">
                        <img className="card-img-top" src={require('./images/heart.png')} alt="heart" />
                        <div className="content">
                            <div className="txt">Preethi</div>
                            <div className="txt">Weds</div>
                            <div className="txt">Vignesh</div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4 ml-3 mr-3">
                        <h3 className="header-couple-names text-center h1-responsive couple">Preethi &amp; Vignesh</h3>
                    </div>
                    <div className="row justify-content-center mt-1 ml-3 mr-3">
                        <h5 className="header-invitation-text text-center h3-responsive couple-text">
                            Together with their families, request the pleasure of your company at their wedding celebration!
                        </h5>
                    </div>
                    <hr className="gap" />
                    <div className="count-down-container pb-3 mt-3">
                        <div className="row justify-content-center ml-3 mr-3">
                            <h2 className="header-invitation-text text-center h2-responsive mb-0 mt-2">
                                <a className="header-invitation-text" name="countdown">Wedding Countdown</a></h2>
                        </div>
                        <hr />
                        <Countdown date={new Date('2020-02-26T09:30:00')} renderer={this.renderer} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"><a className="card-title" name="address">Address</a></h5>
                        <p className="card-text">
                            Door No.1 Jegajeevan ram nagar, agaram main road, camp road, selaiyur, Chennai, Tamil Nadu 600073
                    </p>
                    </div>
                    <div className="wedding-container row justify-content-center ml-1 mr-1">
                        <div className="wedding-card card pink lighten-1 text-center z-depth-2 justify-content-center m-3 p-2 col-xs-12 col-md-4">
                            <div className="card_title">
                                <h2 className="main-events-title text-center h2-responsive mb-0">Wedding</h2>
                            </div>
                            <hr />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6 justify-content-center">
                                        <span className="main-event-icon fa fa-clock-o" style={{ fontSize: "26px" }}></span>
                                        <br />
                                        <br />
                                        <span className="white-text text-monospace font-weight-bold h5-responsive mt-2">
                                            09:30 AM</span>
                                    </div>
                                    <div className="col-6 justify-content-center">
                                        <span className="main-event-icon fa fa-calendar" style={{ fontSize: "26px" }} ></span>
                                        <br />
                                        <br />
                                        <span className="white-text text-monospace font-weight-bold h5-responsive mt-2">
                                            Wed, 26 Feb, 2020</span>
                                    </div>
                                    <br />
                                </div>
                                <p className="white-text h5-responsive mt-4 mb-2 ml-2 mr-2">
                                    Reddiapatti Mahal
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="gap" />
                    <div className="time-line-container">
                        <div className="card-body pt-0 time-line-header">
                            <h5 className="card-title"><a name="time-line">Time Line</a></h5>
                        </div>
                        <VerticalTimeline animate={true}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#a22a21 ', color: 'white' }}
                                contentArrowStyle={{ borderRight: '7px solid #dddddd' }}
                                date="Feb 25, 2019"
                                iconStyle={{ background: '#f44336', color: '#fff' }}
                                icon={<span className="main-event-icon fa fa-clock-o" style={{ fontSize: "36px", color: "#131111", margin: "2px 5px" }}></span>}>
                                <h3 className="vertical-timeline-element-title">Engagement</h3>
                                <h4 className="vertical-timeline-element-subtitle">Reddiapatti Mahal</h4>
                                <p>10.00 AM</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#a22a21 ', color: 'white' }}
                                contentArrowStyle={{ borderRight: '7px solid #dddddd' }}
                                date="Feb 26, 2019"
                                iconStyle={{ background: '#f44336', color: '#fff' }}
                                icon={<span className="main-event-icon fa fa-clock-o" style={{ fontSize: "36px", color: "#131111", margin: "2px 5px" }}></span>}>
                                <h3 className="vertical-timeline-element-title">Wedding</h3>
                                <h4 className="vertical-timeline-element-subtitle">Reddiapatti Mahal</h4>
                                <p>09.30 AM</p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                    <hr className="gap" />
                    <button type="button" className="btn btn-danger location">
                        <Link to="/map" name="map">
                            Location
                        </Link>
                    </button>
                </div>
            </div >
        );
    }
}

export default Card;