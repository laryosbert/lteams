export const Button = props => {
    return (<div>
        <button type="button" onClick={props.onClick}>{props.children}</button>
    </div>)
}