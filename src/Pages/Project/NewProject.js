import { useState, useRef } from 'react';
import { withRouter, useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { LModal } from '../../Components';
import { createProject } from '../../Redux/Project/aciton';

export const NewProject = withRouter((props) => {
    const refProjectName = useRef(null);
    const [newProject, setNewProject] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();

    const closeCallback = () => {
        setNewProject(false);
        props.history.goBack();
    }

    const handleSubmit = () => {
        // console.log(refProjectName.current.value)

        dispatch(createProject(refProjectName.current.value, history));
    }

    return (<LModal visible={newProject} onClose={closeCallback} header="Create New Project">
        <div>Create new project form</div>
        <div>
            <span>Project Name:</span>
            <input ref={refProjectName} type="text"></input>
        </div>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </LModal>)
})