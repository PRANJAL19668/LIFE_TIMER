//we need to return all the ids using document.getElementById() method.
let isDOBOpen = false; //initially
let dateOfBirth;//initially
const settingIconE1 = document.getElementById("settingIcon");
const settingContentE1 = document.getElementById("settingContent");
const initialTextE1 = document.getElementById("initialText");
const afterDOBButtontE1 = document.getElementById("afterDOBButton");
const dobButtonE1 = document.getElementById("dobButton");
const dobInputE1 = document.getElementById("dobInput");

const yearE1 = document.getElementById("Year");
const monthE1 = document.getElementById("month");
const daysE1 = document.getElementById("Days");
const hoursE1 = document.getElementById("Hours");
const minutesE1 = document.getElementById("Minutes");
const secondsE1 = document.getElementById("Seconds");
//we need to toggle i.e,, on and off so,we will use toggle function for that which is toggle effect.
const toggleDateOfBirthSelector = () =>{
if(isDOBOpen){
    //if it is open we will hide that.
    //classList is the property for on and off.
    settingContentE1.classList.add("hide");
} else{
    //otherwise if it is close we will remove that.
    settingContentE1.classList.remove("hide");
}
isDOBOpen =! isDOBOpen;//neglect 
console.log("toggle",isDOBOpen);
};
const updateAge =  () =>{
    const currentDate = new Date(); // Date Contructor is used  in this.
   const dateDiff = currentDate-dateOfBirth;
   const year = Math.floor(dateDiff/(1000*60*60*24*365));
   const month= Math.floor(dateDiff/(1000*60*60*24*365)) %12;
   const days = Math.floor(dateDiff/(1000*60*60*24)) %30;
   const hours= Math.floor(dateDiff/(1000*60*60)) %24;
   const minutes= Math.floor(dateDiff/(1000*60)) %60;
   const seconds= Math.floor(dateDiff/1000) %60;

   yearE1.innerHTML = year;
   monthE1.innerHTML = month;
   daysE1.innerHTML = days;
   hoursE1.innerHTML = hours;
   minutesE1.innerHTML = minutes;
   secondsE1.innerHTML = seconds;
   

};
//This function will handle the dob button.
const setDOBHandler = () =>{
    const dateString = dobInputE1.value;
    dateOfBirth = new Date(dateString);
    //console.log("date of birth",dateOfBirth);
    if(dateOfBirth){
        //if it is available
        initialTextE1.classList.add("hide");
        afterDOBButtontE1.classList.remove("hide");
        updateAge();
    } else{
        afterDOBButtontE1.classList.add("hide");
        initialTextE1.classList.remove("hide");
    }
};
setDOBHandler();
settingIconE1.addEventListener("click", toggleDateOfBirthSelector);
    dobButtonE1.addEventListener("click", setDOBHandler);
