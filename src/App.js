import logo from './logo.svg';
import './App.css';
import Product from './Component/Product';
import AppRouter from './Component/AppRouter';
import ContextProduct from './Context/ContextProduct';


function App() {
  return (
    <>
    <ContextProduct>
        <AppRouter/>
    </ContextProduct>
    </>
  );
}

export default App;
