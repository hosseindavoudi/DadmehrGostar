﻿document.getElementById('a0').value = true;
document.getElementById('a1').value = true;
document.getElementById('a2').value = true;
document.getElementById('a3').value = true;
document.getElementById('a4').value = true;
document.getElementById('a5').value = true;
document.getElementById('a6').value = false;


var shanbe = document.getElementById("shanbeh");
var yekshanbe = document.getElementById("yekshanbeh");
var doshanbe = document.getElementById("doshanbeh");
var seshanbe = document.getElementById("seshanbeh");
var cheharshanbe = document.getElementById("cheharshanbeh");
var pangshanbe = document.getElementById("panjshanbeh");

var NormalShift = document.getElementById("NormalShift");
var RotatingShift = document.getElementById("RotatingShift");
var ComplexShift = document.getElementById("ComplexShift");
NormalShift.style.backgroundColor = "#c5e7bf";







let inp = document.getElementById("f");
inp.checked = true;
let inp1 = document.getElementById("f1");
inp1.checked = true;
let inp2 = document.getElementById("f2");
inp2.checked = true;
let inp3 = document.getElementById("f3");
inp3.checked = true;
let inp4 = document.getElementById("f4");
inp4.checked = true;
let inp5 = document.getElementById("f5");
inp5.checked = true;
let inp6 = document.getElementById("f6");
inp6.checked = false;

var towOff = true;
var threeOff = true;
shanbe.style.backgroundColor = "#3ac53c";
yekshanbe.style.backgroundColor = "#3ac53c";
doshanbe.style.backgroundColor = "#3ac53c";
seshanbe.style.backgroundColor = "#3ac53c";
cheharshanbe.style.backgroundColor = "#3ac53c";
pangshanbe.style.backgroundColor = "#3ac53c";

var sh1 = document.getElementById("Sh1");
var sh2 = document.getElementById("Sh2");
var sh3 = document.getElementById("Sh3");
var sh4 = document.getElementById("Sh4");
var sh5 = document.getElementById("Sh5");
var sh6 = document.getElementById("Sh6");
var sh7 = document.getElementById("Sh7");
var sh8 = document.getElementById("Sh8");
sh1.style.backgroundColor = "#3ac53c";
sh2.style.backgroundColor = "#bfbfbf";
sh3.style.backgroundColor = "#bfbfbf";
sh4.style.backgroundColor = "#bfbfbf";
sh5.style.backgroundColor = "#bfbfbf";
sh6.style.backgroundColor = "#bfbfbf";
sh7.style.backgroundColor = "#bfbfbf";
sh8.style.backgroundColor = "#bfbfbf";

var rest = document.getElementsByClassName("rest");
var one = document.getElementsByClassName("one");
var tow = document.getElementsByClassName("tow");
var three = document.getElementsByClassName("three");

for (i = 0; i < tow.length; i++) {
    let change = tow[i];
    change.value = "";
    change.style.backgroundColor = '#e7e7e7';
    change.setAttribute("disabled", "disabled");
}
for (i = 0; i < three.length; i++) {
    let change = three[i];
    change.value = "";
    change.style.backgroundColor = '#e7e7e7';
    change.setAttribute("disabled", "disabled");
}

