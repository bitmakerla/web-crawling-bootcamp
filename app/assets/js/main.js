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

    $(function(){
        $("form[name='registration']").validate({
            rules:{
                name: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages:{
                name: "Por favor, ingrese su nombre",
                email:"Por favor, ingrese un email valido"
            },
            submitHandler: function(form) {
                form.submit();
            }
        });
    });