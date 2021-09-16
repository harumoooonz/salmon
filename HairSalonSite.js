// Google Map API
function initMap() {

  const MyLatLng = new google.maps.LatLng(35.6811673, 139.7670516,false);
  const Options = {
   zoom: 15,      //地図の縮尺値
   center: MyLatLng,    //地図の中心座標
   mapTypeId: 'roadmap'   //地図の種類
  };
  const map = new google.maps.Map(document.getElementById('access-map'), Options);

  console.log("123")
}

// スライドメニューボタンの切り替え
$('.burgermenu').on("click",function(e){
  console.log("12")

  $('.header-ul').toggleClass('isActive');
});


// フォーム入力確認アラート
$(function(){
  $('.submit-button').click(function(){
    const confirmName = $('input.formname').val();
    const confirmMail = $('input.formmail').val();
    const confirmTel = $('input.formtel').val();
    const confirmDate = $('input.monthdate').val();
    const confirmTime = $(':radio[name=example]:checked').val();
    alert("<以下の内容で予約しますか？>\n\n"
    +"名前：" +confirmName +"\n"
    + "メール：" + confirmMail + "\n"
    + "電話番号：" + confirmTel + "\n"
    + "日にち：" + confirmDate + "\n"
    + "時間：" + confirmTime
    );
  });
});


// フォーム入力後のページ

// ボタンを取得する
// const confirm = document.getElementsClassName("submit-button");
// confirm.addEventListener("click",function(){
//
// })
// クリックイベントをつける
// クリックしたら