$('#jomehRow3 input').each(function () {
    this.setAttribute("disabled", "disabled");
    this.style.backgroundColor = "#e7e7e7";
    this.value = "";
});
document.getElementById('RestTimeJomeh').setAttribute("disabled", "disabled");
document.getElementById("RadioSh").value = "1";
document.getElementById("RadioSh1").addEventListener("click", () => {
    document.getElementById("Sh1").style.backgroundColor = "#3ac53c";
    document.getElementById("Sh2").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh3").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh4").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh5").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh6").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh7").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh8").style.backgroundColor = "#bfbfbf";
    document.getElementById("RadioSh").value = "1";
    shanbe.style.backgroundColor = "#3ac53c";
    yekshanbe.style.backgroundColor = "#3ac53c";
    doshanbe.style.backgroundColor = "#3ac53c";
    seshanbe.style.backgroundColor = "#3ac53c";
    cheharshanbe.style.backgroundColor = "#3ac53c";
    pangshanbe.style.backgroundColor = "#3ac53c";
    document.getElementById('a0').value = true;
    document.getElementById('a1').value = true;
    document.getElementById('a2').value = true;
    document.getElementById('a3').value = true;
    document.getElementById('a4').value = true;
    document.getElementById('a5').value = true;
    document.getElementById('a6').value = false;
    for (i = 0; i < one.length; i++) {
        let change = one[i];

        change.removeAttribute("disabled");
        change.style.backgroundColor = '#fff';
    }
    for (i = 0; i < tow.length; i++) {
        let change = tow[i];
        change.value = "";
        change.style.backgroundColor = '#e7e7e7';
        change.setAttribute("disabled", "disabled");
    }
    for (i = 0; i < three.length; i++) {
        let change = three[i];
        change.value = "";
        change.style.backgroundColor = '#e7e7e7';
        change.setAttribute("disabled", "disabled");
    }
    for (i = 0; i < rest.length; i++) {
        let change = rest[i];
        change.removeAttribute("disabled");
    }

    $('#jomehRow3 input').each(function () {
        this.setAttribute("disabled", "disabled");
        this.style.backgroundColor = "#e7e7e7";
        this.value = "";
    });

    document.getElementById("jomeh").style.backgroundColor = "#bfbfbf";
    document.getElementById('RestTimeJomeh').setAttribute("disabled", "disabled");
    inp6.checked = false;
    inp.checked = true;
    inp1.checked = true;
    inp2.checked = true;
    inp3.checked = true;
    inp4.checked = true;
    inp5.checked = true;
    NormalShift.style.backgroundColor = "#c5e7bf";
    RotatingShift.style.backgroundColor = "#e7e7e7";
    ComplexShift.style.backgroundColor = "#e7e7e7";

    document.getElementById("OneAndTowShifts").style.display = null;
    document.getElementById("ComplexFildset").style.display = 'none';
});
document.getElementById("RadioSh2").addEventListener("click", () => {
    document.getElementById("Sh2").style.backgroundColor = "#3ac53c";
    document.getElementById("Sh1").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh3").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh4").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh5").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh6").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh7").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh8").style.backgroundColor = "#bfbfbf";
    document.getElementById("RadioSh").value = "2";
    shanbe.style.backgroundColor = "#3ac53c";
    yekshanbe.style.backgroundColor = "#3ac53c";
    doshanbe.style.backgroundColor = "#3ac53c";
    seshanbe.style.backgroundColor = "#3ac53c";
    cheharshanbe.style.backgroundColor = "#3ac53c";
    pangshanbe.style.backgroundColor = "#3ac53c";
    document.getElementById('a0').value = true;
    document.getElementById('a1').value = true;
    document.getElementById('a2').value = true;
    document.getElementById('a3').value = true;
    document.getElementById('a4').value = true;
    document.getElementById('a5').value = true;
    document.getElementById('a6').value = false;
    for (i = 0; i < one.length; i++) {
        let change = one[i];

        change.removeAttribute("disabled");
        change.style.backgroundColor = '#fff';
    }
    for (i = 0; i < tow.length; i++) {
        let change = tow[i];

        change.removeAttribute("disabled");
        change.style.backgroundColor = '#fff';
    }
    for (i = 0; i < three.length; i++) {
        let change = three[i];
        change.value = "";
        change.style.backgroundColor = '#e7e7e7';
        change.setAttribute("disabled", "disabled");
    }
    for (i = 0; i < rest.length; i++) {
        let change = rest[i];
        change.setAttribute("disabled", "disabled");
        change.options.selectedIndex = 0;
    }

    $('#jomehRow3 input').each(function () {
        this.setAttribute("disabled", "disabled");
        this.style.backgroundColor = "#e7e7e7";
        this.value = "";
    });

    document.getElementById("jomeh").style.backgroundColor = "#bfbfbf";
    document.getElementById('RestTimeJomeh').setAttribute("disabled", "disabled");
    inp6.checked = false;
    inp.checked = true;
    inp1.checked = true;
    inp2.checked = true;
    inp3.checked = true;
    inp4.checked = true;
    inp5.checked = true;
    NormalShift.style.backgroundColor = "#c5e7bf";
    RotatingShift.style.backgroundColor = "#e7e7e7";
    ComplexShift.style.backgroundColor = "#e7e7e7";

    document.getElementById("OneAndTowShifts").style.display = null;
    document.getElementById("ComplexFildset").style.display = 'none';

});

document.getElementById("RadioSh3").addEventListener("click", () => {
    document.getElementById("Sh3").style.backgroundColor = "#3ac53c";
    document.getElementById("Sh1").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh2").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh4").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh5").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh6").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh7").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh8").style.backgroundColor = "#bfbfbf";
    document.getElementById("RadioSh").value = "3";
    shanbe.style.backgroundColor = "#3ac53c";
    yekshanbe.style.backgroundColor = "#3ac53c";
    doshanbe.style.backgroundColor = "#3ac53c";
    seshanbe.style.backgroundColor = "#3ac53c";
    cheharshanbe.style.backgroundColor = "#3ac53c";
    pangshanbe.style.backgroundColor = "#3ac53c";
    document.getElementById('a0').value = true;
    document.getElementById('a1').value = true;
    document.getElementById('a2').value = true;
    document.getElementById('a3').value = true;
    document.getElementById('a4').value = true;
    document.getElementById('a5').value = true;
    document.getElementById('a6').value = false;

    for (i = 0; i < one.length; i++) {
        let change = one[i];

        change.removeAttribute("disabled");
        change.style.backgroundColor = '#fff';
    }
    for (i = 0; i < tow.length; i++) {
        let change = tow[i];

        change.removeAttribute("disabled");
        change.style.backgroundColor = '#fff';
    }
    for (i = 0; i < three.length; i++) {
        let change = three[i];
        change.removeAttribute("disabled");
        change.style.backgroundColor = '#fff';
    }

    for (i = 0; i < rest.length; i++) {
        let change = rest[i];
        change.setAttribute("disabled", "disabled");
        change.options.selectedIndex = 0;
    }

    $('#jomehRow3 input').each(function () {
        this.setAttribute("disabled", "disabled");
        this.style.backgroundColor = "#e7e7e7";
        this.value = "";
    });
    document.getElementById("jomeh").style.backgroundColor = "#bfbfbf";
    document.getElementById('RestTimeJomeh').setAttribute("disabled", "disabled");
    inp6.checked = false;
    inp.checked = true;
    inp1.checked = true;
    inp2.checked = true;
    inp3.checked = true;
    inp4.checked = true;
    inp5.checked = true;
    NormalShift.style.backgroundColor = "#e7e7e7";
    RotatingShift.style.backgroundColor = "#c5e7bf";
    ComplexShift.style.backgroundColor = "#e7e7e7";

    document.getElementById("OneAndTowShifts").style.display = null;
    document.getElementById("ComplexFildset").style.display = 'none';
   
});

