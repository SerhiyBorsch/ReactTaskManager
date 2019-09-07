import React, {Component} from 'react';
import ItemComponent from './item';
import ItemsAddComponent from '../items-add/items-add-component';
import './items-list-component.css';
import ListHeaderComponent from '../list-header/list-header-component';
import FilterBarComponent from "../filter-bar/filter-bar-component";

class ItemsListComponent extends Component {
    state={
        filter: '',
        term: '',
        todoList:[{
            key: 0,
            mission: 'First mission',
            done: false,
            important: false
        },
        {
            key: 1,
            mission: 'Second mission',
            done: false,
            important: false
        },
        {
            key: 2,
            mission: 'Third mission',
            done: false,
            important: false
        }]
    };
    deleteItem = (id) => {
        this.setState(({todoList})=>{
            let idx = todoList.findIndex((el)=>el.key === id);
            todoList.splice(idx, 1);
            return {
                todoList: todoList
            };
        });
    };
    addItem = (newTask) => {
        let newItem = {
            key: 6666666,
            mission: newTask,
            done: false,
            important: false
        };
        console.log(newTask);
        this.setState(({todoList})=> {
            todoList.push(newItem);
            return {
                todoList: todoList
            };
        });
    };
    onChangeMission = (id) => {
        this.setState(({todoList})=> {
           const oldItem = todoList[id];
           const newItem = {
               ...oldItem, done: !oldItem.done
           };
           const newArray = [
               ...todoList.slice(0, id),
               newItem,
               ...todoList.slice(id+1)
           ];
           return {
               todoList: newArray
           };
        });
    };
    tagAsImportant = (id) => {
        this.setState(({todoList}) => {
            const oldItem = todoList[id];
            const newItem = {
                ...oldItem, important: !oldItem.important
            };
            const newArray = [
                ...todoList.slice(0, id),
                newItem,
                ...todoList.slice(id+1)
            ];
            return {
                todoList: newArray
            }
        });

    };
    search = (items, term) => {
        if(term === undefined){
            return items
        }
        return items.filter((item)=>{
            return item.mission.toLowerCase().indexOf(term.toLowerCase()) > -1
        });
    };
    onSearch = (word) => {
        this.setState({
            term: word
        })
    };
    filter = (items, parameter) => {
      if(parameter === '') {
          return items
      }
      if (parameter === true){
          return items.filter((el)=>{
             return el.done === true
          });
      }
      if (parameter === false){
          return items.filter((el)=>{
             return el.done === false
          });
      }
    };
    onFilter = (filter) => {
      console.log(filter);
      this.setState({
          filter
      })
    };
    render() {
        let visibleItems = this.search(this.state.todoList, this.state.term);
        let Items = this.filter(visibleItems, this.state.filter);
        let done = this.state.todoList.filter((el)=> el.done === true).length;
        let toDo = this.state.todoList.length - done;
        let important = this.state.todoList.filter((el)=>el.important === true && el.done === false).length;
        let elements = Items.map((item)=>{
            let {mission, important, done, key} = item;
            return (
                <li><ItemComponent
                    key={key}
                    id={key}
                    mission={mission}
                    important={important}
                    done={done}
                    onChangeMission={()=>this.onChangeMission(key)}
                    onTagAsImportant={()=>this.tagAsImportant(key)}
                    onDelete={()=>this.deleteItem(key)}
                /></li>
            )
        });
        return(
            <div>
                <FilterBarComponent
                    onSearch={this.onSearch}
                    onFilter={this.onFilter}
                />
                <ListHeaderComponent done={done} important={important} toDo={toDo}/>
                <ul>
                    {elements}
                </ul>
                <ItemsAddComponent onAdd={this.addItem}/>
            </div>
        )
    }
}

export default ItemsListComponent;
