var contador =0;
var medidaLateral = ($("body").width()-($("#contenedor").width()))/2
var altoTopCursor = ($("#contenedor").offset()).top;
$("#contenedor").on({
    click:function(evento){      
        if(contador==0){
            $("#myCircle").find("circle").attr("cx" , (evento.pageX-medidaLateral)+"px" )
            $("#myCircle").find("circle").attr("cy" , (evento.pageY-altoTopCursor)+"px" )
            $("#myCircle").find("circle").css({
                "transform":"scale(1.8)",
                "animation-name":"bounceIn",
                "animation-duration":"1s"
            } );
            contador++;
        }
        else if(contador==1){
            $("#myCircle").find("circle").css({
                "transform":"scale(1)",
                "animation-name":"bounceOut",
                "animation-duration":"1s",
            } );
            contador++;
        }
        else{
            $("#myCircle").find("circle").css({
                "transform":"scale(0)", 
            } );
            contador = 0;
        }
    }   
})
$("#contenedor").on({
    mousemove:function(ev){
        $("#myCircle").find("circle").attr("cx" , (ev.pageX-medidaLateral)+"px" )
        $("#myCircle").find("circle").attr("cy" , ev.pageY-altoTopCursor+"px" )
        $("#myCircle circle").css({
            "transform-origin": ((ev.pageX-medidaLateral)+"px") + " "+((ev.pageY-altoTopCursor)+"px")
        })
    }
})