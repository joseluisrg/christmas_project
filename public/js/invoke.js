$("#btnInvoke").on('click', function () { 
    //alert($('#nInput')[0].value)
    $('#sectionResultado')[0].style.visibility = "visible"
    start = new Date().getTime()

     //llamada asíncrona a Node.js Function en Google
    $.ajax({
      url: '/googlenode',
      type: 'POST',
      // Form data
      data: { n: $('#nInput')[0].value },
      dataType: 'json',
      success: function (data) {
        $('#textGoogleNode')[0].value = data.data
        end = new Date().getTime()
        $('#msGoogleNode')[0].innerText = (end-start) + " ms"
      },
      error: function (error) {
        $('#textGoogleNode')[0].value = "Error al invocar"
        $('#msGoogleNode')[0].innerText = "NA"

        console.log(error)
      }
    });

    //llamada asíncrona a Golang Function en Google
    $.ajax({
      url: '/googlegolang',
      type: 'POST',
      // Form data
      data: { n: $('#nInput')[0].value },
      dataType: 'json',
      success: function (data) {
        $('#textGoogleGo')[0].value = data.data
        end = new Date().getTime()
        $('#msGoogleGo')[0].innerText = (end-start) + " ms"
      },
      error: function (error) {
        $('#textGoogleGo')[0].value = "Error al invocar"
        $('#msGoogleGo')[0].innerText = "NA"

        console.log(error)
      }
    });

    //llamada asíncrona a Java Function en Azure
    $.ajax({
      url: '/azurejava',
      type: 'POST',
      // Form data
      data: { n: $('#nInput')[0].value },
      dataType: 'json',
      success: function (data) {
        $('#textAzureJava')[0].value = data.data
        end = new Date().getTime()
        $('#msAzureJava')[0].innerText = (end-start) + " ms"
      },
      error: function (error) {
        $('#textAzureJava')[0].value = "Error al invocar"
        $('#msAzureJava')[0].innerText = "NA"

        console.log(error)
      }
    });

    //llamada asíncrona a Node Function en Google
    $.ajax({
      url: '/azurenode',
      type: 'POST',
      // Form data
      data: { n: $('#nInput')[0].value },
      dataType: 'json',
      success: function (data) {
        $('#textAzureNode')[0].value = data.data
        end = new Date().getTime()
        $('#msAzureNode')[0].innerText = (end-start) + " ms"
      },
      error: function (error) {
        $('#textAzureNode')[0].value = "Error al invocar"
        $('#msAzureNode')[0].innerText = "NA"

        console.log(error)
      }
    });
  });



