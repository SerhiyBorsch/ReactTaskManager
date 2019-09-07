import React, {Component} from "react";
import './item.css'

class ItemComponent extends Component {
    render () {
        let {done, important} = this.props;
        let ClassName = ' ';
        if(done) {
            ClassName = 'done';
        }
        if(important) {
            ClassName ='important';
        }
        if(done && important) {
            ClassName = 'importantDone';
        }
        return (
            <span>
                <span className={ClassName} onClick={this.props.onChangeMission}>{this.props.mission}</span>
                <button onClick={this.props.onTagAsImportant}>Mark as important</button>
                <button onClick={this.props.onDelete}>Delete</button>
            </span>
        )
    }
}

export default ItemComponent;
