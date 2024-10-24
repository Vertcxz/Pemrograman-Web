<?php

include "/xampp/htdocs/codelab/Controller/ProductController.php";

use Controller\ProductController;

$productController = new ProductController;

echo $productController -> getAllProduct();


