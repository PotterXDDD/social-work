function myFunction() {
    var checkBox = document.getElementById("check");
    var text = document.getElementById("text1");
    var text1 = document.getElementById("text2");
    if (checkBox.checked == true){
        text.style.display = "none";
        text1.style.display = "none";
    } else if (checkBox.checked == false){
       text.style.display = "block";
      text1.style.display = "block";
    }
  }