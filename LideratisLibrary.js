/*********************************LIBRERIA**LIDERATIS.COM***************************************/
window.LideratisLibrary = new Object();
window.LideratisdigitalData;
window.LideratisdigitalDataArray = [];
window.LideratisdigitalDataProductViewArray = [];
window.LideratisdigitalDataSAP9Array = [];

/****************************************************************************************************************/
//La funcion "LideratisLibrary.isset", comprueba si una variable se encuentra definida.
//@variable_name  : Variable
/****************************************************************************************************************/
LideratisLibrary.isset = function(variable_name) {
    try {
        if (typeof(variable_name) !== 'undefined')
            if (variable_name !== null)
                if (variable_name !== "") return true;
    } catch (e) {
        return false;
    }
}

/****************************************************************************************************************/
//La funcion "LideratisLibrary.PageView", se encarga de retornar un Json con los Datos de un Tag PageView.
//@array  : Lista de Datos que asocia valores con claves
/****************************************************************************************************************/
LideratisLibrary.PageView = function(array) {
    var pageId = array["pageId"];
    var onsiteSearchTerm = (LideratisLibrary.isset(array["onsiteSearchTerm"]) ? array["onsiteSearchTerm"] : '');
    var onsiteSearchResults = (LideratisLibrary.isset(array["onsiteSearchResults"]) ? array["onsiteSearchResults"] : '');
    var primaryCategory = (LideratisLibrary.isset(array["primaryCategory"]) ? array["primaryCategory"] : '');
    var exploreAttributes = (LideratisLibrary.isset(array["exploreAttributes"]) ? array["exploreAttributes"] : '');
    var extraFields = (LideratisLibrary.isset(array["extraFields"]) ? array["extraFields"] : '');
    if (LideratisLibrary.isset(pageId)) {
        LideratisdigitalData = {
            'page': {
                'pageInfo': {
                    'pageID': pageId,
                    'onsiteSearchTerm': onsiteSearchTerm,
                    'onsiteSearchResults': onsiteSearchResults
                },
                'category': {
                    'primaryCategory': primaryCategory
                },
                'attributes': {
                    'exploreAttributes': exploreAttributes,
                    'extraFields': extraFields
                }
            }
        }
        return LideratisdigitalData;
    } else {
        return "-1";
    }
}

/****************************************************************************************************************/
//La funcion "LideratisLibrary.ProductView", se encarga de retornar un Json con los Datos de un Tag ProductView.
//@array  : Lista de Datos que asocia valores con claves
/****************************************************************************************************************/
LideratisLibrary.ProductView = function(array) {
    var productID = array["productID"];
    var productName = array["productName"];
    var primaryCategory = (LideratisLibrary.isset(array["primaryCategory"]) ? array["primaryCategory"] : '');
    var virtualCategory = (LideratisLibrary.isset(array["virtualCategory"]) ? array["virtualCategory"] : '');
    var exploreAttributes = (LideratisLibrary.isset(array["exploreAttributes"]) ? array["exploreAttributes"] : '');
    if (LideratisLibrary.isset(productID) && LideratisLibrary.isset(productName)) {
        LideratisdigitalData = {
            'product': [{
                'productInfo': {
                    'productID': productID,
                    'productName': productName
                },
                'category': {
                    'primaryCategory': primaryCategory,
                    'virtualCategory': virtualCategory
                },
                'attributes': {
                    'exploreAttributes': exploreAttributes
                }
            }]
        }
        return LideratisdigitalData;
    } else {
        return "-1";
    }
}

/************************************************************************************************************************************/
//La funcion "LideratisLibrary.initProductView_content", se encarga de inicializar el Arreglo "LideratisdigitalDataProductViewArray".
/************************************************************************************************************************************/
LideratisLibrary.initProductView_content = function() {
    LideratisdigitalDataProductViewArray = new Array();
}

/**************************************************************************************************************************************************************************************/
//La funcion "LideratisLibrary.ProductView_content", se encarga almacenar varios arreglos de datos con su indice en especifico dentro del Array "LideratisdigitalDataProductViewArray".
//@array  : Lista de Datos que asocia valores con claves
/**************************************************************************************************************************************************************************************/
LideratisLibrary.ProductView_content = function(array) {
    LideratisdigitalDataProductViewArray[array['index']] = {
        'productInfo': {
            'productID': (LideratisLibrary.isset(array['productID']) ? array['productID'] : ''),
            'productName': (LideratisLibrary.isset(array['productName']) ? array['productName'] : '')
        },
        'category': {
            'primaryCategory': (LideratisLibrary.isset(array["primaryCategory"]) ? array["primaryCategory"] : ''),
            'virtualCategory': (LideratisLibrary.isset(array["virtualCategory"]) ? array["virtualCategory"] : '')
        },
        'attributes': {
            'exploreAttributes': (LideratisLibrary.isset(array["exploreAttributes"]) ? array["exploreAttributes"] : '')
        }
    }
}

