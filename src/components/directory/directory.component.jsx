import React from 'react' ;

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor (){
        super();

        this.state = {
            sections : [{
                title : 'hats',
                imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fwinter-people-go-out-like-to-wear-hats-shape-becoming-more-fashionable-which-women-s-hat-chinese-shopping-malls-165448673.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fwinter-people-go-out-like-to-wear-hats-shape-becoming-more-fashionable-which-women-s-hat-chinese-shopping-malls-image165448673&tbnid=DakUb8lNqwt6gM&vet=12ahUKEwi6rfDghKnqAhWR-DgGHUT7BncQMygCegUIARCcAQ..i&docid=4ESOg_ucbDr4YM&w=1600&h=1155&itg=1&q=hats%20in%20malls%20&hl=en-GB&ved=2ahUKEwi6rfDghKnqAhWR-DgGHUT7BncQMygCegUIARCcAQ', 
                id:1
            }, 
               {
                title : 'jackets',
                imageUrl: 'https://ravenleatherz.com/wp-content/uploads/2016/10/Don.jpg', 
                id:2
               }, 

               {
                title : 'sneakers',
                imageUrl: 'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/26902/248904/2019-Casual-Shoes-Men-Flat-Sneakers-Breathable-Fashion-Mesh-Mens-Trainers-Shoes-Summer-Sneakers-Men-Running__04818.1551090017.jpg?c=2&imbypass=on' ,
                id:3
               }, 
               {
                title : 'womens',
                imageUrl: 'https://c.shld.net/rpx/i/s/i/mp/10245335/prod_4411923914?hei=345&wid=345&op_sharpen=1&qlt=85' ,
                id:4
               },{
               title : 'mens',
               imageUrl: 'https://36.media.tumblr.com/d91f6826efce9d05e556eb0bc1bd811c/tumblr_nz9708vvP61tg9as8o1_500.jpg' ,
               id:5
               } ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title , imageUrl , id}) => (
                        <MenuItem key = {id} title={title}/>
                    ))
                }
            </div>
            
        )
    }
}


export default Directory ; 