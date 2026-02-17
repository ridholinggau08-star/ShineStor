
const BBC_DATA=[
 {qty:5000,price:19000,available:true},
 {qty:15000,price:55500,available:true},
 {qty:30000,price:111000,available:false}
];

let APK_DATA = JSON.parse(localStorage.getItem("apkData")) || [
 {name:"AM Premium",duration:"1 Tahun",price:1500,available:true}
];

let selectedBBC=null,selectedAPK=null;
const orderId=Date.now().toString().slice(-6);

function rupiah(n){return "Rp "+n.toLocaleString("id-ID")}

function renderBBC(){
 const l=document.getElementById("bbcList");l.innerHTML="";
 BBC_DATA.forEach(i=>{
  const d=document.createElement("div");
  d.className="choice";
  d.innerHTML=i.qty+" BBC";
  if(!i.available){d.style.opacity=.4}
  d.onclick=()=>{
    if(!i.available)return alert("Stok habis");
    selectedBBC=i;
    document.querySelectorAll("#bbcList .choice").forEach(x=>x.classList.remove("active"));
    d.classList.add("active");
    document.getElementById("bbcPrice").innerText=rupiah(i.price);
  }
  l.appendChild(d);
 })
}

function renderAPK(){
 const l=document.getElementById("apkList");l.innerHTML="";
 APK_DATA.forEach(i=>{
  const d=document.createElement("div");
  d.className="choice";
  d.innerHTML=`<b>${i.name}</b><br><small>${i.duration}</small>`;
  d.onclick=()=>{
    selectedAPK=i;
    document.querySelectorAll("#apkList .choice").forEach(x=>x.classList.remove("active"));
    d.classList.add("active");
    document.getElementById("apkPrice").innerText=rupiah(i.price);
  }
  l.appendChild(d);
 })
}

function orderBBC(){
 if(!selectedBBC)return alert("Pilih BBC");
 window.open("https://wa.me/62895619811574?text="+encodeURIComponent(
  `Order BBC Shine Store\nID:${orderId}\n${selectedBBC.qty} BBC\n${rupiah(selectedBBC.price)}`));
}

function orderAPK(){
 if(!selectedAPK)return alert("Pilih APK");
 window.open("https://wa.me/62895619811574?text="+encodeURIComponent(
  `Order APK Shine Store\nID:${orderId}\n${selectedAPK.name} (${selectedAPK.duration})\n${rupiah(selectedAPK.price)}`));
}

// ADMIN
function toggleAdmin(){
 document.getElementById("adminPanel").classList.toggle("hidden");
}

function addAPK(){
 if(!apkName.value||!apkDuration.value||!apkPrice.value)return alert("Lengkapi data");
 APK_DATA.push({
  name:apkName.value,
  duration:apkDuration.value,
  price:Number(apkPrice.value),
  available:true
 });
 localStorage.setItem("apkData",JSON.stringify(APK_DATA));
 renderAPK();
 apkName.value="";apkDuration.value="";apkPrice.value="";
}

function clearAPK(){
 if(!confirm("Reset semua APK?"))return;
 localStorage.removeItem("apkData");
 APK_DATA=[];
 renderAPK();
}

renderBBC();renderAPK();
