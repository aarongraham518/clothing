import React from 'react';

// import SHOP_DATA from './shop.data.js';
import SHOP_DATA from './updatedShopDataOnline.js';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            collections: SHOP_DATA
        }
    }
    
    render(){
        console.log(SHOP_DATA);
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id,...otherCollectionProps}) => (
                        <CollectionPreview 
                            key={id}
                            {...otherCollectionProps}
                        />
                    ))
                }
            </div>)
    }
}

export default ShopPage;