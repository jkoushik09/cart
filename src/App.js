import Products from "./components/products/Products";
import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";

const App=() => {
  return (
    <div className="App">
      
    <Header></Header>
    <Subheader></Subheader>
    <Products></Products>
    
      
    </div>
  );

  // return React.createElement('h1', {},"Hello world" )
}

export default App
