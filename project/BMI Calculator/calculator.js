const form = document.querySelector('form');

// this usecase give empty value
// const height  = parseInt(document.querySelector('.height'))

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    // const weightGuide = document.querySelectorAll('#weight-guide');
    // const pElements = weightGuide.querySelectorAll('p');


    if(height === ' ' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === ' ' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`

        // if(bmi < 18.6 ){
        //     pElements[0].style.color = 'green'
        // }
    }


})