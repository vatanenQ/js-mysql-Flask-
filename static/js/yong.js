function no(){
    $.ajax({
    url:"/no",
    success:function(data){
      $(".no h1").eq(0).text(data.fl);
      $(".no h1").eq(1).text(data.fs);
      $(".no h1").eq(2).text(data.fx);
      $(".no h1").eq(3).text(data.wd);
    },
    error: function(xhr, type, errorThrown) {
    }
    })
}
function bar2(){
    $.ajax({
    url:"/bar2",
    success:function(data){
      
    }
    })
}
setInterval(no,2000)