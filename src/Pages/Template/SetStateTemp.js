import React from 'react';

export default class SetStateTemp extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { stateName: "init" }
        this.handleSynSet = this.handleSynSet.bind(this);
        this.handleDom2EventSet = this.handleDom2EventSet.bind(this);
        this.handlePromiseSet = this.handlePromiseSet.bind(this);
        this.handleAwaitSet = this.handleAwaitSet.bind(this);
    }

    handleSynSet() {
        this.setState({ stateName: "synClick1" });
        console.log(this.state.stateName);
        this.setState({ stateName: "synClick2" });
        console.log(this.state.stateName);
    }

    handleDom2EventSet() {
        this.setState({ stateName: "domClick1" });
        console.log(this.state.stateName);
        this.setState({ stateName: "domClick2" });
        console.log(this.state.stateName);
    }

    componentDidMount() {
        this.setState({ stateName: "mount1" });
        console.log(this.state.stateName);
        this.setState({ stateName: "mount2" });
        console.log(this.state.stateName);

        document.getElementById("dom2Event").addEventListener("click", this.handleDom2EventSet);
    }

    componentWillUnmount() {
        document.getElementById("dom2Event").removeEventListener("click", this.handleDom2EventSet);
    }

    handlePromiseSet() {
        new Promise((resolve, reject) => {
            this.setState({ stateName: "promise1" });
            console.log(this.state.stateName);
            this.setState({ stateName: "promise2" });
            console.log(this.state.stateName);
            return resolve("promise3");
        }).then((result) => {
            this.setState({ stateName: "promise4" });
            console.log(this.state.stateName);
            this.setState({ stateName: "promise5" });
            console.log(this.state.stateName);
        });
    }

    async handleAwaitSet() {
        const awaitResult = await new Promise((resolve, reject) => resolve("await1"));
        this.setState({ stateName: "await2" });
        console.log(this.state.stateName);         
        this.setState({ stateName: "await3" });
        console.log(this.state.stateName);

    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handleSynSet}>Synthetic SetState</button>
                    <button id="dom2Event">Dom2 Event SetState</button>
                    <button onClick={this.handlePromiseSet}>Promise SetState</button>
                    <button onClick={this.handleAwaitSet}>Await SetState</button>
                </div>
                <div>
                    <span>stateName:{this.state.stateName}</span>
                </div>
            </div>
        )
    }
}