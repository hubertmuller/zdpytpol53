(function () {
    var obiekt = { 
        imie: "Hubert", 
        nazwisko: "Muller", 
        wiek: 45, 
        dzieci: ["jan", "ala"] 
    };

    let tablica = [ 1, "lancuch", false, [true, false, 1] ];

    var mojafunkcja = function (parametr1) { 
        return parametr1*2 
    };

    var powiekszenie = function (e) {
        var elementyFormularza = document.querySelectorAll("form input, form select, form textarea");
        for(let x=0; x < elementyFormularza.length; x++) {

            var biezacyElement = elementyFormularza[x];
            //var styleElementu = window.getComputedStyle(biezacyElement);
            var listaKlas = biezacyElement.classList;
            listaKlas.remove("pomniejszony");
            listaKlas.add("powiekszony");
            //console.log(x, styleElementu.getPropertyValue('margin'), listaKlas);
        }
        //przy var - console.log(x); //10
        //przy let - consol.log(x) - blad - undfined;
    }

    var pomniejszenie = function (e) {
        var elementyFormularza = document.querySelectorAll("form input, form select, form textarea");
        for(let x=0; x < elementyFormularza.length; x++) {

            var biezacyElement = elementyFormularza[x];
            //var styleElementu = window.getComputedStyle(biezacyElement);
            var listaKlas = biezacyElement.classList;
            listaKlas.remove("powiekszony");
            listaKlas.add("pomniejszony");
            //console.log(x, styleElementu.getPropertyValue('margin'), listaKlas);
        }
    }

    function maskowanie (e) {
        document.querySelector("input[name='imie']").setAttribute("type", "password");
    }


    var elementyFormularza = document.querySelectorAll("form input");
    console.log("odnaleziono: " + elementyFormularza.length + " elementow input");

    var przyciskPow = document.querySelector("#powiekszenie");
    przyciskPow.addEventListener("click", powiekszenie);

    var przyciskPom = document.querySelector("#pomniejszenie");
    przyciskPom.addEventListener("click", pomniejszenie);

    document.querySelector("#maskuj").addEventListener("click", maskowanie);

})();