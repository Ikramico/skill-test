//calendar with vanillaclendar pro
const options = {
  type: 'multiple',
  months: 2,
  jumpMonths: 2,
  settings: {
    range: {
      disablePast: true,
    },
    selection: {
      day: 'multiple-ranged',
    },
    visibility: {
      theme: 'light',
      daysOutside: false,
    },
  },
};
document.addEventListener('DOMContentLoaded', () => {
  const calendar = new VanillaCalendar('#calendar',options);
  calendar.init();
});
document.addEventListener('DOMContentLoaded', () => {
  const calendar = new VanillaCalendar('#calenda',options);
  calendar.init();
});

let dprt = document.getElementById('dprt');
let dprt_ad = document.getElementById('calenda');
let rtrn_ad = document.getElementById('calendar');
let rtrn = document.getElementById('rtrn');
dprt.addEventListener('click', () => {
   dprt_ad.classList.toggle('hidden');
   
});
rtrn.addEventListener('click', () => {
  rtrn_ad.classList.toggle('hidden');
});


//travel details
let showTrvl = document.getElementById('trvl');
let trvl_dt = document.getElementById('trvl-dt');

showTrvl.addEventListener('click', () => {
  trvl_dt.classList.toggle('hidden');
});

//search suggestions integration
let data = [
{"city":"Brisbane","code":"BNE","country":"Australia"},
{"city":"Bali (Denpasar)","code":"DPS","country":"Indonesia"},
{"city":"Barcelona","code":"BCN","country":"Spain"},
{"city":"Bangkok Suvarnabhumi","code":"BKK","country":"Thailand"},
{"city":"Berlin Brandenburg","code":"BER","country":"Germany"},
{"city":"Budapest","code":"BUD","country":" Hungary"},
{"city":"Cairns","code":"CNS","country":"Australia"},
{"city":"Copenhagen","code":"CP H","country":"Denmark"},
{"city":"Cairo","code":"CAI","country":"Egypt"}
]

function checkData(input) {
if (input == '') {
  return null;
}

let furnishedInput =input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
let reg = new RegExp(furnishedInput, 'i');


return data.filter((items)=>{
  if((items.city.toLowerCase()).match(reg) || (items.code.toLowerCase()).match(reg) || (items.country.toLowerCase()).match(reg)){
      return (items.city, items.code, items.country)
  }
});
}


function showResults(val) {
res = document.getElementById("sugs");
res.innerHTML = '';
let list = '';
let suggestions = checkData(val);
for (i=0; i<suggestions.length; i++) {
  list += `<li><p>${suggestions[i].city} (${suggestions[i].code}) </p> 
  <span class='font-semibold'> ${suggestions[i].country}</span>
  </li>`;
}
res.innerHTML = `<ul class='bg-gray-50 p-3'> ${list} </ul>`;
}

