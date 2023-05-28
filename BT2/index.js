//mô hình 3 khối
//input:nhập vào 5 số thực, 
//output: giá trị trung bình của 5 số thực, xuất ra màn hình
//progress: nhập 5 số thực và cộng chúng lại rồi chia cho 5.
document.getElementById("btnNhapVao").onclick = function(){
    var so1 = document.getElementById("num1").value * 1;
    var so2 = document.getElementById("num2").value * 1;
    var so3 = document.getElementById("num3").value * 1;
    var so4 = document.getElementById("num4").value * 1;
    var so5 = document.getElementById("num5").value * 1;
    var soTong = so1 + so2 + so3 + so4 + so5;
    var trungBinh = soTong / 5;
    document.getElementById("ketQua").innerHTML = "trung bình = " + trungBinh;
    
    
}