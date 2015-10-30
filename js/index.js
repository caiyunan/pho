/**
 * Created by CYA on 2015/10/30.
 */
window.onload=function(){
    var box= document.getElementById('container');
    var imgs=document.getElementsByTagName('img');

    //单张图片宽度
    var imgwidth=imgs[0].offsetWidth;

    //隐藏门宽度
    var exposeWidth=160;

    //盒子宽度
    var boxWidth=imgwidth+(imgs.length-1)*exposeWidth

    box.style.width=boxWidth+'px';//盒子的CSS宽度
    function setImgsPos(){

        for(var i= 1,len=imgs.length;i<len;i++){
            imgs[i].style.left = imgwidth + exposeWidth * (i - 1) + 'px';
        }
    }
    setImgsPos();

    var translate= imgwidth-exposeWidth;

    for(var i= 0, len=imgs.length;i<len;i++){
        //使用立即调用函数表达式
        (function (i) {
            imgs[i].onmouseover=function(){
                setImgsPos();//归位
                for(var j=1;j<=i;j++){
                    //imgs[j].style.left=parseInt(imgs[j].style.left,10)-translate+'px';
                    imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + 'px';
                }
           }
        })(i);
    }
};