const slideLeft = document.querySelector(".left"); //ปุ่มเลื่อนซ้าย
const slideRight = document.querySelector(".right"); //ปุ่มเลื่อนขวา
const showPd = document.getElementById("pd-img"); //สินค้าที่แสดง
const boxShow = document.querySelector(".box-show"); //background สินค้า

const pink = document.querySelector(".btn-pink");
const yellow = document.querySelector(".btn-yellow");
const purple = document.querySelector(".btn-purple");
const addCart = document.querySelector(".addCart");

const listPd = document.querySelector(".list-product");
const total = document.querySelector(".total");
var pdItemImg = [
  "./img/pd-green.png",
  "./img/pd-pink.png",
  "./img/pd-yellow.png",
  "./img/pd-purple.png",
];
var pdItembg = ["#b5e4d0", "#efa9dd", "#fef08d", "#a1b4ff"];
var pdName = ["Mint", "Rosewood", "Banana", "Raspberry"];
var count = 0;

function back() {
  if (count > -1) {
    if (count == 0) {
      count = pdItemImg.length - 1;
      showPd.src = pdItemImg[count];
      boxShow.style.background = pdItembg[count];
    } else if (count != 0) {
      count--;
      showPd.src = pdItemImg[count];
      boxShow.style.background = pdItembg[count];
    }
  }
}

function next() {
  if (count < pdItemImg.length) {
    if (count == pdItemImg.length - 1) {
      count = 0;
      showPd.src = pdItemImg[count];
      boxShow.style.background = pdItembg[count];
    } else if (count != pdItemImg.length - 1) {
      count++;
      showPd.src = pdItemImg[count];
      boxShow.style.background = pdItembg[count];
    }
  }
}

slideLeft.addEventListener("click", back);
slideRight.addEventListener("click", next);
pink.addEventListener("click", () => {
  count = 1;
  showPd.src = pdItemImg[count];
  boxShow.style.background = pdItembg[count];
});
yellow.addEventListener("click", () => {
  count = 2;
  showPd.src = pdItemImg[count];
  boxShow.style.background = pdItembg[count];
});
purple.addEventListener("click", () => {
  count = 3;
  showPd.src = pdItemImg[count];
  boxShow.style.background = pdItembg[count];
});

var countpd = [1, 1, 1, 1];
var checkpd = [0, 0, 0, 0];
var price = 55;
var sum = 0;

function AddCart() {
  var pd = document.createElement("div");
  var __pd = document.createElement("div");
  var pd__ = document.createElement("div");
  var pd__img = document.createElement("img");
  var pd__name = document.createElement("p");
  var pdAdd = document.createElement("div");
  var divprice = document.createElement("div");

  if (checkpd[count] == 0) {
    pd.className = "pd";
    pd__.className = "pd--";
    pd__img.src = pdItemImg[count];
    pd__name.className = "pd-name";
    pd__name.innerHTML =
      pdName[count] + "<br/>" + "<span>" + "candy" + "</span>";

    __pd.className = "--pd";
    //
    pdAdd.className = "pd-add";
    pdAdd.innerHTML = `
    <button class='down' id="down_${count}">-</button>
    <span class='countnum_${count}'>${countpd[count]}</span>
    <button class='up' id="up_${count}">+</button>`;
    //
    divprice.className = "price";
    divprice.innerHTML = `<span class='pd_price${count}'>${
      countpd[count] * price
    }</span> ฿`;
    //
    pd.appendChild(pd__);
    pd.appendChild(__pd);
    pd__.appendChild(pd__img);
    pd__.appendChild(pd__name);
    __pd.appendChild(pdAdd);
    __pd.appendChild(divprice);
    listPd.appendChild(pd);
    listPd.appendChild(document.createElement("hr"));
    //
    sum = sum + 1;
    // total.innerHTML = sum;

    checkpd[count] = 1;
    countpd[count]++;
  } else if (checkpd[count] == 1) {
    document.querySelector(".countnum_" + count).innerText = countpd[count];
    document.querySelector(".pd_price" + count).innerText =
      countpd[count] * price;
    countpd[count] * price;
    if (countpd[count] > 1) {
      sum = sum + 1;
    }
    // total.innerHTML = sum;
    total.innerHTML = sum * price + " ";
    countpd[count]++;
  }
}

function up_0() {
  document.querySelector(".countnum_" + 0).innerHTML = countpd[0];
  document.querySelector(".pd_price" + 0).innerHTML = countpd[0] * price;

  if (countpd[0] > 1) {
    sum = sum + 1;
  }

  // total.innerHTML = sum;
  total.innerHTML = sum * price + " ";
  countpd[0]++;
}

