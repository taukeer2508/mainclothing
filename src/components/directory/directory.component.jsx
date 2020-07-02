import React from 'react' ;

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor (){
        super();

        this.state = {
            sections : [{
                title : 'hats',
                imageUrl: 'https://i1.pickpik.com/photos/739/578/556/black-and-white-girl-hat-woman-thumb.jpg', 
                id:1, 
                linkUrl : 'hats'
            }, 
               {
                title : 'jackets',
                imageUrl: 'https://lh3.googleusercontent.com/proxy/p_w1A0mkUIxOZmjLw6zppZnZd-OOBouttSNbyhkH2j8YKk8_13BHJ63VVVnwvS7KDcZJdkq3Vx-jr6WA6M7UPJdx4stN2-f0YPEg2gJuDiHMTb6dbZqmdYqzSC3zHm8SsTTvCGCasEZLqoute4GfwkrJuth5Wuo4EmwR1OQVzanxOOMV3ptuUJy20qS_v1O4sdpd00Y', 
                id:2,
                linkUrl : ''
               }, 

               {
                title : 'sneakers',
                imageUrl: 'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/26902/248904/2019-Casual-Shoes-Men-Flat-Sneakers-Breathable-Fashion-Mesh-Mens-Trainers-Shoes-Summer-Sneakers-Men-Running__04818.1551090017.jpg?c=2&imbypass=on' ,
                id:3,
                linkUrl : ''
               }, 
               {
                title : 'womens',
                imageUrl: 'https://i.insider.com/5be06cbdd1e84420b852fd2c?width=600&format=jpeg&auto=webp' ,
                size : 'large',
                id:4, 
                linkUrl : ''

               },
               {
               title : 'mens',
               imageUrl: 'https://36.media.tumblr.com/d91f6826efce9d05e556eb0bc1bd811c/tumblr_nz9708vvP61tg9as8o1_500.jpg' ,
               size : 'large', 
               id:5,
               linkUrl : ''
               } ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key = {id} {...otherSectionProps} />
                    ))
                }
            </div>
            
        )
    }
}


export default Directory ; 