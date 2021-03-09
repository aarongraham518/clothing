import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
        
        <div className='collection-footer'>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
)}
    

/**
    function that gets a dispatch-
    whenever theres an addItem, it will get an item in as the property
    of this function that will represent the addItem prop that gets passed in and dispatch
    the addItem action creator passing the item in

    so, we are creating this new function that's a prop called "addItem" that will
    go into our collection item as the addItem function that we need to leverage.
    whenever we call the dispatch/call function, this functin will receive the item as
    a the property, pass it into our addItem action creator, which gives us back the object
    where the type is = to addItem and payload is = to item passed in and dispatch new object
    into our store
 */
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);