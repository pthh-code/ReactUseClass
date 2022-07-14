import React from 'react';
import './ListTodo';
import AddTodo from './AddTodo';
import Color from '../HOC/Color';

class ListTodo extends React.Component{
    state={listTodos:[
        {id:'todo1', title:'doing framework 1' },
        {id:'todo2', title:'doing framework 2' },
        {id:'todo3', title:'doing framework 3' }
    ],
    editTodo: {}

    }
    //Lam cho add trong Add input box, enter text roi bam nut Add
    addNewTodo = (todo) => {
    // trong comment la cach lam khac - 
    // let currentListTodo = this.state.listTodos;
    // currentListTodo.push(todo);
    this.setState({
        listTodos:[...this.state.listTodos, todo]
        //,
         // listTodos: currentListTodo
    })
    }
    handleDeleteTodo=(todo)=>{
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item=>item.id !== todo.id);
        this.setState({listTodos: currentTodos})
        alert('The item deleted!!')
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            alert("Update todo succeed!")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })


    }


    handleOnchangeEditTodo=(event)=>
    {
        let editTodoCopy = {...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
        
    }


render(){
    let { editTodo,listTodos} = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log('>>> check empty object:', isEmptyObj);
    return(
        <div className="list-todo-container">
            {/* truyen cho con */}
            <AddTodo 
                addNewTodo={this.addNewTodo}
            />
            <div className="list-todo-content">
                {
                    listTodos && listTodos.length>0 &&
                    listTodos.map((item,index)=>{
                        return(
                            <div className="todo-child" key={item.id}>
                                                                {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>

                                    }
                            
                            <button className="edit"
                              onClick={() => this.handleEditTodo(item)}
                              >
                                  {isEmptyObj === false && editTodo.id === item.id ?
                                      'Save' : 'Edit'
                                  }

                            </button>
                            <button className="delete"
                            onClick={()=>this.handleDeleteTodo(item)}
                            >Delete</button>
                        </div> 
                        )
                    }
                    )
                }
            </div>
    </div>
    )
}
}

//export default ListTodo;
export default Color (ListTodo);