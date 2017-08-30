function Chart() {
  LastFm.apply(this, arguments);
  this.package = "chart";
}

Chart.prototype = Object.create(LastFm.prototype);
Chart.prototype.constructor = Chart;

Chart.prototype.getTopArtists = function(callback) {
  var queryParam = {method:"gettopartists", params:{}};
  this.load(queryParam, callback);
}
