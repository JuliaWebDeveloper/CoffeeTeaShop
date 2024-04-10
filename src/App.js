import CartModal from './Components/Cart/CartModal';
import AllCategories from './Components/Filter/AllCategories';
import Products from './Components/Products/Products';
import font from "../src/assets/font.jpg";

function App() {
  return (
    <div>
      <div className='container'>
        <AllCategories/>
        <CartModal/>
      </div>
      <img src={font} width="100%" alt="tea"/>
      <Products />
    </div>
  );
}

export default App;
