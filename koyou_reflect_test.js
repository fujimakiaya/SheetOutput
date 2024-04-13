
(function() {

    "use strict";

    let templateJSON = sessionStorage.getItem('template');
    let template_array = JSON.parse(templateJSON);
    // for(let i = 0; i < template_array.length; i++){
    //     console.log(template_array[i]);
    // };
    let LedgerKind = '';

//ボタン生成
    const pButton1 = document.createElement('button');
    pButton1.style = 'position: fixed; right:20px; top:40px; height:30px; width:150px;'; 
    pButton1.innerHTML = '雇用契約書印刷';
    pButton1.style.borderRadius = '10px';

    const pButton2 = document.createElement('button');
    pButton2.style = 'position: fixed; right:20px; top:72px; height:30px; width:150px;';
    pButton2.innerHTML = '労働条件通知書作成';
    pButton2.style.borderRadius = '10px';

    const pButton3 = document.createElement('button'); 
    pButton3.style = 'position: fixed; right:20px; top:104px; height:30px; width:150px;';
    pButton3.innerHTML = 'ウィンドウを閉じる';
    pButton3.style.borderRadius = '10px';

//Window.close
    pButton3.onclick = function() {
       window.close();
    };

    //transpose rows and columns
    //2023.03.28修正藤巻
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

    //remove '円'
    //2023.03.28修正藤巻
    function replace_array_yen(array_name, array_con){
        for(let i = 0; i < array_con.length; i++){
            if(array_name[i].indexOf('の額（例）10000') > -1 || array_name[i].indexOf('基本給（例）250000') > -1){
                if(array_con[i]){
                    if(array_con[i].length > 0){
                        array_con[i] = array_con[i].slice(0, -1); 
                }
            }
        }
    }
        return array_con;
    }

    //2023.03.28修正藤巻
    //remove kanma
    function replace_array_kanma(array_con){
        for(let i = 0; i < array_con.length; i++){
                if(array_con[i]){
                    if(array_con[i].length > 0){ 
                        array_con[i] = array_con[i].replace(/,/g, '');
            }
        }
    }
        return array_con;
    }

//雇用契約書
    pButton1.onclick = async function() {

        let array = [];
        let array1 = [];
        let array2 = [];
        let array3 = [];

        let decodedData = template_array[0];
        //console.log(decodedData);

        array.push(['労働者（姓）', '%c1%']);
        array.push(['労働者（名）', '%c1%']);
        array.push(['入社日', '%f6%']);
        array.push(['雇用形態区分', '%f7%']);
        array.push(['正社員本採用前の試用期間開始日', '%r7%']);
        array.push(['正社員本採用前の試用期間終了日', '%y7%']);
        array.push(['契約期間の定め有・無', '%f8%']);
        array.push(['契約開始日', '%r8%']);
        array.push(['契約終了日(期間の定め有の場合）', '%y8%']);
        array.push(['就業の場所', '%f9%']);
        array.push(['従事すべき業務の内容', '%f10%']);
        array.push(['始業時刻① (例)9:00', '%i12%']);
        array.push(['終業時刻① (例)18:30', '%o12%']);
        array.push(['始業時刻② (例)10:00', '%i13%']);
        array.push(['終業時刻② (例)17:00', '%o13%']);
        array.push(['始業時刻③ (例)11:00', '%i14%']);
        array.push(['終業時刻③ (例)15:30', '%o14%']);
        array.push(['始業・終業時刻（シフトによるなど）', '%j15%']);
        array.push(['休憩時間① (例)昼60分', '%j16%']);
        array.push(['休憩時間② (例)午前15分', '%o16%']);
        array.push(['休憩時間③(例)午後15分', '%t16%']);
        array.push(['所定時間外労働をする可能性の有無', '%l17%']);
        array.push(['休日労働をする可能性の有無', '%l18%']);
        array.push(['深夜労働をする可能性の有無', '%s18%']);
        array.push(['休日（例：シフトによる・土日祝日）', '%e19%']);
        array.push(['基本賃金', '%h21%']);
        array.push(['基本給（例）250000', '%j21%']);
        array.push(['手当１', '%f22%']);
        array.push(['手当１の額（例）10000', '%j22%']);
        array.push(['計算方法１', '%o22%']);
        array.push(['手当２', '%f23%']);
        array.push(['手当２の額（例）10000', '%j23%']);
        array.push(['計算方法２', '%o23%']);
        array.push(['手当３', '%f24%']);
        array.push(['手当３の額（例）10000', '%j24%']);
        array.push(['計算方法３', '%o24%']);
        array.push(['手当４', '%f25%']);
        array.push(['手当４の額（例）10000', '%j25%']);
        array.push(['計算方法４', '%o25%']);
        array.push(['手当5', '%f26%']);
        array.push(['手当5の額（例）10000', '%j26%']);
        array.push(['計算方法5', '%o26%']);
        array.push(['手当6', '%f27%']);
        array.push(['手当6の額（例）10000', '%j27%']);
        array.push(['計算方法6', '%o27%']);
        array.push(['手当7', '%f28%']);
        array.push(['手当7の額（例）10000', '%j28%']);
        array.push(['計算方法7', '%o28%']);
        array.push(['手当8', '%f29%']);
        array.push(['手当8の額（例）10000', '%j29%']);
        array.push(['計算方法8', '%o29%']);
        array.push(['手当9', '%f30%']);
        array.push(['手当9の額（例）10000', '%j30%']);
        array.push(['計算方法9', '%o30%']);
        array.push(['手当10', '%f31%']);
        array.push(['手当10の額（例）10000', '%j31%']);
        array.push(['計算方法10', '%o31%']);
        array.push(['手当11', '%f32%']);
        array.push(['手当11の額（例）10000', '%j32%']);
        array.push(['計算方法11', '%o32%']);
        array.push(['手当12', '%f33%']);
        array.push(['手当12の額（例）10000', '%j33%']);
        array.push(['計算方法12', '%o33%']);
        array.push(['  ', '%f34%']);
        array.push(['  ', '%j34%']);
        array.push(['  ', '%o34%']);
        array.push(['  ', '%f35%']);
        array.push(['  ', '%j35%']);
        array.push(['  ', '%o35%']);
        array.push(['賃金締切日（当月か翌月か）', '%k43%']);
        array.push(['賃金締切日 (例)15日、末日', '%k43%']);
        array.push(['賃金支払日（当月か翌月か）', '%k44%']);
        array.push(['賃金支払日 (例)15日、末日', '%k44%']);
        array.push(['賃金支払方法', '%k45%']);
        array.push(['労使協定に基づき給与から控除する金銭の有無', '%o46%']);
        array.push(['控除する場合の項目名', '%r46%']);
        array.push(['昇給の有無（その契約期間内において）', '%i47%']);
        array.push(['昇給の時期等（例：毎年４月支給日）', '%m47%']);
        array.push(['賞与の有無', '%i48%']);
        array.push(['賞与（例：６月および12月）', '%m48%']);
        array.push(['退職金の有無', '%i49%']);
        array.push(['  ', '%m49%']);
        array.push(['定年制の有無', '%i50%']);
        array.push(['定年制年齢（例）60　※半角数字のみ', '%m50%']);
        array.push(['継続雇用年齢（例）65　※半角数字のみ', '%t50%']);
        array.push(['（例：2か月）', '%p51%']);
        array.push(['労災保険の適用', '%k53%']);
        array.push(['雇用保険の適用', '%u53%']);
        array.push(['健康保険の適用', '%k54%']);
        array.push(['厚生年金の適用', '%u54%']);
        array.push(['更新の種類（期間の定め有の場合）]', '%u59%']);
        array.push(['更新上限の有無', '%l69%']);
        array.push(['更新上限回数', '%h70%']);
        array.push(['通算契約期間', '%r70%']);
        array.push(['契約期間の末日の翌日（自動計算されます）', '%l74%']);
        array.push(['労働条件変更の有無', '%q75%']);
        array.push(['短時間労働者について雇用管理改善等に関する相談窓口（部署名、担当者職・氏名、連絡先）', '%h86%']);
        array.push(['会社名', '%e86%']);
        array.push(['代表者役職名', '%e87%']);
        array.push(['代表者名', '%e87%']);
        array.push(['  ', '%e89%']);
        array.push(['①就業場所の変更範囲（転勤の範囲）を記入ください', '%g93%']);
        array.push(['②将来従事すべき業務内容の変更範囲をご記入ください', '%h94%']);
        array.push(['③就業規則を確認できる場所（クラウドのURLや休憩室本棚など）', '%h97%']);
        array.push(['④就業規則の確認方法（データで確認、現物で確認など）', '%d98%']);
        array.push(['個別特記事項', '%d101%']);

        const transposedArray = transposeArray(array);

        let rowToExtract0 = 0; // 0番目の行を取り出す
        let rowToExtract1 = 1; // 1番目の行を取り出す

        array1 = transposedArray[rowToExtract0];
        array2 = transposedArray[rowToExtract1];

        // //array1とarray2の対応を見るのに使用
        // let array = [array1, array2];
        // for(let j=0; j<array1.length; j++){
        //     console.log(array[0][j] +':' + array[1][j] +':'+j);
        // };

        let element1 = document.getElementsByClassName("kv-element-has-value");

        // //elementのフィールド名を確認するために使用
        // for(let l=0; l<element1.length; l++){
        //     console.log(element1[l].firstElementChild.innerText);
        // };
    
        //array3に入れる
        for(let j=0; j<element1.length; j++){
            let elementText = element1[j].firstElementChild.innerText;
            for(let i=0; i<array1.length; i++){
                if(elementText == array1[i]){
                    array3[i] = element1[j].lastElementChild.innerText;
	      break;
                }
            }
        };

        //console.log(array3);
        array3 = replace_array_kanma(array3);
        array3 = replace_array_yen(array1, array3);

        sum_array(0, 1);
        sum_array(69, 70);
        sum_array(71, 72);
        sum_array(98, 99);

        remove_1word(92);
        remove_1word(83);
        remove_1word(84);

        array3[105] = array3[105].replace(/\n/g, '<br>');

        function remove_1word(fig){
            if(array3[fig].length > 1){
                if(array3[fig]){
                    array3[fig] = array3[fig].slice(0, -1);
                }
            }
        }
        if(array3[93].length > 2){
            if(array3[93]){
                array3[93] = array3[93].slice(0, -3);
            }
        }

        function sum_array(fig1, fig2){
            array3[fig1] = array3[fig1] + '  ' + array3[fig2];
        }

        // console.log(array3);
        // console.log(array2);
        // console.log(array1);

        //配列を文字列に変更
        let array2_string = array2.join(',');
        let array3_string = array3.join(',');
        LedgerKind = '雇用契約書';

        let newTab = window.open('', '雇用契約書', '_blank');

        newTab.sessionStorage.setItem('str1_koyou', array2_string);
        newTab.sessionStorage.setItem('str2_koyou', array3_string);
        newTab.sessionStorage.setItem('LedgerKind', LedgerKind);

        newTab.document.getElementsByTagName('html')[0].innerHTML = decodedData;
        let src_value = newTab.document.getElementsByTagName('script')[0].src;

         let scriptElement = newTab.document.createElement('script');
         scriptElement.src = src_value;
         newTab.document.getElementsByTagName('html')[0].appendChild(scriptElement);

         newTab.oncontextmenu = function () {return false;}
         window.focus();        

    }; 

//労働条件通知書
    pButton2.onclick = async function() {

        let array = [];
        let array1 = [];
        let array2 = [];
        let array3 = [];

        let decodedData = template_array[1];
        console.log(decodedData);

        array.push(['労働者（姓）', '%c4%']);
        array.push(['労働者（名）', '%c4%']);
        array.push(['入社日', '%f6%']);
        array.push(['雇用形態区分', '%f7%']);
        array.push(['正社員本採用前の試用期間開始日', '%q7%']);
        array.push(['正社員本採用前の試用期間終了日', '%x7%']);
        array.push(['契約期間の定め有・無', '%f8%']);
        array.push(['契約開始日', '%q8%']);
        array.push(['契約終了日(期間の定め有の場合）', '%x8%']);
        array.push(['就業の場所', '%f9%']);
        array.push(['従事すべき業務の内容', '%f10%']);
        array.push(['始業時刻① (例)9:00', '%i12%']);
        array.push(['終業時刻① (例)18:30', '%o12%']);
        array.push(['始業時刻② (例)10:00', '%i13%']);
        array.push(['終業時刻② (例)17:00', '%o13%']);
        array.push(['始業時刻③ (例)11:00', '%i14%']);
        array.push(['終業時刻③ (例)15:30', '%o14%']);
        array.push(['始業・終業時刻（シフトによるなど）', '%j15%']);
        array.push(['休憩時間① (例)昼60分', '%j16%']);
        array.push(['休憩時間② (例)午前15分', '%o16%']);
        array.push(['休憩時間③(例)午後15分', '%t16%']);
        array.push(['所定時間外労働をする可能性の有無', '%l17%']);
        array.push(['休日労働をする可能性の有無', '%l18%']);
        array.push(['深夜労働をする可能性の有無', '%s18%']);
        array.push(['休日（例：シフトによる・土日祝日）', '%e19%']);
        array.push(['基本賃金', '%h21%']);
        array.push(['基本給（例）250000', '%j21%']);
        array.push(['手当１', '%e22%']);
        array.push(['手当１の額（例）10000', '%j22%']);
        array.push(['計算方法１', '%o22%']);
        array.push(['手当２', '%e23%']);
        array.push(['手当２の額（例）10000', '%j23%']);
        array.push(['計算方法２', '%o23%']);
        array.push(['手当３', '%e24%']);
        array.push(['手当３の額（例）10000', '%j24%']);
        array.push(['計算方法３', '%o24%']);
        array.push(['手当４', '%e25%']);
        array.push(['手当４の額（例）10000', '%j25%']);
        array.push(['計算方法４', '%o25%']);
        array.push(['手当5', '%e26%']);
        array.push(['手当5の額（例）10000', '%j26%']);
        array.push(['計算方法5', '%o26%']);
        array.push(['手当6', '%e27%']);
        array.push(['手当6の額（例）10000', '%j27%']);
        array.push(['計算方法6', '%o27%']);
        array.push(['手当7', '%e28%']);
        array.push(['手当7の額（例）10000', '%j28%']);
        array.push(['計算方法7', '%o28%']);
        array.push(['手当8', '%e29%']);
        array.push(['手当8の額（例）10000', '%j29%']);
        array.push(['計算方法8', '%o29%']);
        array.push(['手当9', '%e30%']);
        array.push(['手当9の額（例）10000', '%j30%']);
        array.push(['計算方法9', '%o30%']);
        array.push(['手当10', '%e31%']);
        array.push(['手当10の額（例）10000', '%j31%']);
        array.push(['計算方法10', '%o31%']);
        array.push(['手当11', '%e32%']);
        array.push(['手当11の額（例）10000', '%j32%']);
        array.push(['計算方法11', '%o32%']);
        array.push(['手当12', '%e33%']);
        array.push(['手当12の額（例）10000', '%j33%']);
        array.push(['計算方法12', '%o33%']);
        array.push(['  ', '%e34%']);
        array.push(['  ', '%j34%']);
        array.push(['  ', '%o34%']);
        array.push(['  ', '%e35%']);
        array.push(['  ', '%j35%']);
        array.push(['  ', '%o35%']);
        array.push(['賃金締切日（当月か翌月か）', '%k41%']);
        array.push(['賃金締切日 (例)15日、末日', '%k41%']);
        array.push(['賃金支払日（当月か翌月か）', '%k42%']);
        array.push(['賃金支払日 (例)15日、末日', '%k42%']);
        array.push(['賃金支払方法', '%k43%']);
        array.push(['労使協定に基づき給与から控除する金銭の有無', '%m44%']);
        array.push(['控除する場合の項目名', '%r44%']);
        array.push(['昇給の有無（その契約期間内において）', '%i45%']);
        array.push(['昇給の時期等（例：毎年４月支給日）', '%m45%']);
        array.push(['賞与の有無', '%i46%']);
        array.push(['賞与（例：６月および12月）', '%m46%']);
        array.push(['退職金の有無', '%i47%']);
        array.push(['  ', '%m47%']);
        array.push(['定年制の有無', '%i48%']);
        array.push(['定年制年齢（例）60　※半角数字のみ', '%m48%']);
        array.push(['継続雇用年齢（例）65　※半角数字のみ', '%t48%']);
        array.push(['（例：2か月）', '%p49%']);
        array.push(['（例：14）', '%j51%']);
        array.push(['労災保険の適用', '%j52%']);
        array.push(['雇用保険の適用', '%u52%']);
        array.push(['健康保険の適用', '%j53%']);
        array.push(['厚生年金の適用', '%u53%']);
        array.push(['更新の種類（期間の定め有の場合）', '%l59%']);
        array.push(['更新上限の有無', '%k70%']);
        array.push(['更新上限回数', '%h71%']);
        array.push(['通算契約期間', '%q71%']);
        array.push(['契約期間の末日の翌日（自動計算されます）', '%k75%']);
        array.push(['労働条件変更の有無', '%p76%']);
        array.push(['短時間労働者について雇用管理改善等に関する相談窓口（部署名、担当者職・氏名、連絡先）', '%e85%']);
        array.push(['会社名', '%e89%']);
        array.push(['代表者役職名', '%e90%']);
        array.push(['代表者名', '%e90%']);
        array.push(['①就業場所の変更範囲（転勤の範囲）を記入ください', '%g96%']);
        array.push(['②将来従事すべき業務内容の変更範囲をご記入ください', '%h97%']);
        array.push(['③就業規則を確認できる場所（クラウドのURLや休憩室本棚など）', '%h100%']);
        array.push(['④就業規則の確認方法（データで確認、現物で確認など）', '%d101%']);
        array.push(['個別特記事項', '%c104%']);

        const transposedArray = transposeArray(array);
        // console.log(transposedArray);

        let rowToExtract0 = 0; // 0番目の行を取り出す
        let rowToExtract1 = 1; // 1番目の行を取り出す

        array1 = transposedArray[rowToExtract0];
        array2 = transposedArray[rowToExtract1];

        // //array1とarray2の対応を見るのに使用
        // let array = [array1, array2];
        // for(let j=0; j<array1.length; j++){
        //     console.log(array[0][j] +':' + array[1][j] +':'+j);
        // };

        let element1 = document.getElementsByClassName("kv-element-has-value");

        // //elementのフィールド名を確認するために使用
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

        array3 = replace_array_kanma(array3);
        array3 = replace_array_yen(array1, array3);
        
        sum_array(0, 1);
        sum_array(69, 70);
        sum_array(71, 72);
        sum_array(99, 100);
        
        
        array3[86] = array3[86] + '日';
        
        remove_1word(93);
        remove_1word(83);
        remove_1word(84);
        //2023.03.28修正藤巻
        array3[105] = array3[105].replace(/\n/g, '<br>');
        
        //console.log(array3);

        function remove_1word(fig){
            if(array3[fig].length > 1){
                if(array3[fig]){
                    array3[fig] = array3[fig].slice(0, -1);
                }
            }
        }
        if(array3[94].length > 2){
            if(array3[94]){
                array3[94] = array3[94].slice(0, -3);
            }
        }

        function sum_array(fig1, fig2){
            array3[fig1] = array3[fig1] + '  ' + array3[fig2];
        }

        // console.log(array3);

        //配列を文字列に変更
        let array2_string = array2.join(',');
        let array3_string = array3.join(',');
        LedgerKind = '労働条件通知書';

        //decodedDataに配列を渡す
        //decodedData = decodedData.replace('// JavaScriptコード', 'str1 = "' + array2_string + '";' + 'str2 = "' + array3_string + '";');
        // console.log(decodedData);

        //新しいタブでファイル表示
        let newTab = window.open('', '労働条件通知書', '_blank');
        newTab.sessionStorage.setItem('str1_roudou', array2_string);
        newTab.sessionStorage.setItem('str2_roudou', array3_string);
        newTab.sessionStorage.setItem('LedgerKind', LedgerKind);

        newTab.document.getElementsByTagName('html')[0].innerHTML = decodedData;
        let src_value = newTab.document.getElementsByTagName('script')[0].src;

         let scriptElement = newTab.document.createElement('script');
         scriptElement.src = src_value;
         newTab.document.getElementsByTagName('html')[0].appendChild(scriptElement);

         newTab.oncontextmenu = function () {return false;}
         window.focus();        

    };

    kv.events.view.detail.mounted.push(function (state) {
        //document.querySelector('.content').appendChild(pButton);
        let target = document.getElementsByClassName('content');
        target[0].insertBefore(pButton1,target[0].firstChild);
        target[0].insertBefore(pButton2,target[0].children[1]);
        target[0].insertBefore(pButton3,target[0].children[2]);
        return state;
    });

})();