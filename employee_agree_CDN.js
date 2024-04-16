function getValue() {
    let LedgerKind = sessionStorage.getItem('LedgerKind');
    let str1;
    let str2;
    let decodedData;
    if(LedgerKind == '雇用契約書'){
        str1 = sessionStorage.getItem('str1_koyou');
        str2 = sessionStorage.getItem('str2_koyou');
        decodedData = sessionStorage.getItem('decodedData_koyou');
    } else if (LedgerKind == '労働条件通知書') {
        str1 = sessionStorage.getItem('str1_roudou');
        str2 = sessionStorage.getItem('str2_roudou');
        decodedData = sessionStorage.getItem('decodedData_roudou');
    }

    console.log(decodedData);

    if(str1.indexOf(',') > -1 && str2.indexOf(',') > -1){
        let array2 = str1.split(',');
        let array3 = str2.split(',');
        
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
        
        // let htmlString = document.body.innerHTML;
        for(let i = 0; i < array2.length; i++){
            decodedData = decodedData.replace(array2[i], array3[i]);
        };

        document.style.display = 'block';
        
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
            console.log(count);
            if(count === 1){
                clearInterval(intervalID);
            }
    }
    }
    
    let count = 0;
    let intervalID = setInterval(getValue, 100);
    
    let count = 0;
    let intervalID = setInterval(getValue, 100);
