let select = document.querySelectorAll('.currency')
let btn = document.getElementById("btn");
let input = document.getElementById("input")

fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => displayCountry(res))

function displayCountry(res){
    let country = Object.entries(res)
    // console.log(country[0][0])
    for(i=0;i<=country.length;i++){
        // console.log(country[i][0])
        let opt = `<option value="${country[i][0]}">${country[i][0]}</option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt
    }
}

btn.addEventListener('click', () => {
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputValue = input.value;
    if(curr1===curr2)
        document.getElementById("error").innerHTML = "Select Different Currencies"
    else
       convert(curr1,curr2,inputValue)
})

function convert(curr1,curr2,inputValue){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputValue}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
        document.getElementById("result").value = Object.values(data.rates)
    })
}