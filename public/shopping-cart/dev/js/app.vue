<script>
    import ProductList from './components/ProductList.vue';
    import Cart from './components/Cart.vue';

    //es6
    export default {
        components: {
            ProductList,
            Cart
        }
    }
</script>
<template>
    <div class="page-content">
        <img src="../images/bd_logo.png">
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <product-list></product-list>
        <hr>
        <cart></cart>
    </div>
</template>
<style lang="sass" scoped>
    h2{color: red;}
</style>