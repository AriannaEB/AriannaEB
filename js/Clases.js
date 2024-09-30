class _Metodosbasicos {
    constructor() {

    }
    Guardar(urlapiaconsumir, funcionajecutar) {


        EjecutaAjax("PUT", urlapiaconsumir, this).then(function (response) {
            console.log(response);
            funcionajecutar();
            alert(response);

        },
            function (error) {
                console.error(error);
                alert(error);
            }
        );



    }
    Modificar(urlapiaconsumir, funcionaejecutar) {

        EjecutaAjax("POST", urlapiaconsumir, this).then(function (response) {
            console.log(response);
            alert(response);
            funcionaejecutar();
        },
            function (error) {
                console.error(error);
                alert(error);
            }
        );


    }

    Eliminar(urlapiaconsumir, funcionaejecutar) {

        EjecutaAjax("DELETE", urlapiaconsumir, this).then(function (response) {
            console.log(response);
            alert(response);
            funcionaejecutar();
        },
            function (error) {
                console.error(error);
                alert(error);
            }
        );


    }


    Seleccionartodos(urlapiaconsumir, funcionaejecutar) {

        EjecutaAjax("GET", urlapiaconsumir, this).then(function (response) {
            console.log(response);
            funcionaejecutar(response);
        },
            function (error) {
                console.error(error);
                alert(error);
            }
        );


    }
}

function EjecutaAjax(verbo, url, dato) {

    return new Promise(function (resolve, reject) {
        try {
            let peticion = new XMLHttpRequest();
            peticion.open(verbo, url);
            peticion.setRequestHeader('Content-Type', 'application/json');
            peticion.onload = function () {
                if (peticion.status === 201) {
                    console.log(JSON.parse(peticion.response));
                    resolve(JSON.parse(peticion.response));
                    console.log(peticion);
                    quitarcargando();
                }
                else {
                    reject(new Error(peticion.statusText));
                }


            };
            peticion.onerror = function () {
                reject(new Error("Error de red"));

            };

            peticion.send(JSON.stringify(dato));
            muestracargando();
        }

        catch (err) {
            reject(err.message);
        }

    });
}

function muestracargando() {

    //input.prepend("<span id= 'msgcargando'>Cargando...</span>");

    var btn = document.createElement("span");   // Create a <button> element
    btn.innerHTML = "Cargando...<br><img src='/imgs/download.gif' height='200px' />";
    btn.style = "position:absolute;left: 70%;top: 1%;";
    // Insert text
    btn.id = 'msgcargando';
    document.body.appendChild(btn);
}
function quitarcargando() {


    var element = document.getElementById("msgcargando"); // notice the change
    element.parentNode.removeChild(element);
}

class _Ubicacion extends _Metodosbasicos {
    constructor
        (
            _Id_ubicacion,
            _Descripccion,
            _Latitud,
            _Longitud

        ) {
        super();
        this.Id_ubicacion = _Id_ubicacion;
        this.Descripccion = _Descripccion;
        this.Latitud = _Latitud;
        this.Longitud = _Longitud;


    }
}

class _Empresa extends _Metodosbasicos {
    constructor
        (
            _Nombre_empresa,
            _Id_ubicacion,
            _Activiad,
            _Tipo

        ) {
        super();
        this.Nombre_empresa = _Nombre_empresa;
        this.Id_ubicacion = _Id_ubicacion;
        this.Activiad = _Activiad;
        this.Tipo = _Tipo;


    }
}

class _Turismo_Tematico extends _Metodosbasicos {
    constructor
        (
            _Id_Turismo_Tematico,
            _Nombre_empresa,
            _Fecha

        ) {
        super();
        this.Id_Turismo_Tematico = _Id_Turismo_Tematico;
        this.Nombre_empresa = _Nombre_empresa;
        this.Fecha = _Fecha;

    }
}

