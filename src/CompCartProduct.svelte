

<!-- =========================================== -->
<!--                  SCRIPTS					 -->
<!-- =========================================== -->

<script>

import { products } from './cart.js';

export let product = {};


let disabled = false;

function addOne () {
    product.quantity ++
    $products = $products;
}


function removeOne () {
    product.quantity --
    $products = $products;
    
    if (product.quantity == 0) {
        disabled = true;
    }
}


function deleteProduct () {
    $products = $products.filter( item => product.id !== item.id);
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
    font-size: 2rem;
    margin: 0 5px;
	cursor: pointer;
}


.food-item span:hover {
	opacity: 0.3;
}

button {
    background-color: white;
    outline: none;
    border: 1px solid black;
    padding: 5px 10px;
    font-size: 1.4rem;
}

button:hover {
    border-color: grey;
}

</style>






<!-- =========================================== -->
<!--                  CONTENT					 -->
<!-- =========================================== -->

<div class="card food-item mt-5">
    <div class="card-body">
        <h4 class="card-title">{product.title}</h4>        
        <h6 class="card-subtitle mb-2 text-muted">£{product.price}</h6>
        <p class="card-text">Quantity: {product.quantity}</p>
        <button class="text-success" on:click={addOne}>+</button>
        <button class="text-warning" on:click={removeOne} {disabled}>-</button>
        <button class="text-danger" on:click={deleteProduct}>x</button>
    </div>
</div>

