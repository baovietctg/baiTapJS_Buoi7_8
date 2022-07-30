//Thêm số vào mảng

var nums = [];

function  themSo(){
    var num = Number(document.querySelector("#soN").value);
    //push: lưu giá trị mới vào mảng;
    nums.push(num);
    console.log(nums);
    document.getElementById("txtNums").innerHTML = nums;
}
document.getElementById("themSo").onclick = themSo;

//Tính tổng các số dương trong các số đã nhập
function tinhTongSoDuong(){
    var sum = 0;
   for (i = 0; i < nums.length; i++) {
        if (nums[i] > 0){
            // Sỗ chẵn
            sum+= nums[i];
        } 
    }
    document.getElementById("txtTinhTong").innerHTML = "Tổng các số dương là: " + sum;

}
document.getElementById("tinhTong").onclick = tinhTongSoDuong;

//Đếm số dương
function demSoDuong(){
    var soDuong = 0;
   for (i = 0; i < nums.length; i++) {
        if (nums[i] > 0){
            // Sỗ âm
            soDuong++;
        } 
    }
    document.getElementById("txtDemSoDuong").innerHTML = "Số dương: " + soDuong;
    return soDuong;
}
document.getElementById("demSoDuong").onclick = demSoDuong;


//Tìm số nhỏ nhất
function timMin(){
    //giả sử số đầu tiên nhỏ nhất
    var viTri = 0;
    var min = nums[0];
    //Kiểm tra với các số còn lại  trong mảng - bằng cách duyệt mảng
    for (var i = 1; i < nums.length; i++) {
        if (min > nums[i]){
            //Nếu có số lớn hơn max => lưu giá trị max mới và vị trí mới
            min = nums[i];
            viTri = i;
        }
    }
    document.getElementById("txtMin").innerHTML = "Số nhỏ nhất: " + min;

}
document.getElementById("timMin").onclick = timMin;

/*4 - Tìm số dương nhỏ nhất*/

function soDuongMin(){
    var nums2 = [];
    for (var i = 0; i < nums.length+1; i++) {
        if(nums[i] >0){
            nums2.push(nums[i]);
        }
    }
    console.log("Num2 gồm " + nums2);
    var viTri = 0;
    var min = nums2[0];
    //Kiểm tra với các số còn lại  trong mảng - bằng cách duyệt mảng
    for (var i = 1; i < nums2.length; i++) {
        if (min > nums2[i]){
            //Nếu có số lớn hơn max => lưu giá trị max mới và vị trí mới
            min = nums2[i];
            viTri = i;
        }
    }
    document.getElementById("txtDuongMin").innerHTML = "Số dương nhỏ nhất là: " + min;
}
document.getElementById("timDuongMin").onclick = soDuongMin;

/*5- Tìm số chẵn cuối cùng*/

function timSoChan(){
    var soChan = "";
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0){
            soChan = nums[i];
        }
        console.log("Số chẵn cuối là: " + soChan);
    }
    document.getElementById("txtSoChan").innerHTML = "Số chẵn cuối cùng là: " + soChan;
}
document.getElementById("timSoChan").onclick = timSoChan;

/*6- Đổi vị trí*/
//var temp = dtb2[j];
// dtb2[j] = dtb2[j+1];
// dtb2[j+1] = temp;

function doiViTri(){
    var viTri1 = Number(document.getElementById("viTri1").value) - 1;
    var viTri2 = Number(document.getElementById("viTri2").value -1);
    console.log("Giá trị hiện tại ở Vị trí 1 trong mảng là: " + nums[viTri1]);
    console.log("Giá trị hiện tại ở Vị trí 2 trong mảng là: " + nums[viTri2]);
    var temp = nums[viTri1];
    nums[viTri1] = nums[viTri2];
    nums[viTri2] = temp;
    console.log("Giá trị sau khi đổi ở Vị trí 1 trong mảng là: " + nums[viTri1]);
    console.log("Giá trị sau khi đổi ở Vị trí 2 trong mảng là: " + nums[viTri2]);
    console.log(nums);
    document.getElementById("txtDoiViTri").innerHTML = "Mảng sau khi đổi vị trí: " + nums;

}
document.getElementById("doiViTri").onclick = doiViTri;

/**
 * 7- Sắp xếp tăng dần
 */

 function sapXepTangDan(){
    var nums2 = [];
    for (var i = 0; i < nums.length; i++) {
        nums2.push(nums[i]);
    }
    for(var i = 0; i < nums2.length - 1; i++){
        for(var j = 0; j < nums2.length; j++){
            if (nums2[j] > nums2[j+1]){
                //Nếu vị trí j+1 có giá trị nhỏ hơn j => hoán chuyển vị trí
                //temp: chứa tạm giá trị
                var temp = nums2[j];
                nums2[j] = nums2[j+1];
                nums2[j+1] = temp;
            }
        }
    }
    document.getElementById("txtsapXepTangDan").innerHTML = nums2;
}
document.getElementById("sapXepTangDan").onclick = sapXepTangDan;

/**
 * 8-Tìm số nguyên tố đầu tiên của mảng
 */

 function kiemTraSo(num) {
    var ketqua = true;
    
    if (num < 2) {
        ketqua = false;
    } else if (num == 2) {
        ketqua = true;
    }else if (num % 2 == 0) {
        ketqua = false;
    }else {
        for (var i = 3; i <=  Math.sqrt(num); i += 2) {
            if (num % i == 0) {
                return  false;
            }
        }
    }
    return ketqua;
 }

function inSoNT() {
    var soNT = "";
    for (var i = 0; i < nums.length; i++) {
        if (kiemTraSo(nums[i])) {
            soNT = nums[i];
            break;
        }else{
            soNT = -1;
        }
    }
    document.getElementById("txtSoNT").innerHTML = soNT;
}
document.getElementById("timSoNguyenTo").onclick = inSoNT;

/**
 * 9-Đếm số nguyên
 */

 var nums3 = [];

 function  themSoThuc(){
     var num = Number(document.querySelector("#soThuc").value);
     //push: lưu giá trị mới vào mảng;
     nums3.push(num);
     console.log(nums3);
     document.getElementById("txtSoThuc").innerHTML = nums3;
 }
 document.getElementById("themSoThuc").onclick = themSoThuc;

 function demSoNguyen(){
    var soNguyen = 0;
    for (let i = 0; i < nums3.length; i++) {
        if(Number.isInteger(nums3[i])){
            soNguyen++;
        }
    }
    document.getElementById("txtSoThuc").innerHTML = soNguyen;
}
 document.getElementById("timSoNguyen").onclick = demSoNguyen;


 /**
  * 10 - So sánh số lượng số âm và số dương
  */

  function soSanh(){
    //Đếm số âm
    var soAm = 0;
    var kq = "";
   for (i = 0; i < nums.length; i++) {
        if (nums[i] < 0){
            // Sỗ âm
            soAm++;
        } 
    }
    //Đếm số dương
    var soDuong = 0;
   for (i = 0; i < nums.length; i++) {
        if (nums[i] > 0){
            soDuong++;
        } 
    }
    if (soAm > soDuong){
        kq = "Số âm > Số dương";
    }else if (soAm < soDuong){
        kq = "Số âm < Số dương";
    }else{
        kq = "Số âm = Số dương";
    }
    document.getElementById("txtSoSanh").innerHTML = kq;
}
document.getElementById("soSanh").onclick = soSanh;


