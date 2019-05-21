import { GET_HOME_PRODUCTS } from './types'

export default {
	[GET_HOME_PRODUCTS](state,payload){
		state.homeProducts = payload.homeProducts
	}
}