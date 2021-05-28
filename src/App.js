import Logo from './components/Logo'
import Header from './components/Header'
import Campeao from './components/Campeao'

function App() {
  return (
    <div className='container'>
      <Logo />
      <Header />
      <div className='corpo'>
        <Campeao campeao="Aatrox" />
        <Campeao campeao="Ahri" />
        <Campeao campeao="Akali" />
        <Campeao campeao="Alistar" />
      </div>
    </div>
  );
}

export default App;
