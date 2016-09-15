jQuery( 'a[href^="/term/"]' ).each( function(){
  let href = jQuery(this).attr( 'href' ),
    id = href.slice( href.lastIndexOf( '/' ) + 1 ),
    url = `https://thenounproject.com/icon/${id}/download/`;

  jQuery.ajax({
    type: 'POST',
    url: url,
    data: 'img_type=png',
    processData: false,
    complete: function( data ){
      console.log( data.responseJSON.download );
    }
  });
});
