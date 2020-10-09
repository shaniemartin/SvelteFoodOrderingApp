<!-- =========================================== -->
<!--                  SCRIPTS					 -->
<!-- =========================================== -->

<script>

    import { products } from './products.js';
    import CompProduct from './CompProduct.svelte';

    export let product = {};

    

   let currentFilter = 'all';

   function updateFilter(filter) {
       currentFilter = filter;
   }



        
   
    
  




</script>





<!-- =========================================== -->
<!--                  STYLES					 -->
<!-- =========================================== -->

<style>

    h1 {
        margin-bottom: 40px;
    }

    button {
        background-color: #BDDCA9;
        color: black;
        outline: none;
        border: none;
        font-size: 1.1rem;
        padding: 10px 20px;
        border-radius: 5%;
    }

    button:hover {
        background-color: rgba(189, 220, 169, 0.6);
    }

</style>






<!-- =========================================== -->
<!--                  CONTENT					 -->
<!-- =========================================== -->

<div id="Categories"></div>
<div class="container">

    <div class="text-center">
        <h1 class="display-4">Choose your favourite takeaway!</h1>

        <button on:click={() => updateFilter('all')}>All</button>
        <button on:click={() => updateFilter('american')}>American</button>
        <button on:click={() => updateFilter('chinese')}>Chinese</button>
        <button on:click={() => updateFilter('indian')}>Indian</button>
        <button on:click={() => updateFilter('kebab')}>Kebab</button>
    </div>

    <div class="row justify-content-center">
    
    
        {#each $products as product}
            {#if product.category === currentFilter}
                <div class="col-6">            
                    <CompProduct product={product}/>
                </div>
            {:else if currentFilter == 'all'}
            <div class="col-6">
                <CompProduct product={product} />
            </div>  
                
            {/if}
        {/each}


    </div>

</div>