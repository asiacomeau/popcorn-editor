/* This Source Code Form is subject to the terms of the MIT license
 * If a copy of the MIT license was not distributed with this file, you can
 * obtain one at https://raw.github.com/mozilla/butter/master/LICENSE */

( function( Butter ) {
  document.addEventListener( "DOMContentLoaded", function() {
    Butter.init({
      config: "./templates/basic/config.json",
      location: window.location,
      debug: false,
      ready: function( butter ) {
        butter.listen( "mediaready", function mediaReady() {
          butter.unlisten( "mediaready", mediaReady );
          document.querySelector( "#embed-wrapper" ).classList.remove( "faded" );
          parent.postMessage({type: 'loaded'}, window.location.origin);
        });
      }
    });
  }, false );
}( window.Butter ) );
