
var result;

function getWeather() {

  var textElement1 = document.getElementById("latitud");
  var textElement2 = document.getElementById("longitud");
  var resultElement =  document.getElementById("resultado");

  latitud= textElement1.value;
  longitud= textElement2.value;
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+latitud+"&lon="+longitud+"&appid=9b4f5e18b89f0b63c4398f0afcc702ea",
    function(json) {
      console.log(json);
      $('#resultado').text(JSON.stringify(json));
    }
  );
result= Json.parse(resultElement.innerHTML);
}
