import { useSelector } from 'react-redux'

function AllUser() {
    const counter = useSelector(state => state.todos.allIds);
    return counter.map(item => {
        return <div>{item}</div>
    })
}

export default AllUser;
