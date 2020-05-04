document.addEventListener('DOMContentLoaded', function(event) {

document.getElementById('flip-card-back').style.visibility = 'visible';
document.getElementById('flip-card-front').style.visibility = 'visible';

    document.getElementById('flip-card-back').onclick = function() {
        document.getElementById('card-flip').classList.toggle('flip');
    };

    document.getElementById('flip-card-front').onclick = function() {
        document.getElementById('card-flip').classList.toggle('flip');
    };

});