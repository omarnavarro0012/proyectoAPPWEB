function agregarIngrediente(nombre) {

    var html = $("#listaIngredientes").html() + 
    `
    <li class="list-group-item"
                      style="background-color: inherit;"  
                  >
                      <div class="row text-center">
                          <div class="col-1 mr-1">
                              <button class="btn btn-danger rounded-circle" id="${nombre}">&times;</button>
                          </div>
                          <div class="col-9 ml-2">
                              <h4 class="display-4 font-italic mt-1" 
                                  style="font-size: .6cm; font-family: Verdana, Geneva, Tahoma, sans-serif;
                                  color: white; 
                                  -webkit-text-stroke: 1px;
                                  -webkit-text-stroke-color: #0062FF;"  
                              >
                                      ${nombre}
                            </h4>
                          </div>
                      </div>
                  </li>
    ` ;
    
    $("#listaIngredientes").html(html);
}


$(document).ready(function() {
    
    $("#recetaNueva #btnAgregarING").click(function() {
        console.log("Agregando ingrediente");
        agregarIngrediente($("#ingredienteNuevo").val());
        $("#ingredienteNuevo").val("");
        console.log(ingredientes);
    });
});