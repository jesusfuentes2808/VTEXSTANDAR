console.log("Lideratis Library");
/*********************************LIBRERIA**LIDERATIS.COM***************************************/
window.LideratisLibrary = new Object();
window.LideratisdigitalData;
window.LideratisdigitalDataArray = [];
window.LideratisdigitalDataProductViewArray = [];
window.LideratisdigitalDataSAP9Array = [];
LideratisLibrary.isset = function(variable_name) {
    try {
        if (typeof(variable_name) !== 'undefined')
            if (variable_name !== null)
                if (variable_name !== "") return true;
    } catch (e) {
        return false;
    }
}
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
LideratisLibrary.initProductView_content = function() {
    LideratisdigitalDataProductViewArray = new Array();
}
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
LideratisLibrary.ProductViewIterator = function(array) {
    return LideratisdigitalDataProductViewArray;
}
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
LideratisLibrary.initShopAction5Content = function() {
    LideratisdigitalDataArray = new Array();
}
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
LideratisLibrary.ShopAction5 = function(array) {
    return LideratisdigitalDataArray;
}
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
LideratisLibrary.initShopAction9Content = function() {
    LideratisdigitalDataSAP9Array = new Array();
}
LideratisLibrary.ShopAction9 = function(array) {
    return LideratisdigitalDataSAP9Array;
}
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