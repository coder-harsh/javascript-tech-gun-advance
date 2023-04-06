/* cookies: temprory data that are stored in the browser

open cookie tab ctrl + shift + i


cookies name value pair se store hota hain

cookies https:// se hi access hoga ya local server se
expiry date session means browser close hone p delete ho jayega

expiray date most important parameter

by default domain hota hain jispe hum cookies et karte hain
document.cookie = "Item=Milk";
document.cookie = "Name=Harsh";


document.cookie = "Item=Milk;expires=Thu, 06 Apr 2023 21:00:00 UTC";  //manual time expiry
document.cookie = "Name=Harsh";  //expire on session close i.e browser close

//add break after milk in item

document.cookie = "Item=Milk,Eggs;expires=Thu, 06 Apr 2023 21:00:00 UTC";  //Milk,Eggs


//read cookie

let x = document.cookie;  //x m as a string daal sakta hain.
alert(x);  //Name=Harsh; Item=Milk,Eggs

*/
//delete cookie
//date ko past kar dena hain
document.cookie = "Name=Harsh;expires=Wed,05 Apr 2022 21:00:00 UTC";   //this cookie will be deleted