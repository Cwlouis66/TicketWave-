import React from 'react'

//INTERNAL IMPORT
import Style from '../styles/Profile.module.css';
import {Title,CollectionProfile,NFT,Filter} from '../components/Component_index';

const Home = () => {

  const collectionArray = [
    { name: 'coldplay', image: '/img/coldplay.png' , title:'Coldplay Concert', description:'Coldplay NFT' },
    { name: 'ariana', image: '/img/ari_con.jpg' ,title:'Ariana Concert', description:'Ariana NFT'},
    { name: 'taylor', image: '/img/tay_con.jpg',title:'Taylor Concert', description:'Taylor NFT' },
    { name: 'twice', image: '/img/twice.png' ,title:'Twice Concert', description:'Twice NFT'},
  ];

  return (
    <div className={Style.homePage}>
      <Title 
            heading="Welcome Back!"
            paragraph='This is the home page of the website.'
        />
      <CollectionProfile />
      
      <Title 
            heading="NFT Collections"
        />
      <Filter />
      <NFT NFTData={collectionArray}/>
       
      
        
      
    </div>
  )
}

export default Home