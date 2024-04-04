var str1 = 0;
var str2 = 0;
// JavaScriptコード
var array2 = str1.split(',');
var array3 = str2.split(',');

function kanma(fig) {
    if(array3[fig]){
        if(array3[fig] > 0){
            array3[fig] = Number(array3[fig]).toLocaleString();
        }
    }
}

kanma(26);
kanma(28);
kanma(31);
kanma(34);
kanma(37);
kanma(40);
kanma(43);
kanma(46);
kanma(49);
kanma(52);
kanma(55);
kanma(58);
kanma(61);

var htmlString = document.getElementById('（１）2024.4_雇用契約書_完成_NSv1.0_7758').innerHTML;
for(var i = 0; i < array2.length; i++){
    htmlString = htmlString.replace(array2[i], array3[i]);
};

document.getElementById('（１）2024.4_雇用契約書_完成_NSv1.0_7758').innerHTML = htmlString;

function printWithDialog() {
    window.print();
}