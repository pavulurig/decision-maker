class Visibility extends React.Component{

    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility:true
        };
    }

    toggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return(
            <div>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility? 'HideDetails':'showDetails'}
                </button>
                {
                    this.state.visibility&&(
                        <div>
                            Hey I am here!
                        </div>
                    )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />,document.getElementById("app"));