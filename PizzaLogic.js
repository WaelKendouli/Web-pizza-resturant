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