function calculate() {
    let endDate = document.querySelector("#enddate").value;
    let eventName = document.querySelector("#eventname").value;
    let startDate = document.querySelector("#startdate").value;

    let parseEnd = Date.parse(endDate);
    let dateNow = Date.parse(startDate);
    console.log(dateNow);
    if (dateNow !== Number){
        dateNow = new Date();
    }

    let minutes = 1000*60;
    let hours = minutes*60;
    let days = hours*24;

    // How many days overall.
    let howMuch = Math.round((parseEnd-dateNow)/days);

    yourevent.textContent = `Event: "${eventName}"`;
    answer.textContent = `Days left until event: ${howMuch}`;


    //How many business days.
    let weekendCounter = 0;
    let theDate = dateNow;

    while (theDate<=parseEnd) {
        let weekDay = theDate.getDay();

        if(weekDay==6 || weekDay==0){
            weekendCounter++;
        }
        theDate.setDate(theDate.getDate() + 1);
    }

    secondanswer.textContent = `Business days left until event: ${howMuch-weekendCounter}`;
    
}