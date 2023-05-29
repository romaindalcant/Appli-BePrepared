import {baseURL} from './constants';

class AtelierData extends React.Component{

    constructor(props){
        super(props)
        this.id = this.props.id
        this.state = {
            data: null
          };
    }

    render() {
            const url = baseURL + `atelier/${this.id}`
            fetch(url)
                  .then(response => response.json())
                  .then(data => {this.setState({ data: [data.nom,data.description,data.capacite]})}) 
                  .catch(error => console.error(error));
                // Quand on fait ca ca fetch a l'infini, utiliser   Componentmount ???? ou un effet
            return <p>Information sur l'atelier {this.id}: {this.state.data}</p>
            }
    }


class Home extends React.Component{
    render(){
        return <div>
            <p>testttttt</p>
            <ComposantTest/>
        </div>
    }
}

const nom = 'gab';
function ComposantTest(){
    return <div> Bonjour c'est {nom}</div>
}
ReactDOM.render(<Home/>,document.querySelector('#app'))