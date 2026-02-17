
const bbcBase = 5000;      // 5K BBC
const priceBase = 19000;  // Rp19.000
const maxMultiple = 10;   // sampai 50K

const bbcList = document.getElementById("bbcList");

for(let i=1;i<=maxMultiple;i++){
 const bbc = bbcBase * i;
 const harga = priceBase * i;

 bbcList.innerHTML += `
  <div class="card">
    <h3>BBC ${bbc/1000}K</h3>
    <p class="harga">Rp${harga.toLocaleString("id-ID")}</p>
    <button onclick="orderWA('BBC ${bbc/1000}K','Rp${harga.toLocaleString("id-ID")}')">
      Order
    </button>
  </div>
 `;
}

function orderWA(nama,harga){
 window.open(
  "https://wa.me/62895619811574?text="+encodeURIComponent(
   "Halo admin Shine Store\n"+
   "Order: "+nama+"\n"+
   "Harga: "+harga
  ),"_blank"
 );
}
