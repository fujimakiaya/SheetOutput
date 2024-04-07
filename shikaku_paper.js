function getValue() {
        var str1 = sessionStorage.getItem('str1');
        var str2 = sessionStorage.getItem('str2');

    if(str1.indexOf(',') > -1 && str2.indexOf(',') > -1){
        var array2 = str1.split(',');
        var array3 = str2.split(',');
        
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
            if(count === 10){
                clearInterval(intervalID);
            }
    }
    }
    
    var count = 0;
    var intervalID = setInterval(getValue, 100);