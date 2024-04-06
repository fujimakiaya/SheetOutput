function getValue() {
    var str1 = sessionStorage.getItem('str1');
    var str2 = sessionStorage.getItem('str2');
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
    
    var htmlString = document.body.innerHTML;
    for(var i = 0; i < array2.length; i++){
        htmlString = htmlString.replace(array2[i], array3[i]);
    };
    
    document.body.innerHTML = htmlString;

    
    createPrintButton('print-button', '印刷はコチラ');
    createCloseButton('print-close', 'ウインドウを閉じる');
    
    var styleTag = document.querySelector('style');
    styleTag.textContent += `
    @media print {
        .print-button, .print-close {
            display: none;
        }}`;
        
        function createPrintButton(className, text) {
            const button = document.createElement('button');
            button.className = className;
            button.textContent = text;
            button.style.position = 'fixed';
            button.style.alignContent = 'center';
            button.style.width = '20%';
            button.style.right = '20px';
            button.style.height = '30px';
            button.style.top = '10px';
            button.style.zIndex = 9999;
            document.body.appendChild(button);
            button.onclick = function() {
                window.print();
            };
        }
        function createCloseButton(className, text) {
            const button = document.createElement('button');
            button.className = className;
            button.textContent = text;
            button.style.position = 'fixed';
            button.style.alignContent = 'center';
            button.style.width = '20%';
            button.style.right = '20px';
            button.style.height = '30px';
            button.style.top = '40px';
            button.style.zIndex = 9999;
            document.body.appendChild(button);
            button.onclick = function() {
                window.close();
            };
        }
        count++;
        console.log(count);
        if(count === 5){
            clearInterval(intervalID);
        }
    }
    
    var count = 0;
    var intervalID = setInterval(getValue(), 100);
    
