import './App.css';
import Header from './Components/Header';
import Principal from './Components/Principal';
import Contadigital from './Components/Contadigital';
import Cashback from './Components/Cashback';
import Cartao from './Components/Cartao';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Principal></Principal>
      <Contadigital></Contadigital>
      <Cashback></Cashback>
      <Cartao></Cartao>
      <Footer></Footer>
    </div>
  );
}

export default App;
