(function () {
  "use strict";

  let templateJSON = sessionStorage.getItem("template");
  let template_array = JSON.parse(templateJSON);

  const pButton1 = document.createElement("button"); //ボタン生成
  pButton1.style =
    "position: fixed; right:20px; top:40px; height:30px; width:150px;";
  pButton1.innerHTML = "資格証明書印刷";
  pButton1.style.borderRadius = "10px";

  const pButton2 = document.createElement("button"); //ボタン生成
  pButton2.style =
    "position: fixed; right:20px; top:72px; height:30px; width:150px;";
  pButton2.innerHTML = "ウィンドウを閉じる";
  pButton2.style.borderRadius = "10px";

  //Window.close
  pButton2.onclick = function () {
    window.close();
  };

  pButton1.onclick = function shikaku() {
    let decodedData = template_array[7];

    //console.log(decodedData);

    let array = [];
    let array3 = [];

    array.push(["交付年月日", "%h3%"]);
    array.push(["有効期限", "%h4%"]);
    array.push(["保険者番号", "%d6%"]);
    array.push(["保険者名称", "%d7%"]);
    array.push(["保険者所在地", "%d8%"]);
    array.push(["被保険者証記号", "%e9%"]);
    array.push(["被保険者証番号", "%h9%"]);
    array.push(["被保険者セイフリガナ_資格", "%d10%"]);
    array.push(["被保険者メイフリガナ_資格", "%d10%"]);
    array.push(["被保険者のミドルネームカナ_資格", "%d10%"]);
    array.push(["被保険者姓_資格", "%d11%"]);
    array.push(["被保険者名_資格", "%d11%"]);
    array.push(["被保険者のミドルネーム_資格", "%d11%"]);
    array.push(["性別_資格", "%i10%"]);
    array.push(["被保険者生年月日_資格", "%d12%"]);
    array.push(["被保険者住所_資格", "%d13%"]);
    array.push(["資格取得年月日_資格", "%d14%"]);
    array.push(["  ", "%d15%"]); //被扶養者1
    array.push(["  ", "%d16%"]);
    array.push(["  ", "%d17%"]);
    array.push(["  ", "%e17%"]);
    array.push(["  ", "%d18%"]);
    array.push(["  ", "%e18%"]);
    array.push(["  ", "%f15%"]); //被扶養者2
    array.push(["  ", "%f16%"]);
    array.push(["  ", "%f17%"]);
    array.push(["  ", "%g17%"]);
    array.push(["  ", "%f18%"]);
    array.push(["  ", "%g18%"]);
    array.push(["  ", "%h15%"]); //被扶養者3
    array.push(["  ", "%h16%"]);
    array.push(["  ", "%h17%"]);
    array.push(["  ", "%i17%"]);
    array.push(["  ", "%h18%"]);
    array.push(["  ", "%i18%"]);
    array.push(["  ", "%d19%"]); //被扶養者4
    array.push(["  ", "%d20%"]);
    array.push(["  ", "%d21%"]);
    array.push(["  ", "%e21%"]);
    array.push(["  ", "%d22%"]);
    array.push(["  ", "%e22%"]);
    array.push(["  ", "%f19%"]); //被扶養者5
    array.push(["  ", "%f20%"]);
    array.push(["  ", "%f21%"]);
    array.push(["  ", "%g21%"]);
    array.push(["  ", "%f22%"]);
    array.push(["  ", "%g22%"]);
    array.push(["  ", "%h19%"]); //被扶養者6
    array.push(["  ", "%h20%"]);
    array.push(["  ", "%h21%"]);
    array.push(["  ", "%i21%"]);
    array.push(["  ", "%h22%"]);
    array.push(["  ", "%i22%"]);
    array.push(["資格証明書発行理由", "%d23%"]);
    array.push(["交付年月日", "%b29%"]);
    array.push(["会社所在地_資格", "%f30%"]);
    array.push(["会社名_資格", "%f32%"]);
    array.push(["代表役職名_資格", "%e32%"]);
    array.push(["代表者名_資格", "%e32%"]);

    function transposeArray(originalArray) {
      // 元の行と列の長さを取得
      const originalRows = originalArray.length;
      const originalCols = originalArray[0].length;

      // 新しい行と列の長さを逆にして新しい二次元配列を作成
      const transposedArray = Array.from({ length: originalCols }, () => []);

      // 元の二次元配列の要素を逆に配置して新しい二次元配列に格納
      for (let i = 0; i < originalCols; i++) {
        for (let j = 0; j < originalRows; j++) {
          transposedArray[i][j] = originalArray[j][i];
        }
      }

      return transposedArray;
    }

    const transposedArray = transposeArray(array);
    // console.log(transposedArray);

    let rowToExtract0 = 0; // 0番目の行を取り出す
    let rowToExtract1 = 1; // 1番目の行を取り出す

    let array1 = transposedArray[rowToExtract0];
    let array2 = transposedArray[rowToExtract1];

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
    for (let j = 0; j < element1.length; j++) {
      let found = false;
      let elementText = element1[j].firstElementChild.innerText;
      let i;
      for (i = 0; i < array1.length; i++) {
        if (elementText == array1[i]) {
          array3[i] = element1[j].lastElementChild.innerText;
          found = true;
        }
      }
      if (!found) {
        array3[i] = "";
      }
    }

    let element2 = document.getElementsByTagName("table");
    let table1 = element2[0].children[1];
    let tr1 = table1.children;
    for (let i = 0; i < tr1.length; i++) {
      array3[18 + i * 6] = tr1[i].children[0].innerText;
      array3[17 + i * 6] = tr1[i].children[1].innerText;
      array3[19 + i * 6] = tr1[i].children[2].innerText;
      array3[20 + i * 6] = tr1[i].children[3].innerText;
      array3[21 + i * 6] = tr1[i].children[4].innerText;
      array3[22 + i * 6] = tr1[i].children[5].innerText;
      date_array(19 + i * 6);
      date_array(21 + i * 6);
    }

    date_array(0);
    date_array(1);
    date_array(14);
    date_array(16);
    date_array(54);

    sum_array3(7, 8, 9);
    sum_array3(10, 11, 12);
    sum_array2(57, 58);

    //日付を2024-01-01から2024年1月1日へ変更
    function date_array(fig) {
      if (array3[fig]) {
        let originalDateString = array3[fig];
        let originalDate = new Date(originalDateString);

        let year = originalDate.getFullYear();
        let month = originalDate.getMonth() + 1;
        let day = originalDate.getDate();
        let formattedDate = year + "年" + month + "月" + day + "日";

        array3[fig] = formattedDate;
      }
    }

    function sum_array3(fig1, fig2, fig3) {
      array3[fig1] = array3[fig1] + array3[fig2] + " " + array3[fig3];
    }

    function sum_array2(fig1, fig2) {
      array3[fig1] = array3[fig1] + "  " + array3[fig2];
    }

    array3[array3.length] = "0";
    // console.log(array3);
    // console.log([array1, array3])

    //配列を文字列に変更
    let array2_string = array2.join(",");
    let array3_string = array3.join(",");

    //decodedDataに配列を渡す
    decodedData[1] = decodedData[1].replace(
      "// JavaScriptコード",
      'str1 = "' + array2_string + '";' + 'str2 = "' + array3_string + '";'
    );

    //新しいタブでファイル表示
    let newTab = window.open("", "資格証明書", "_blank");
    newTab.sessionStorage.setItem("str1", array2_string);
    newTab.sessionStorage.setItem("str2", array3_string);
    // console.log(decodedData);

    newTab.document.getElementsByTagName("html")[0].innerHTML = decodedData[1];
    let src_value = newTab.document.getElementsByTagName("script")[0].src;

    let scriptElement = newTab.document.createElement("script");
    scriptElement.src = src_value;
    newTab.document.getElementsByTagName("html")[0].appendChild(scriptElement);

    newTab.oncontextmenu = function () {
      return false;
    };
    window.focus();
  };

  kv.events.view.detail.mounted.push(function (state) {
    //document.querySelector('.content').appendChild(pButton);
    let target = document.getElementsByClassName("content");
    target[1].insertBefore(pButton1, target[1].firstChild);
    target[1].insertBefore(pButton2, target[0].children[1]);
    return state;
  });
})();
