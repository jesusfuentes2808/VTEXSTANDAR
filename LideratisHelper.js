$(document).ready(function() {
    window.LideratisHelper = new Object();
    /****************************************************************************************************************/
    //Esta función se encarga de limpiar las comillas (simples, dobles).
    //
    /****************************************************************************************************************/
    LideratisHelper.ClearQuotationMarks = function(texto) {
            try {
                var cadena = texto;
                if (typeof(cadena) !== 'undefined') {
                    if (typeof(cadena) === 'string') {
                        cadena = cadena.replace(/['"]+/g, '');
                    }
                } else {
                    cadena = '';
                }
                return cadena;
            } catch (error) {
                console.log("MSG: " + error.message);
            }
        }

    LideratisHelper.ClearBlankSpaces = function(texto) {
            try {
                var cadena = texto;
                if (typeof(cadena) !== 'undefined') {
                    if (typeof(cadena) === 'string') {
                        cadena = cadena.replace(/ +/g, ' ').trim();
                    }
                } else {
                    cadena = '';
                }
                return cadena;
            } catch (error) {
                console.log("MSG: " + error.message);
            }
        }

        /****************************************************************************************************************/
        //Esta función ejecuta la limpieza de string
        //Code Snippets: ProductView
        //               PageView
        /****************************************************************************************************************/

    LideratisHelper.Price = function(valor,caracter,reemplazo="") {
        try {
            var precio = valor;
            if (typeof precio !== 'undefined') {
                if (typeof precio === 'string') {
                    precio = precio.replace(caracter, reemplazo);
                }
            } else {
                precio = '';
            }
            return precio;
        } catch (error) {
            console.log("MSG: " + error.message);
        }
    };
    /****************************************************************************************************************/
    //Esta función se encarga 
    /****************************************************************************************************************/
    LideratisHelper.AttributesJoin = function(arre, caracter) {
        try {
            var arreglo = arre;
            arreglo = arreglo.join(caracter);
            return arreglo;
        } catch (error) {
            console.log("MSG: " + error.message);
        }
    };
    /****************************************************************************************************************/
    //Funcion que se aplica para la cantidad de decimales de un numero.
    /****************************************************************************************************************/
    LideratisHelper.NumberOfDecimal = function(valor, ndecimal) {
            try {
                var precio = valor;
                if (typeof precio !== 'undefined') {
                    if (typeof precio === 'string') {
                        precio = parseFloat(precio);
                    }
                    precio = precio.toFixed(ndecimal);
                }
                return precio;
            } catch (error) {
                console.log("MSG: " + error.message);
            }
        }

    /****************************************************************************************************************/
    //Funcion que se aplica para la cantidad de decimales de un numero.
    /****************************************************************************************************************/

    LideratisHelper.PrefixSuffix = function(prefix = "",suffix = "",title = "") {
            try {
                var iPrefix = prefix;
                var iSuffix = suffix;
                var iTitle  = title;
                var tTitle  = "";
                if (typeof iPrefix !== 'undefined' && typeof iSuffix !== 'undefined') {
                    if (typeof iPrefix === 'string' && typeof iSuffix === 'string') {
                        tTitle  = (iPrefix!="")?iPrefix.toUpperCase().trim()+": ":"";
                        tTitle += iTitle+" | "+iSuffix;
                    }
                    tTitle = tTitle.trim();
                }
                return tTitle;
            } catch (error) {
                console.log("MSG: " + error.message);
            }
        }

    
    LideratisHelper.ValidateVariable = function(typeVar,varName) {
            try {
                var validate = false;
                
                if(typeof varName !== 'undefined' && typeof varName === typeVar)
                    validate = true;

                return validate;
            } catch (error) {
                console.log("MSG: " + error.message);
            }
    }

    LideratisHelper.CreateCookies = function( cookie_name, cookie_value, lifespan_in_days, valid_domain ) {
            var domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
            document.cookie = cookie_name + "=" + encodeURIComponent( cookie_value ) +
              "; max-age=" + 60 * 60 * 24 * lifespan_in_days +
              "; path=/" + domain_string ;
        
    }

    window.LideratisHelper = new Object();
    LideratisHelper.GetCookies    = function( cookie_name ){
            var cookie_string = document.cookie;
            if (cookie_string.length != 0) {
            var cookie_value = cookie_string.match ( '(^|;)[\s]*' + cookie_name + '=([^;]*)' );
                return decodeURIComponent ( cookie_value[2] );
            }
            return '';
    }

    LideratisHelper.DeleteCookie = function ( cookie_name, valid_domain ){
      var domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
      document.cookie = cookie_name + "=; max-age=0; path=/" + domain_string ;
    }

    LideratisHelper.GetParameter = function( name ){
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    window.LideratisHelper = new Object();
    LideratisHelper.AdicionarAtributos = function( attr ){

    }

    LideratisHelper.GetArrayAtttibutes = function(array){
        var indexSize = LideratisHelper.GetArrayIndexHigher(array);
        arrayAttr = new Array();
        for (var i = 1; i <= indexSize; i++) {
            arrayAttr[i-1] = (typeof array[i] !== "undefined")?array[i]:"";
        }
        return arrayAttr.join("-_-");
    }

    LideratisHelper.GetArrayIndexHigher = function(array){
        var indexFinal = -1;
        array.forEach(function(value,index){
            console.log(index);
            if(indexFinal < index){
                indexFinal=index;
            }   

        });
        console.log(indexFinal);
        return indexFinal;
    }

    LideratisHelper.URL = function(numero = 0){
        switch(numero) {
            case 0:
                return window.location.protocol
                break;
            case 1:
                return window.location.host
                break;
            case 2:
                return window.location.pathname
                break;
            case 3:
                return window.location.href 
            default:
                return "-1"
        }
    }

});