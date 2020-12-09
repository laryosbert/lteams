import { useDispatch } from 'react-redux'

let nextTodoId = 0;
function AddUser() {
    const dispatch = useDispatch()
    return (
        <div>
            <span>Add user page:</span>
            <button onClick={() => dispatch({
                type: "ADD_TODO",
                payload: {
                    id: ++nextTodoId,
                    content: "content" + nextTodoId
                }
            })}>
                Increment user
          </button>
        </div>
    )
}

export default AddUser;