/************************************************************************************************************************************************************************/
//La funcion "LideratisLibrary.ProductViewIterator", nos retorna  un Json con los datos de Tag un ProductView , que fueron obtenidos de la function "ProductView_content"
//@array  : Lista de Datos que asocia valores con claves
/************************************************************************************************************************************************************************/
LideratisLibrary.ProductViewIterator = function(array) {
    return LideratisdigitalDataProductViewArray;
}

/******************************************************************************************************************************************************/
//La function "LideratisLibrary.ShopAction5_BtnClick ", se encarga de retornar un Json con los datos requeridos para ejecutar un Tag de ShopAction5.
//@array  : Lista de Datos que asocia valores con claves
/******************************************************************************************************************************************************/
LideratisLibrary.ShopAction5_BtnClick = function(array) {
    try {
        LideratisdigitalData = {
            'cart': {
                'item': [{
                    'productInfo': {
                        'productID': (LideratisLibrary.isset(array['productID']) ? array['productID'] : ''),
                        'productName': (LideratisLibrary.isset(array['productName']) ? array['productName'] : '')
                    },
                    'quantity': (LideratisLibrary.isset(array['quantity']) ? array['quantity'] : 0),
                    'price': (LideratisLibrary.isset(array['price']) ? array['price'] : 0),
                    'category': {
                        'primaryCategory': (LideratisLibrary.isset(array['primaryCategory']) ? array['primaryCategory'] : ''),
                        'virtualCategory': (LideratisLibrary.isset(array['virtualCategory']) ? array['virtualCategory'] : '')
                    },
                    'attributes': {
                        'exploreAttributes': (LideratisLibrary.isset(array['exploreAttributes']) ? array['exploreAttributes'] : ''),
                        'extraFields': (LideratisLibrary.isset(array['extraFields']) ? array['extraFields'] : '')
                    }
                }]
            }
        }
        return LideratisdigitalData;
    } catch (error) {
        return "-1";
    }
}

/***********************************************************************************************************************************/
//La funcion "LideratisLibrary.initShopAction5Content", se encarga de inicializar el Arreglo "LideratisdigitalDataProductViewArray".
/***********************************************************************************************************************************/
LideratisLibrary.initShopAction5Content = function() {
    LideratisdigitalDataArray = new Array();
}

/**************************************************************************************************************************************************************************/
//La funcion "LideratisLibrary.ShopAction5Content", se encarga almacenar varios arreglos de datos con su indice en especifico dentro del Array "LideratisdigitalDataArray".
//@array  : Lista de Datos que asocia valores con claves
/**************************************************************************************************************************************************************************/
LideratisLibrary.ShopAction5Content = function(array) {
    LideratisdigitalDataArray[array['index']] = {
        'productInfo': {
            'productID': (LideratisLibrary.isset(array['productID']) ? array['productID'] : ''),
            'productName': (LideratisLibrary.isset(array['productName']) ? array['productName'] : '')
        },
        'quantity': (LideratisLibrary.isset(array['quantity']) ? array['quantity'] : ''),
        'price': (LideratisLibrary.isset(array['price']) ? array['price'] : ''),
        'category': {
            'primaryCategory': (LideratisLibrary.isset(array['primaryCategory']) ? array['primaryCategory'] : ''),
            'virtualCategory': (LideratisLibrary.isset(array['virtualCategory']) ? array['virtualCategory'] : '')
        },
        'attributes': {
            'exploreAttributes': (LideratisLibrary.isset(array['exploreAttributes']) ? array['exploreAttributes'] : ''),
            'extraFields': (LideratisLibrary.isset(array['extraFields']) ? array['extraFields'] : '')
        }
    };
}

/***************************************************************************************************************************************************************/
//La funcion "LideratisLibrary.ShopAction5", nos retorna  un Json con los datos de Tag un ShopAction5 , que fueron obtenidos de la function "ShopAction5Content"
//@array  : Lista de Datos que asocia valores con claves
/***************************************************************************************************************************************************************/
LideratisLibrary.ShopAction5 = function(array) {
    return LideratisdigitalDataArray;
}