document.getElementById("RadioSh5").addEventListener("click", () => {
    document.getElementById("Sh5").style.backgroundColor = "#3ac53c";
    document.getElementById("Sh1").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh2").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh4").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh3").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh6").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh7").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh8").style.backgroundColor = "#bfbfbf";
    document.getElementById("RadioSh").value = "5";

    document.getElementById("OneAndTowShifts").style.display = 'none';
    document.getElementById("ComplexFildset").style.display = null;
    document.getElementById("StartComplex").value = "";
    document.getElementById("EndComplex").value = "";
    document.getElementById("StartComplex").style.backgroundColor = "#fff";
    document.getElementById("EndComplex").style.backgroundColor = "#fff";

    NormalShift.style.backgroundColor = "#e7e7e7";
    RotatingShift.style.backgroundColor = "#e7e7e7";
    ComplexShift.style.backgroundColor = "#c5e7bf";



});
document.getElementById("RadioSh6").addEventListener("click", () => {
    document.getElementById("Sh6").style.backgroundColor = "#3ac53c";
    document.getElementById("Sh1").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh2").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh4").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh3").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh5").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh7").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh8").style.backgroundColor = "#bfbfbf";
    document.getElementById("RadioSh").value = "6";

    document.getElementById("OneAndTowShifts").style.display = 'none';
    document.getElementById("ComplexFildset").style.display = null;
    document.getElementById("StartComplex").value = "";
    document.getElementById("EndComplex").value = "";
    document.getElementById("StartComplex").style.backgroundColor = "#fff";
    document.getElementById("EndComplex").style.backgroundColor = "#fff";

    NormalShift.style.backgroundColor = "#e7e7e7";
    RotatingShift.style.backgroundColor = "#e7e7e7";
    ComplexShift.style.backgroundColor = "#c5e7bf";



});
document.getElementById("RadioSh7").addEventListener("click", () => {
    document.getElementById("Sh7").style.backgroundColor = "#3ac53c";
    document.getElementById("Sh1").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh2").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh4").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh3").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh5").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh6").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh8").style.backgroundColor = "#bfbfbf";
    document.getElementById("RadioSh").value = "7";

    document.getElementById("OneAndTowShifts").style.display = 'none';
    document.getElementById("ComplexFildset").style.display = null;
    document.getElementById("StartComplex").value = "";
    document.getElementById("EndComplex").value = "";
    document.getElementById("StartComplex").style.backgroundColor = "#fff";
    document.getElementById("EndComplex").style.backgroundColor = "#fff";

    NormalShift.style.backgroundColor = "#e7e7e7";
    RotatingShift.style.backgroundColor = "#e7e7e7";
    ComplexShift.style.backgroundColor = "#c5e7bf";



});

document.getElementById("RadioSh8").addEventListener("click", () => {
    document.getElementById("Sh8").style.backgroundColor = "#3ac53c";
    document.getElementById("Sh1").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh2").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh4").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh3").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh5").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh6").style.backgroundColor = "#bfbfbf";
    document.getElementById("Sh7").style.backgroundColor = "#bfbfbf";
    document.getElementById("RadioSh").value = "8";

    document.getElementById("OneAndTowShifts").style.display = 'none';
    document.getElementById("ComplexFildset").style.display = null;
    document.getElementById("StartComplex").value = "";
    document.getElementById("EndComplex").value = "";
    document.getElementById("StartComplex").style.backgroundColor = "#fff";
    document.getElementById("EndComplex").style.backgroundColor = "#fff";

    NormalShift.style.backgroundColor = "#e7e7e7";
    RotatingShift.style.backgroundColor = "#e7e7e7";
    ComplexShift.style.backgroundColor = "#c5e7bf";



});




