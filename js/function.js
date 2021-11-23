window.onload = function onLoadFunction() {
    addRowFunction();
};

function addRowFunction() {
    let minRow = 5;
    let maxRow = 10;
    var x = document.getElementById("areaA");
    if(x.value.length == 0 ){
        document.getElementById('areaA').rows = minRow;
    }else if (x.value.length <= 45 && x.value.length > 0) {
        document.getElementById('areaA').rows = minRow;
    } else if (x.value.length > 45 && x.value.length <= 54) {
        document.getElementById('areaA').rows = minRow+1;
    }else if (x.value.length > 54 && x.value.length <= 63) {
        document.getElementById('areaA').rows = minRow +2;
    }else if (x.value.length > 63 && x.value.length <= 72) {
        document.getElementById('areaA').rows = minRow +3;
    }else if (x.value.length > 72 && x.value.length <= 81) {
        document.getElementById('areaA').rows = minRow +4;
    }else if (x.value.length > 81 && x.value.length <= 90) {
        document.getElementById('areaA').rows = maxRow;
        document.getElementById('areaA').style.overflow = 'hidden';
    }else{
        document.getElementById('areaA').style.overflow = 'visible';
        document.getElementById('areaA').rows = maxRow;
    }
}