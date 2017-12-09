import {ADD_TO_CART} from './ActionTypes';
import {REMOVE_FROM_CART} from './ActionTypes';
import {POPULATE_PRODUCTS} from './ActionTypes';
import {DISPLAY_DELIVERY,INITIAL_CART_ADDITION,SEND_ADDRESS} from './ActionTypes';

 export function addToCart(product){
 	return {
 		type:ADD_TO_CART, 
 		data:product};
 };

 export function removeFromCart(product){
 	return {
 		type:REMOVE_FROM_CART,
 		 data:product};
 };

 export function populateProducts(product){
 	return{
 		type:POPULATE_PRODUCTS,
 		data:product};
 };

 export function initialCartAddition(cart_state){
 	return{
 		type:INITIAL_CART_ADDITION,
 		data:cart_state};
 };