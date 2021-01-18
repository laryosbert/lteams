import { withRouter, useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../Components';
import { useInputHook } from '../../Hooks';

import { createProject, hideCreateModal } from '../../Redux/Project/aciton';

const NewProject = (props) => {
    const inpHook = useInputHook("");
    const dispatch = useDispatch();
    const history = useHistory();

    const showModal = useSelector(state => {
        return state.projects.showModal;
    });

    const handleSubmit = () => {
        dispatch(createProject(inpHook.value, history));
    }

    const handleClose = () => {
        dispatch(hideCreateModal());
    }

    return (<Modal visible={!!showModal} onClose={handleClose} header="Create New Project">
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