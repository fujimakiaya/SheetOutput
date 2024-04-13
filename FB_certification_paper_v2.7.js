// status_num
// 1.作成者修正
// 2.作成者承認申請
// 3.承認者差し戻し
// 4.承認者承認

(function ()
{
  "use strict";

    let confirm = true;
    let number = 0;
    
   fb.events.confirm.created.push(function (state) {     
        number = 0;
        const field_object = state.record;
        var employeeId = field_object.社員No.value;
        var sei = field_object.姓.value;
        var mei = field_object.名.value;

        function zaisyoku(){
            // if(field_object.状況_在職.value == '承認者承認済'){
            //     var url = 'https://5ea2a167.viewer.kintoneapp.com/public/zaisyoku-employee-14';
            //     url = url + '?employeeId=' + employeeId + '&姓=' + sei + '&名=' + mei + '&帳票種別=在職証明書';
            //     field_object.従業員用KV_在職.value = url;
            // } else {
            //     field_object.従業員用KV_在職.value = '';
            // }

            let table_object = field_object.在職証明書履歴テーブル;
            var last_row = table_object.value.length - 1;
            if(confirm){
                if((last_row != 0) || (table_object.value[last_row].value.送信日_在職証明テーブル.value != '')){
                    document.querySelectorAll('div[data-vv-name="在職証明書履歴テーブル"]')[0].getElementsByClassName('ui circular blue icon button')[0].click();//テーブルに一行追
                    last_row = last_row + 1;
                }
            }
            table_object.value[last_row].value.送信日_在職証明テーブル.value = moment().format('YYYY-MM-DD HH:mm');
            table_object.value[last_row].value.在職証明書作成日_在職テーブル.value = field_object.在職証明書作成日.value;
            table_object.value[last_row].value.在職証明書作成者_在職テーブル.value = field_object.在職証明書作成者.value;
            table_object.value[last_row].value.在職証明書公開承認日_在職テーブル.value = field_object.在職証明書公開承認日.value;
            table_object.value[last_row].value.在職証明書公開承認者_在職テーブル.value = field_object.在職証明書公開承認者.value;
            //table_object.value[last_row].value.承認の有無_在職テーブル.value = field_object.承認の有無_在職.value;
            table_object.value[last_row].value.労働者氏_在職証明テーブル.value = field_object.労働者氏_在籍.value;
            table_object.value[last_row].value.労働者名_在職証明テーブル.value = field_object.労働者名_在籍.value;
            table_object.value[last_row].value.住所_在職証明テーブル.value = field_object.住所_在籍.value;
            table_object.value[last_row].value.生年月日_在職証明テーブル.value = field_object.生年月日_在籍.value;
            table_object.value[last_row].value.入社年月日_在職証明テーブル.value = field_object.入社年月日_在籍.value;
            table_object.value[last_row].value.業務内容_在職証明テーブル.value = field_object.業務内容_在籍.value;
            table_object.value[last_row].value.備考_在職証明テーブル.value = field_object.在職証明書に記載する事項_在籍.value;
            table_object.value[last_row].value.証明書所在地_在職証明テーブル.value = field_object.証明者所在地_在籍.value;
            table_object.value[last_row].value.事業所の名称.value = field_object.事業場の名称_在籍.value;
            table_object.value[last_row].value.代表者名_在職証明テーブル.value = field_object.代表者氏名_在籍.value;
            console.log(last_row);
            return state;
        }

        function meibo() {
            // if(field_object.承認の有無_労働者名簿.value == '承認'){
            //     var url = 'https://5ea2a167.viewer.kintoneapp.com/public/meibo-employee-14';
            //     url = url + '?employeeId=' + employeeId + '&姓=' + sei + '&名=' + mei + '&帳票種別=労働者名簿';
            //     field_object.従業員用KV_労働者名簿.value = url;
            // } else {
            //     field_object.従業員用KV_労働者名簿.value = '';
            // }

            let table_object = field_object.労働者名簿テーブル;
            var last_row = table_object.value.length - 1;
            if(confirm){
                if((last_row != 0) || (table_object.value[last_row].value.送信日_労働者名簿テーブル.value != '')){
                    document.querySelectorAll('div[data-vv-name="労働者名簿テーブル"]')[0].getElementsByClassName('ui circular blue icon button')[0].click();//テーブルに一行追
                    last_row = last_row + 1;
                }
            }
            table_object.value[last_row].value.送信日_労働者名簿テーブル.value = moment().format('YYYY-MM-DD HH:mm');;
            //table_object.value[last_row].value.承認の有無_労働者名簿テーブル.value = field_object.承認の有無_労働者名簿.value;
            table_object.value[last_row].value.労働者氏_労働者名簿テーブル.value = field_object.労働者氏_労働者名簿.value;
            table_object.value[last_row].value.労働者名_労働者名簿テーブル.value = field_object.労働者名_労働者名簿.value;
            table_object.value[last_row].value.労働者セイ_労働者名簿テーブル.value = field_object.労働者セイ_労働者名簿.value;
            table_object.value[last_row].value.労働者メイ_労働者名簿テーブル.value = field_object.労働者メイ_労働者名簿.value;
            table_object.value[last_row].value.性別_労働者名簿テーブル.value = field_object.性別_労働者名簿.value;
            table_object.value[last_row].value.生年月日_労働者名簿テーブル.value = field_object.生年月日_労働者名簿.value;
            table_object.value[last_row].value.入社年月日_労働者名簿テーブル.value = field_object.入社年月日_労働者名簿.value;
            table_object.value[last_row].value.退職または死亡年月日_労働者名簿テーブル.value = field_object.退職又は死亡年月日_労働者名簿.value;
            table_object.value[last_row].value.郵便番号_労働者名簿テーブル.value = field_object.郵便番号_労働者名簿.value;
            table_object.value[last_row].value.住所フリガナ_労働者名簿テーブル.value = field_object.住所フリガナ_労働者名簿.value;
            table_object.value[last_row].value.住所_労働者名簿テーブル.value = field_object.住所_労働者名簿.value;
            table_object.value[last_row].value.電話番号_労働者名簿テーブル.value = field_object.電話番号_労働者名簿.value;
            table_object.value[last_row].value.所属_労働者名簿テーブル.value = field_object.所属_労働者名簿.value;
            table_object.value[last_row].value.職種_労働者名簿テーブル.value = field_object.職種_労働者名簿.value;
            table_object.value[last_row].value.退職又は死亡事由_労働者名簿テーブル.value = field_object.退職または死亡事由_労働者名簿.value;
            table_object.value[last_row].value.備考_労働者名簿テーブル.value = field_object.労働者名簿_備考.value;
            table_object.value[last_row].value.労働者名簿作成日_労働者名簿テーブル.value = field_object.労働者名簿作成日.value;
            table_object.value[last_row].value.労働者名簿作成者_労働者名簿テーブル.value = field_object.労働者名簿作成者.value;
            table_object.value[last_row].value.労働者名簿公開承認日_労働者名簿テーブル.value = field_object.労働者名簿公開承認日.value;
            table_object.value[last_row].value.労働者名簿公開承認者_労働者名簿テーブル.value = field_object.労働者名簿公開承認者.value;
            console.log(last_row);
            return state;
        }

        function jirei(){
            // if(field_object.承認の有無_辞令.value == '承認'){
            //     var url = 'https://5ea2a167.viewer.kintoneapp.com/public/jirei-employee-14';
            //     url = url + '?employeeId=' + employeeId + '&姓=' + sei + '&名=' + mei + '&帳票種別=辞令';
            //     field_object.従業員用KV_辞令.value = url;
            // } else {
            //     field_object.従業員用KV_辞令.value = '';
            // }

            let table_object = field_object.辞令履歴テーブル;
            var last_row = table_object.value.length - 1;
            if(confirm){
                if((last_row != 0) || (table_object.value[last_row].value.送信日_辞令テーブル.value != '')){
                    document.querySelectorAll('div[data-vv-name="辞令履歴テーブル"]')[0].getElementsByClassName('ui circular blue icon button')[0].click();//テーブルに一行追
                    last_row = last_row + 1;
                }
            }
            table_object.value[last_row].value.送信日_辞令テーブル.value = moment().format('YYYY-MM-DD HH:mm');;
            //table_object.value[last_row].value.承認の有無_辞令テーブル.value = field_object.承認の有無_辞令.value;
            table_object.value[last_row].value.労働者氏_辞令テーブル.value = field_object.労働者氏_辞令.value;
            table_object.value[last_row].value.労働者名_辞令テーブル.value = field_object.労働者名_辞令.value;
            table_object.value[last_row].value.辞令日付_辞令テーブル.value = field_object.辞令日付.value;
            table_object.value[last_row].value.辞令の内容_辞令テーブル.value = field_object.辞令の内容.value;
            table_object.value[last_row].value.会社名_辞令テーブル.value = field_object.会社名_辞令.value;
            table_object.value[last_row].value.代表者名_辞令テーブル.value = field_object.代表者氏名_辞令.value;
            table_object.value[last_row].value.辞令作成日_辞令テーブル.value = field_object.辞令作成日.value;
            table_object.value[last_row].value.辞令作成者_辞令テーブル.value = field_object.辞令作成者.value;
            table_object.value[last_row].value.辞令公開承認日_辞令テーブル.value = field_object.辞令公開承認日.value;
            table_object.value[last_row].value.辞令公開承認者_辞令テーブル.value = field_object.辞令公開承認者.value;
            console.log(last_row);
            return state;
        }

        function taisyoku (){
            // if(field_object.承認の有無_退職証明書.value == '承認'){
            //     var url = 'https://5ea2a167.viewer.kintoneapp.com/public/taisyoku-employee-14';
            //     url = url + '?employeeId=' + employeeId + '&姓=' + sei + '&名=' + mei + '&帳票種別=退職証明書';
            //     field_object.従業員用KV_退職証明書.value = url;
            // } else {
            //     field_object.従業員用KV_退職証明書.value = '';
            // }

            let table_object = field_object.退職証明書テーブル;
            var last_row = table_object.value.length - 1;
            if(confirm){
                if((last_row != 0) || (table_object.value[last_row].value.送信日_退職証明テーブル.value != '')){
                    document.querySelectorAll('div[data-vv-name="退職証明書テーブル"]')[0].getElementsByClassName('ui circular blue icon button')[0].click();//テーブルに一行追
                    last_row = last_row + 1;
                }
            }
            table_object.value[last_row].value.送信日_退職証明テーブル.value = moment().format('YYYY-MM-DD HH:mm');;
            //table_object.value[last_row].value.承認の有無_退職テーブル.value = field_object.承認の有無_退職証明書.value;
            table_object.value[last_row].value.労働者氏_退職証明テーブル.value = field_object.労働者氏_退職証明.value;
            table_object.value[last_row].value.労働者名_退職証明テーブル.value = field_object.労働者名_退職証明.value;
            table_object.value[last_row].value.退職日_退職証明テーブル.value = field_object.退職日_退職証明.value;
            table_object.value[last_row].value.証明日_退職証明テーブル.value = field_object.退職証明日.value;
            table_object.value[last_row].value.事業主氏名又は名称_退職証明テーブル.value = field_object.事業主氏名又は名称_退職証明.value;
            table_object.value[last_row].value.使用者職氏名_退職証明テーブル.value = field_object.使用者職氏名_退職証明.value;
            table_object.value[last_row].value.退職理由_退職証明テーブル.value = field_object.離職理由_書面.value;
            table_object.value[last_row].value.その他の理由_退職証明テーブル.value = field_object.具体的な理由_退職証明.value;
            table_object.value[last_row].value.労働者が解雇理由を請求.value = field_object.労働者が解雇理由を請求するか.value;
            table_object.value[last_row].value.退職証明書作成日_退職テーブル.value = field_object.退職証明書作成日.value;
            table_object.value[last_row].value.退職証明書作成者_退職テーブル.value = field_object.退職証明書作成者.value;
            table_object.value[last_row].value.退職証明書公開承認日_退職テーブル.value = field_object.退職証明書公開承認日.value;
            table_object.value[last_row].value.退職証明書公開承認者_退職テーブル.value = field_object.退職証明書公開承認者.value;

            var name2 = field_object.離職理由_書面.value;
            if(name2 == 'あなたの自己都合による退職'){
                field_object.離職理由_転記用.value = 'ア';
            } else if(name2 == '当社の勧奨による退職'){
                field_object.離職理由_転記用.value = 'イ';
            } else if(name2 == '定年による退職'){
                field_object.離職理由_転記用.value = 'ウ';
            } else if(name2 == '契約期間の満了による退職'){
                field_object.離職理由_転記用.value = 'エ';
            } else if(name2 == '移籍出向による退職'){
                field_object.離職理由_転記用.value = 'オ';
            } else if(name2 == 'その他'){
                field_object.離職理由_転記用.value = 'カ';
            } else if(name2 == '解雇'){
                field_object.離職理由_転記用.value = 'キ';
            }
            
            return state;
        }

        function kaiko (){

            // if(field_object.承認の有無_解雇理由証明書.value == '承認'){
            //     var url = 'https://5ea2a167.viewer.kintoneapp.com/public/kaiko-employee-14';
            //     url = url + '?employeeId=' + employeeId + '&姓=' + sei + '&名=' + mei + '&帳票種別=解雇理由証明書';
            //     field_object.従業員用KV_解雇理由証明書.value = url;
            // } else {
            //     field_object.従業員用KV_解雇理由証明書.value = '';
            // }

            let table_object = field_object.解雇理由証明書テーブル;
            var last_row = table_object.value.length - 1;
            if(confirm){
                    if((last_row != 0) || (table_object.value[last_row].value.送信日_解雇理由証明テーブル.value != '')){
                        document.querySelectorAll('div[data-vv-name="解雇理由証明書テーブル"]')[0].getElementsByClassName('ui circular blue icon button')[0].click();//テーブルに一行追
                        last_row = last_row + 1;
                    }
            }
            table_object.value[last_row].value.送信日_解雇理由証明テーブル.value = moment().format('YYYY-MM-DD HH:mm');
            //table_object.value[last_row].value.承認の有無_解雇理由テーブル.value = field_object.承認の有無_解雇理由証明書.value;
            table_object.value[last_row].value.労働者氏_解雇理由証明テーブル.value = field_object.労働者氏_解雇理由.value;
            table_object.value[last_row].value.労働者名_解雇理由証明テーブル.value = field_object.労働者名_解雇理由.value;
            table_object.value[last_row].value.解雇日_解雇理由証明テーブル.value = field_object.解雇日_解雇理由.value;
            table_object.value[last_row].value.証明日_解雇理由証明テーブル.value = field_object.証明日_解雇理由.value;
            table_object.value[last_row].value.事業主氏名又は名称_解雇理由証明テーブル.value = field_object.事業主氏名又は名称_解雇理由.value;
            table_object.value[last_row].value.使用者職氏名_解雇理由証明テーブル.value = field_object.使用者職氏名_解雇理由.value;
            table_object.value[last_row].value.解雇理由_解雇理由証明テーブル.value = field_object.解雇理由.value;
            table_object.value[last_row].value.解雇理由証明書作成日_解雇理由テーブル.value = field_object.解雇理由証明書作成日.value;
            table_object.value[last_row].value.解雇理由証明書作成者_解雇理由テーブル.value = field_object.解雇理由証明書作成者.value;
            table_object.value[last_row].value.解雇理由証明書公開承認日_解雇理由テーブル.value = field_object.解雇理由証明書公開承認日.value;
            table_object.value[last_row].value.解雇理由証明書公開承認者_解雇理由テーブル.value = field_object.解雇理由証明書公開承認者.value;
            var first_name = field_object.解雇理由.value.charAt(0);
            field_object.解雇理由_転記用.value = first_name;
            //console.log(first_name);
            if(first_name == 'ア'){
                field_object.具体的な理由_解雇理由.value = '具体的には、' + field_object['具体的な理由_' + first_name].value + 'によって当社の事業の継続が不可能になったこと。';
            } else if(first_name == 'イ'){
                field_object.具体的な理由_解雇理由.value = '具体的には、当社が' + field_object['具体的な理由_' + first_name].value + 'となったこと。';
            } else if(first_name == 'ウ'){
                field_object.具体的な理由_解雇理由.value = '具体的には、あなたが' + field_object['具体的な理由_' + first_name].value + 'したこと。';
            } else if(first_name == 'エ'){
                field_object.具体的な理由_解雇理由.value = '具体的には、あなたが' + field_object['具体的な理由_' + first_name].value + 'したこと。';
            } else if(first_name == 'オ'){
                field_object.具体的な理由_解雇理由.value = '具体的には、あなたが' + field_object['具体的な理由_' + first_name].value + 'したこと。';
            } else if(first_name == 'カ'){
                field_object.具体的な理由_解雇理由.value = '具体的には、' + field_object['具体的な理由_' + first_name].value + 'による解雇。';
            }
            table_object.value[last_row].value.具体的な理由_解雇理由証明テーブル.value = field_object.具体的な理由_解雇理由.value;
            field_object.具体的な理由_転記用.value = field_object['具体的な理由_' + first_name].value;
            console.log(last_row);
            return state;
            }

        if (state.record.帳票種別.value == '在職証明書'){
                zaisyoku();
                number = 3;
            }else if (state.record.帳票種別.value == '労働者名簿'){
                meibo();
                number = 4;
            }else if (state.record.帳票種別.value == '辞令'){
                jirei();
                number = 2;
            } else if (state.record.帳票種別.value == '退職証明書'){
                taisyoku();
                number = 5;
            } else if(state.record.帳票種別.value == '解雇理由証明書'){
                kaiko();
                number = 6;
            }
        confirm = true;
        return state;
    })

    fb.events.confirm.back.push(function (state) {
        // 確認画面を表示した際にフラグが立つ
        confirm = false;
        })

    fb.events.finish.mounted.push(function (state) {
        console.log(number);
        sessionStorage.setItem('cer_number',number);
        return state;
        })

})();