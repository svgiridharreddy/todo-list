interface TodoItemProps{
  item: {id: number,title: string, completed: boolean},
  handleDelete: (id: number)  => void,
  updateTodoItem: (id: number) => void,
  toggleCompletion:(id: number) => void,
}


const TodoItem: React.FC<TodoItemProps> = ({item,handleDelete,updateTodoItem,toggleCompletion}: TodoItemProps ) => {
  return(
    <>
      {item.title && <div>
        <span>{item.title}</span>
        <span><button type="button" onClick={()  => toggleCompletion(item.id)}>{item.completed ? "Move to todo" : "Mark as Done" }</button></span>
        <span><button type="button" onClick={()  => updateTodoItem(item.id)}>Edit</button></span>
        <span><button type="button" onClick={()  => handleDelete(item.id)}>Delete</button></span>
        </div>
      }
    </>
  )

}

export default TodoItem