class _Operacion_Actividad extends _Metodosbasicos {
    constructor
        (
            _Id_Operacion_Actividad,
            _Id_Turismo_Tematico,
            _Aspecto_Tematico,
            _Promueve_Rodeado_Atractivos_Turisticos_Competitivos,
            _DISPOSICIONES_GENERALES_INFORMACION_SEGURIDAD_TURISTA1,
            _CORTINAS_VENTANAS_1,
            _EQUIPO_COMUNICACION_GUIAS1,
            _EQUIPO_ESPECIALIZADO_DESARROLLO_DE_PROGRAMAS1,
            _LOCAL_PARA_VENTA_RECUERDOS_ARTESANIAS1

        ) {
        super();
        this.Id_Operacion_Actividad = _Id_Operacion_Actividad;
        this.Id_Turismo_Tematico = _Id_Turismo_Tematico;
        this.Aspecto_Tematico = _Aspecto_Tematico;
        this.Promueve_Rodeado_Atractivos_Turisticos_Competitivos = _Promueve_Rodeado_Atractivos_Turisticos_Competitivos;
        this.DISPOSICIONES_GENERALES_INFORMACION_SEGURIDAD_TURISTA1 = _DISPOSICIONES_GENERALES_INFORMACION_SEGURIDAD_TURISTA1;
        this.CORTINAS_VENTANAS_1 = _CORTINAS_VENTANAS_1;
        this.EQUIPO_COMUNICACION_GUIAS1 = _EQUIPO_COMUNICACION_GUIAS1;
        this.EQUIPO_ESPECIALIZADO_DESARROLLO_DE_PROGRAMAS1 = _EQUIPO_ESPECIALIZADO_DESARROLLO_DE_PROGRAMAS1;
        this.LOCAL_PARA_VENTA_RECUERDOS_ARTESANIAS1 = _LOCAL_PARA_VENTA_RECUERDOS_ARTESANIAS1;



    }
}


class _Zona_Comida extends _Metodosbasicos {
    constructor
        (
            _Id_Operacion_Actividad,
            _Id_Turismo_Tematico,
            _LIMPIEZA_MANTENIMIENTO_FISICO1,
            _PROMUEVE_CARTAS_DE_MENU_ESPECIFICAS1,
            _MANTENIMIENTO_LIMPIEZA_MESAS_SILLAS1,
            _EQUIPO_COMUNICACION_CORTINAS_VENTANAS_GUIAS1,
            _MANTENIMIENTO_MOBILIARIO_KIOSCOS__SODAS1

        ) {
        super();
        this.Id_Operacion_Actividad = _Id_Operacion_Actividad;
        this.Id_Turismo_Tematico = _Id_Turismo_Tematico;
        this.LIMPIEZA_MANTENIMIENTO_FISICO1 = _LIMPIEZA_MANTENIMIENTO_FISICO1;
        this.PROMUEVE_CARTAS_DE_MENU_ESPECIFICAS1 = _PROMUEVE_CARTAS_DE_MENU_ESPECIFICAS1;
        this.MANTENIMIENTO_LIMPIEZA_MESAS_SILLAS1 = _MANTENIMIENTO_LIMPIEZA_MESAS_SILLAS1;
        this.EQUIPO_COMUNICACION_CORTINAS_VENTANAS_GUIAS1 = _EQUIPO_COMUNICACION_CORTINAS_VENTANAS_GUIAS1;
        this.MANTENIMIENTO_MOBILIARIO_KIOSCOS__SODAS1 = _MANTENIMIENTO_MOBILIARIO_KIOSCOS__SODAS1;


    }
}

