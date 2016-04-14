document.addEventListener('DOMContentLoaded', function() {
    var URL = ""
    Tabletop.init( { key: URL, callback: loadSheet, simpleSheet: true } )
})


function loadSheet(data) {
  for(var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}
