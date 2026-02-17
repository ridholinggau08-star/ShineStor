
const apkPremium = [
  { nama:"Alight Motion 1 Tahun", harga:"Rp1.500", stock:true },
  { nama:"CapCut Pro 7 Hari", harga:"Rp1.200", stock:true },
  { nama:"CapCut Pro 14 Hari", harga:"Rp1.500", stock:false }
];

const apkList = document.getElementById("apkList");

apkPremium.forEach(apk=>{
 apkList.innerHTML += `
  <div class="card" data-stock="${apk.stock}">
    <h3>${apk.nama}</h3>
    <p class="harga">${apk.harga}</p>
    ${
      apk.stock
      ? `<button onclick="orderWA('${apk.nama}','${apk.harga}')">Order</button>`
      : `<button disabled>Stock Habis</button>`
    }
  </div>`;
});

function orderWA(produk,harga){
 const id="SS-"+Math.floor(100000+Math.random()*900000);
 document.getElementById("strukProduk").innerText=produk;
 document.getElementById("strukHarga").innerText=harga;
 document.getElementById("strukId").innerText=id;
 document.getElementById("strukMini").style.display="block";
 setTimeout(()=>{
  window.open("https://wa.me/62895619811574?text="+encodeURIComponent(
   "Halo admin Shine Store\nOrder: "+produk+"\nHarga: "+harga+"\nID Order: "+id
  ),"_blank");
 },2000);
 setTimeout(()=>{
  document.getElementById("strukMini").style.display="none";
 },5000);
}