class _Organizacion extends _Metodosbasicos {
    constructor
        (
            _Id_Operacion_Actividad,
            _Id_Turismo_Tematico,
            _REGULACIONES_MINISTERIO_SALUD1,
            _PROMUEVE_REGULACIONES_MUNICIPALIDAD_LOCAL1,
            _HOSPEDAJE_INSCRITO_INSTITUTO_TURISMO1,
            _CORTINAS_VENTANAS_1,
            _REGLAMENTO_OPERACION_TURISMO_AVENTURA1,
            _BITACORA_MANTENIMIENTO1,
            _MANUAL_SEGURIDAD1,
            _CERTIFICADO_PRIMEROS_AUXILIOS_RCP1,
            _GUIAS_ATENDER_TURISTAS1,
            _REGLAMENTO_INTERNO_OPERACION1

        ) {
        super();
        this.Id_Operacion_Actividad = _Id_Operacion_Actividad;
        this.Id_Turismo_Tematico = _Id_Turismo_Tematico;
        this.REGULACIONES_MINISTERIO_SALUD1 = _REGULACIONES_MINISTERIO_SALUD1;
        this.PROMUEVE_REGULACIONES_MUNICIPALIDAD_LOCAL1 = _PROMUEVE_REGULACIONES_MUNICIPALIDAD_LOCAL1;
        this.HOSPEDAJE_INSCRITO_INSTITUTO_TURISMO1 = _HOSPEDAJE_INSCRITO_INSTITUTO_TURISMO1;
        this.CORTINAS_VENTANAS_1 = _CORTINAS_VENTANAS_1;
        this.REGLAMENTO_OPERACION_TURISMO_AVENTURA1 = _REGLAMENTO_OPERACION_TURISMO_AVENTURA1;
        this.BITACORA_MANTENIMIENTO1 = _BITACORA_MANTENIMIENTO1;
        this.MANUAL_SEGURIDAD1 = _MANUAL_SEGURIDAD1;
        this.CERTIFICADO_PRIMEROS_AUXILIOS_RCP1 = _CERTIFICADO_PRIMEROS_AUXILIOS_RCP1;
        this.GUIAS_ATENDER_TURISTAS1 = _GUIAS_ATENDER_TURISTAS1;
        this.REGLAMENTO_INTERNO_OPERACION1 = _REGLAMENTO_INTERNO_OPERACION1;


    }
}

class _Variables_Ambientales extends _Metodosbasicos {
    constructor
        (
            _Id_Operacion_Actividad,
            _Id_Turismo_Tematico,
            _DA_CONOCER_PATRIMONIO_NATURAL1,
            _PROMUEVE__EDUCACION_AMBIENTAL1,
            _RECOMENDACIONES_PARA_TURISTA1,
            _CORTINAS_VENTANAS_1,
            _DESARROLLA_PRACTICAS_AMBIENTALES_SOSTENIBLES1,
            _ESPACIO_DESTINADO_COLGAR_1,
            _ARQUITECTURA_VERNACULA_DE_SU_REGION1,
            _LAMPARA_PARAVALOR_GASTRONOMIA_LOCAL_LEER1,
            _PROGRAMAS_AMBIENTALES_CONSERVACIONRECURSOS1,
            _RECONOCER_ELEMENTOS_CULTURALES_LOCALES1

        ) {
        super();
        this.Id_Operacion_Actividad = _Id_Operacion_Actividad;
        this.Id_Turismo_Tematico = _Id_Turismo_Tematico;
        this.DA_CONOCER_PATRIMONIO_NATURAL1 = _DA_CONOCER_PATRIMONIO_NATURAL1;
        this.PROMUEVE__EDUCACION_AMBIENTAL1 = _PROMUEVE__EDUCACION_AMBIENTAL1;
        this.RECOMENDACIONES_PARA_TURISTA1 = _RECOMENDACIONES_PARA_TURISTA1;
        this.CORTINAS_VENTANAS_1 = _CORTINAS_VENTANAS_1;
        this.DESARROLLA_PRACTICAS_AMBIENTALES_SOSTENIBLES1 = _DESARROLLA_PRACTICAS_AMBIENTALES_SOSTENIBLES1;
        this.ESPACIO_DESTINADO_COLGAR_1 = _ESPACIO_DESTINADO_COLGAR_1;
        this.ARQUITECTURA_VERNACULA_DE_SU_REGION1 = _ARQUITECTURA_VERNACULA_DE_SU_REGION1;
        this.LAMPARA_PARAVALOR_GASTRONOMIA_LOCAL_LEER1 = _LAMPARA_PARAVALOR_GASTRONOMIA_LOCAL_LEER1;
        this.PROGRAMAS_AMBIENTALES_CONSERVACIONRECURSOS1 = _PROGRAMAS_AMBIENTALES_CONSERVACIONRECURSOS1;
        this.RECONOCER_ELEMENTOS_CULTURALES_LOCALES1 = _RECONOCER_ELEMENTOS_CULTURALES_LOCALES1;


    }
}

