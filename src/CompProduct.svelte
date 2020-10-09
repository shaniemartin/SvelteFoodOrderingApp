<!-- =========================================== -->
<!--                  SCRIPTS					 -->
<!-- =========================================== -->

<script>

import { products } from './cart.js';

export let product = {}


function addToBasket() {
    for(let item of $products){
        if(item.id == product.id) {
            item.quantity++
            $products = $products
            return
        } 
        
    }

    console.log(product.category);
    
    product.quantity = 1;
    $products = [...$products, product];


}




</script>





<!-- =========================================== -->
<!--                  STYLES					 -->
<!-- =========================================== -->

<style>

.food-item {
	border: 1px solid grey;
	padding: 20px;
	text-align: center;
}


.food-item span {
	font-size: 1.2rem;
	cursor: pointer;
}


.food-item span:hover {
	opacity: 0.3;
}

</style>






<!-- =========================================== -->
<!--                  CONTENT					 -->
<!-- =========================================== -->


<div class=" card food-item mt-5">
    <div class="card-body">
        <h4 class="card-title">{product.title}</h4>
        <h6 class="card-subtitle mb-2 text-muted">£{product.price}</h6>
        <p class="card-text">{product.description}</p>
        <span id="add-one" class="card-link text-success" on:click={addToBasket}>Add to basket</span>
    </div>

    
</div>
