
class Hello extends React.Component{
    constructor(props){
        super(props)
        this.name = this.props.name
    }

    render(){
        return <div>Hello {this.name}</div>
    }
}

function Home(){
    return <div className='WelcomeText'><Hello name='joe'></Hello>
    <Hello name='jam'></Hello>
    </div>
}


ReactDOM.render(<Home/>,document.querySelector('#app'))