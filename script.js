document.addEventListener('DOMContentLoaded', function() {
    var URL = "1I6tyum4ae2d2mlNhdH5Q6nARLSyNNFtve09_GO5yS0I"
    Tabletop.init( { key: URL, callback: loadSheet, simpleSheet: true } )
})


function loadSheet(data) {
  for(var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}