/******************************************************************************************************************************/
//La funcion "LideratisLibrary.initShopAction9Content", se encarga de inicializar el Arreglo "LideratisdigitalDataSAP9Array".
/******************************************************************************************************************************/
LideratisLibrary.initShopAction9Content = function() {
    LideratisdigitalDataSAP9Array = new Array();
}

/*****************************************************************************************************************************************************************************/
//La funcion "LideratisLibrary.ShopAction9Content", se encarga almacenar varios arreglos de datos con su indice en especifico dentro del Array "LideratisdigitalDataSAP9Array".
//@array  : Lista de Datos que asocia valores con claves
/*****************************************************************************************************************************************************************************/
LideratisLibrary.ShopAction9Content = function(array) {
    LideratisdigitalDataSAP9Array[array['index']] = {
        'productInfo': {
            'productID': (LideratisLibrary.isset(array['productID']) ? array['productID'] : ''),
            'productName': (LideratisLibrary.isset(array['productName']) ? array['productName'] : '')
        },
        'quantity': (LideratisLibrary.isset(array['quantity']) ? array['quantity'] : '0'),
        'price': (LideratisLibrary.isset(array['price']) ? array['price'] : '0.00'),
        'category': {
            'primaryCategory': (LideratisLibrary.isset(array['primaryCategory']) ? array['primaryCategory'] : ''),
            'virtualCategory': (LideratisLibrary.isset(array['virtualCategory']) ? array['virtualCategory'] : '')
        },
        'attributes': {
            'exploreAttributes': (LideratisLibrary.isset(array['exploreAttributes']) ? array['exploreAttributes'] : ''),
            'extraFields': (LideratisLibrary.isset(array['extraFields']) ? array['extraFields'] : '')
        }
    };
}

/***************************************************************************************************************************************************************/
//La funcion "LideratisLibrary.ShopAction9", nos retorna  un Json con los datos de Tag un ShopAction9 , que fueron obtenidos de la function "ShopAction9Content"
//@array  : Lista de Datos que asocia valores con claves
/***************************************************************************************************************************************************************/
LideratisLibrary.ShopAction9 = function(array) {
    return LideratisdigitalDataSAP9Array;
}

/*******************************************************************************************************************/
//La funcion "LideratisLibrary.Order", nos retorna un Json con Datos que son nesesarios para ejecutar el Tag Order.
//@array  : Lista de Datos que asocia valores con claves
/*******************************************************************************************************************/
LideratisLibrary.Order = function(array) {
    var transactionID = array["transactionID"];
    var basePrice = array["basePrice"];
    var shipping = array["shipping"];
    var profileID = (LideratisLibrary.isset(array["profileID"]) ? array["profileID"] : '');
    var city = (LideratisLibrary.isset(array["city"]) ? array["city"] : '');
    var state_province = (LideratisLibrary.isset(array["state_province"]) ? array["state_province"] : '');
    var postalcode = (LideratisLibrary.isset(array["postalcode"]) ? array["postalcode"] : '');
    var exploreAttributes = (LideratisLibrary.isset(array["exploreAttributes"]) ? array["exploreAttributes"] : '');
    var extraFields = (LideratisLibrary.isset(array["extraFields"]) ? array["extraFields"] : '');
    var item = (LideratisLibrary.isset(array["item"]) ? array["item"] : '');
    if (LideratisLibrary.isset(transactionID) && LideratisLibrary.isset(basePrice) && LideratisLibrary.isset(shipping) && LideratisLibrary.isset(profileID)) {
        var transaction = {
            'transactionID': transactionID,
            'total': {
                'basePrice': basePrice,
                'shipping': shipping
            },
            'profile': {
                'profileInfo': {
                    'profileID': profileID
                },
                'address': {
                    'city': city,
                    'state_province': state_province,
                    'postalcode': postalcode
                }
            },
            'attributes': {
                'exploreAttributes': exploreAttributes,
                'extraFields': extraFields
            },
            'item': item
        }
        return transaction;
    } else {
        return "-1";
    }
}

/************************************************************************************************************************************/
//La funcion "LideratisLibrary.Registration", nos retorna un Json con los datos que son necesarios para ejecutar un Tag de Registro.
//@array  : Lista de Datos que asocia valores con claves
/************************************************************************************************************************************/
LideratisLibrary.Registration = function(array) {
    var profileID = array["profileID"];
    var profileEmail = (LideratisLibrary.isset(array["profileEmail"]) ? array["profileEmail"] : '');
    var exploreAttributes = (LideratisLibrary.isset(array["exploreAttributes"]) ? array["exploreAttributes"] : '');
    var city = (LideratisLibrary.isset(array["city"]) ? array["city"] : '');
    var state_province = (LideratisLibrary.isset(array["state_province"]) ? array["state_province"] : '');
    var postalcode = (LideratisLibrary.isset(array["postalcode"]) ? array["postalcode"] : '');
    var country = (LideratisLibrary.isset(array["country"]) ? array["country"] : '');
    if (LideratisLibrary.isset(profileID)) {
        LideratisdigitalData = {
            'user': [{
                'profile': [{
                    'profileInfo': {
                        'profileID': profileID,
                        'profileEmail': profileEmail,
                        'exploreAttributes': exploreAttributes
                    },
                    'address': {
                        'city': city,
                        'state_province': state_province,
                        'postalcode': postalcode,
                        'country': country
                    }
                }]
            }]
        };
        return LideratisdigitalData;
    } else {
        return "-1";
    }
}

