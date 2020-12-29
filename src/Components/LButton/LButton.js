export const LButton = props => {
    return (<div>
        <button type="button" onClick={props.onClick}>{props.children}</button>
    </div>)
}