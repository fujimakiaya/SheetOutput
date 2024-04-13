//2.辞令
//3.在職証明書
//4.労働者名簿
//5.退職証明書
//6.解雇理由証明書
//7.資格証明書

(function() {
    
    "use strict";
    
    const Params = new URLSearchParams(window.location.search);
    const cer_number1 = Params.get('帳票種別');
    const employeeId = Params.get('employeeId');
    const sei = Params.get('姓');
    const mei = Params.get('名');
    
    let templateJSON = sessionStorage.getItem('template');
    let template_array = JSON.parse(templateJSON);
    
        //配列の行と列を交換
        function transposeArray(originalArray) {
            const originalRows = originalArray.length;
            const originalCols = originalArray[0].length;
            
            const transposedArray = Array.from({ length: originalCols }, () => []);
            
            for (let i = 0; i < originalCols; i++) {
                for (let j = 0; j < originalRows; j++) {
                    transposedArray[i][j] = originalArray[j][i];
                }
            }
            
            return transposedArray;
        }
        
        //日付を2024-01-01から2024年1月1日へ変更
        function date_array(date){
            if(date){
                let originalDateString = date;
                let originalDate = new Date(originalDateString);
                
                let year = originalDate.getFullYear();
                let month = originalDate.getMonth() + 1;
                let day = originalDate.getDate();
                let formattedDate = year + "年" + month + "月" + day + "日";
                
                return formattedDate;
            }
        }
        
        //文字列の足し算
        function sum_array(fig1, fig2){
            return fig1 + '  ' + fig2;
        }

    function jirei(){
        let decodedData = template_array[2];
        
        let array = [];
        let array3 = [];

        array.push(['労働者氏', '%b4%']);
        array.push(['労働者名', '%b4%']);
        array.push(['辞令日付', '%b6%']);
        array.push(['辞令の内容', '%b7%']);
        array.push(['辞令作成日', '%h16%']);
        array.push(['会社名', '%h18%']);
        array.push(['代表者氏名', '%h20%']);

        const transposedArray = transposeArray(array);

        let rowToExtract0 = 0;
        let rowToExtract1 = 1; 

        let array1 = transposedArray[rowToExtract0];
        let array2 = transposedArray[rowToExtract1];

        let element1 = document.getElementsByClassName("kv-element-has-value");
    
        //array3に入れる
        for(let j=0; j<element1.length; j++){
            let i;
            let found = false;
            let elementText = element1[j].firstElementChild.innerText;
            for(i=0; i<array1.length; i++){
                if(elementText == array1[i]){
                    array3[i] = element1[j].lastElementChild.innerText;
                    found = true;
                }
            }
            if(!found){
                array3[i] = '';
            }
        };

        array3[0] = sum_array(array3[0], array3[1]);
        array3[2] = date_array(array3[2]);
        array3[4] = date_array(array3[4]);


     //   console.log(array3);

        //配列を文字列に変更
        let array2_string = array2.join(',');
        let array3_string = array3.join(',');

        //decodedDataに配列を渡す
        //2024.03.25修正藤巻
        decodedData = decodedData.replace('// JavaScriptコード', `str1 = "${array2_string}"; str2 = "${array3_string}"; const employeeId = ${employeeId}; const sei = "${sei}"; const mei = "${mei}"; const cer_number1 = "${cer_number1}";`);

        sessionStorage.setItem('str1_jirei', array2_string);
        sessionStorage.setItem('str2_jirei', array3_string);
        sessionStorage.setItem('cer_number1', cer_number1);

        window.document.getElementsByTagName('html')[0].innerHTML = decodedData;
        let src_value = document.getElementsByTagName('script')[0].src;

         let scriptElement = document.createElement('script');
         scriptElement.src = src_value;
         document.getElementsByTagName('html')[0].appendChild(scriptElement);

         window.focus();
         
         window.oncontextmenu = function () {return false;}
    } 

    function zaisyoku(){
        let decodedData = template_array[3];
        
        let array = [];
        let array3 = [];

        array.push(['労働者氏_在籍', '%e4%']);
        array.push(['労働者名_在籍', '%e4%']);
        array.push(['住所_在籍', '%e5%']);
        array.push(['生年月日_在籍', '%e6%']);
        array.push(['入社年月日（労働者）', '%e7%']);
        array.push(['業務内容', '%e8%']);
        array.push(['在職証明書に記載する事項（備考）', '%e9%']);
        array.push(['在職証明書作成日', '%h16%']);
        array.push(['証明者所在地_在籍', '%h18%']);
        array.push(['事業場の名称', '%h20%']);
        array.push(['代表者氏名_在籍', '%h22%']);

        const transposedArray = transposeArray(array);

        let rowToExtract0 = 0; // 0番目の行を取り出す
        let rowToExtract1 = 1; // 1番目の行を取り出す

        let array1 = transposedArray[rowToExtract0];
        let array2 = transposedArray[rowToExtract1];

        let element1 = document.getElementsByClassName("kv-element-has-value");
    
        //array3に入れる
        for(let j=0; j<element1.length; j++){
            let i;
            let found = false;
            let elementText = element1[j].firstElementChild.innerText;
            for(let i=0; i<array1.length; i++){
                if(elementText == array1[i]){
                    array3[i] = element1[j].lastElementChild.innerText;
                    found = true;
                }
            }
            if(!found){
                array3[i] = '';
            }
        };

        array3[0] = sum_array(array3[0], array3[1]);
        array3[3] = date_array(array3[3]);
        array3[4] = date_array(array3[4]);
        array3[7] = date_array(array3[7]);

        // console.log(array3);
        
        //配列を文字列に変更
        let array2_string = array2.join(',');
        let array3_string = array3.join(',');

        //decodedDataに配列を渡す
        //2024.03.25修正藤巻
        decodedData = decodedData.replace('// JavaScriptコード', `str1 = "${array2_string}"; str2 = "${array3_string}"; const employeeId = ${employeeId}; const sei = "${sei}"; const mei = "${mei}"; const cer_number1 = "${cer_number1}";`);

        sessionStorage.setItem('str1_zaisyoku', array2_string);
        sessionStorage.setItem('str2_zaisyoku', array3_string);
        sessionStorage.setItem('cer_number1', cer_number1);

        window.document.getElementsByTagName('html')[0].innerHTML = decodedData;
        let src_value = document.getElementsByTagName('script')[0].src;

         let scriptElement = document.createElement('script');
         scriptElement.src = src_value;
         document.getElementsByTagName('html')[0].appendChild(scriptElement);

         window.focus();
         
         window.oncontextmenu = function () {return false;}
    } 

    function meibo(){
        let decodedData = template_array[4];

        //console.log(decodedData);
        
        let array = [];
        let array3 = [];

        array.push(['社員No', '%g2%']);
        array.push(['労働者セイ_労働者名簿', '%g3%']);
        array.push(['労働者メイ_労働者名簿', '%h3%']);
        array.push(['労働者氏_労働者名簿', '%g4%']);
        array.push(['労働者名_労働者名簿', '%h4%']);
        array.push(['性別_労働者名簿', '%n4%']);
        array.push(['生年月日_労働者名簿', '%p3%']);
        array.push(['入社年月日_労働者名簿', '%g5%']);
        array.push(['退職又は死亡年月日', '%p5%']);
        array.push(['郵便番号_労働者名簿', '%g6%']);
        array.push(['住所フリガナ_労働者名簿', '%g7%']);
        array.push(['住所_労働者名簿', '%g8%']);
        array.push(['電話番号_労働者名簿', '%p6%']);
        array.push(['所属_労働者名簿', '%g9%']);
        array.push(['職種_労働者名簿', '%p9%']);
        array.push(['退職または死亡事由', '%g27%']);
        array.push(['  ', '%b11%']);
        array.push(['  ', '%b12%']);
        array.push(['  ', '%b13%']);
        array.push(['  ', '%b14%']);
        array.push(['  ', '%b15%']);
        array.push(['  ', '%b16%']);
        array.push(['  ', '%b17%']);
        array.push(['  ', '%b18%']);
        array.push(['  ', '%b19%']);
        array.push(['  ', '%b20%']);
        array.push(['  ', '%b21%']);
        array.push(['  ', '%b22%']);
        array.push(['  ', '%b23%']);
        array.push(['  ', '%b24%']);
        array.push(['  ', '%b25%']);
        array.push(['  ', '%b26%']);
        array.push(['  ', '%g11%']);
        array.push(['  ', '%g12%']);
        array.push(['  ', '%g13%']);
        array.push(['  ', '%g14%']);
        array.push(['  ', '%g15%']);
        array.push(['  ', '%g16%']);
        array.push(['  ', '%g17%']);
        array.push(['  ', '%g18%']);
        array.push(['  ', '%g19%']);
        array.push(['  ', '%g20%']);
        array.push(['  ', '%g21%']);
        array.push(['  ', '%g22%']);
        array.push(['  ', '%g23%']);
        array.push(['  ', '%g24%']);
        array.push(['  ', '%g25%']);
        array.push(['  ', '%g26%']);
        array.push(['労働者名簿_備考', '%g28%']);

        const transposedArray = transposeArray(array);

        let rowToExtract0 = 0; // 0番目の行を取り出す
        let rowToExtract1 = 1; // 1番目の行を取り出す

        let array1 = transposedArray[rowToExtract0];
        let array2 = transposedArray[rowToExtract1];

        let element1 = document.getElementsByClassName("kv-element-has-value");
    
        //array3に入れる
        for(let j=0; j<element1.length; j++){
            let i;
            let found = false;
            let elementText = element1[j].firstElementChild.innerText;
            for(let i=0; i<array1.length; i++){
                if(elementText == array1[i]){
                    array3[i] = element1[j].lastElementChild.innerText;
                    found = true;
                }
            }
            if(!found){
                array3[i] = '';
            }
        };

        let element2 = document.getElementsByTagName('table');
        let table1 = element2[1].children[1];
        let tr1 = table1.children;
        for(let i = 0; i < tr1.length; i++){
            let date1 = '';
            if(tr1[i].children[3].innerText){
                let originalDate = new Date(tr1[i].children[4].innerText);
                let year = originalDate.getFullYear();
                let month = originalDate.getMonth() + 1;
                date1 = year + "年" + month + "月";
            }

            array3[16 + i] = date1;
            array3[32 + i] = tr1[i].children[5].innerText;
        }

        //2024.03.31修正藤巻
        array3[6] = date_array(array3[6]);
        array3[7] = date_array(array3[7]);
        array3[8] = date_array(array3[8]);

        array3[array3.length] = '0';
   //     console.log(array3);

        //配列を文字列に変更
        let array2_string = array2.join(',');
        let array3_string = array3.join(',');

        //decodedDataに配列を渡す
        //2024.03.25修正藤巻
        decodedData = decodedData.replace('// JavaScriptコード', `str1 = "${array2_string}"; str2 = "${array3_string}"; const employeeId = ${employeeId}; const sei = "${sei}"; const mei = "${mei}"; const cer_number1 = "${cer_number1}";`);

        sessionStorage.setItem('str1_meibo', array2_string);
        sessionStorage.setItem('str2_meibo', array3_string);
        sessionStorage.setItem('cer_number1', cer_number1);

        window.document.getElementsByTagName('html')[0].innerHTML = decodedData;
        let src_value = document.getElementsByTagName('script')[0].src;

         let scriptElement = document.createElement('script');
         scriptElement.src = src_value;
         document.getElementsByTagName('html')[0].appendChild(scriptElement);

         window.focus();
         
         window.oncontextmenu = function () {return false;}
    }

    function taisyoku(){
        let decodedData = template_array[5];
        
                //console.log(decodedData);
                
                let array = [];
                let array3 = [];
        
                array.push(['労働者氏_退職証明', '%c4%']);
                array.push(['労働者名_退職証明', '%c4%']);
                array.push(['退職日', '%j7%']);
                array.push(['退職証明日', '%m10%']);
                array.push(['事業主氏名又は名称', '%m11%']);
                array.push(['使用者職氏名', '%m12%']);
                array.push([' ', '%c16%']);
                array.push([' ', '%c17%']);
                array.push([' ', '%c18%']);
                array.push([' ', '%c19%']);
                array.push([' ', '%c20%']);
                array.push([' ', '%c21%']);
                array.push([' ', '%c22%']);
                array.push(['具体的な理由_退職', '%h21%']);
                array.push([' ', '%e22%']);
        
                const transposedArray = transposeArray(array);
        
                let rowToExtract0 = 0; // 0番目の行を取り出す
                let rowToExtract1 = 1; // 1番目の行を取り出す
        
                let array1 = transposedArray[rowToExtract0];
                let array2 = transposedArray[rowToExtract1];

                let element1 = document.getElementsByClassName("kv-element-has-value");
        
                // // //elementのフィールド名を確認するために使用
                // for(let l=0; l<element1.length; l++){
                //     console.log(element1[l].firstElementChild.innerText);
                // };
            
                //array3に入れる
                for(let j=0; j<element1.length; j++){
                    let elementText = element1[j].firstElementChild.innerText;
                    for(let i=0; i<array1.length; i++){
                        if(elementText == array1[i]){
                            array3[i] = element1[j].lastElementChild.innerText;
                        }
                    }
                };
        
                array3[6] = '１';
                array3[7] = '２';
                array3[8] = '３';
                array3[9] = '４';
                array3[10] = '５';
                array3[11] = '６';
                array3[12] = '７';
        
                //2024.03.31修正藤巻
                array3[0] = sum_array(array3[0], array3[1]);
                array3[2] = date_array(array3[2]);
                array3[3] = date_array(array3[3]);
                reasons();
                doubleline(array3.length);
        
                function reasons(){
                    for(let k=0; k<element1.length; k++){
                        let elementText1 = element1[k].firstElementChild.innerText;
                        if(elementText1 == '離職理由_転記用'){
                            let alphabet = element1[k].lastElementChild.innerText;
                            // console.log(alphabet);
                            if(alphabet == 'ア'){
                                array3[6] = '①';
                            } else if(alphabet == 'イ'){
                                array3[7] = '②';
                            } else if(alphabet == 'ウ'){
                                array3[8] = '③';
                            } else if(alphabet == 'エ'){
                                array3[9] = '④';
                            } else if(alphabet == 'オ'){
                                array3[10] = '⑤';
                            } else if(alphabet == 'カ'){
                                array3[11] = '⑥';
                            } else if(alphabet == 'キ'){
                                array3[12] = '⑦';
                            }
                        };
                    };
                }
                
                function doubleline(fig){
                    array3[fig] = '（別紙の理由による。）';
                    for(let k=0; k<element1.length; k++){
                        let elementText2 = element1[k].firstElementChild.innerText;
                        if(elementText2 == '労働者が解雇理由を請求するか'){
                            let option = element1[k].lastElementChild.innerText;
                            if(option == '解雇理由を請求しない'){
                                array3[fig + 1] = '0';
                            } else {
                                array3[fig + 1] = '1';
                            } 
                        };
                    };
                }      
        
                // console.log(array3);
                
                //配列を文字列に変更
                let array2_string = array2.join(',');
                let array3_string = array3.join(',');
        
                //decodedDataに配列を渡す
                //2024.03.25修正藤巻
                decodedData = decodedData.replace('// JavaScriptコード', `str1 = "${array2_string}"; str2 = "${array3_string}"; const employeeId = ${employeeId}; const sei = "${sei}"; const mei = "${mei}"; const cer_number1 = "${cer_number1}";`);

                sessionStorage.setItem('str1_taisyoku', array2_string);
                sessionStorage.setItem('str2_taisyoku', array3_string);
                sessionStorage.setItem('cer_number1', cer_number1);

                window.document.getElementsByTagName('html')[0].innerHTML = decodedData;
                let src_value = document.getElementsByTagName('script')[0].src;
        
                 let scriptElement = document.createElement('script');
                 scriptElement.src = src_value;
                 document.getElementsByTagName('html')[0].appendChild(scriptElement);
        
                 window.focus();
                 
                 window.oncontextmenu = function () {return false;}
    }

    function kaiko(){
        let decodedData = template_array[6];
        
                //console.log(decodedData);
                
                let array = [];
                let array3 = [];

                array.push(['労働者氏_解雇理由', '%b5%']);
                array.push(['労働者名_解雇理由', '%b5%']);
                array.push(['解雇日_解雇理由', '%e7%']);
                array.push(['証明日_解雇理由', '%m10%']);
                array.push(['事業主氏名又は名称_解雇理由', '%m11%']);
                array.push(['使用者職氏名_解雇理由', '%m12%']);
                array.push(['  ', '%c17%']);
                array.push(['  ', '%c20%']);
                array.push(['  ', '%c23%']);
                array.push(['  ', '%c26%']);
                array.push(['  ', '%c29%']);
                array.push(['  ', '%c32%']);
                array.push(['  ', '%k17%']);
                array.push(['  ', '%c18%']);
                array.push(['  ', '%c19%']);
                array.push(['  ', '%l20%']);
                array.push(['  ', '%c21%']);
                array.push(['  ', '%c22%']);
                array.push(['  ', '%n23%']);
                array.push(['  ', '%c24%']);
                array.push(['  ', '%c25%']);
                array.push(['  ', '%m26%']);
                array.push(['  ', '%c27%']);
                array.push(['  ', '%c28%']);
                array.push(['  ', '%o29%']);
                array.push(['  ', '%c30%']);
                array.push(['  ', '%c31%']);
                array.push(['  ', '%h32%']);
                array.push(['  ', '%c33%']);
                array.push(['  ', '%c34%']);
        
                const transposedArray = transposeArray(array);
        
                let rowToExtract0 = 0; // 0番目の行を取り出す
                let rowToExtract1 = 1; // 1番目の行を取り出す
        
                let array1 = transposedArray[rowToExtract0];
                let array2 = transposedArray[rowToExtract1];
        
                let element1 = document.getElementsByClassName("kv-element-has-value");
        
                // // //elementのフィールド名を確認するために使用
                // for(let l=0; l<element1.length; l++){
                //     console.log(element1[l].firstElementChild.innerText);
                // };
            
                //array3に入れる
                for(let j=0; j<element1.length; j++){
                    let i;
                    let found = false;
                    let elementText = element1[j].firstElementChild.innerText;
                    for(let i=0; i<array1.length; i++){
                        if(elementText == array1[i]){
                            array3[i] = element1[j].lastElementChild.innerText;
                            found = true;
                        }
                    }
                    if(!found){
                        array3[i] = '';
                    }
                };
        
                array3[6] = '１';
                array3[7] = '２';
                array3[8] = '３';
                array3[9] = '４';
                array3[10] = '５';
                array3[11] = '６';
                array3[30] = '0';

                //2024.03.31修正藤巻
                array3[0] = sum_array(array3[0], array3[1]);
                array3[2] = date_array(array3[2]);
                array3[3] = date_array(array3[3]);
                reasons();
                separate(3*(figure1-1) + 12);
        
                let figure1 = 0;
        
                function reasons(){
                    for(let k=0; k<element1.length; k++){
                        let elementText1 = element1[k].firstElementChild.innerText;
                        if(elementText1 == '解雇理由_転記用'){
                            let alphabet = element1[k].lastElementChild.innerText;
                            console.log(alphabet);
                            if(alphabet == 'ア'){
                                array3[6] = '①';
                                figure1 = 1;
                            } else if(alphabet == 'イ'){
                                array3[7] = '②';
                                figure1 = 2;
                            } else if(alphabet == 'ウ'){
                                array3[8] = '③';
                                figure1 = 3;
                            } else if(alphabet == 'エ'){
                                array3[9] = '④';
                                figure1 = 4;
                            } else if(alphabet == 'オ'){
                                array3[10] = '⑤';
                                figure1 = 5;
                            } else if(alphabet == 'カ'){
                                array3[11] = '⑥';
                                figure1 = 6;
                            }
                        };
                    };
                }
        
                function separate(fig1){
                    let reasons = '';
                    for(let k=0; k<element1.length; k++){
                        let elementText1 = element1[k].firstElementChild.innerText;
                        if(elementText1 == '具体的な理由_転記用'){
                            reasons = element1[k].lastElementChild.innerText;
                        }};
                    //console.log(reasons.length);
                    //2023.03.28修正
                    if(reasons.length < 35){
                        array3[fig1 + 1] = reasons;             
                    } else if (reasons.length < 53) {
                        array3[fig1] = reasons.substring(0, 10);             
                        array3[fig1 + 1] = reasons.substring(11, reasons.length);             
                    } else {
                        array3[fig1] = reasons.substring(0, 10);             
                        array3[fig1 + 1] = reasons.substring(11, 53);
                        array3[fig1 + 2] = reasons.substring(54, reasons.length);
                    }
                }
 
                // console.log(array3);
        
                //配列を文字列に変更
                let array2_string = array2.join(',');
                let array3_string = array3.join(',');
        
                //decodedDataに配列を渡す
                //2024.03.25修正藤巻
                decodedData = decodedData.replace('// JavaScriptコード', `str1 = "${array2_string}"; str2 = "${array3_string}"; const employeeId = ${employeeId}; const sei = "${sei}"; const mei = "${mei}"; const cer_number1 = "${cer_number1}";`);

                sessionStorage.setItem('str1_kaiko', array2_string);
                sessionStorage.setItem('str2_kaiko', array3_string);
                sessionStorage.setItem('cer_number1', cer_number1);

                window.document.getElementsByTagName('html')[0].innerHTML = decodedData;
                let src_value = document.getElementsByTagName('script')[0].src;
        
                 let scriptElement = document.createElement('script');
                 scriptElement.src = src_value;
                 document.getElementsByTagName('html')[0].appendChild(scriptElement);
        
                 window.focus();
                 
                 window.oncontextmenu = function () {return false;}
        
    }

    // console.log(cer_number1);

    kv.events.view.detail.mounted.push(function (state) {
           if(cer_number1 =='辞令'){
                jirei();
           } else if(cer_number1 == '在職証明書'){
                zaisyoku();
           } else if(cer_number1 == '労働者名簿'){
               meibo();
           } else if(cer_number1 == '退職証明書'){
                taisyoku();
           } else if(cer_number1 == '解雇理由証明書'){
                kaiko();
           }       
        return state;      
    });


    function error_check(){
        // //elementのフィールド名を確認するために使用
        // for(let l=0; l<document.getElementsByClassName("kv-element-has-value").length; l++){
        //     console.log(element1[l].firstElementChild.innerText);
        // };
    }
})();