function LastFm(api_key) {
  this.apiKey = "322b365de048b251b67a31166b9529d0";
  this.rootURL = "https://ws.audioscrobbler.com/2.0/";
}

LastFm.prototype.load = function(queryParam, callback) {
  var url = this.rootURL +
      "?method=" + this.package + "." + queryParam.method +
      LastFm.parseParam(queryParam.params) +
      "&api_key=" + this.apiKey + "&format=json";
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      if(request.status === 200) {
        callback(JSON.parse(request.responseText));
      } else {
        console.log("status is " + request.status);
      }
    }
  }
  request.open("GET", url);
  request.send(null);
}

LastFm.parseParam = function(queryParam) {
  var result = "";
  for(var key in queryParam) {
    result += "&" + key + "=" + encodeURIComponent(queryParam[key]);
  }
  return result;
}
