## ShoppyGlobe

# store.js 
   Configuring the store with cart and search slice reducers.
# cart.jsx
    Getting items from the state and sending items as props to cartitem, if items is empty then it shows cart is empty.
# cartItem.jsx
    Two functions for increment and decrement of quantity and displaying each product,atlast with checkout link.
# checkout.jsx
    Calculates the price and total and has confirm order,on click it goes to place order and clears the data.
# header.jsx
    Displays the logo, search bar and navigation links to home and cart with number
# layout.jsx
    Has header and outlet
# notfound.jsx
    Shows error msg when incorrect url is given
# productdetail.jsx
    when clicks view on an item in product list, it displays each item details with specific id using fetch
# productitem.jsx
    It displays the product items with view and Add to cart buttons
# productlist.jsx
    It sends the filtered array products as a prop to the product item. 
# searchslice.js
     created a search slice and sets a search query value
# cartslice.js
    Cart slice with addtocart,remove from cart,update cart and clear cart reducers.
# useFetchProducts.js
   Custom hook to fetch api.
# router.jsx
   createbrowserrouter and children paths
# App.jsx
  displays the product list

# To run the code
 npm run dev

 # Github link:
 https://github.com/jyothsna30-design/ShoppyGlobe

# screenshots
Screenshot (92).png
Screenshot (93).png
Screenshot (94).png