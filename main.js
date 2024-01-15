var object = (
    hoTen,
    soDienThoai ,
    yeuCau,
    tenMonHang,
    giaTien
)
$("#btn-1").on("click",function(){
     alert("Khách hàng chọn mua sản phẩm 1")
    $("#btn-1").removeClass("btn btn-primary").addClass("btn-info")
    $("#btn-2").removeClass("btn-info").addClass("btn btn-primary")
    $("#btn-3").removeClass("btn-info").addClass("btn btn-primary")
    object.tenMonHang = "Mua mon hang so 1";
    object.giaTien = "200.000 vnd";
})
$("#btn-2").on("click",function(){
     alert("Khách hàng chọn mua sản phẩm 2")
    $("#btn-2").removeClass("btn btn-primary").addClass("btn-info")
    $("#btn-1").removeClass("btn-info").addClass("btn btn-primary")
    $("#btn-3").removeClass("btn-info").addClass("btn btn-primary")
    object.tenMonHang = "Mua mon hang so 2";
    object.giaTien = "201.000 vnd";
})
$("#btn-3").on("click",function(){
     alert("Khách hàng chọn mua sản phẩm 3")
    $("#btn-3").removeClass("btn btn-primary").addClass("btn-info")
    $("#btn-1").removeClass("btn-info").addClass("btn btn-primary")
    $("#btn-2").removeClass("btn-info").addClass("btn btn-primary")
    object.tenMonHang = "Mua mon hang so 3";
    object.giaTien = "202.000 vnd";
})
$("#btn-4").on("click", function(){
    console.log(object)
})