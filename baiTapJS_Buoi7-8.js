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
    document.getElementById("txtTinhTong").innerHTML = sum;

}
document.getElementById("tinhTong").onclick = tinhTongSoDuong;
