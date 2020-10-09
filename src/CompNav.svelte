<!-- =========================================== -->
<!--                  SCRIPTS					 -->
<!-- =========================================== -->


<script>

    import { products } from './cart.js';

    let itemsInCart = 0;

    $:{
        let count = 0;
        for(let item of $products) {

            count += item.quantity
        }

        itemsInCart = count;
    }




</script>





<!-- =========================================== -->
<!--                  STYLES					 -->
<!-- =========================================== -->

<style>
    nav a {
    margin: 0px 20px;
    font-size: 1.2rem;
}

i {
    margin-right: 10px;
}

</style>






<!-- =========================================== -->
<!--                  CONTENT					 -->
<!-- =========================================== -->


<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">EatWithAcorn</a>
    
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <a class="nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
                <a class="nav-link" href="#categories">Categories</a>
                <a class="nav-link" href="#">Menu</a>

                <a class="nav-link" href="#"><i class="fa fa-shopping-basket"></i>{itemsInCart}</a>
            </div>
        </div>
    </div>
</nav>