(function ($) {
 $(document).ready(function () {

   function getWPFunction(pUrl, pElement) {
     var url = pUrl;

     $.ajax({
       type: "GET", // Use Get
       url: url,
       timeout: 2000, // set timeout for how long want to load
       beforeSend: function () {
         console.log('log beforesend ');
       },
       complete: function () {
         console.log('log complete');
       },
       success: function (wpData) { // pass in Parameter from WP
         jsWithNT(wpData); // skick wpData till jsWithNT FN

       },
       error: function () { // if is error log
         console.log('Something goes wrong with connection!');
      }
}); // end of $.ajax


     function jsWithNT(pData) {
       //console.log('This is from pData', pData); // log wpData
       var wpTitle = pData.title.rendered; // loop all rendered in title
       //console.log(wpTitle);
       //console.log(' pData.length ', pData.length);
       var wpTitle = pData.title.rendered; // loop all rendered in title
       var wpContent = pData.content.rendered; // loop content from wp
       // console.log('CHK title and content', wpTitle, wpContent); // it works
       if (pData._embedded['wp:featuredmedia']) {
         var wpFM = pData._embedded['wp:featuredmedia'];
         //  console.log('This is wpFM', wpFM);

         for (var i = 0; i < wpFM.length; i++) {
           var wpImage = wpFM[i].media_details.sizes.medium_large.source_url;
           var wpCaption = wpFM[i].caption.rendered;
           var wpFeaturedMediaTitle = wpFM[i].title.rendered;
           //console.log('test', wpTitle, wpContent, wpImage, wpCaption);

           var wpHTML = ''; // Add content here later

           wpHTML += '<section>'; // open tag add section in html
           wpHTML += '<h1>' + wpTitle + '</h1>' // add h1 title
           wpHTML += '<figure>'; // open tag add figure
           wpHTML += '<img class="imageSet" src="' + wpImage + '">'; // add img
           wpHTML += '<figcaption>' + '<h2>' + wpFeaturedMediaTitle + '</h2>' + wpCaption + '</figcaption>';
           wpHTML += '</figure>'; // add closing tag
           wpHTML += wpContent; // add content
           wpHTML += '</section>';//section close
      

         pElement.append(wpHTML);

          

         } // end of if _embedded

       } // for loop pData

     } // end jsWithT FN

   } // end getWPFun
   var $url_1 = "http://localhost/mytask/wp-json/wp/v2/posts/39?_embed=true"; 
   var $section_1 = $('#postOne');
   getWPFunction($url_1, $section_1);

   var $url_2 = "http://localhost/mytask/wp-json/wp/v2/posts/32?_embed=true";
   var $section_2 = $('#postTwo');
   getWPFunction($url_2, $section_2);
   
   var $url_3 = "http://localhost/mytask/wp-json/wp/v2/posts/27?_embed=true";
   var $section_3 = $('#postThree');
   getWPFunction($url_3, $section_3);

 }); // end of .readyFN
})(jQuery)