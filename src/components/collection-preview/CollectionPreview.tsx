import { FC } from 'react'


import {PreviewContainer, TitleContainer,CollectionPreviewContainer } from './CollectionPreview.style'

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
        <TitleContainer to={title} >
          {title.toUpperCase()}
        </TitleContainer>
      </h2>
      <PreviewContainer>
        {products.filter((_,idx)=> idx < 4).map((product) => (
          <CollectionItem key={product.id} product={product} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
