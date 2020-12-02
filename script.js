
// $.ajax({
//   method: 'GET',
//   url: 'http://jsonplaceholder.typicode.com/posts/1',
//   success: function(data){
//     console.log(data)
//   }
// })

// PRÓXIMAMENTE ESTARÉ APLICANDO PRINCIPIOS DE SOLID Y REFACTORING A ESTE CODIGO, NO SOLO PARA MEJORAR LA ESCABILIDAD, SINO TAMBIEN INTEGRANDO NUEVAS TECNOLIGIAS COMO FETCH, REACT, WEBPACK. 

$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es',
  success: function(data){
    console.log(data.weather[0].description)
    $("#ciudad").html(data.name)
    $("#temperatura").html(data.main.temp)
    $("#temperaturaMin").html(data.main.temp_min)
    $("#temperaturaMax").html(data.main.temp_max)
    $("#estado_del_cielo").html(data.weather[0].description)

  }
})

$("#buenos_aires").click(function(){
$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es',
  success: function(data){
    console.log(data.weather[0].description)
    $("#ciudad").html(data.name)
    $("#temperatura").html(data.main.temp)
    $("#temperaturaMin").html(data.main.temp_min)
    $("#temperaturaMax").html(data.main.temp_max)
    $("#humidity").html(data.main.humidity)
    $("#estado_del_cielo").html(data.weather[0].description)

  }
})

})

$("#barcelona").click( function(){
$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es',
  success: function(data){
    console.log(data.weather[0].description)
    $("#ciudad").html(data.name)
    $("#temperatura").html(data.main.temp)
    $("#temperaturaMin").html(data.main.temp_min)
    $("#temperaturaMax").html(data.main.temp_max)
    $("#humidity").html(data.main.humidity)
    $("#estado_del_cielo").html(data.weather[0].description)

  }
})

} )


$("#chicago").click( function(){
$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es',
  success: function(data){
    console.log(data.weather[0].description)
    $("#ciudad").html(data.name)
    $("#temperatura").html(data.main.temp)
    $("#temperaturaMin").html(data.main.temp_min)
    $("#temperaturaMax").html(data.main.temp_max)
    $("#humidity").html(data.main.humidity)
    $("#estado_del_cielo").html(data.weather[0].description)

  }
})

})


$("#boton").click( function(){
  var ciudad = $("input").val();
  $.ajax({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' +ciudad + '&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es',
    success: function(data){
      console.log(data.weather[0].description)
      $("#ciudad").html(data.name)
      $("#temperatura").html(data.main.temp)
      $("#temperaturaMin").html(data.main.temp_min)
      $("#temperaturaMax").html(data.main.temp_max)
      $("#humidity").html(data.main.humidity)
      $("#estado_del_cielo").html(data.weather[0].description)
    }
  })
})

