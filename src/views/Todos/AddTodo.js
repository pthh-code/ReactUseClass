import React from 'react';

class AddTodo extends React.Component{
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    
    handleAddTodo = () => {
        if(!this.state.title)
        {
            alert('Please enter title');
            return;
        }
        let todo={
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        //goi nguoc len cha
        this.props.addNewTodo(todo);
        this.setState(
            {title:''}
        )
        }
    render(){
        // save lai state
        let { title } = this.state;
        return(
            <div className="add-todo">
            <input type="text" value={title}
            onChange={(event) => this.handleOnChangeTitle(event)}
            />
            <button type="button" className="add"
               onClick={() => this.handleAddTodo()} 
            >Add</button>
            </div>
        )
    }

}
export default AddTodo;