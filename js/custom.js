document.getElementById('trigger').onclick = function() {
    var herzchen = ' \u2764'
    var herzchenString = "";
    var anzahlHerzchen = document.getElementById('inputH').value;

    for (var j = 0; j < anzahlHerzchen; j++){
      herzchenString += herzchen;
    }
    var list = document.createElement("ul");
    document.getElementById("target").appendChild(list);
    list.innerText = herzchenString;
    list.appendChild(listItem);
    /*
    for (var i = 2; i < 10; i++) {
      var text = "Hallo Mona hier sind " + i + '';
      var listItem = document.createElement("li");
      listItem.innerText = text;
      list.appendChild(listItem);
    }
    */
  }