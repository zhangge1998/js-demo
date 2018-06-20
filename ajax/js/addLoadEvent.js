/**
 * Created by ubuntu on 4/2/18.
 */
function addLoadEvent(e){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=e;
    }
    else{
        window.onload=function(){
            oldonload();
            e();
        }
    }
}