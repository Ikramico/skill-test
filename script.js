//swaping field values
let fromInput,toInput;
  let depart = document.getElementById('date-d');
  let retrn = document.getElementById('date-r');
function swap() {
   fromInput = document.getElementById('from')

   toInput = document.getElementById('to');
  let temp = fromInput.value;
  console.log(temp)
  fromInput.value = toInput.value;
  toInput.value = temp;
}

//calendar with vanillaclendar pro
let flag=0
const options = {
  actions: {
    clickDay(event, self) {
      if(typeof depart.innerText !='date'&& flag==0 ){
        depart.innerText =(self.selectedDates);
        flag=1
      }
      else if( flag==1){
        flag=0;
        retrn.innerText = (self.selectedDates);
      }
    },
    
  },
  type: 'multiple',
  months: 2,
  jumpMonths: 2,
  settings: {
    range: {
      disablePast: true,
    },
    
    visibility: {
      theme: 'light',
      daysOutside: false,
    },
  },
};
document.addEventListener('DOMContentLoaded', () => {
  const calendar = new VanillaCalendar('#calenda',options);
  calendar.init();
});

let dprt = document.getElementById('dprt');
let dprt_ad = document.getElementById('calenda');
// let rtrn_ad = document.getElementById('calendar');
let rtrn = document.getElementById('rtrn');
dprt.addEventListener('click', () => {
   dprt_ad.classList.toggle('hidden');
   
});
rtrn.addEventListener('click', () => {
  dprt_ad.classList.toggle('hidden');
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

let suggest = [];

function showResults(val) {
res = document.getElementById("sugs");
res.innerHTML = '';
let list = '';
let suggestions = checkData(val);

suggestions.forEach((i)=> {
  list += `<li onclick='inputV(${data.indexOf(i)})'>
  <p>${i.city} (${i.code}) </p> 
  <span class='font-semibold'> ${i.country}</span>
  </li>`;
})
res.innerHTML = `<ul class='bg-gray-50 p-3' id='suggestList' onclick='hider()'> ${list} </ul>`;
}

function checkedData(input) {
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
  
  
  function suggestResults(val) {
  res = document.getElementById("suggs");
  res.innerHTML = '';
  let list = '';
  let suggestions = checkedData(val);

  suggestions.forEach((i)=> {
    list += `<li onclick='inputVal(${data.indexOf(i)})'>
    <p>${i.city} (${i.code}) </p> 
    <span class='font-semibold'> ${i.country}</span>
    </li>`;
  })
  res.innerHTML = `<ul class='bg-gray-50 p-3' id='suggestedList' onclick='hide()'> ${list} </ul>`;
  
  }
//show value on input box on clicking suggestions
function inputVal(i){
   toInput = document.getElementById('to');
   toInput.value= `${data[i].city} (${data[i].code}), ${data[i].country}`;
   
// toInput.value =  suggest.forEach((item)=>`${item[index].city} (${item[index].code}), ${item[index].country} ` );
}
function inputV(i){
  fromInput = document.getElementById('from');
  fromInput.value = `${data[i].city} (${data[i].code}), ${data[i].country}`;
  }

  //hide suggestions
  function hide(){
    let hideItem = document.getElementById('suggestedList');
    hideItem.classList.add('hidden')
  }
  function hider(){
    let hideItem = document.getElementById('suggestList');
    hideItem.classList.add('hidden')
  }



//increase decrease amount value
let pass = document.getElementById('pass')
let amo = document.getElementById('amount');
let out = document.getElementById('out');
let decAmo = parseInt(amo.innerText);

let amo2 = document.getElementById('amount2');
let out2 = document.getElementById('out2');
let decAmo2 = parseInt(amo2.innerText);

function dec(){
if (decAmo<2 ){
  out.innerText = `You can't make less`;
}
 else{ decAmo = decAmo-1; 
amo.innerText = `${decAmo}`
pass.innerText = `${decAmo}`;
} 
}
function inc(){
  decAmo = decAmo+1;
  amo.innerText = `${decAmo}`
  pass.innerText = `${decAmo}`
  if(decAmo>1){
    out.innerText = ''
  }
}

function dec2(){
  if (decAmo2<1 ){
    out2.innerText = `You can't make less`;
  }
   else{ decAmo2 = decAmo2-1; 
  amo2.innerText = `${decAmo2}`
  } 
  }
  function inc2(){
    decAmo2 = decAmo2+1;
    amo2.innerText = `${decAmo2}`
    if(decAmo2>0){
      out2.innerText = ''
    }
  }