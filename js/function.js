window.onload = function onLoadFunction() {
    addRowFunction();
};

function addRowFunction() {
    let minRow = 5;
    let maxRow = 10;
    var x = document.getElementById("areaA");
    if(x.value.length == 0 ){
        document.getElementById('areaA').rows = minRow;
    }else if (x.value.length <= 50 && x.value.length > 0) {
        document.getElementById('areaA').style.backgroundColor = '#afb6a4';
        document.getElementById('areaA').style.overflow = 'hidden';
        document.getElementById('areaA').rows = minRow;
    } else if (x.value.length > 50 && x.value.length <= 60) {
        document.getElementById('areaA').style.backgroundColor = '#85887f';
        document.getElementById('areaA').rows = minRow+1;
    }else if (x.value.length > 60 && x.value.length <= 70) {
        document.getElementById('areaA').style.backgroundColor = '#5f615a';
        document.getElementById('areaA').rows = minRow +2;
    }else if (x.value.length > 70 && x.value.length <= 80) {
        document.getElementById('areaA').style.backgroundColor = '#525748';
        document.getElementById('areaA').rows = minRow +3;
    }else if (x.value.length > 80 && x.value.length <= 90) {
        document.getElementById('areaA').style.backgroundColor = '#464d39';
        document.getElementById('areaA').rows = minRow +4;
    }else if (x.value.length > 90 && x.value.length <= 100) {
        document.getElementById('areaA').style.backgroundColor = '#40492f';
        document.getElementById('areaA').rows = maxRow;
        document.getElementById('areaA').style.overflow = 'hidden';
    }else{
        document.getElementById('areaA').style.backgroundColor = '#ccc';
        document.getElementById('areaA').style.overflow = 'visible';
        document.getElementById('areaA').rows = maxRow;
    }
}