document.getElementById("f").addEventListener("change", evt => {
    let res = document.getElementById("shanbeh");
  
    if (document.getElementById("f").checked) {
        document.getElementById('a0').value = true;
        res.style.backgroundColor = "#3ac53c";
        
        if (document.getElementById("RadioSh").value == "1") {
            $('#shanbehRow1 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
            document.getElementById('restTime').removeAttribute("disabled");
        }
        else if (document.getElementById("RadioSh").value == "2") {
            $('#shanbehRow2 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }
        else if (document.getElementById("RadioSh").value == "3") {
            $('#shanbehRow3 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }
  
    } else {
        res.style.backgroundColor = "#bfbfbf";
        document.getElementById('a0').value = false;
        $('#shanbehRow3 input').each(function () {
            this.setAttribute("disabled", "disabled");
            this.style.backgroundColor = "#e7e7e7";
            this.value = "";
        });
        document.getElementById('restTime').setAttribute("disabled", "disabled");
        document.getElementById("RestTime").options.selectedIndex = 0;
    }
});



document.getElementById("f1").addEventListener("change", evt => {
    let res = document.getElementById("yekshanbeh");

    if (document.getElementById("f1").checked) {
        document.getElementById('a1').value = true;
        res.style.backgroundColor = "#3ac53c";
        
        if (document.getElementById("RadioSh").value == "1") {
            $('#yekshanbehRow1 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
            document.getElementById('RestTimeYekshanbeh').removeAttribute("disabled");
        }
        else if (document.getElementById("RadioSh").value == "2") {
            $('#yekshanbehRow2 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }
        else if (document.getElementById("RadioSh").value == "3") {
            $('#yekshanbehRow3 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }

    } else {
        res.style.backgroundColor = "#bfbfbf";
        document.getElementById('a1').value = false;
        $('#yekshanbehRow3 input').each(function () {
            this.setAttribute("disabled", "disabled");
            this.style.backgroundColor = "#e7e7e7";
            this.value = "";
        });
        document.getElementById('RestTimeYekshanbeh').setAttribute("disabled", "disabled");
        document.getElementById("RestTimeYekshanbeh").options.selectedIndex = 0;
    }
});

document.getElementById("f2").addEventListener("change", evt => {
    let res = document.getElementById("doshanbeh");


    if (document.getElementById("f2").checked) {
        document.getElementById('a2').value = true;
        res.style.backgroundColor = "#3ac53c";
      
        if (document.getElementById("RadioSh").value == "1") {
            $('#doshanbehRow1 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
            document.getElementById('RestTimeDoshanbeh').removeAttribute("disabled");
        }
        else if (document.getElementById("RadioSh").value == "2") {
            $('#doshanbehRow2 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }
        else if (document.getElementById("RadioSh").value == "3") {
            $('#doshanbehRow3 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }

    } else {
        res.style.backgroundColor = "#bfbfbf";
        document.getElementById('a2').value = false;
        $('#doshanbehRow3 input').each(function () {
            this.setAttribute("disabled", "disabled");
            this.style.backgroundColor = "#e7e7e7";
            this.value = "";
        });
        document.getElementById('RestTimeDoshanbeh').setAttribute("disabled", "disabled");
        document.getElementById("RestTimeDoshanbeh").options.selectedIndex = 0;
    }
});


document.getElementById("f3").addEventListener("change", evt => {
    let res = document.getElementById("seshanbeh");

    if (document.getElementById("f3").checked) {
        document.getElementById('a3').value = true;
        res.style.backgroundColor = "#3ac53c";
       
        if (document.getElementById("RadioSh").value == "1") {
            $('#seshanbehRow1 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
            document.getElementById('RestTimeSeshanbeh').removeAttribute("disabled");
        }
        else if (document.getElementById("RadioSh").value == "2") {
            $('#seshanbehRow2 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }
        else if (document.getElementById("RadioSh").value == "3") {
            $('#seshanbehRow3 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }

    } else {
        res.style.backgroundColor = "#bfbfbf";
        document.getElementById('a3').value = false;
        $('#seshanbehRow3 input').each(function () {
            this.setAttribute("disabled", "disabled");
            this.style.backgroundColor = "#e7e7e7";
            this.value = "";
        });
        document.getElementById('RestTimeSeshanbeh').setAttribute("disabled", "disabled");
        document.getElementById("RestTimeSeshanbeh").options.selectedIndex = 0;

    }
});

document.getElementById("f4").addEventListener("change", evt => {
    let res = document.getElementById("cheharshanbeh");

    if (document.getElementById("f4").checked) {
        document.getElementById('a4').value = true;
        res.style.backgroundColor = "#3ac53c";
        
        if (document.getElementById("RadioSh").value == "1") {
            $('#cheharshanbehRow1 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
            document.getElementById('RestTimeCheharshanbeh').removeAttribute("disabled");
        }
        else if (document.getElementById("RadioSh").value == "2") {
            $('#cheharshanbehRow2 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }
        else if (document.getElementById("RadioSh").value == "3") {
            $('#cheharshanbehRow3 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }

    } else {
        res.style.backgroundColor = "#bfbfbf";
        document.getElementById('a4').value = false;
        $('#cheharshanbehRow3 input').each(function () {
            this.setAttribute("disabled", "disabled");
            this.style.backgroundColor = "#e7e7e7";
            this.value = "";
        });
        document.getElementById('RestTimeCheharshanbeh').setAttribute("disabled", "disabled");
        document.getElementById("RestTimeCheharshanbeh").options.selectedIndex = 0;
    }
});


document.getElementById("f5").addEventListener("change", evt => {
    let res = document.getElementById("panjshanbeh");

    if (document.getElementById("f5").checked) {
        document.getElementById('a5').value = true;
        res.style.backgroundColor = "#3ac53c";
        
        if (document.getElementById("RadioSh").value == "1") {
            $('#panjshanbehRow1 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
            document.getElementById('RestTimePanjshanbeh').removeAttribute("disabled");
        }
        else if (document.getElementById("RadioSh").value == "2") {
            $('#panjshanbehRow2 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }
        else if (document.getElementById("RadioSh").value == "3") {
            $('#panjshanbehRow3 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }

    } else {
        res.style.backgroundColor = "#bfbfbf";
        document.getElementById('a5').value = false;
        $('#panjshanbehRow3 input').each(function () {
            this.setAttribute("disabled", "disabled");
            this.style.backgroundColor = "#e7e7e7";
            this.value = "";
        });
        document.getElementById('RestTimePanjshanbeh').setAttribute("disabled", "disabled");
        document.getElementById("RestTimePanjshanbeh").options.selectedIndex = 0;
    }
});


document.getElementById("f6").addEventListener("click", () => {
    let res = document.getElementById("jomeh");

    if (document.getElementById("f6").checked) {
        document.getElementById('a6').value = true;
        res.style.backgroundColor = "#3ac53c";
      
        if (document.getElementById("RadioSh").value == "1") {
            $('#jomehRow1 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
            document.getElementById('RestTimeJomeh').removeAttribute("disabled");
        }
        else if (document.getElementById("RadioSh").value == "2") {
            $('#jomehRow2 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
        }
        else if (document.getElementById("RadioSh").value == "3") {
            $('#jomehRow3 input').each(function () {
                this.removeAttribute("disabled");
                this.style.backgroundColor = "#fff";
            });
          
        }

    } else {
        res.style.backgroundColor = "#bfbfbf";
        document.getElementById('a6').value = false;
        $('#jomehRow3 input').each(function () {
            this.setAttribute("disabled", "disabled");
            this.style.backgroundColor = "#e7e7e7";
            this.value = "";
        });
        document.getElementById('RestTimeJomeh').setAttribute("disabled", "disabled");
        document.getElementById("RestTimeJomeh").options.selectedIndex = 0;
    }
});




function CopyRestTime(inputField) {
    
   
   

    if (inp1.checked == true) {
        document.getElementById("RestTimeYekshanbeh").options.selectedIndex = inputField.options.selectedIndex;
    }
    if (inp2.checked == true) {
        document.getElementById("RestTimeDoshanbeh").options.selectedIndex = inputField.options.selectedIndex;
    }
    if (inp3.checked == true) {
        document.getElementById("RestTimeSeshanbeh").options.selectedIndex = inputField.options.selectedIndex;
    }
    if (inp4.checked == true) {
        document.getElementById("RestTimeCheharshanbeh").options.selectedIndex = inputField.options.selectedIndex;
    }
    if (inp5.checked == true) {
        document.getElementById("RestTimePanjshanbeh").options.selectedIndex = inputField.options.selectedIndex;
    }
    if (inp6.checked == true) {
        document.getElementById("RestTimeJomeh").options.selectedIndex = inputField.options.selectedIndex;
    }
}
var timeValid = true;
function validateHM(inputField) {
    /*var isValid = /^\d{1}?\d{1}:\d{1}?\d{1}$/.test(inputField.value);*/
    var isValid = /^([2][0-3]|[1][0-9]|[0-9]|[0][0-9])([:][0-5][0-9])$/.test(inputField.value);


    if (isValid) {
        inputField.style.backgroundColor = '#a6e9a6';
        var st = inputField.value;
        timeValid = true;
        if (document.getElementById("RadioSh").value == "5" || document.getElementById("RadioSh").value == "7" ) {
            let [hour, minute] = st.split(':');
            var hPlus = Number(hour);
           
            if (hPlus >= 0 && hPlus < 12) {
                hPlus += 12;
            } else {
                hPlus -= 12;
            }
            document.getElementById("EndComplex").value = hPlus + ':' + minute;
        }
        if (document.getElementById("RadioSh").value == "6" || document.getElementById("RadioSh").value == "8") {
            document.getElementById("EndComplex").value = st;
        }
       

    } else {
        inputField.style.backgroundColor = '#f94c4c';
        $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت را بصورت صحیح وارد کنید");
        timeValid = false;
    }
    return isValid;

}
function validateHM2(inputField) {
    /*var isValid = /^\d{1}?\d{1}:\d{1}?\d{1}$/.test(inputField.value);*/
    var isValid = /^([2][0-3]|[1][0-9]|[0-9]|[0][0-9])([:][0-5][0-9])$/.test(inputField.value);


    if (isValid) {
        inputField.style.backgroundColor = '#a6e9a6'; 
        timeValid = true;
       

    } else {
        inputField.style.backgroundColor = '#f94c4c';
        $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت را بصورت صحیح وارد کنید");
        timeValid = false;
    }
    return isValid;

}

function validateSingleShift1(inputField) {
    /*var isValid = /^\d{1}?\d{1}:\d{1}?\d{1}$/.test(inputField.value);*/
    var isValid = /^([2][0-3]|[1][0-9]|[0-9]|[0][0-9])([:][0-5][0-9])$/.test(inputField.value);

    
    if (isValid) {
        inputField.style.backgroundColor = '#a6e9a6';
        timeValid = true;
        if (inp1.checked == true) {
            document.getElementById("SingleShift1Yekshanbeh").value = inputField.value;
        }
        if (inp2.checked == true) {
            document.getElementById("SingleShift1Doshanbeh").value = inputField.value;
        }
        if (inp3.checked == true) {
            document.getElementById("SingleShift1Seshanbeh").value = inputField.value;
        }
        if (inp4.checked == true) {
            document.getElementById("SingleShift1Cheharshanbeh").value = inputField.value;
        }
        if (inp5.checked == true) {
            document.getElementById("SingleShift1Panjshanbeh").value = inputField.value;
        }
        if (inp6.checked == true) {
            document.getElementById("SingleShift1Jomeh").value = inputField.value;
        }
      
    } else {
        inputField.style.backgroundColor = '#f94c4c';
        $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت را بصورت صحیح وارد کنید");
        timeValid = false;
    }
    return isValid;

}

function validateSingleShift2(inputField) {
    /*var isValid = /^\d{1}?\d{1}:\d{1}?\d{1}$/.test(inputField.value);*/
    var isValid = /^([2][0-3]|[1][0-9]|[0-9]|[0][0-9])([:][0-5][0-9])$/.test(inputField.value);


    if (isValid) {
        inputField.style.backgroundColor = '#a6e9a6';
        timeValid = true;
        if (inp1.checked == true) {
            document.getElementById("SingleShift2Yekshanbeh").value = inputField.value;
        }
        if (inp2.checked == true) {
            document.getElementById("SingleShift2Doshanbeh").value = inputField.value;
        }
        if (inp3.checked == true) {
            document.getElementById("SingleShift2Seshanbeh").value = inputField.value;
        }
        if (inp4.checked == true) {
            document.getElementById("SingleShift2Cheharshanbeh").value = inputField.value;
        }
        if (inp5.checked == true) {
            document.getElementById("SingleShift2Panjshanbeh").value = inputField.value;
        }
        if (inp6.checked == true) {
            document.getElementById("SingleShift2Jomeh").value = inputField.value;
        }

    } else {
        inputField.style.backgroundColor = '#f94c4c';
        $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت را بصورت صحیح وارد کنید");
        timeValid = false;
    }
    return isValid;

}

function validateTowShifts1(inputField) {
    /*var isValid = /^\d{1}?\d{1}:\d{1}?\d{1}$/.test(inputField.value);*/
    var isValid = /^([2][0-3]|[1][0-9]|[0-9]|[0][0-9])([:][0-5][0-9])$/.test(inputField.value);


    if (isValid) {
        inputField.style.backgroundColor = '#a6e9a6';
        timeValid = true;
        if (inp1.checked == true) {
            document.getElementById("TowShifts1Yekshanbeh").value = inputField.value;
        }
        if (inp2.checked == true) {
            document.getElementById("TowShifts1Doshanbeh").value = inputField.value;
        }
        if (inp3.checked == true) {
            document.getElementById("TowShifts1Seshanbeh").value = inputField.value;
        }
        if (inp4.checked == true) {
            document.getElementById("TowShifts1Cheharshanbeh").value = inputField.value;
        }
        if (inp5.checked == true) {
            document.getElementById("TowShifts1Panjshanbeh").value = inputField.value;
        }
        if (inp6.checked == true) {
            document.getElementById("TowShifts1Jomeh").value = inputField.value;
        }

    } else {
        inputField.style.backgroundColor = '#f94c4c';
        $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت را بصورت صحیح وارد کنید");
        timeValid = false;
    }
    return isValid;

}


function validateTowShifts2(inputField) {
    /*var isValid = /^\d{1}?\d{1}:\d{1}?\d{1}$/.test(inputField.value);*/
    var isValid = /^([2][0-3]|[1][0-9]|[0-9]|[0][0-9])([:][0-5][0-9])$/.test(inputField.value);


    if (isValid) {
        inputField.style.backgroundColor = '#a6e9a6';
        timeValid = true;
        if (inp1.checked == true) {
            document.getElementById("TowShifts2Yekshanbeh").value = inputField.value;
        }
        if (inp2.checked == true) {
            document.getElementById("TowShifts2Doshanbeh").value = inputField.value;
        }
        if (inp3.checked == true) {
            document.getElementById("TowShifts2Seshanbeh").value = inputField.value;
        }
        if (inp4.checked == true) {
            document.getElementById("TowShifts2Cheharshanbeh").value = inputField.value;
        }
        if (inp5.checked == true) {
            document.getElementById("TowShifts2Panjshanbeh").value = inputField.value;
        }
        if (inp6.checked == true) {
            document.getElementById("TowShifts2Jomeh").value = inputField.value;
        }

    } else {
        inputField.style.backgroundColor = '#f94c4c';
        $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت را بصورت صحیح وارد کنید");
        timeValid = false;
    }
    return isValid;

}

function validDate(inputField) {

    var isValid = /^([1][3-4][0-9][0-9][/])([0][1-9]|[1][0-2])([/])([0][1-9]|[1-2][0-9]|[3][0-1])$/.test(inputField.value);
   

    if (isValid) {
        inputField.style.backgroundColor = '#a6e9a6';
        validCheck = true;

    } else {
        inputField.style.backgroundColor = '#f94c4c';
        $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا تاریخ را بصورت صحیح وارد کنید");
        validCheck = false;

    }
    return isValid;

}
function clickCompute() {
    var ErrorCheck = false;


    if (document.getElementById("RadioSh").value == "1") {
        if (document.getElementById("f").checked) {
            if (!isNaN(document.getElementById("SingleShift1").value) || !isNaN(document.getElementById("SingleShift1").value)) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان  روز شنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1").value = document.getElementById("SingleShift1").value;
                document.getElementById("sendSingleShift2").value = document.getElementById("SingleShift2").value;
                document.getElementById("sendRestTime").value = document.getElementById('restTime').value;
            }
        }
            
        
        if (document.getElementById("f1").checked) {
            if (!isNaN(document.getElementById("SingleShift1Yekshanbeh").value) || !isNaN(document.getElementById("SingleShift2Yekshanbeh").value)) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان  روز یکشنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
            document.getElementById("sendSingleShift1Yekshanbeh").value = document.getElementById("SingleShift1Yekshanbeh").value;
            document.getElementById("sendSingleShift2Yekshanbeh").value = document.getElementById("SingleShift2Yekshanbeh").value;
            document.getElementById("sendRestTimeYekshanbeh").value = document.getElementById('RestTimeYekshanbeh').value;
            }
        }
        if (document.getElementById("f2").checked) {
            if (!isNaN(document.getElementById("SingleShift1Doshanbeh").value) || !isNaN(document.getElementById("SingleShift2Doshanbeh").value)) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان  روز دوشنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Doshanbeh").value = document.getElementById("SingleShift1Doshanbeh").value;
                document.getElementById("sendSingleShift2Doshanbeh").value = document.getElementById("SingleShift2Doshanbeh").value;
                document.getElementById("sendRestTimeDoshanbeh").value = document.getElementById('RestTimeDoshanbeh').value;
            }
        }
        if (document.getElementById("f3").checked) {
            if (!isNaN(document.getElementById("SingleShift1Seshanbeh").value) || !isNaN(document.getElementById("SingleShift2Seshanbeh").value)) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان  روز سه شنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Seshanbeh").value = document.getElementById("SingleShift1Seshanbeh").value;
                document.getElementById("sendSingleShift2Seshanbeh").value = document.getElementById("SingleShift2Seshanbeh").value;
                document.getElementById("sendRestTimeSeshanbeh").value = document.getElementById('RestTimeSeshanbeh').value;
            }
        }
        if (document.getElementById("f4").checked) {
            if (!isNaN(document.getElementById("SingleShift1Cheharshanbeh").value) || !isNaN(document.getElementById("SingleShift2Cheharshanbeh").value)) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان  روز چهارشنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Cheharshanbeh").value = document.getElementById("SingleShift1Cheharshanbeh").value;
                document.getElementById("sendSingleShift2Cheharshanbeh").value = document.getElementById("SingleShift2Cheharshanbeh").value;
                document.getElementById("sendRestTimeCheharshanbeh").value = document.getElementById('RestTimeCheharshanbeh').value;
            }
        }
        if (document.getElementById("f5").checked) {
            if (!isNaN(document.getElementById("SingleShift1Panjshanbeh").value) || !isNaN(document.getElementById("SingleShift2Panjshanbeh").value)) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان  روز پنجشنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Panjshanbeh").value = document.getElementById("SingleShift1Panjshanbeh").value;
                document.getElementById("sendSingleShift2Panjshanbeh").value = document.getElementById("SingleShift2Panjshanbeh").value;
                document.getElementById("sendRestTimePanjshanbeh").value = document.getElementById('RestTimePanjshanbeh').value;
            }
        }
        if (document.getElementById("f6").checked) {
            if (!isNaN(document.getElementById("SingleShift1Jomeh").value) || !isNaN(document.getElementById("SingleShift2Jomeh").value)) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان روز جمعه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Jomeh").value = document.getElementById("SingleShift1Jomeh").value;
                document.getElementById("sendSingleShift2Jomeh").value = document.getElementById("SingleShift2Jomeh").value;
                document.getElementById("sendRestTimeJomeh").value = document.getElementById('RestTimeJomeh').value;
            }
        }
    }

   
   
    if (document.getElementById("RadioSh").value == "2") {

        if (document.getElementById("f").checked) {
            if (
                (!isNaN(document.getElementById("SingleShift1").value) ||
                !isNaN(document.getElementById("SingleShift2").value) ) &&
                (!isNaN(document.getElementById("TowShifts1").value) ||
                !isNaN(document.getElementById("TowShifts2").value)) ){

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان یکی از شیفت های روز شنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1").value = document.getElementById("SingleShift1").value;
                document.getElementById("sendSingleShift2").value = document.getElementById("SingleShift2").value;
                document.getElementById("sendTowShifts1").value = document.getElementById("TowShifts1").value;
                document.getElementById("sendTowShifts2").value = document.getElementById("TowShifts2").value;

            }

        }


        if (document.getElementById("f1").checked) {
            if (
                (!isNaN(document.getElementById("SingleShift1Yekshanbeh").value) ||
                    !isNaN(document.getElementById("SingleShift2Yekshanbeh").value)) &&
                (!isNaN(document.getElementById("TowShifts1Yekshanbeh").value) ||
                    !isNaN(document.getElementById("TowShifts2Yekshanbeh").value)) ) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان یکی از شیفت های روز یکشنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Yekshanbeh").value = document.getElementById("SingleShift1Yekshanbeh").value;
                document.getElementById("sendSingleShift2Yekshanbeh").value = document.getElementById("SingleShift2Yekshanbeh").value;
                document.getElementById("sendTowShifts1Yekshanbeh").value = document.getElementById("TowShifts1Yekshanbeh").value;
                document.getElementById("sendTowShifts2Yekshanbeh").value = document.getElementById("TowShifts2Yekshanbeh").value;

            }

        }

        if (document.getElementById("f2").checked) {
            if (
                (!isNaN(document.getElementById("SingleShift1Doshanbeh").value) ||
                    !isNaN(document.getElementById("SingleShift2Doshanbeh").value)) &&
                (!isNaN(document.getElementById("TowShifts1Doshanbeh").value) ||
                    !isNaN(document.getElementById("TowShifts2Doshanbeh").value))) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان یکی از شیفت های روز دوشنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Doshanbeh").value = document.getElementById("SingleShift1Doshanbeh").value;
                document.getElementById("sendSingleShift2Doshanbeh").value = document.getElementById("SingleShift2Doshanbeh").value;
                document.getElementById("sendTowShifts1Doshanbeh").value = document.getElementById("TowShifts1Doshanbeh").value;
                document.getElementById("sendTowShifts2Doshanbeh").value = document.getElementById("TowShifts2Doshanbeh").value;

            }

        }

        if (document.getElementById("f3").checked) {
            if (
                (!isNaN(document.getElementById("SingleShift1Seshanbeh").value) ||
                    !isNaN(document.getElementById("SingleShift2Seshanbeh").value)) &&
                (!isNaN(document.getElementById("TowShifts1Seshanbeh").value) ||
                    !isNaN(document.getElementById("TowShifts2Seshanbeh").value))) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان یکی از شیفت های روز سه شنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Seshanbeh").value = document.getElementById("SingleShift1Seshanbeh").value;
                document.getElementById("sendSingleShift2Seshanbeh").value = document.getElementById("SingleShift2Seshanbeh").value;
                document.getElementById("sendTowShifts1Seshanbeh").value = document.getElementById("TowShifts1Seshanbeh").value;
                document.getElementById("sendTowShifts2Seshanbeh").value = document.getElementById("TowShifts2Seshanbeh").value;

            }

        }


        if (document.getElementById("f4").checked) {
            if (
                (!isNaN(document.getElementById("SingleShift1Cheharshanbeh").value) ||
                    !isNaN(document.getElementById("SingleShift2Cheharshanbeh").value)) &&
                (!isNaN(document.getElementById("TowShifts1Cheharshanbeh").value) ||
                    !isNaN(document.getElementById("TowShifts2Cheharshanbeh").value))) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان یکی از شیفت های روز چهارشنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Cheharshanbeh").value = document.getElementById("SingleShift1Cheharshanbeh").value;
                document.getElementById("sendSingleShift2Cheharshanbeh").value = document.getElementById("SingleShift2Cheharshanbeh").value;
                document.getElementById("sendTowShifts1Cheharshanbeh").value = document.getElementById("TowShifts1Cheharshanbeh").value;
                document.getElementById("sendTowShifts2Cheharshanbeh").value = document.getElementById("TowShifts2Cheharshanbeh").value;

            }

        }

        if (document.getElementById("f5").checked) {
            if (
                (!isNaN(document.getElementById("SingleShift1Panjshanbeh").value) ||
                    !isNaN(document.getElementById("SingleShift2Panjshanbeh").value)) &&
                (!isNaN(document.getElementById("TowShifts1Panjshanbeh").value) ||
                    !isNaN(document.getElementById("TowShifts2Panjshanbeh").value))) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان یکی از شیفت های روز پنجشنبه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Panjshanbeh").value = document.getElementById("SingleShift1Panjshanbeh").value;
                document.getElementById("sendSingleShift2Panjshanbeh").value = document.getElementById("SingleShift2Panjshanbeh").value;
                document.getElementById("sendTowShifts1Panjshanbeh").value = document.getElementById("TowShifts1Panjshanbeh").value;
                document.getElementById("sendTowShifts2Panjshanbeh").value = document.getElementById("TowShifts2Panjshanbeh").value;

            }

        }

        if (document.getElementById("f6").checked) {
            if (
                (!isNaN(document.getElementById("SingleShift1Jomeh").value) ||
                    !isNaN(document.getElementById("SingleShift2Jomeh").value)) &&
                (!isNaN(document.getElementById("TowShifts1Jomeh").value) ||
                    !isNaN(document.getElementById("TowShifts2Jomeh").value))) {

                $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا ساعت شروع و  پایان یکی از شیفت های روز جمعه را مشخص کنید");
                ErrorCheck = true;

            } else {
                document.getElementById("sendSingleShift1Jomeh").value = document.getElementById("SingleShift1Jomeh").value;
                document.getElementById("sendSingleShift2Jomeh").value = document.getElementById("SingleShift2Jomeh").value;
                document.getElementById("sendTowShifts1Jomeh").value = document.getElementById("TowShifts1Jomeh").value;
                document.getElementById("sendTowShifts2Jomeh").value = document.getElementById("TowShifts2Jomeh").value;

            }

        }
       
    }
    if (document.getElementById("RadioSh").value == "5") {
        document.getElementById("Start1224").value = document.getElementById("StartComplex").value;
        document.getElementById("End1224").value = document.getElementById("EndComplex").value;
    }
    if (document.getElementById("RadioSh").value == "6") {
        document.getElementById("Start2424").value = document.getElementById("StartComplex").value;
        document.getElementById("End2424").value = document.getElementById("EndComplex").value;
    }
    if (document.getElementById("RadioSh").value == "7") {
        document.getElementById("Start1236").value = document.getElementById("StartComplex").value;
        document.getElementById("End1236").value = document.getElementById("EndComplex").value;
    }
    if (document.getElementById("RadioSh").value == "8") {
        document.getElementById("Start2448").value = document.getElementById("StartComplex").value;
        document.getElementById("End2448").value = document.getElementById("EndComplex").value;
    }

    if (!isNaN(document.getElementById('dateStart').value) || !isNaN(document.getElementById('endDate').value)) {
        $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا تاریخ شروع و  پایان را مشخص کنید");
        ErrorCheck = true;
    } else {
        document.getElementById('date1Hide').value = document.getElementById('dateStart').value;
        document.getElementById('date2Hide').value = document.getElementById('endDate').value;

    }
    if (!isNaN(document.getElementById('getWorkDate').value)){
        $.Notification.autoHideNotify('error', 'top center', 'پیام سیستم ', "لطفا تاریخ شروع به کار را مشخص کنید");
        ErrorCheck = true;
    } else {
        document.getElementById('getWorkDateHide').value = document.getElementById('getWorkDate').value;
    }
    if (ErrorCheck == false && timeValid == true) {
        document.getElementById('fomeSend').click();
    }
}
function sum() {
    var myJobType = document.getElementById('job');
    var t = myJobType.options[myJobType.selectedIndex].text

    document.getElementById('sendDayliWage').value = document.getElementById('dayliFee').innerHTML;
    document.getElementById('sendConsumableItems').value = document.getElementById('consumable').innerHTML;
    document.getElementById('sendHousingAllowance').value = document.getElementById('housing').innerHTML;
    document.getElementById('sendWorkingHoursWeekly').value = document.getElementById('HoursWeekly').innerHTML;
    document.getElementById('sendJobType').value = t;
}