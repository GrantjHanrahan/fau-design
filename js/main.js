
$(function(){

  $.ajax({

    url: "https://raw.githubusercontent.com/finderau/recruitment/master/front-end/design-and-js/01-page-layout-listing/data.json",
    type: "GET",
    dataType: "json",

    // Code to run if the request succeeds.
    // The response is passed to the 'success' function as the 'data' argument
    success: function( data ) {
      showArticles( data );
    },

    // Code to run if the request fails.
    // The request, the status code of the request and the error thrown are passed to the 'error' function as arguments
    error: function( xhr, status, errorThrown ) {
      alert( "Sorry, there was a problem!" );
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
      console.dir( xhr );
    },

    // Code to run when the request is completed, regardless of success or failure
    complete: function( xhr, status ) {
      console.log( "The request is complete." );
    }

  });

  const showArticles = function( article ) {
    $articles = $("#content-posts");

    // Loop through the response data until the 5th article
    for ( let i = 0; i < 5; i++ ) {
      post = article[i]

      let $articleDiv = $("<div></div>");
      $articleDiv.addClass("post");

      let $articleHeading = $("<a></a>");
      $articleHeading.text(`${post.title}`);
      $articleHeading.attr("href", `${post.url}`);
      // Append the hyperlinked article title to the $articleDiv
      $articleDiv.append($articleHeading)


      let $articleDescription = $("<p></p>")
      $articleDescription.text(`${post.description}`);
      // Append the article description to the $articleDiv
      $articleDiv.append($articleDescription)

      // Append the $articleDiv to <div id="articles">
      $articles.append($articleDiv)
    };
  };

});
