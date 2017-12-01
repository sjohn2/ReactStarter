// import React from 'react';
import { ADD_TO_CART } from '../Actions/ActionTypes';
import { REMOVE_FROM_CART } from '../Actions/ActionTypes';


function cartReducer(state = {}, action) 
{
		switch(action.type)
		{
			case ADD_TO_CART : 
				if(state.items != undefined)
				{
					for (var i = 0; i < state.items.length; i++) 
					{
						if(state.items[i].productId == action.data.id)
						{
							state.items[i].quantity += 1 ;
							return {
								...state,
								items : [
									...state.items
								]
							}

						}
					}
				}
				return {
						...state,
						items : [
							...(state.items || []),
							{
								productId: action.data.id,
								quantity : 1,
							},
						]	
					}
				
			case REMOVE_FROM_CART : 
				if(state.items != undefined)
				{
					for(var i=0; i<state.items.length ; i++)
					{
						if(state.items[i].productId == action.data.id)
						{
							state.items[i].quantity -= 1;
							if(state.items[i].quantity != 0)
							{
								return {
									...state,
									items : [
										...state.items,
									]
								}
							}
							else
							{
								state.items.splice(i,1)
								return {
									...state,
									items:[
										...state.items,
									]
								}
							}
						}
					}
				}
				return{}
			default : 
				return state;
		}
   } 
 export default cartReducer;