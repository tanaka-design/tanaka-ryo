$("#aiueo").on('click',function() {
    // 判定用の箱を用意する
    var nameCheck = 0;
    var passCheck = 0;
    /////////////////////
  
    // それぞれのテキストボックスの中身を判定用の箱に入れる
    nameCheck = $("#name").val();
    passCheck = $("#pass").val();
    //////////////////////////////////////////////////
  
    // 判定処理 ""が文字列の空　&&はどちらも満たす場合　||はどちらかを満たす場合
    if(nameCheck!="" && passCheck!=""){
      window.location.href = "confilm.html";
    }else{
      alert("入力してください");
    }
  });

$("#signuper").on('click',function() {
  // 判定用の箱を用意する
  var onamecheck = 0;
  var phonecheck = 0;
  var postcheck = 0;
  var prefecturecheck = 0;
  var addresscheck = 0;
  var radiocheck = 0;
  /////////////////////

  onamecheck = $("#oname").val();
  phonecheck = $("#phone").val();
  postcheck = $("#post").val();
  prefecturecheck = $("#prefecture").val();
  addresscheck = $("#address").val();
  radiocheck = $("#radio").val();

  if(onamecheck!="" && phonecheck!="" && postcheck!="" && 
    prefecturecheck!="" && addresscheck!="" && radiocheck!=""){
      window.location.href = "confilm.html";
    }else{
      alert("入力してください");
    }
  });

$("#mailerbutton").on('click',function() {
  var mailercheck = 0;
  var mailtextareacheck = 0;

  mailercheck = $("#mailer").val();
  mailtextareacheck = $("#mailtextarea").val();

  if(mailercheck!="" && mailtextareacheck!=""){
    window.location.href = "zyuutaku.html";
  }else{
    alert("入力してください");
  }
});

$("#namaesousin").on('click',function() {
  var namaecheck = 0;
  var namaetextareacheck = 0;

  namaecheck = $("#namae").val();
  namaetextareacheck = $("#namaetextarea").val();

  if(namaecheck!="" && namaetextareacheck!=""){
    window.location.href = "situmon.html";
  }else{
    alert("入力してください");
  }
});