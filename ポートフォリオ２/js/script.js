$("#inu").on('click',function() {
    var name1check = 0;
    var mail1check = 0;
    var day1check = 0;
    var people1check = 0;
    var seat1check = 0;

    name1check = $("#name1f").val();
    mail1check = $("#mail1").val();
    day1check = $("#day1").val();
    people1check = $("#people1").val();
    seat1check = $("#seat1").val();

    if(name1check!="" && mail1check!="" && day1check!="" &&
        people1check!="" && seat1check!=""){
            window.location.href = "../confilm.html";
        }else{
            alert("入力してください");
        }
});