import { useState, useRef, useCallback } from 'react';
import { withRouter, useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../Components';
import { useInputHook } from '../../Hooks';

import { createProject } from '../../Redux/Project/aciton';

const NewProject = (props) => {
    // const refProjectName = useRef(null);
    const inpHook = useInputHook("");
    const [newProject, setNewProject] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();

    const closeCallback = useCallback(() => {
        setNewProject(false);
    })

    const handleSubmit = () => {
        dispatch(createProject(inpHook.value, history));
    }

    return (<Modal visible={newProject} onClose={closeCallback} header="Create New Project">
        <div>Create new project form</div>
        <div>
            <span>Project Name:</span>
            <input {...inpHook} type="text"></input>
        </div>
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </Modal>)
}

export default NewProject; 