function up_1() {
  document.querySelector(".countnum_" + 1).innerHTML = countpd[1];
  document.querySelector(".pd_price" + 1).innerHTML = countpd[1] * price;

  if (countpd[1] > 1) {
    sum = sum + 1;
  }
  total.innerHTML = sum * price + " ";
  // total.innerHTML = sum;
  countpd[1]++;
}

function up_2() {
  document.querySelector(".countnum_" + 2).innerHTML = countpd[2];
  document.querySelector(".pd_price" + 2).innerHTML = countpd[2] * price;

  if (countpd[2] > 1) {
    sum = sum + 1;
  }
  total.innerHTML = sum * price + " ";
  countpd[2]++;
}
function up_3() {
  document.querySelector(".countnum_" + 3).innerHTML = countpd[3];
  document.querySelector(".pd_price" + 3).innerHTML = countpd[3] * price;

  if (countpd[3] > 1) {
    sum = sum + 1;
  }
  total.innerHTML = sum * price + " ";
  countpd[3]++;
}

function down_0() {
  document.querySelector(".countnum_" + 0).innerHTML =
    parseInt(document.querySelector(".countnum_" + 0).textContent) - 1;
  document.querySelector(".pd_price" + 0).innerHTML =
    parseInt(document.querySelector(".countnum_" + 0).textContent) * price;

  if (countpd[0] > 1) {
    sum = sum - 1;
  }
  total.innerHTML = sum * price + " ";
  // total.innerHTML = sum;
  countpd[0]--;
}
function down_1() {
  document.querySelector(".countnum_" + 1).innerHTML =
    parseInt(document.querySelector(".countnum_" + 1).textContent) - 1;
  document.querySelector(".pd_price" + 1).innerHTML =
    parseInt(document.querySelector(".countnum_" + 1).textContent) * price;

  if (countpd[1] > 1) {
    sum = sum - 1;
  }
  total.innerHTML = sum * price + " ";
  // total.innerHTML = sum;
  countpd[1]--;
}
function down_2() {
  document.querySelector(".countnum_" + 2).innerHTML =
    parseInt(document.querySelector(".countnum_" + 2).textContent) - 1;
  document.querySelector(".pd_price" + 2).innerHTML =
    parseInt(document.querySelector(".countnum_" + 2).textContent) * price;

  if (countpd[2] > 1) {
    sum = sum - 1;
  }
  total.innerHTML = sum * price + " ";
  // total.innerHTML = sum;
  countpd[2]--;
}
function down_3() {
  document.querySelector(".countnum_" + 3).innerHTML =
    parseInt(document.querySelector(".countnum_" + 3).textContent) - 1;
  document.querySelector(".pd_price" + 3).innerHTML =
    parseInt(document.querySelector(".countnum_" + 3).textContent) * price;

  if (countpd[3] > 1) {
    sum = sum - 1;
  }
  total.innerHTML = sum * price + " ";
  // total.innerHTML = sum;
  countpd[3]--;
}

var checkupdown_0 = 0;
var checkupdown_1 = 0;
var checkupdown_2 = 0;
var checkupdown_3 = 0;

function addupdown() {
  // document.querySelector("#down_" + count).addEventListener("click", down);
  if (checkupdown_0 == 0 && count == 0) {
    document.querySelector("#up_" + 0).addEventListener("click", up_0);
    document.querySelector("#down_" + 0).addEventListener("click", down_0);
    checkupdown_0 = 1;
  } else if (checkupdown_1 == 0 && count == 1) {
    document.querySelector("#up_" + 1).addEventListener("click", up_1);
    document.querySelector("#down_" + 1).addEventListener("click", down_1);
    checkupdown_1 = 1;
  } else if (checkupdown_2 == 0 && count == 2) {
    document.querySelector("#up_" + 2).addEventListener("click", up_2);
    document.querySelector("#down_" + 2).addEventListener("click", down_2);
    checkupdown_2 = 1;
  } else if (checkupdown_3 == 0 && count == 3) {
    document.querySelector("#up_" + 3).addEventListener("click", up_3);
    document.querySelector("#down_" + 3).addEventListener("click", down_3);
    checkupdown_3 = 1;
  }
}

addCart.addEventListener("click", AddCart);
addCart.addEventListener("click", addupdown);

// setInterval(() => {
//   total.innerHTML = sum * price + " ";
// });

const Remove = document.querySelector(".RemoveAll");

function fnRemoveAll() {
  listPd.innerHTML = "";
  checkupdown_0 = 0;
  checkupdown_1 = 0;
  checkupdown_2 = 0;
  checkupdown_3 = 0;
  countpd = [1, 1, 1, 1];
  checkpd = [0, 0, 0, 0];
  sum = 0;
  total.innerHTML = sum;
}

Remove.addEventListener("click", fnRemoveAll);
