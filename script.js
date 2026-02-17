
const BBC_DATA=[
 {qty:5000,price:19000,available:true},
 {qty:15000,price:55500,available:true},
 {qty:30000,price:111000,available:false}
];

const APK_DATA=[
 {name:"AM Premium",duration:"1 Tahun",price:1500,available:true}
];

let selectedBBC=null,selectedAPK=null;

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
  d.innerHTML=i.duration;
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
 const msg=`Order BBC Shine Store
Nominal: ${selectedBBC.qty} BBC
Harga: ${rupiah(selectedBBC.price)}`;
 window.open("https://wa.me/62895619811574?text="+encodeURIComponent(msg));
}

function orderAPK(){
 if(!selectedAPK)return alert("Pilih APK");
 const msg=`Order APK Premium Shine Store
Produk: ${selectedAPK.name}
Durasi: ${selectedAPK.duration}
Harga: ${rupiah(selectedAPK.price)}`;
 window.open("https://wa.me/62895619811574?text="+encodeURIComponent(msg));
}

renderBBC();renderAPK();
