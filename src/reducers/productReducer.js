import { POPULATE_PRODUCTS } from '../Actions/ActionTypes';

function productReducer(state=0 , action){
		debugger;
		switch(action.Types){
			case 'POPULATE_PRODUCTS' :
				return [
					...action.data
				]
			default : 
				return state;
		}
	}
export default productReducer;