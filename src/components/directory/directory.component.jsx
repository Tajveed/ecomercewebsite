import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-items/menu-items.component';

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'shirts',
                    imageUrl: 'https://static-01.daraz.pk/p/99ef60cd2838dd9a714fe446733e85aa.jpg',
                    id: 1,
                    linkUrl: 'shirts'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://static-01.daraz.pk/p/5e5002da644ce668ae1dc7e4b44b6e6f.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://static-01.daraz.pk/p/c564c2d0e3c05cd3cd8e29c1bb4c31b8.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://static-01.daraz.pk/p/ede2dae3fbf5a161ba986dc72afc6877.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://static-01.daraz.pk/p/d14b1803339b1a266a196382bdfaf7c6.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;