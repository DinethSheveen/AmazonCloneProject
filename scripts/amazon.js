const grid = document.querySelector(".products-grid")

const products = [
    {
        productImage : "athletic-cotton-socks-6-pairs.jpg",
        productName : "Black and Gray Athletic Cotton Socks - 6 Pairs",
        ratings : {
            starts : 4.5,
            count : 87 
        },
        priceInCents : 1090
    },
    {
        productImage : "intermediate-composite-basketball.jpg",
        productName : "Intermediate Size Basketball",
        ratings : {
            stars : 4,
            count : 127
        },
        priceInCents : 2095
    },
    {
        productImage : "adults-plain-cotton-tshirt-2-pack-teal.jpg",
        productName : "Adults Plain Cotton T-Shirt - 2 Pack",
        ratings : {
            stars : 4.5,
            count : 56
        },
        priceInCents : 799
    }
]

products.forEach((product)=>{
    let htmlElement = `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="images/products/${product.productImage}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.productName}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-45.png">
                <div class="product-rating-count link-primary">
                87
                </div>
            </div>

            <div class="product-price">
                ${(product.priceInCents/100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary">
                Add to Cart
            </button>
        </div>
    `

    grid.innerHTML += htmlElement
})
