import {useGetTodoQuery, useGetTodosQuery} from "./store/api/index.js";
import {useState} from "react";

export const TodoApp = () => {
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1)
    const { data: todo, isLoading} = useGetTodoQuery(todoId);
    const handleNextTodo = () => {
        setTodoId(todoId + 1);
    }
    const handlePreviousTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1);
    }
    return(
        <>
            <h1> Todos - RTK Query</h1>
            <hr />
            <h4>{ isLoading ? 'True': 'False' }</h4>
            <pre>{
                JSON.stringify(todo)
            }</pre>
            <button onClick={ handlePreviousTodo }>
                Previous todo
            </button>
            <button onClick={ handleNextTodo }>
                Next todo
            </button>
            {/*<ul>*/}
            {/*    {*/}
            {/*        todos.map( ({ title, id, completed}) => (*/}
            {/*            <li key={id}>*/}
            {/*                <strong> { completed ? 'Done !' : 'Pending' } </strong>*/}
            {/*                { title }*/}
            {/*            </li>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</ul>*/}
        </>
    )
}