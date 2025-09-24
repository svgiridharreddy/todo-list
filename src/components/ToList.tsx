import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import {FixedSizeList as List, ListChildComponentProps} from 'react-window'
import axios from "axios";

type Todo  = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
const TodoList: React.FC  = () => {
  const defautlState = { userId: Date.now(), id: Date.now(), title: "",completed: false }
  const [todo,setTodo] = useState<Todo>(defautlState);
  const [todoList,setTodoList] = useState<Todo[]>([])

  useEffect(() => {
    fetchTodos()
  },[])

  const fetchTodos  = async (): Promise<void>   => {
    try {
        // let originalUsers: Users = [...users]
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log("respsone is", response)
        setTodoList((prevTodos) => {
          const updated = [...prevTodos, ...response.data];
          return updated;
        })

      } catch (error) {
        console.log(error)
      }
  }
  
  const handleChange  = (event: React.ChangeEvent<HTMLInputElement>):void  => {
    const {value} = event.target
    setTodo({... todo, title: value})
  }

  const handleAdd = ()  => {
    if (!todo?.title.trim()) return;
    const newTodo: Todo  = {...todo,id: Date.now()}
    setTodoList((prev) => [newTodo,...prev])
    setTodo(defautlState);

  }
  const handleDelete   = (id: number):void  => {
    setTodoList((prev) => prev.filter((item) => item.id !== id))
  }

  const getItem = (id:number): Todo | undefined => {
    return todoList.find(item  => item.id === id)
  }

  const updateTodoItem = (id: number): void => {
    const item  = getItem(id)
    if(item){
      setTodo(item)
    }
  }

  const toggleCompletion = (id: number): void => {
  setTodoList((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
  );
};

const Row = ({index,style,data}: {
  index: number,
  style: React.CSSProperties,
  data: {
    todoList: Todo[],
    handleDelete: (id: number) => void;
    updateTodoItem: (id: number) => void;
    toggleCompletion: (id: number) => void;
}})  => {
  const item = data.todoList[index];

  return (
    <div style={{ ...style, padding: "0 10px", borderBottom: "1px solid #eee" }}>
      <TodoItem
        key={item.id}
        item={item}
        handleDelete={data.handleDelete}
        updateTodoItem={data.updateTodoItem}
        toggleCompletion={data.toggleCompletion}
      />
    </div>
  )
}
  
  return(
    <>
      <input type="text" name="todo" value={todo?.title} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      {/* {todoList.length > 0 && (
        <ul>
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              updateTodoItem={updateTodoItem}
              handleDelete={handleDelete}
              toggleCompletion={toggleCompletion}
            />
          ))}
        </ul>
      )} */}
      <List height={500} itemCount ={todoList.length} itemSize={20} width={400} itemData={
        {
          todoList,
          handleDelete,
          updateTodoItem,
          toggleCompletion,
      } 
      }>
        {Row}
      </List>
    </>
  )
}

export default TodoList