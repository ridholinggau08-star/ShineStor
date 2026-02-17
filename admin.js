
let fail = parseInt(localStorage.getItem("ADMIN_FAIL")||0);
let lock = parseInt(localStorage.getItem("ADMIN_LOCK")||0);

function now(){return Date.now();}

function openAdmin(){
 if(now()<lock){alert("Admin terkunci");return;}
 let pin = localStorage.getItem("ADMIN_PIN");
 if(!pin){
  let np = prompt("Buat PIN Admin");
  if(np && np.length>=4){
    localStorage.setItem("ADMIN_PIN",np);
    show();
  }
  return;
 }
 let ip = prompt("Masukkan PIN");
 if(ip===pin){
  fail=0; localStorage.setItem("ADMIN_FAIL",0);
  show();
 } else {
  fail++; localStorage.setItem("ADMIN_FAIL",fail);
  if(fail>=3){
    localStorage.setItem("ADMIN_LOCK", now()+600000);
    alert("Terkunci 10 menit");
  } else alert("PIN salah");
 }
}

function show(){
 document.getElementById("adminPanel").style.display="block";
}

function changePin(){
 let old = prompt("PIN lama");
 if(old!==localStorage.getItem("ADMIN_PIN")){alert("Salah");return;}
 let np = prompt("PIN baru");
 if(np && np.length>=4){
  localStorage.setItem("ADMIN_PIN",np);
  alert("PIN diubah");
 }
}
