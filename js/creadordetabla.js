function detalledeelemento(elemento) {
    retorno = "";
    if (elemento == '[object Object]') {
        if ($.isArray(vector[indice][keys[item]])) {
            var vectordeobjs = vector[indice][keys[item]];
            for (var elemento in vectordeobjs) {
                var llavesdelobjeto = Object.keys(vectordeobjs[elemento]);
                for (var item in llavesdelobjeto) {
                    retorno = retorno + llavesdelobjeto[item] + " : " + detalledeelemento(vectordeobjs[elemento][llavesdelobjeto[item]]) + " <br> ";

                }
            }

        }
        else {
            var objetocomplejo = vector[indice][keys[item]];
            console.log("objeto complejo: ", objetocomplejo)
            var llavesdelobjeto = Object.keys(vector[indice][keys[item]]);
            for (var item in llavesdelobjeto) {
                retorno = retorno + llavesdelobjeto[item] + " : " + detalledeelemento(objetocomplejo[llavesdelobjeto[item]]) + " <br> ";

            }
        }


    }
    else {
        retorno = elemento;
    }

    return retorno;

}

function devuelve_tabla(vector, idtabla, div) {
    localStorage.setItem(idtabla, null);
    var keys = Object.keys(vector[0]);

    var tabla = "<table style='font-size:smaller;width:100%' id= '" + idtabla + "' class='display nowrap'><thead><tr>";
    for (var item in keys) {
        tabla = tabla + "<th>" + keys[item] + "</th>";

    }
    tabla = tabla + "<th>Seleccionar</th>";
    tabla = tabla + "</tr></thead><tbody>";
    for (var indice in vector) {
        tabla = tabla + "<tr>";
        for (var item in keys) {
            if (vector[indice][keys[item]] == '[object Object]') {

                var resumendelobjeto = "";
                if ($.isArray(vector[indice][keys[item]])) {
                    //  resumendelobjeto = "Es un vector"
                    var vectordeobjs = vector[indice][keys[item]];
                    for (var elemento in vectordeobjs) {
                        var llavesdelobjeto = Object.keys(vectordeobjs[elemento]);
                        for (var item in llavesdelobjeto) {
                            resumendelobjeto = resumendelobjeto + llavesdelobjeto[item] + " : " + vectordeobjs[elemento][llavesdelobjeto[item]] + " <br> ";

                        }
                    }
                }
                else {

                    var objetocomplejo = vector[indice][keys[item]];
                    console.log("objeto complejo: ", objetocomplejo)
                    var llavesdelobjeto = Object.keys(vector[indice][keys[item]]);
                    for (var item in llavesdelobjeto) {
                        resumendelobjeto = resumendelobjeto + llavesdelobjeto[item] + " : " + objetocomplejo[llavesdelobjeto[item]] + " <br> ";

                    }


                }
                tabla = tabla + "<td>" + resumendelobjeto + "</td>";

            } else {
                tabla = tabla + "<td>" + vector[indice][keys[item]] + "</td>";
            }
            // tabla = tabla + "<td>" + detalledeelemento([indice][keys[item]]) + "</td>";
        }
        var jsonformateado = JSON.stringify(vector[indice]).replace(/"/g, "'");
        var jsonformateado = jsonformateado.replace(/,/g, ";");
        tabla = tabla + "<td><input type='button' value= 'Seleccionar' onclick='seleccionatabla(" + JSON.stringify(vector[indice]) + ", \"" + idtabla + "\")' /></td>";
        tabla = tabla + "</tr>";
    }

    tabla = tabla + "</tbody></table>";
    div.innerHTML = tabla;
    $('#' + idtabla).DataTable({
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true
    });
    // return tabla;

}


function devuelve_tabla_opcion_multiple(vector, idtabla, div, funcionaejecutar) {
    localStorage.setItem(idtabla, null);
    var keys = Object.keys(vector[0]);

    var tabla = "<table  style='font-size:smaller;width:30%' id= '" + idtabla + "' class='display nowrap'><thead><tr>";
    for (var item in keys) {
        tabla = tabla + "<th>" + keys[item] + "</th>";

    }
    tabla = tabla + "<th>Seleccionar</th>";
    tabla = tabla + "</tr></thead><tbody>";
    for (var indice in vector) {
        tabla = tabla + "<tr>";
        for (var item in keys) {
            if (vector[indice][keys[item]] == '[object Object]') {

                var resumendelobjeto = "";
                if ($.isArray(vector[indice][keys[item]])) {
                    var vectordeobjs = vector[indice][keys[item]];
                    for (var elemento in vectordeobjs) {
                        var llavesdelobjeto = Object.keys(vectordeobjs[elemento]);
                        for (var item in llavesdelobjeto) {
                            resumendelobjeto = resumendelobjeto + llavesdelobjeto[item] + " : " + vectordeobjs[elemento][llavesdelobjeto[item]] + " <br> ";

                        }
                    }
                }
                else {

                    var objetocomplejo = vector[indice][keys[item]];
                    console.log("objeto complejo: ", objetocomplejo)
                    var llavesdelobjeto = Object.keys(vector[indice][keys[item]]);
                    for (var item in llavesdelobjeto) {
                        resumendelobjeto = resumendelobjeto + llavesdelobjeto[item] + " : " + objetocomplejo[llavesdelobjeto[item]] + " <br> ";

                    }


                }
                tabla = tabla + "<td>" + resumendelobjeto + "</td>";

            } else {
                tabla = tabla + "<td>" + vector[indice][keys[item]] + "</td>";
            }

            // tabla = tabla + "<td>" + detalledeelemento([indice][keys[item]]) + "</td>";

        }
        var jsonformateado = JSON.stringify(vector[indice]).replace(/"/g, "'");
        var jsonformateado = jsonformateado.replace(/,/g, ";");
        tabla = tabla + "<td><input  type='checkbox' value= 'Seleccionar' onchange='seleccionatablamultiple(" + JSON.stringify(vector[indice]) + ", \"" + idtabla + "\", this, " + funcionaejecutar + ")' /></td>";
        tabla = tabla + "</tr>";
    }

    tabla = tabla + "</tbody></table>";
    div.innerHTML = tabla;
    $('#' + idtabla).DataTable({
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true
    });
    // return tabla;

}

function seleccionatabla(obj, idtabla) {
    console.log(obj)

    localStorage.setItem(idtabla, JSON.stringify(obj));

    let parent = document.getElementById(idtabla).parentNode;
    $('#titulo' + idtabla).remove();
    let titulo = document.createElement("h7");
    titulo.id = 'titulo' + idtabla;

    var keys = Object.keys(obj);
    titulo.innerHTML = " - Elemento seleccionado: ";
    for (var item in keys) {
        titulo.innerHTML += keys[item] + ":" + obj[keys[item]] + " ";

    }

    var acordion = parent.parentNode.parentNode.parentNode.parentNode;

    parent.insertBefore(titulo, parent.firstChild)
    //content = acordion.getElementsByClassName("keys")[0];
    kbButtons = acordion.getElementsByTagName("button")[0];
    kbButtons.appendChild(titulo)
    kbButtons.click();

    // $(".panel-collapse").collapse("hide");

}


function seleccionatablamultiple(obj, idtabla, check, funcionaejecutar) {
    console.log(obj)
    var vectorayaenmemoria = [];
    if (localStorage.getItem(idtabla) != 'null') {
        vectorayaenmemoria = JSON.parse(localStorage.getItem(idtabla))
    }


    if (check.checked) {
        vectorayaenmemoria.push(obj);
    }
    else {
        if (vectorayaenmemoria.length > 0) {
            //  var indice = vectorayaenmemoria.indexOf(obj);
            for (var ele in vectorayaenmemoria) {

                if (JSON.stringify(vectorayaenmemoria[ele]) == JSON.stringify(obj)) {
                    vectorayaenmemoria.splice(ele, 1);
                    break;

                }

            }


        }
    }

    localStorage.setItem(idtabla, JSON.stringify(vectorayaenmemoria));
    funcionaejecutar();


}




function devuelve_tabla_ejecuta_funcion(vector, idtabla, div, funcionaejecutar) {
    localStorage.setItem(idtabla, null);
    var keys = Object.keys(vector[0]);

    var tabla = "<table style='font-size:smaller' id= '" + idtabla + "'><thead><tr>";
    for (var item in keys) {
        tabla = tabla + "<th>" + keys[item] + "</th>";

    }
    tabla = tabla + "<th>Seleccionar</th>";
    tabla = tabla + "</tr></thead><tbody>";
    for (var indice in vector) {
        tabla = tabla + "<tr>";
        for (var item in keys) {
            tabla = tabla + "<td>" + vector[indice][keys[item]] + "</td>";

        }
        var jsonformateado = JSON.stringify(vector[indice]).replace(/"/g, "'");
        var jsonformateado = jsonformateado.replace(/,/g, ";");
        tabla = tabla + "<td><input type='button' value= 'Seleccionar' onclick='seleccionatabla(" + JSON.stringify(vector[indice]) + ", \"" + idtabla + "\", " + funcionaejecutar + ")' /></td>";
        tabla = tabla + "</tr>";
    }

    tabla = tabla + "</tbody></table>";
    div.innerHTML = tabla;
    $('#' + idtabla).DataTable();
    // return tabla;

}

function seleccionatablafuncionaejecutar(obj, idtabla, funcionaejecutar) {
    console.log(obj)

    localStorage.setItem(idtabla, JSON.stringify(obj));

    let parent = document.getElementById(idtabla).parentNode;
    $('#titulo' + idtabla).remove();
    let titulo = document.createElement("h7");
    titulo.id = 'titulo' + idtabla;

    var keys = Object.keys(obj);
    titulo.innerHTML = " - Elemento seleccionado: ";
    for (var item in keys) {
        titulo.innerHTML += keys[item] + ":" + obj[keys[item]] + " ";

    }

    var acordion = parent.parentNode.parentNode.parentNode.parentNode;

    parent.insertBefore(titulo, parent.firstChild)
    //content = acordion.getElementsByClassName("keys")[0];
    kbButtons = acordion.getElementsByTagName("button")[0];
    kbButtons.appendChild(titulo)
    kbButtons.click();

    // $(".panel-collapse").collapse("hide");
    funcionaejecutar();
}