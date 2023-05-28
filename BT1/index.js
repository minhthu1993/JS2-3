//Bài tập 1:
/*Mô hình 3 khối
+ input: cho người dùng nhập vào số ngày làm, lương 1 ngày = 100k , công thức tính : lường 1 ngày * số ngày làm
+output: tiền lương nhân viên
+progress:+ 
 */
document.getElementById("btnKetQua").onclick = function(){
    console.log("click");
    const luong1Ngay = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value * 1;
    var soTienLuong = (luong1Ngay * soNgayLam);
    var ketQua = soTienLuong.toLocaleString("vn-VN",{style: "currency", currency: "VND",});
    document.getElementById("ketQua").innerHTML = "Tiền lương = " + ketQua;
}