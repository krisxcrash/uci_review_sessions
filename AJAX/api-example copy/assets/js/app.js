//"https://www.wirelessemporium.com/products.json"
  
  var queryURL = "https://www.wirelessemporium.com/products.json";
    $.ajax( {
        url: queryURL,
        method: "GET"
      } )
      .done( function( response ) {
        // console.log(response);
        var results = response.products;

	      for ( var i = 0; i < results.length; i++ ) {
	        var productsContainer = $('#products');
	        var productsDiv = $('<div class = "productsDiv">')

	        var productTitle = results[ i ].title;
	        var productImage = results[ i ].images;
	        for (var i = 0; i < productImage.length; i++) {
        		var images = productImage[i];
        		// console.log(images);

      			}

$(productTitle).appendTo(productsDiv);

$(productsDiv).append(productsContainer);


	        console.log(productTitle)


  			}

  			
      });