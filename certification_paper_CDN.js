function getValue() {
    let cer_number1 = sessionStorage.getItem('cer_number1');
    let str1;
    let str2;
    if(cer_number1 =='辞令'){
        str1 = sessionStorage.getItem('str1_jirei');
        str2 = sessionStorage.getItem('str2_jirei');
   } else if(cer_number1 == '在職証明書'){
        str1 = sessionStorage.getItem('str1_zaisyoku');
        str2 = sessionStorage.getItem('str2_zaisyoku');
   } else if(cer_number1 == '労働者名簿'){
        str1 = sessionStorage.getItem('str1_meibo');
        str2 = sessionStorage.getItem('str2_meibo');
   } else if(cer_number1 == '退職証明書'){
        str1 = sessionStorage.getItem('str1_taisyoku');
        str2 = sessionStorage.getItem('str2_taisyoku');
   } else if(cer_number1 == '解雇理由証明書'){
        str1 = sessionStorage.getItem('str1_kaiko');
        str2 = sessionStorage.getItem('str2_kaiko');
   } 

    if(str1.indexOf(',') > -1 && str2.indexOf(',') > -1){
        let array2 = str1.split(',');
        let array3 = str2.split(',');
        
        let htmlString = document.body.innerHTML;
        for(let i = 0; i < array2.length; i++){
            htmlString = htmlString.replace(array2[i], array3[i]);
        };
        
        document.body.innerHTML = htmlString;
    
        
        if(cer_number1 == '退職証明書'){
            if(array3[15] == 0){
                let element = document.getElementById('cssstyle');
                element.style.textDecoration = 'line-through';
                element.style.textDecorationColor = 'black';
                element.style.textDecorationStyle = 'double';
            };
        }
        createPrintButton('print-button', '印刷はコチラ');
        createCloseButton('print-close', 'ウインドウを閉じる');
        
        let styleTag = document.querySelector('style');
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
            if(count === 1){
                clearInterval(intervalID);
            }
    }
    }
    
    let count = 0;
    let intervalID = setInterval(getValue, 100);