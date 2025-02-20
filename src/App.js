import React, {useState, useEffect         } from 'react' ;
import "./App.css" ;
// Access External Libraries:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactProvider } from "./ContactContext";
import Home from './pages/Home';
import PageDeal from './pages/PageDeal';
import PageCategory from "./pages/PageCategory"
import PageProducts from "./pages/PageProducts"
import PageContact from './pages/PageContact';
import PageContactDetailes from './pages/PageContactDetailes';
import CrudComponent from './pages/CrudComponent';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import Popup from './pages/Popup';

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Set a timer to show the popup after 5 seconds
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 2000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
 <ContactProvider>
<Router>
   {/* Popup Logic */}
   {isPopupVisible && <Popup />}
<Routes>
      <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/pagedeal" element={<PageDeal />} />
        <Route path="/category" element={<PageCategory />} />
        <Route path="/products" element={<PageProducts />} />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/contactdetailes" element={<PageContactDetailes />} />
        <Route path="/crudcomponent" element={<CrudComponent />} />
        <Route path="/cart" element={<CartPage />} />
       
        
      </Routes>
      
    </Router>
 </ContactProvider>
   
   
 
  );
}

export default App;

