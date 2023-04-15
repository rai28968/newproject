import React, {useState} from 'react';
import Header from '../../components/common/header';

import TabSection from '../../components/common/tabsection';
import Delivery from '../../components/dilevery';

import DinningOut from '../../components/dinningOut';






const HomePage = ()=>{
    
    const [activeTab , setActiveTab] = useState("Delivery");

    return(
        <div>
        <Header/>
         <TabSection activeTab={activeTab}  setActiveTab={setActiveTab}/>

         {getCorrectScreen(activeTab)}
        
       
        </div>
    )
}

const getCorrectScreen = (tab)=>{
  switch(tab){
    case "Delivery":
        return<Delivery/>

    case "Dining Out" :
        return<DinningOut/>
    
    
    
    default:
        return<Delivery/>
  }
}

export default HomePage;