import React, {Component} from 'react';
import "./filter-bar-component.css";

class FilterBarComponent extends Component {
    state = {
        label: '',
        buttonFilters: [
            'all',
            'done',
            'active',
            'important'
        ]
    };
    searching = (event) => {
        let word = event.target.value;
        this.props.onSearch(word);
    };
    render() {
        const elements = this.state.buttonFilters.map((el)=>{
            return (
                <button onClick={()=>this.props.onFilter(el)}>{el}</button>
            )
        });
        return (
           <div>
               <input placeholder="Enter taks to search" value={this.state.value} onChange={this.searching}/>
               {elements}
           </div>
        );
    }
}

export default FilterBarComponent;
