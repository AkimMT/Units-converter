
// mass 
document.getElementById('output1').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output1').style.visibility = 'visible';

    let lbs = e.target.value;
    document.getElementById('grOutput').innerHTML = (lbs / 0.0022046).toFixed(2);
    document.getElementById('kgOutput').innerHTML = (lbs / 2.2046).toFixed(2);
    document.getElementById('ozOutput').innerHTML = (lbs * 16).toFixed(2);
});

function ClearWtFields(){
    document.getElementById('lbsInput').value = '';
    document.getElementById('grOutput').innerHTML = '';
    document.getElementById('kgOutput').innerHTML = '';
    document.getElementById('ozOutput').innerHTML = '';
}

function HideWtFields(){
    if (document.getElementById('lbsInput').value == ''){
        document.getElementById('output1').style.visibility = 'hidden';
    };
    if (document.getElementById('lbsInput').value != ''){
        alert("Please, reset values first.");
    };
}

// distance
document.getElementById('output2').style.visibility = 'hidden';
document.getElementById('distInput').addEventListener('input', function(e){
    document.getElementById('output2').style.visibility = 'visible';

    let dist = e.target.value;
    document.getElementById('mtOutput').innerHTML = (dist * 1609.34).toFixed(2);
    document.getElementById('kmOutput').innerHTML = (dist * 1.609344).toFixed(2);
    document.getElementById('ydOutput').innerHTML = (dist * 1760).toFixed(2);
});

function ClearDistFields(){
    document.getElementById('distInput').value = '';
    document.getElementById('mtOutput').innerHTML = '';
    document.getElementById('kmOutput').innerHTML = '';
    document.getElementById('ydOutput').innerHTML = '';
}

function HideDistFields(){
    if (document.getElementById('distInput').value == ''){
        document.getElementById('output2').style.visibility = 'hidden';
    };
    if (document.getElementById('distInput').value != ''){
        alert("Please, reset values first.");
    };
}

// liquids
document.getElementById('output3').style.visibility = 'hidden';
document.getElementById('lqInput').addEventListener('input', function(e){
    document.getElementById('output3').style.visibility = 'visible';

    let gal = e.target.value;
    document.getElementById('ltOutput').innerHTML = (gal * 3.785).toFixed(2);
    document.getElementById('mltOutput').innerHTML = (gal * 3785.41).toFixed(2);
    document.getElementById('floOutput').innerHTML = (gal * 128).toFixed(2);
});

function ClearLiqFields(){
    document.getElementById('lqInput').value = '';
    document.getElementById('ltOutput').innerHTML = '';
    document.getElementById('mltOutput').innerHTML = '';
    document.getElementById('floOutput').innerHTML = '';
}

function HideLiqFields(){
    if (document.getElementById('lqInput').value == ''){
        document.getElementById('output3').style.visibility = 'hidden';
    };
    if (document.getElementById('lqInput').value != ''){
        alert("Please, reset values first.");
    };
}

// lenght
document.getElementById('output4').style.visibility = 'hidden';
document.getElementById('lentInput').addEventListener('input', function(e){
    document.getElementById('output4').style.visibility = 'visible';

    let len = e.target.value;
    document.getElementById('cmOutput').innerHTML = (len * 30.48).toFixed(2);
    document.getElementById('mtrOutput').innerHTML = (len * 0.3048).toFixed(2);
    document.getElementById('inOutput').innerHTML = (len * 12).toFixed(2);
});

function ClearLenFields(){
    document.getElementById('lentInput').value = '';
    document.getElementById('cmOutput').innerHTML = '';
    document.getElementById('mtrOutput').innerHTML = '';
    document.getElementById('inOutput').innerHTML = '';
}

function HideLenFields(){
    if (document.getElementById('lentInput').value == ''){
        document.getElementById('output4').style.visibility = 'hidden';
    };
    if (document.getElementById('lentInput').value != ''){
        alert("Please, reset values first.");
    };
}