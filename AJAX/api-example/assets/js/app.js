$(document).on('click', function() {
console.log("click");
  var queryURL = "https://www.wirelessemporium.com/products.json";
  $.ajax( {
      url: queryURL,
      method: "GET"
    } )
    .done( function( response ) {
      var results = response.products;
      for ( var i = 0; i < results.length; i++ ) {
        var productsContainer = $('#products');
        var productsDiv = $('')

        // var productsDiv = $( "<div class='item col-md-6 col-sm-6 col-xs-12 squares'>" );
        // var description = results[ i ].title;
        // var productType = results[ i ].product_type;
        // var productVariant = results[ i ].variants;
        // for ( var j = 0; j < productVariant.length; j++ ) {
        //   var variants = productVariant[ j ];
      };
      console.log(results);
  
      for (var i = 0; i < productImage.length; i++) {
        const element = array[i];
        
      }

      });
  });
// });


$(document).on('click', function() {
  console.log("click");
    var queryURL = "https://www.wirelessemporium.com/products.json";
    $.ajax( {
        url: queryURL,
        method: "GET"
      } )
      .done( function( response ) {
        console.log(response);
  
      });
  });