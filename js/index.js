// تم استدعاء العنصر فيديو1
var myVideo = document.getElementById("video1"); 
// هنا وظيفة الشرطية
// هنا إذا كان بحالة توقف يقوم بتشغليه 
function playPause() { 
    if (myVideo.paused)//توقف فيدو 
        myVideo.play();// تشغيل فيديو
        // و إلا إذا كان بحالة عمل يقوم بتوقف عن عمل   
    else 
        myVideo.pause(); 
}
//   التي تظهر رسالة خطأ عندما يقوم المستخدم بإدخال معلومات خاطئة validate() 
$(document).ready(function() {
    
    $(function () {
        $("#commentForm").validate();// حقا الزامي
    });

});