
import Heading from './components/Heading';
import './App.css';
import Money from './components/Money';
import ProductList from './components/ProductList';
// import Product from './components/Product';
import TotalState from './context/totalState';
import Receipt from './components/Receipt';
// import { StickyContainer, Sticky } from 'react-sticky';

import About from './components/About';

function App() {

  return (
    <>
    
    <TotalState>
      
   
    <div className="App">
     <Heading/>
     <Money/>
     </div>
     <ProductList/>
     <Receipt/>
     <About/>
     </TotalState>
   
    </>
  );
}

export default App;
