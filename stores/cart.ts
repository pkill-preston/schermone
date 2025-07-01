import type {CartItem} from "~/types/movie";

export const useCartStore = defineStore("cart", {
	state: () => ({
		cartState: []
	}),
	actions: {
		addToCart(movie: CartItem) {
			const index = this.cartState.findIndex((item) => item.id === movie.id);
			if (index !== -1) {
				this.cartState[index].amount += movie.amount;
			} else {
				this.cartState = [...this.cartState, movie];
			}
		},
		cleanCart() {
			this.cartState = [];
		},
		removeFromCart(movieId:number) {
			const index = this.cartState.findIndex((item) => item.id === movieId);
			if (index !== -1) {
				this.cartState.splice(index,1)
			}
		}
	},
	persist: true
});
