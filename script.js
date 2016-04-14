document.addEventListener('DOMContentLoaded', function() {
    var URL = "1I6tyum4ae2d2mlNhdH5Q6nARLSyNNFtve09_GO5yS0I"
    Tabletop.init( { key: URL, callback: success, simpleSheet: true } )
})


function success(results) {
  for(var i = 0; i < results.length; i++) {
    currentResult = results[i];

    console.log(currentResult);

    var item = $('<div></div>');
    item.text(currentResult["What are you doing?"] + ": " + currentResult["Mood"]);

    $("body").append(item);
  }
}
