import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../Collection-Items/collection.items.component';
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemsProps }) => (
                        <CollectionItem key={id} {...otherItemsProps} />
                    ))
            }
        </div>
    </div>

)

export default CollectionPreview;