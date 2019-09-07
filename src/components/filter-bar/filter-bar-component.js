import React, {Component} from 'react';
import "./filter-bar-component.css";

class FilterBarComponent extends Component {
    state = {
        label: '',
    };
    searching = (event) => {
        let word = event.target.value;
        this.props.onSearch(word);
    };
    render() {
        return (
           <div>
               <input placeholder="Enter taks to search" value={this.state.value} onChange={this.searching}/>
               <button onClick={()=> this.props.onFilter('')}>All</button>
               <button onClick={() => this.props.onFilter(false)}>Active</button>
               <button onClick={() => this.props.onFilter(true)}>Done</button>
           </div>
        );
    }
}

export default FilterBarComponent;
