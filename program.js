$(function () {
  var a, b, c;

  function save() {
    localStorage.setItem("Sample", JSON.stringify([a,b,c]));
  }

  function load() {
    var x = JSON.parse(localStorage.getItem("Sample"));
    a = x[0];
    b = x[1];
    c = x[2];
    $("#num1").val(a);
    $("#num2").val(b);
    $("#hyouji").html(c);
  }

function changeBoxColor( newColor ) {
    document.getElementById('#hyouji1').style.backgroundColor = newColor;
}

<p>
    <input type="button" class="calbutton" id="plus" onclick="changeBoxColor('#ff0000');">
    <input button type="button" class="calbutton" id="minus" onclick="changeBoxColor('#ccffcc');">
</p>

  if(localStorage.getItem("Sample")) {
    load();
  }
});