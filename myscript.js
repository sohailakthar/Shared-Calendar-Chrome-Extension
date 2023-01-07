const elmTitle = document.getElementById("title");
const elmDesc = document.getElementById("desc");
const elmGuest = document.getElementById("guest");
const elmLoc = document.getElementById("loc");
const elmStartTime = document.getElementById("startTime");
const elmEndTime = document.getElementById("endTime");
const elmAdd = document.getElementById("add");


let dataTime = new Date();
dataTime = new Date(dataTime.getTime() - dataTime.getTimezoneOffset() * 60000);
dataTime = dataTime.toISOString();
dataTime = dataTime.substring(0, 16);

elmStartTime.value = dataTime;
elmEndTime.value = dataTime;

elmAdd.onclick = () => {
  const title = encodeURI(elmTitle.value);
  const desc = elmDesc.value;
  const guest = elmGuest.value;
  const loc = elmLoc.value;
  const startTime = elmStartTime.value;
  const endTime = elmEndTime.value;
  console.log(startTime);
  console.log(endTime);
  let url = "YOUR_GOOGLE_SCRIPT_URL";

  url += "?title=" + title + "&startTime=" + startTime + "&endTime=" + endTime + "&desc=" + desc + "&guest=" + guest + "&loc=" + loc ;
  console.log(url);
  fetch(url, {
    method: "GET",
    
    mode: "no-cors"
  })
  
}


