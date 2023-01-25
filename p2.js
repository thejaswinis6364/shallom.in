var oldTop="p1";
function toTop(newTop)
{
    var domTop=document.getElementById(oldTop).style;
    var domNew=document.getElementById(newTop).style;
    domTop.zIndex=0;
    domNew.zIndex=10;
    oldTop=newTop;
}