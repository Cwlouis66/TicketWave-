import React from 'react';
import Image from 'next/image';



//INTERNAL IMPORT
import Styles from './NFT.module.css';

const NFT = ({NFTData}) => {

  return (
    <div className ={Styles.NFT}>
        {NFTData.map((el, i) => (
            <div className= {Styles.NFT_box} key={i+1}>
                <div className={Styles.NFT_box_img}>
                    <Image 
                        src={el.image}
                        alt='NFT'
                        width={280}
                        height={280}
                        objectFit="cover"
                        className={Styles.NFT_box_img_img}
                    />
            </div>
            <div className={Styles.NFT_box_info}>
                <div className={Styles.NFT_box_info_left}>
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                </div>
            </div>
            </div>
        ))}   
    </div>
  )
}

export default NFT