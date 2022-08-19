$("#sign").on('click',function() {
  // 判定用の箱を用意する
  var onamecheck = 0;
  var phonecheck = 0;
  var postcheck = 0;
  var addresscheck = 0;
  /////////////////////

  onamecheck = $("#oname").val();
  phonecheck = $("#phone").val();
  postcheck = $("#post").val();
  addresscheck = $("#address").val();

  if(onamecheck!="" && phonecheck!="" && postcheck!="" && 
     addresscheck!="" ){
      window.location.href = "saigo.html";
    }else{
      alert("入力してください");
    }
  });




  $("#sign2").on('click',function() {
    var namecheck = 0;
    var phonecheck = 0;

    namecheck =$('#name').val();
    phonecheck =$('#address').val();

    if(namecheck!="" && phonecheck!=""){
      window.location.href = "saigo.html";
    }else{
      alert("入力してください");
    }
  });
