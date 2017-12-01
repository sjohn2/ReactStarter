import {POPULATE_PRODUCTS} from '../Actions/ActionTypes';

function productReducer(state={}, action)
{
	switch(action.type){
		case POPULATE_PRODUCTS : 
				return[
					...action.data,
					];
		default :
			return state;
	}
}		
export default productReducer;