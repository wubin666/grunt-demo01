$(function){
     var $width=$("#width"),
         $height=$("#height"),
         $btnCal=$("#calculate"),
         $perimeter=$("#perimeter"),
         $area=$("#area")
     $btnCal.click(function(){
        var w=Number($width.val()),
            h=Number($height.val());
        var p=2+(w+h),
            a=w*h;
        $perimeter.val(p);
        $area.val(a);
  });
});
;function rectangle(){
  return {
    'perimeter':function(width,height){
                  return 2*(Number(width) + Number(height));                       
    },
    'area':function(width,height){
                  return Number(width)*Number(height);
                                          
    } 
  };
}
