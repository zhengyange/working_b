<script type="text/javascript">
	import { mapGetters, mapActions } from 'vuex';
	export default {
		computed: {
			...mapGetters({
				products: 'allProducts',
				productsDecCart: 'productsDecCart'
			})
		},
		methods: {
			...mapActions(['addToCart'])
		},
		created: function(){
			this.$store.dispatch('getAllProducts');
		}
	}
</script>
<template>
	<ul>
		<li v-for="p in products">
	      {{ p.title }} - {{ p.price }}
	      <br>
	      <button
	        :disabled="!p.inventory"
	        @click="addToCart(p)">
	        Add to cart
	      </button>
	    </li>
	</ul>
</template>