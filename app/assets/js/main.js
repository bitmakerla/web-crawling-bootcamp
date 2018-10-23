AOS.init();

    $("#filebutton").click(function() {
        $("#test").click();
    })

    $('#test').change(function() {
        $('#test_form').submit();
    });


    function show() {
        document.getElementById("myDiv").style.display="inline";
        setTimeout("hide()", 10000);
    }

    function hide() {
        document.getElementById("myDiv").style.display="none";
    }

//jquery validation

    

//example
  $(function() {
    $.validator.setDefaults({
      success: 'valid'
    });

    $("#registration").validate({
        rules:{
            name: {
                required: true,
                minlength: 3,
                maxlength: 50
            },
            email: {
                required: true,
                email: true
            },
            field:{
                required: true,
                extension: 'pdf'
            }
        },
        messages:{
            name: {
                required: "Por favor, ingrese su nombre",
                minlength: 'Por favor, ingrese mínimo 3 carácteres',
                maxlength: 'Por favor, ingrese máximo 50 carácteres'
            },
            email: {
                required: "Por favor, ingrese un email valido",
                email: "Ingrese un email valido",
            },
            field:{
                required: 'Por favor, ingrese su cv',
                extension: 'Por favor, el archivo debe ser formato pdf'
            }
        },
    });

  });
