
const bbcList = [
 {qty:5000, price:19000, stock:true},
 {qty:15000, price:40500, stock:true},
 {qty:30000, price:81000, stock:false},
];

const select = document.getElementById("bbcSelect");
bbcList.forEach((b,i)=>{
  const opt = document.createElement("option");
  opt.value=i;
  opt.textContent = b.stock ? `${b.qty} BBC - Rp${b.price}` : `${b.qty} BBC - HABIS`;
  opt.disabled = !b.stock;
  select.appendChild(opt);
});

function orderBBC(){
 const b = bbcList[select.value];
 const msg = `Order BBC %0A${b.qty} BBC%0AHarga: Rp${b.price}`;
 window.open(`https://wa.me/62895619811574?text=${msg}`);
}

const apk = [
 {name:"Alight Motion 1 Tahun", price:1500},
 {name:"CapCut 7 Hari", price:1200},
 {name:"CapCut 14 Hari", price:1500},
];

const apkBox = document.getElementById("apkList");
apk.forEach(a=>{
 const d = document.createElement("div");
 d.className="apk";
 d.innerHTML = `<b>${a.name}</b><br>Rp${a.price}<br>
 <button onclick="orderApk('${a.name}',${a.price})">Order</button>`;
 apkBox.appendChild(d);
});

function orderApk(n,p){
 const msg = `Order APK%0A${n}%0AHarga: Rp${p}`;
 window.open(`https://wa.me/62895619811574?text=${msg}`);
}
