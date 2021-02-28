function calculate() {
    let enddate = document.querySelector("#enddate").value;
    let eventname = document.querySelector("#eventname").value;

    const TOTAL = Date.parse(enddate) - Date.parse(new Date());
    const SECONDS = Math.floor((TOTAL/1000)%60);
    const MINUTES = Math.floor((TOTAL/1000/60)%60);
    const HOURS = Math.floor((TOTAL/(1000*60*60))%24);
    const DAYS = Math.floor(TOTAL/(1000*60*60*24));

    answer.textContent = `${TOTAL} ${DAYS} ${HOURS} ${MINUTES} ${SECONDS} ${eventname}`;

}