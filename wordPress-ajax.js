//To get text and images from WordPress by function

(function($) {

  $(document).ready(function() { //start function

    //function
    function getWordPress(pUrl, pElement) {
      var url = pUrl;

      $.ajax({ //loading data by ajax
        type: "GET",
        url: url,
        timeout: 2000,
        beforeSend: function() {
          //console.log('beforeSend');
        },
        complete: function() {
          //console.log('Connection is complete.');
        },
        success: function(myData) { //give data (objects) from WordPress
          //console.log(myData)
          wordPress(myData); //call the function - below
        },
        error: function() {
          //console.log('Connection failed!');
        }
      }); //end of ajax


      //Set function for display text and images
      function wordPress(wpData) { //name function and set parameter to get data
        //console.log('This is "wordPress function".', wpData);

        var title = wpData.title.rendered;
        var content = wpData.content.rendered;
        //console.log(title, content);


        if (wpData._embedded['wp:featuredmedia']) { //start if statement to get any post that has feature image
          var featuredMedia = wpData._embedded['wp:featuredmedia']; //console.log(featuredMedia);


          for (var p = 0; p < featuredMedia.length; p++) { //for loop through variable featuredMedia
            var image = featuredMedia[p].media_details.sizes.medium.source_url; //set variable to feature image to get the images from WordPress
            //console.log('This is feature image!', image);

            var caption = featuredMedia[p].caption.rendered; //set variable to get image caption
            var featureImageTitle = featuredMedia[p].title.rendered;
            //console.log('Get caption and title', caption, featureImageTitle);

            var html = " "; //display text, images by creating HTML
            html += '<h1>' + title + '</h1>';
            html += '<div class="content">';
            html += '<figure>';
            html += '<img class="image" src=" ' + image + '">';
            html += '<figcaption>' + '<h3>' + featureImageTitle + '</h3>' + caption + '</figcaption>';
            html += '</figure>';
            html += content;
            html += '</div>';


            pElement.append(html);


            // function to style element in html +=
            $(document).ready(function() { //function to add attribute 'id'

              $("figure").each(function(n) { //add id to <figure>
                $(this).attr("id", "imageForText" + n);
              });

              $("#imageForText3 img").css({ //styling third image
                "width": "80%",
                "margin-left": "auto",
                "margin-right": "auto",
                "display": "block"
              }); //add styling to image in post3

              $("#imageForText3 figcaption").css("text-align", "center"); //add styling to figcaption in post3
              $('#imageForText3 .image').css("width", "50%"); //add styling to image in post3

              //move h1(title) in post3 under images
              $("#container3 h1").insertAfter("#imageForText3");

            }); //end of jquey function


          } //end of for loop
        } // end of if statement

      } // end of wordpress function
    } //end of getWordPress function

    //set variable to the links that locate each post
    var $url1 = "http://localhost/wcm17WP/wp-json/wp/v2/posts/27?_embed=true"; //to post1
    var $section1 = $('#container1');
    getWordPress($url1, $section1);
    //console.log($section1);

    var $url2 = "http://localhost/wcm17WP/wp-json/wp/v2/posts/30?_embed=true"; //to post2
    var $section2 = $('#container2');
    getWordPress($url2, $section2);
    //console.log($url2);

    var $url3 = "http://localhost/wcm17WP/wp-json/wp/v2/posts/41?_embed=true"; // to post3
    var $section3 = $('#container3');
    getWordPress($url3, $section3);
    //console.log($url3, $section3);
  });

})(jQuery)
