// JavaScript File
// JavaScript File
$( document ).ready(function() {
//$("h1").hide();
   var pic1= 'url("http://rntechbd.com/wp-content/uploads/2016/12/tech.jpg")';
    var pic2= 'url("http://img.etimg.com/thumb/msid-59397014,width-362,height-240,imglength-413582,resizemode-4/small-biz/security-tech/technology/disruptive-tech-like-blockchain-is-here-to-stay-law-will-have-to-simply-catch-up.jpg")';
    var images= [pic1,pic2,]
    var image= true;
    
    
    $("button").click(function(){
       if ( image===true){
           $("body").css("background-image", images[0]); 
           image=false
           console.log(image);
       } else{
           $("body").css("background-image",images[1]);
           image=true
       }
        
    //    for( count=0; count<2; count++){
     //   $("body").css("background-image"," images");
        
    //}
    })
    }
);
$("#num1").click(function(){
 $("body").append("https://www.google.com/")
})


