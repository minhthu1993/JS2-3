//Mô hình 3 khối :
// input: số nguyên dương có 2 chữ số :soN = 12.
//output: tinh tổng 2 ký số.
//progress: cách lấy hàng đơn vị : soHangDonVi = soN % 10; soHangChuc = soN / 10;
document.getElementById("btnKetQua").onclick = function(){
    var soN = document.getElementById("soN").value;
    var soHangChuc = Math.floor(soN / 10);
    var soHangDonVi = Math.floor(soN % 10);
    var tongHaiKySo = soHangChuc + soHangDonVi;
    document.getElementById("ketQua").innerHTML = tongHaiKySo;
}

