
import { getHomeProducts } from '../api'
import { GET_HOME_PRODUCTS } from './types'


export default {
	async [GET_HOME_PRODUCTS]({commit}){
		const products = await getHomeProducts()
		// console.log(products)
		commit(GET_HOME_PRODUCTS,{homeProducts:products})
	}
}