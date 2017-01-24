$(document).ready(function () {
    // Проверка для поля input
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                switch (e.srcElement.id) {
                    case "name":
                        e.target.setCustomValidity("Введите название магазина");
                        break;
                    case "street":
                        e.target.setCustomValidity("Введите название улицы");
                        break;
                    case "houseNumber":
                        e.target.setCustomValidity("Введите номер дома");
                        break;
                    case "workTime":
                        e.target.setCustomValidity("Введите время работы магазина");
                        break;
                    case "productName":
                        e.target.setCustomValidity("Введите название товара");
                        break;
                   
                }
            }
        };
        elements[i].oninput = function (e) {
            e.target.setCustomValidity("");
        };
    }
      
      // Проверка для поля textarea
    var element = document.getElementsByTagName("textarea");
    for (var j = 0; j < element.length; j++) {
        element[j].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                switch (e.srcElement.id) {
                    case "description":
                        e.target.setCustomValidity("Введите описание товара");
                        break;                    
                }
            }
        };
        element[j].oninput = function (e) {
            e.target.setCustomValidity("");
        };
    }
})

