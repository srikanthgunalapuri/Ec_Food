import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DealOfTheDay from '../components/DealOfTheDay';
import Footer from '../components/Footer';
const PageDeal = () => {

   
const [isSidebarActive, setIsSidebarActive] = useState(false);
    
    const openSidebar = () => setIsSidebarActive(true);
    const closeSidebar = () => setIsSidebarActive(false);
return (
<>
<Header />
 {/* Pass the openSidebar function to NavBar */}
<NavBar openSidebar={openSidebar} />

{/* Pass state and closeSidebar function to Sidebar */}
<Sidebar
isSidebarActive={isSidebarActive}
closeSidebar={closeSidebar}
/>  
<DealOfTheDay /> 
<Footer /> 
    </>
  )
}

export default PageDeal