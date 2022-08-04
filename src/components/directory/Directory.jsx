import React from 'react'


import {DirectoryMenu} from './Directory.style'
import MenuItem from '../menu-item/MenuItem';

// const Directory = ({})

const Category = {
      sections : [{
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'women',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: "true",
        id: 4,
        linkUrl: 'shop/women'
      },
      {
        title: 'men',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: "true",
        id: 5,
        linkUrl: 'shop/men'
      }]
    }




const Directory = () => {
  return (
      <DirectoryMenu>
        {
          Category.sections.map(({id, ...otherSectionProp}) => (
            <MenuItem key={id} {...otherSectionProp}/>
          ))
        }
      </DirectoryMenu> 
  )
}

export default Directory



