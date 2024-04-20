(function ()
{
  "use strict";

    //let confirm = true;
    var employeeId = '';
    var sei = '';
    var mei = '';    
    var date = '';    

    fb.events.form.mounted.push(function (state) {
        const field_object = state.record;

        let array = document.querySelectorAll('div[data-vv-name="被扶養者テーブル"]')[0].getElementsByClassName('ui circular orange icon button');
        for(var i = 0; i < 10; i++){
           if(array.length > 0){
               array[0].click();
           }
        }
        if(field_object.入社年月日.value){
            field_object.資格取得年月日.value = field_object.入社年月日.value;
            field_object.交付年月日.value = field_object.入社年月日.value;
        }
        field_object.kviewer_lookup.value = '株式会社アメロイド';
        const lookupLink =  document.getElementsByClassName("el-input-group__append")[0].getElementsByTagName("i")[0];
        lookupLink.click();

       return state;
    })

    fb.events.form.confirm.push(function (state) {    

        const field_object = state.record;

        huyou();
        employeeId = field_object.社員No.value;
        sei = field_object.姓戸籍.value;
        mei = field_object.名戸籍.value;
        date = field_object.資格取得年月日.value;

        function huyou(){
            if(field_object.姓1.value != ''){
                document.querySelectorAll('div[data-vv-name="被扶養者テーブル"]')[0].getElementsByClassName('ui circular blue icon button')[0].click();

                let table_object = field_object.被扶養者テーブル;
                var last_row = table_object.value.length - 1;
                var name1 = field_object.姓1.value + field_object.配偶者のミドルネーム.value + ' ' + field_object.名1.value;
                var furigana1 = field_object.セイ1.value + field_object.配偶者ミドルネームカナ.value + ' ' + field_object.メイ1.value;
                table_object.value[last_row].value.氏名_被扶養者.value = name1;
                table_object.value[last_row].value.氏名フリガナ_被扶養者.value = furigana1;
                table_object.value[last_row].value.生年月日_被扶養者.value = field_object.生年月日1.value;
                table_object.value[last_row].value.性別_被扶養者.value = field_object.配偶者性別.value;
                table_object.value[last_row].value.被扶養者になった日_被扶養者.value = field_object.扶養になった日社保.value;
                table_object.value[last_row].value.続柄_被扶養者.value = field_object.配偶者続柄.value;
            }}

            
            huyou_num(2);
            huyou_num(3);
            huyou_num(4);
            huyou_num(5);
            huyou_num(6);
    
            function huyou_num(num){
                if(field_object['姓' + num].value != ''){
                    document.querySelectorAll('div[data-vv-name="被扶養者テーブル"]')[0].getElementsByClassName('ui circular blue icon button')[0].click();
    
                    let table_object = field_object.被扶養者テーブル;
                    var last_row = table_object.value.length - 1;
                    var name_hu = field_object['姓' + num].value + field_object['ミドルネーム' + num].value + ' ' + field_object['名' + num].value;
                    var furigana = field_object['セイ' + num].value + field_object['ミドルネームカナ' + num].value + ' ' + field_object['メイ' + num].value;
                    table_object.value[last_row].value.氏名_被扶養者.value = name_hu;
                    table_object.value[last_row].value.氏名フリガナ_被扶養者.value = furigana;
                    table_object.value[last_row].value.生年月日_被扶養者.value = field_object['生年月日' + num].value;
                    table_object.value[last_row].value.性別_被扶養者.value = field_object['性別' + num].value;
                    table_object.value[last_row].value.被扶養者になった日_被扶養者.value = field_object['扶養になった日' + num + '社保'].value;
                    table_object.value[last_row].value.続柄_被扶養者.value = field_object['続柄' + num].value;
                }
            }
            
            return state;
        })

})();