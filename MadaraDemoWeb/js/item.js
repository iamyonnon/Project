/* Rating */
var star_1 = document.getElementById('star-1');
var star_2 = document.getElementById('star-2');
var star_3 = document.getElementById('star-3');
var star_4 = document.getElementById('star-4');
var star_5 = document.getElementById('star-5');

var  x = 10;


var data = [5, 4, 5, 4, 3, 5, 4, 5, 5, 5, 4, 5, 4, 5, 3, 4, 5, 5, 5, 4, 3, 5];
var sum = 0;
var currentLength = 0;
var tempLength = 0;


window.onload = function() {
    let result = 0;
    data.forEach(index => {
        sum += index;
        currentLength++;
    });
    tempLength = currentLength;
    result = parseFloat(sum/currentLength).toFixed(1);
    document.getElementById('displayStar').innerHTML = result;

    console.log(result);

    if(result <= 0.5) {
        star_1.style.color = 'inherit';
        star_2.style.color = 'inherit';
        star_3.style.color = 'inherit';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 0.5 && result <= 1) {
        star_1.style.color = '#ffd900';
        star_2.style.color = 'inherit';
        star_3.style.color = 'inherit';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 1 && result <= 1.5) {
        star_1.style.color = '#ffd900';
        star_2.style.color = 'inherit';
        star_3.style.color = 'inherit';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }
    
    if(result > 1.5 && result <= 2) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = 'inherit';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 2 && result <= 2.5) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = 'inherit';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 2.5 && result <= 3) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = '#ffd900';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 3 && result <= 3.5) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = '#ffd900';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 3.5 && result <= 4) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = '#ffd900';
        star_4.style.color = '#ffd900';
        star_5.style.color = 'inherit';
    }

    if(result > 4 && result <= 4.5) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = '#ffd900';
        star_4.style.color = '#ffd900';
        star_5.style.color = 'inherit';
    }

    if(result > 4.5 && result <= 5) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = '#ffd900';
        star_4.style.color = '#ffd900';
        star_5.style.color = '#ffd900';
    }
}

function push(data, index) {
    data.push(index);
}

function getLength() {
    return data.length;
}

/* Click */
star_1.addEventListener('click', function() {
    star_1.style.color = '#ffd900';
    star_2.style.color = 'inherit';
    star_3.style.color = 'inherit';
    star_4.style.color = 'inherit';
    star_5.style.color = 'inherit';

    if(getLength() === tempLength) {
        push(data,1);
    }
})


star_2.addEventListener('click', function() {
    star_1.style.color = '#ffd900';
    star_2.style.color = '#ffd900';
    star_3.style.color = 'inherit';
    star_4.style.color = 'inherit';
    star_5.style.color = 'inherit';
})


star_3.addEventListener('click', function() {
    star_1.style.color = '#ffd900';
    star_2.style.color = '#ffd900';
    star_3.style.color = '#ffd900';
    star_4.style.color = 'inherit';
    star_5.style.color = 'inherit';
})

star_4.addEventListener('click', function() {
    star_1.style.color = '#ffd900';
    star_2.style.color = '#ffd900';
    star_3.style.color = '#ffd900';
    star_4.style.color = '#ffd900';
    star_5.style.color = 'inherit';
})

star_5.addEventListener('click', function() {
    star_1.style.color = '#ffd900';
    star_2.style.color = '#ffd900';
    star_3.style.color = '#ffd900';
    star_4.style.color = '#ffd900';
    star_5.style.color = '#ffd900';
})


/* Show More and Less */
var show = document.getElementById('show');
// show.innerHTML = 'Show more &nbsp; <i class="fas fa-sort-down"></i>';

function clickShow() {
    if(show.innerHTML = 'Show more &nbsp; <i class="fas fa-sort-down"></i>') {
        show.innerHTML = 'Show less &nbsp; <i class="fas fa-sort-down"></i>';
    }
    else {
        show.innerHTML = 'Show more &nbsp; <i class="fas fa-sort-down"></i>';
    }
}