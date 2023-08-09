import { useGetTodosQuery } from "./store/api/index.js";

export const TodoApp = () => {

    const { data: todos = [], isLoading } = useGetTodosQuery();
    return(
        <>
            <h1> Todos - RTK Query</h1>
            <hr />
            <h4>{ isLoading ? 'True': 'False' }</h4>
            <pre> ... </pre>
            <ul>
                {
                    todos.map( ({ title, id, completed}) => (
                        <li key={id}>
                            <strong> { completed ? 'Done !' : 'Pending' } </strong>
                            { title }
                        </li>
                    ))
                }
            </ul>
            <button>
                Next todo
            </button>
        </>
    )
}