//Mô hình 3 khối
// input: giá $ 23.500, phuong trinh quy đổi $ sang VND, số tiền muốn quy đổi
// output: tính và xuất số tiền đã quy đổi sang VND.
//progress: khai báo tỉ giá tiền $, tạo khung nhập số tiền muốn quy đổi, xuất ra giá tiền đã quy đổi.


document.getElementById("btnQuyDoi").onclick = function(){
    const giaDoLa = 23500;
    console.log("ewrer")
    var soTien = document.getElementById("soTien").value * 1;
    var giaTriQuyDoi = (soTien * giaDoLa).toLocaleString("vn-VN",{style: "currency", currency: "VND",});
    document.getElementById("soTienVND").innerHTML = "Số tiền VND : " + giaTriQuyDoi;
    
}
