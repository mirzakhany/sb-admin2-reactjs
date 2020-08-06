import React from "react";

class ActionBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "none"
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleAction() {
        this.props.onAction(this.state.value);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (

            <div id={this.props.id} className={this.props.className} aria-controls="dataTable">
                <label>Actions:
                    <select className={this.props.selectClassName} value={this.state.value} onChange={this.handleChange}>
                        <option value="none" selected="">-------</option>
                        {this.props.actions.map(a =>(
                            <option value={a.retValue}>{a.text}</option>
                        ))}
                    </select>
                    <a className={this.props.btnClassName} role="button" onClick={() => this.handleAction()} href="#">Go</a>
                </label>
            </div>
        )
    }
}

export default ActionBar;