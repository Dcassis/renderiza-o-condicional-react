import { Component } from 'react'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      status: true
    }
    this.sair = this.sair.bind(this)
    this.entrar = this.entrar.bind(this)
  }

  sair() {
    this.setState({status: false})
  }
  entrar() {
    this.setState({status: true})
  }

  render() {
    return (
      <div className='border-solid border-2 border-black p-4 mt-4 mx-2 text-center rounded-lg bg-fuchsia-700'>
        {this.state.status ?
          <div className='text-2xl font-bold p-2 text-white'>
            <h2>Bem-vindo ao sistema!</h2>
            <button  className='text-base border-solid border-2 border-black rounded-sm p-1 bg-purple-700 w-44 mt-4' onClick={this.sair}>Sair do sistema</button>
          </div> : 
          
          <div className='text-2xl font-bold p-2 text-white'>
            <h2>Olá visitante, faça o seu login!</h2>
            <button className='text-base border-solid border-2 border-black rounded-sm p-1 bg-purple-700 w-44 mt-4' onClick={this.entrar}>Entrar no sistema</button>
            
          </div>
        }
      </div>
    )
  }
}

export default App;
