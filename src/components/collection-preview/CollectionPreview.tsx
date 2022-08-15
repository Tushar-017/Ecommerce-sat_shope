import { FC } from 'react'


import {Preview, Title,CollectionPreviewContainer } from './CollectionPreview.style'

import CollectionItem from '../collection-item/CollectionItem'

import { CategoryItem } from '../../store/category/category.types'

type CollectionPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CollectionPreview: FC<CollectionPreviewProps> = ({title,products}) => {
  return (
    <CollectionPreviewContainer>
      <h2>
        <Title to={title} >
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {products.filter((_,idx)=> idx < 4).map((product) => (
          <CollectionItem key={product.id} product={product} />
        ))}
      </Preview>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
