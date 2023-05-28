//Mô hình 3 khối
// input: nhập vào 2 chiều dài và chiều rộng hình chữ nhật, công thức tính chu vi = (dài + rộng) * 2; diện tích = dài * rộng;
// output: xuất ra diện tích và chu vi của hình chữ nhật
//progress: tạo khung nhập chiều dài và chiều rộng, tạo function tính diện tích và chu vi .
var chieuDai = document.getElementById("chieuDai")  ;
var chieuRong = document.getElementById("chieuRong");
var dienTich = 0;
var chuVi = 0;
 
document.getElementById("btnKetQua").onclick = function(){
    dienTich = (chieuDai.value * chieuRong.value) * 1;
    chuVi = (chieuDai.value * 1 + chieuRong.value * 1) * 2;
    document.getElementById("dienTich").innerHTML = "Diện tích = " + dienTich;
    document.getElementById("chuVi").innerHTML = "Chu vi = " + chuVi;
}


