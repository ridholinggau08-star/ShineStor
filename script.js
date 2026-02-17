
const BBC_DATA=[
 {qty:5000,price:19000,available:true},
 {qty:15000,price:55500,available:true,limited:true},
 {qty:30000,price:111000,available:false}
];

const APK_DATA=[
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
  if(i.limited) d.classList.add("limited");
  d.innerHTML=i.qty+" BBC";
  if(!i.available){d.style.opacity=.4}
  d.onclick=()=>{
    if(!i.available)return alert("Stok habis");
    selectedBBC=i;
    document.querySelectorAll("#bbcList .choice").forEach(x=>x.classList.remove("active"));
    d.classList.add("active");
    document.getElementById("bbcPrice").innerText=rupiah(i.price);
    showStruk("BBC",i.qty+" BBC",i.price);
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
    showStruk("APK",i.name+" - "+i.duration,i.price);
  }
  l.appendChild(d);
 })
}

function showStruk(type,product,price){
 const s=document.getElementById("struk");
 s.innerHTML=`<b>Struk Mini</b><br>ID Order: ${orderId}<br>Produk: ${product}<br>Harga: ${rupiah(price)}<br>Status: Menunggu Admin`;
 s.classList.remove("hidden");
}

function orderBBC(){
 if(!selectedBBC)return alert("Pilih BBC");
 sendWA(`Order BBC Shine Store\nID: ${orderId}\n${selectedBBC.qty} BBC\n${rupiah(selectedBBC.price)}`);
}

function orderAPK(){
 if(!selectedAPK)return alert("Pilih APK");
 sendWA(`Order APK Premium Shine Store\nID: ${orderId}\n${selectedAPK.name} (${selectedAPK.duration})\n${rupiah(selectedAPK.price)}`);
}

function sendWA(msg){
 window.open("https://wa.me/62895619811574?text="+encodeURIComponent(msg));
}

renderBBC();renderAPK();
