"use strict";

display1 = document.getElementById('display1');
display2 = document.getElementById('display2');
display3 = document.getElementById('display3');
display4 = document.getElementById('display4');

function checkDKbao() {
  var bao = "";
  var baodk = document.querySelectorAll('input[type = checkbox]:checked');

  for (var i = 0; i < baodk.length; ++i) {
    bao += baodk[i].value;
  }

  if (bao == "") {
    display1.innerHTML = "Ban phai chon 1 cai !";
    return false;
  } else {
    display1.innerHTML = "";
    return true;
  }
}

function kihan() {
  var dongia = document.getElementById('choose').value;
  document.getElementById('thanhtien').value = dongia;
}

function checkTTLL() {
  var ttll = document.getElementById('ttll').value;
  var regex = /^[A-za-z]+[\sA-za-z0-9]*$/;

  if (regex.test(ttll)) {
    display2.innerHTML = "";
    return true;
  } else {
    display2.innerHTML = "Ban Nhap sai !";
    return false;
  }
}

function checkSDT() {
  var sdt = document.getElementById('sdt').value;
  var regex = /^(07|08|09)[0-9]{8}$/;

  if (regex.test(sdt)) {
    display3.innerHTML = "";
    return true;
  } else {
    display3.innerHTML = "Ban nhap sai!";
    return false;
  }
}

function checkDC() {
  var dc = document.getElementById('address').value;
  var regex = /^[0-9]+[A-Za-z]+(\s*A-Za-z0-9)*$/;

  if (regex.test(dc)) {
    display4.innerHTML = "";
    return true;
  } else {
    display4.innerHTML = "Ban nhap sai!";
    return false;
  }
}

function Tongtien(data) {
  var dongia = document.getElementById('choose').value;
  var thanhtien = dongia * data;
  return thanhtien;
}

function getForm() {
  if (checkDKbao() && checkDC() && checkSDT() && checkTTLL()) {
    var temp = 0;
    var bao = "";
    var dkbao = document.querySelectorAll('input[type = checkbox ]:checked');

    for (var i = 0; i < dkbao.length; ++i) {
      bao += dkbao[i].value;
      temp++;
    }

    var stt = document.getElementsByTagName('tr').length; // var kihan = document.getElementById('choose').value;

    var kihantemp = document.getElementById('choose');
    var op = choose.options[choose.selectedIndex];
    var kihan = op.text;
    var ttll = document.getElementById('ttll').value;
    var dc = document.getElementById('address').value;
    var tongtien = Tongtien(temp);
    var httt = document.querySelector('input[type = radio]:checked').value;
    var row = table.insertRow(-1);
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
    var col4 = row.insertCell(3);
    var col5 = row.insertCell(4);
    var col6 = row.insertCell(5);
    var col7 = row.insertCell(6);
    col1.innerHTML = stt;
    col2.innerHTML = bao;
    col3.innerHTML = kihan;
    col4.innerHTML = ttll;
    col5.innerHTML = dc;
    col6.innerHTML = tongtien;
    col7.innerHTML = httt;
  }
}