/******************************************************************************************************************************/
//La funcion "LideratisLibrary.Element", nos retorna un Json con los datos que son necesarios para ejecutar un Tag de Element.
//@array  : Lista de Datos que asocia valores con claves
/******************************************************************************************************************************/
LideratisLibrary.Element = function(array) {
    var componentID = array["componentID"];
    var primaryCategory = (LideratisLibrary.isset(array["primaryCategory"]) ? array["primaryCategory"] : '');
    var exploreAttributes = (LideratisLibrary.isset(array["exploreAttributes"]) ? array["exploreAttributes"] : '');
    if (LideratisLibrary.isset(componentID)) {
        LideratisdigitalData = {
            'component': [{
                'componentInfo': {
                    'componentID': componentID
                },
                category: {
                    'primaryCategory': primaryCategory
                },
                attributes: {
                    'exploreAttributes': exploreAttributes
                }
            }]
        };
        return LideratisdigitalData;
    } else {
        return "-1";
    }
}

/*********************************************************************************************************************************************/
//La funcion "LideratisLibrary.ConversionEvent", nos retorna un Json con los datos que son necesarios para ejecutar un Tag de ConversionEvent.
//@array  : Lista de Datos que asocia valores con claves
/*********************************************************************************************************************************************/
LideratisLibrary.ConversionEvent = function(array) {
    var eventName = array["eventName"];
    var eventAction = array["eventAction"];
    var eventPoints = (LideratisLibrary.isset(array["eventPoints"]) ? array["eventPoints"] : '');
    var primaryCategory = (LideratisLibrary.isset(array["primaryCategory"]) ? array["primaryCategory"] : '');
    var exploreAttributes = (LideratisLibrary.isset(array["exploreAttributes"]) ? array["exploreAttributes"] : '');
    var extraFields = (LideratisLibrary.isset(array["extraFields"]) ? array["extraFields"] : '');
    if (LideratisLibrary.isset(eventName) && LideratisLibrary.isset(eventAction)) {
        LideratisdigitalData = {
            'event': [{
                'eventInfo': {
                    'eventName': eventName,
                    'eventAction': eventAction,
                    'eventPoints': eventPoints
                },
                'category': {
                    'primaryCategory': primaryCategory
                },
                'attributes': {
                    'exploreAttributes': exploreAttributes,
                    'extraFields': extraFields
                }
            }]
        };
        return LideratisdigitalData;
    } else {
        return "-1";
    }
}
/*********************************LIBRERIA**LIDERATIS.COM***************************************/

/*********************************LIBRERIA_JSON_LIDERATIS - PAGEVIEW ***************************************/
LideratisLibrary.generateJSONPageView = function(vPageId, vPrimaryCategory, vOnsiteSearchTerm, vOnsiteSearchResults, vExploreAttributes, extraFields) {

    dataPageView = new Array();

    dataPageView['pageId'] = vPageId;
    dataPageView['primaryCategory'] = vPrimaryCategory;
    dataPageView['onsiteSearchTerm'] = vOnsiteSearchTerm;
    dataPageView['onsiteSearchResults'] = vOnsiteSearchResults;
    dataPageView['exploreAttributes'] = vExploreAttributes;
    dataPageView['extraFields'] = vExtraFields;


    return new LideratisLibrary.PageView(dataPageView);
};

