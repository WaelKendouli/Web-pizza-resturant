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

const btnReset = document.getElementById("btnReset");

let Toppings = "";
let Total = 0;
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

function UpdateTotalPrice(element)
{
 if (!element.hasAttribute("data-price") ) {
        return ;
    }
    Total = 0;

    let AllRadios = document.querySelectorAll('input[type="radio"][data-price]');
    AllRadios.forEach(radio => {
        if (radio.checked) {
             Total += Number(radio.dataset.price);
        }
    });
      let AllCheckBox = document.querySelectorAll('input[type="checkbox"][data-price]');
    AllCheckBox.forEach(radio => {
        if (radio.checked) {
             Total += Number(radio.dataset.price);
        }
    });
        UpdateLabelUI(element , "data-price" , Total + " $" , lbTotal);
}

function ResetForm()
{
    document.location.reload();
}
btnReset.addEventListener("click", ResetForm);

rbSmall.addEventListener("change",function() { UpdateTotalPrice(this); });
rbMed.addEventListener("change",function() { UpdateTotalPrice(this); });
rbLarge.addEventListener("change",function() { UpdateTotalPrice(this); });
rbThick.addEventListener("change",function() { UpdateTotalPrice(this); });
rbThin.addEventListener("change",function() { UpdateTotalPrice(this); });
rbEatin.addEventListener("change",function() { UpdateTotalPrice(this); });
rbEatOut.addEventListener("change",function() { UpdateTotalPrice(this); });
ckPepperoni.addEventListener("change",function() { UpdateTotalPrice(this); });
ckMushrooms.addEventListener("change",function() { UpdateTotalPrice(this); });
ckOnions.addEventListener("change",function() { UpdateTotalPrice(this); });
ckSausage.addEventListener("change",function() { UpdateTotalPrice(this); });
ckBacon.addEventListener("change",function() { UpdateTotalPrice(this); });
ckCheese.addEventListener("change",function() { UpdateTotalPrice(this); });

rbSmall.addEventListener("change",function() { UpdateLabelUI(this , "data-size" , this.dataset.size , lbSize); });
rbMed.addEventListener("change",function() { UpdateLabelUI(this , "data-size" , this.dataset.size , lbSize); });
rbLarge.addEventListener("change",function() { UpdateLabelUI(this , "data-size" , this.dataset.size , lbSize); });

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
