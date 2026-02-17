
const WA = "62895619811574";

const bbcList = [
 {qty:5000, price:19000, stock:true},
 {qty:15000, price:40500, stock:true},
 {qty:30000, price:81000, stock:false},
];

const select = document.getElementById("bbcSelect");
bbcList.forEach((b,i)=>{
 const opt = document.createElement("option");
 opt.value=i;
 opt.textContent = b.stock ? `${b.qty} BBC - Rp${b.price}` : `${b.qty} BBC - STOCK HABIS`;
 opt.disabled = !b.stock;
 select.appendChild(opt);
});

function orderBBC(){
 const b = bbcList[select.value];
 if(!b) return;
 const msg = `Order BBC%0A${b.qty} BBC%0AHarga: Rp${b.price}`;
 window.open(`https://wa.me/${WA}?text=${msg}`);
}

const apk = [
 {name:"Alight Motion 1 Tahun", price:1500},
 {name:"CapCut 7 Hari", price:1200},
 {name:"CapCut 14 Hari", price:1500},
 {name:"CapCut 21 Hari", price:1800},
 {name:"CapCut 28 Hari", price:2200},
 {name:"CapCut 35 Hari", price:2900},
 {name:"CapCut 42 Hari", price:3500},
];

const box = document.getElementById("apkList");
apk.forEach(a=>{
 const d = document.createElement("div");
 d.className="apk";
 d.innerHTML = `<b>${a.name}</b><br>
 Rp${a.price}<br>
 <button onclick="orderAPK('${a.name}',${a.price})">Order</button>`;
 box.appendChild(d);
});

function orderAPK(n,p){
 const msg = `Order APK Premium%0A${n}%0AHarga: Rp${p}`;
 window.open(`https://wa.me/${WA}?text=${msg}`);
}
