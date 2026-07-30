const rbSmall = document.getElementById("rbSizeSmall");
const rbMed = document.getElementById("rdSizeMedium");
const rbLarge = document.getElementById("rbSizeLarge");
const lbTotal = document.getElementById("lbTotalPrice");
const lbSize = document.getElementById("lbSize");
const lbCrust = document.getElementById("lbCrustType"); 
const rbThick = document.getElementById("crustThick");
const rbThin = document.getElementById("crustThin");
const rbEatin = document.getElementById("locationEatIn");
const rbEatOut = document.getElementById("locationTakeOut");
const lbLocation = document.getElementById("lbEat");
const lbToppings = document.getElementById("lbTopping");

const ckPepperoni = document.getElementById("ckPepperoni");
const ckMushrooms = document.getElementById("ckMushrooms");
const ckOnions = document.getElementById("ckOnions");
const ckSausage = document.getElementById("ckSausage");
const ckBacon = document.getElementById("ckBacon");
const ckCheese = document.getElementById("ckCheese");

let Toppings = "";

function AddToppings(element)
{
    if (!element.hasAttribute("data-topping")) {
        return ;
    }
    let current = "";
    if(element.checked===true)
        {
         Toppings += element.dataset.topping + " ";
        }
        else 
        {
     Toppings =  Toppings.replace(element.dataset.topping + " " , "");
        }
    lbToppings.textContent = Toppings;
}


function UpdateTotalPriceForSelectingSize(element)
{
    if (element.checked===true) 
        {
    lbTotal.textContent = element.dataset.price + " $" ;
    UpdateLabelUI(element , "data-size" , element.dataset.size , lbSize);
        }
}


function UpdateLabelUI(element , ds_attribute , value , label)
{
if (!element.hasAttribute(ds_attribute)) {
    return;
}
else
{
    label.textContent = value;
}
}




rbSmall.addEventListener("change",function() { UpdateTotalPriceForSelectingSize(this); });
rbMed.addEventListener("change",function() { UpdateTotalPriceForSelectingSize(this); });
rbLarge.addEventListener("change",function() { UpdateTotalPriceForSelectingSize(this); });
rbThick.addEventListener("change",
    function() { UpdateLabelUI(this , "data-Thicknes" , this.dataset.thicknes , lbCrust); });
rbThin.addEventListener("change",
    function() { UpdateLabelUI(this , "data-Thicknes" , this.dataset.thicknes, lbCrust); });
rbEatin.addEventListener("change" , 
    function() {UpdateLabelUI(this , "data-location" , this.dataset.location , lbLocation)});
rbEatOut.addEventListener("change" , 
    function() {UpdateLabelUI(this , "data-location" , this.dataset.location , lbLocation)});

    ckPepperoni.addEventListener("change" , function() { AddToppings(this); });
    ckMushrooms.addEventListener("change" , function() { AddToppings(this); });
    ckOnions.addEventListener("change" , function() { AddToppings(this); });
    ckSausage.addEventListener("change" , function() { AddToppings(this); });
    ckBacon.addEventListener("change" , function() { AddToppings(this); });
    ckCheese.addEventListener("change" , function() { AddToppings(this); });
