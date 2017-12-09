// import React from 'react';
import { ADD_TO_CART } from '../Actions/ActionTypes';
import { REMOVE_FROM_CART,INITIAL_CART_ADDITION } from '../Actions/ActionTypes';
import axios from 'axios';


function cartReducer(state = {}, action) 
{
		switch(action.type)
		{
			case ADD_TO_CART : 
				axios.post('http://127.0.0.1:8000/Quantity/',{
					id : action.data.id,
					quantity : 1,
				})
				.then(function (response) {
				    console.log(response);
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
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
				debugger;		
				axios.post('http://127.0.0.1:8000/Quantity/',{
					id : action.data.id,
					quantity : -1,
				})
				.then(function (response) {
				    console.log(response);
				  })
				.catch(function (error) {
				    console.log(error);
				  });
				if(state.items != undefined)
				{
					debugger
					for(var i=0; i<state.items.length ; i++)
					{
						if(state.items[i].productId == action.data.id)
						{
							if(state.items[i].quantity > 1)
							{
								state.items[i].quantity -= 1;
								return {
									
									...state,
									items : [
										...state.items,
									]
								}
							}
							else
							{
								debugger;
								state.items.splice(i,1)
								return {
									...state,
									items : [
										...state.items,
									]
								}
							}
						}
					}
				}
				
				return state;

			case INITIAL_CART_ADDITION:
			    var cart_state = action.data
			    const arr = []
			    for(var i=0;i<cart_state.length;i++)
			    {
			       arr.push({productId:cart_state[i].id,quantity:cart_state[i].quantity})
			     }
			     return ({
			       ...state,
			       items:arr
			       });
			default : 
				return state;
		}
   } 
 export default cartReducer;