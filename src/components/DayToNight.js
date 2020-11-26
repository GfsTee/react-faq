import React, { Component } from 'react';

class DayToNight extends Component {
    state = {
        isDay: true,
        color: {
            black: { background: '#000', color: '#fff' },
            white: { background: '#fff', color: '#000' }
        }
    }
    handleDayNight = () => {
        this.setState({ isDay: !this.state.isDay });
    }
    render() {
        return (
            // <div className={this.state.isDay ? "day" : "night"}>
            // <div style={this.state.isDay ? { background: '#fff', color: '#000' } : { background: '#000', color: '#fff' }}>
            <div style={this.state.isDay ? this.state.color.white : this.state.color.black}>
                <h1>{this.state.isDay ? "Day" : "Night"}</h1>
                <button onClick={this.handleDayNight}>Change to {!this.state.isDay ? "Day" : "Night"}</button>
            </div>

        );
    }
}

export default DayToNight;

{/* <div style={{ display: this.state.isVisible ? "block" : "none" }}>Lorem ipsum dolor sit amet.</div>
<div style={this.state.isVisible ? { display:  "block" }:{display: "none" }}>Lorem ipsum dolor sit amet.</div> */}