/*********************************LIBRERIA_JSON_LIDERATIS - PRODUCTVIEW ***************************************/
LideratisLibrary.generateJSONProductView = function(vProductID, vProductName, vPrimaryCategory, vExploreAttributes, vVirtualCategory) {

    var dataProductView = new Array();

    dataProductView['productID'] = vProductID;
    dataProductView['productName'] = vProductName;
    dataProductView['primaryCategory'] = vPrimaryCategory;
    dataProductView['exploreAttributes'] = vExploreAttributes;
    dataProductView['virtualCategory'] = vVirtualCategory;

    return new LideratisLibrary.ProductView(dataProductView);
};
/*********************************LIBRERIA_JSON_LIDERATIS - SHOPACTION5 - CLICK ***************************************/
LideratisLibrary.generateJSONShopAction5Click = function(vProductID, vProductName, vQuantity, vPrice, vPrimaryCategory, vExploreAttributes) {

    var dataShopAction5 = new Array();

    dataShopAction5['productID'] = vProductID;
    dataShopAction5['productName'] = vProductName;
    dataShopAction5['quantity'] = vQuantity;
    dataShopAction5['price'] = vPrice;
    dataShopAction5['primaryCategory'] = vPrimaryCategory;
    dataShopAction5['exploreAttributes'] = vExploreAttributes;

    return new LideratisLibrary.ShopAction5_BtnClick(dataShopAction5);
};

/*********************************LIBRERIA_JSON_LIDERATIS - ELEMENT ************************************************/
LideratisLibrary.generateJSONElement = function(vComponentID, vPrimaryCategory, vExploreAttributes) {

    var dataElement = new Array();

    dataElement['componentID'] = vComponentID;
    dataElement['primaryCategory'] = vPrimaryCategory;
    dataElement['exploreAttributes'] = vExploreAttributes;

    return new LideratisLibrary.ElementTag(dataElement);
};

/****************************LIBRERIA_JSON_LIDERATIS - CONVERSION - EVENT *********************************************/
LideratisLibrary.generateJSONConversionEvent = function(vEventName, vEventAction, vEventPoints, vPrimaryCategory, vExploreAttributes, vExtraFields) {
    var dataConversion = new Array();

    dataConversion['eventName'] = vEventName;
    dataConversion['eventAction'] = vEventAction;
    dataConversion['eventPoints'] = vEventPoints;
    dataConversion['primaryCategory'] = vPrimaryCategory;
    dataConversion['exploreAttributes'] = vExploreAttributes;
    dataConversion['extraFields'] = vExtraFields;

    return new LideratisLibrary.ConversionEvent(dataConversion);
};

/****************************LIBRERIA_JSON_LIDERATIS - ORDER TAG *********************************************/
LideratisLibrary.generateJSONOrderTag = function(vTransactionID, vBasePrice, vShipping, vCity, vState_Province, vProfileID, vItem, vExploreAttributes, vExtraFields) {

    var dataOrdenTag = new Array();

    dataOrdenTag["transactionID"] = vTransactionID;
    dataOrdenTag["basePrice"] = vBasePrice;
    dataOrdenTag["shipping"] = vShipping;
    dataOrdenTag["city"] = vCity;
    dataOrdenTag["state_province"] = vState_Province;
    dataOrdenTag["profileID"] = vProfileID;
    dataOrdenTag["item"] = vItem;
    dataOrdenTag['exploreAttributes'] = vExploreAttributes;
    dataOrdenTag['extraFields'] = vExtraFields;

    return new LideratisLibrary.OrdenTag(dataOrdenTag);
};

/**************************** LIBRERIA_JSON_LIDERATIS - REGISTRATION TAG *********************************************/
LideratisLibrary.generateJSONRegistrationTag = function(vProfileID, vProfileEmail, vCity, vState_Province, vPostalcode, vCountry, vExploreAttributes) {

    var dataRegistrationTag = new Array();

    dataRegistrationTag['profileID'] = vProfileID;
    dataRegistrationTag['profileEmail'] = vProfileEmail;
    dataRegistrationTag['city'] = vCity;
    dataRegistrationTag['state_province'] = vState_Province;
    dataRegistrationTag['postalcode'] = vPostalcode;
    dataRegistrationTag['country'] = vCountry;
    dataRegistrationTag['exploreAttributes'] = vExploreAttributes

    return new LideratisLibrary.RegistrationTag(dataRegistrationTag);

}

/**************************** LIBRERIA_JSON_LIDERATIS - SHOPACTION9 *********************************************/
LideratisLibrary.generateJSONShopAction9 = function(vProductID, vProductName, vQuantity, vPrice, vPrimaryCategory, vExploreAttributes) {

    var dataShopAction9 = new Array();
    dataShopAction9["productID"] = vProductID;
    dataShopAction9["productName"] = vProductName;
    dataShopAction9["quantity"] = vQuantity;
    dataShopAction9["price"] = vPrice;
    dataShopAction9["primaryCategory"] = vPrimaryCategory;
    dataShopAction9["exploreAttributes"] = vExploreAttributes;

    return new LideratisLibrary.ShopAction9Content(dataShopAction9);

}
