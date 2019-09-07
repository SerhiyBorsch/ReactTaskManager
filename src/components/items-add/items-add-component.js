import React, {Component} from 'react';
import './items-add-component.css';

export default class ItemsAddComponent extends Component {
    state = {
        label: '',
    };
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        });
    };
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    onChange={this.onLabelChange}
                    placeholder="Enter things that need to be done"
                    value={this.state.label}
                />
                <button type="submit">Add new item</button>
            </form>
        )
    }
}
