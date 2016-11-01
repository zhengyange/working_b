<script type="text/javascript">
	import { mapGetters } from 'vuex';
	export default {
		computed: {
			...mapGetters({
				cartProducts: 'cartProducts',
				checkoutStatus: 'checkoutStatus'
			}),
			totalPrice: function(){
				return this.cartProducts.reduce(function(total,p){
					return total + p.price * p.quantity
				}, 0)
			}
		},
		methods: {
			checkout: function(products){
				this.$store.dispatch('checkOut', products)
			}
		}
	}
</script>
<template>
	<div class="cart">
		<h2>Your cart</h2>
		<p v-show="!cartProducts.length"><i>Please add some products to cart.</i></p>
	    <ul>
	      <li v-for="p in cartProducts">
	        {{ p.title }} - {{ p.price }} x {{ p.quantity }}
	      </li>
	    </ul>
		<p>Total: {{ totalPrice }}</p>
		<p><button :disabled="!cartProducts.length" @click="checkout(cartProducts)">Checkout</button></p>
		<p v-show="checkoutStatus">Checkout {{checkoutStatus}}</p>
	</div>
</template>