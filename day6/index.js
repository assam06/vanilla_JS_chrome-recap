const select = document.querySelector("select")
const COUNTRY = "country"

function selectCountry (){
    const selected = select.value
    localStorage.setItem(COUNTRY, selected)

}

function loadCountry() {
    const myCountry = localStorage.getItem(COUNTRY);
    if (myCountry !== null) {
        select.value = myCountry;
    } 
    
    
}

function init(){
   loadCountry()
   select.addEventListener("change", selectCountry)
}

init();