class _Servicio_Cliente extends _Metodosbasicos {
    constructor
        (
            _Id_Operacion_Actividad,
            _Id_Turismo_Tematico,
            _MISION_ORGANIZACION1,
            _PROMUEVE_POLITICA_ESCRITA_SERVICIO_CLIENTE1,
            _PLAN_MARKETING1,
            _CORTINAS_VENTANAS_1,
            _SISTEMA_MEDICION_DE_SATISFACCION_CLIENTE1,
            _ESPACIO_DESTINADO_COLGAR_1,
            _SERVICIO_CLIENTE_FUNCIONA_NIVEL_ADECUADO1,
            _RECOGEN_DATOS_ESENCIALES_BOLETAS1,
            _ARCHIVO_BOLETAS_FOLLIADAS1,
            _PERSONAL_RESPETA_NATURALEZA1,
            _EVALUACION_PERIODICA1,
            _PROCEDIMIENTOS_LEGALES_QUEJAS1,
            _SIGUE_CONTESTA_QUEJAS1,
            _ENTRENAMIENTO_PERIODICO1

        ) {
        super();
        this.Id_Operacion_Actividad = _Id_Operacion_Actividad;
        this.Id_Turismo_Tematico = _Id_Turismo_Tematico;
        this.MISION_ORGANIZACION1 = _MISION_ORGANIZACION1;
        this.PROMUEVE_POLITICA_ESCRITA_SERVICIO_CLIENTE1 = _PROMUEVE_POLITICA_ESCRITA_SERVICIO_CLIENTE1;
        this.PLAN_MARKETING1 = _PLAN_MARKETING1;
        this.CORTINAS_VENTANAS_1 = _CORTINAS_VENTANAS_1;
        this.SISTEMA_MEDICION_DE_SATISFACCION_CLIENTE1 = _SISTEMA_MEDICION_DE_SATISFACCION_CLIENTE1;
        this.ESPACIO_DESTINADO_COLGAR_1 = _ESPACIO_DESTINADO_COLGAR_1;
        this.SERVICIO_CLIENTE_FUNCIONA_NIVEL_ADECUADO1 = _SERVICIO_CLIENTE_FUNCIONA_NIVEL_ADECUADO1;
        this.RECOGEN_DATOS_ESENCIALES_BOLETAS1 = _RECOGEN_DATOS_ESENCIALES_BOLETAS1;
        this.ARCHIVO_BOLETAS_FOLLIADAS1 = _ARCHIVO_BOLETAS_FOLLIADAS1;
        this.PERSONAL_RESPETA_NATURALEZA1 = _PERSONAL_RESPETA_NATURALEZA1;
        this.EVALUACION_PERIODICA1 = _EVALUACION_PERIODICA1;
        this.PROCEDIMIENTOS_LEGALES_QUEJAS1 = _PROCEDIMIENTOS_LEGALES_QUEJAS1;
        this.SIGUE_CONTESTA_QUEJAS1 = _SIGUE_CONTESTA_QUEJAS1;
        this.ENTRENAMIENTO_PERIODICO1 = _ENTRENAMIENTO_PERIODICO1;


    }
}