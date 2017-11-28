// import React from 'react';
import { ADD_TO_CART } from '../Actions/ActionTypes';
import { REMOVE_FROM_CART } from '../Actions/ActionTypes';


function cartReducer(state = {}, action) {
	debugger;
		switch(action.type){
			case ADD_TO_CART: 
				return {
					...state,
					items : [
						...(state.items || []),
						{
							productId : action.data.id,
							quantity : 1,
						},
					]
				}
			case REMOVE_FROM_CART :
				return {
						...state,
						items : [
							...(state.items || []),
							{
								productId : action.data.id,
								quantity : -1,
							}
						],
				}
			default :
				return state
		}

   } 
 
 export default cartReducer;