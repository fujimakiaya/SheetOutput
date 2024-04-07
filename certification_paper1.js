function getValue() {
    var cer_number1 = sessionStorage.getItem('cer_number1');
    if(cer_number1 =='辞令'){
        var str1 = sessionStorage.getItem('str1_jirei');
        var str2 = sessionStorage.getItem('str2_jirei');
   } else if(cer_number1 == '在職証明書'){
        var str1 = sessionStorage.getItem('str1_zaisyoku');
        var str2 = sessionStorage.getItem('str2_zaisyoku');
   } else if(cer_number1 == '労働者名簿'){
        var str1 = sessionStorage.getItem('str1_meibo');
        var str2 = sessionStorage.getItem('str2_meibo');
   } else if(cer_number1 == '退職証明書'){
        var str1 = sessionStorage.getItem('str1_taisyoku');
        var str2 = sessionStorage.getItem('str2_taisyoku');
   } else if(cer_number1 == '解雇理由証明書'){
        var str1 = sessionStorage.getItem('str1_kaiko');
        var str2 = sessionStorage.getItem('str2_kaiko');
   } 

    if(str1.indexOf(',') > -1 && str2.indexOf(',') > -1){
        var array2 = str1.split(',');
        var array3 = str2.split(',');
        
        var htmlString = document.body.innerHTML;
        for(var i = 0; i < array2.length; i++){
            htmlString = htmlString.replace(array2[i], array3[i]);
        };
        
        document.body.innerHTML = htmlString;
    
        
        if(cer_number1 == '退職証明書'){
            if(array3[15] == 0){
                var element = document.getElementById('cssstyle');
                element.style.textDecoration = 'line-through';
                element.style.textDecorationColor = 'black';
                element.style.textDecorationStyle = 'double';
            };
        }
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
            if(count === 10){
                clearInterval(intervalID);
            }
    }
    }
    
    var count = 0;
    var intervalID = setInterval(getValue, 100);