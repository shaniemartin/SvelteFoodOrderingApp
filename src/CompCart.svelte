<!-- =========================================== -->
<!--                  SCRIPTS					 -->
<!-- =========================================== -->

<script>

    import { products } from './cart.js';
    import CompCartProduct from './CompCartProduct.svelte';

</script>





<!-- =========================================== -->
<!--                  STYLES					 -->
<!-- =========================================== -->

<style>

    hr {
        margin: 40px 0;
    }

    section.cart {
        margin: 80px 0;
    }


</style>






<!-- =========================================== -->
<!--                  CONTENT					 -->
<!-- =========================================== -->

<hr>
<section class="cart">
    <div class="container">
        <div class="text-center">
            <h1 class="display-4">Your basket</h1>

        <div class="row justify-content-center">

            {#if $products.length !== 0} 
                {#each $products as product}
                    <div class="col-6">            
                        <CompCartProduct product={product}/>
                    </div>
                        
                {/each}
            
            {:else}
                <p>Add products to your basket to get started</p>
            {/if}

        </div>

    </div>
</section>