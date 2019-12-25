import React, { Component } from "react";
import Switch from "react-switch";

export default class SwitchToggle extends Component {
    render() {
        return (
            <label className={`circle ${this.props.store.theme.mode}`} htmlFor="material-switch">
                <Switch
                    checked={this.props.checked}
                    onChange={this.props.changetheme}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={15}
                    width={40}
                    className="react-switch"
                    id="material-switch"
                />
            </label>
        );
    }
}