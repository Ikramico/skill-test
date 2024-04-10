let data = [{"city":"Brisbane","code":"BNE","country":"Australia"},
{"city":"Bali (Denpasar)","code":"DPS","country":"Indonesia"},
{"city":"Barcelona","code":"BCN","country":"S pain"},
{"city":"Bangkok Suvarnabhumi","code":"BKK","country":"Thailand"},
{"city":"Berlin Brandenburg","code":"BER","country":"Germany"},
{"city":"Budapest","code":"BUD","country":" Hungary"},
{"city":"Cairns","code":"CNS","country":"Australia"},
{"city":"Copenhagen","code":"CP H","country":"Denmark"},
{"city":"Cairo","code":"CAI","country":"Egypt"}]



//for swaping values

function swap() {
    let fromInput = document.querySelector('#from');
    let toInput = document.querySelector('#to');
    let temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
  }


//filter out data
function filterData(input) {
    let filteredData = input.filter((item) =>{
      return (
        city = item.city,
        code = item.code,
        country = item.country
      )
    });
    return filteredData;
  };

  //function for showing data
  function showData(input) {
    let dataList = document.getElementById('sugs');
    dataList.innerHTML = '';
  
    let filteredData = filterData(input);
    filteredData.forEach((item)=> {
      let li = document.createElement('li');
      li.innerHTML = `
      <div class='bg-gray-50'
      <p class=' text-gray-500 '>${item.city} (${item.code}) </p>
      <p class=' text-gray-500 '> ${item.country}</p>
      `;
      dataList.appendChild(li);
    })
}

//adding event listener
document.getElementById('search').addEventListener('input', (event)=> {
    let inputValue = event.target.value;
    filterData(inputValue);
  });
  