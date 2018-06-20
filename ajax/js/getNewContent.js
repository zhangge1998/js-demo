/**
 * Created by ubuntu on 4/2/18.
 */
function getNewContent(){
    var request=new XMLHttpRequest();
    if(request){
        request.open('get','example.txt',true);
        request.onreadystatechange=function(){
            if(request.readyState==4&&request.status==200){
                alert('request  received');
                var para=document.createElement('p');
                var text=document.createTextNode(request.responseText);
                para.appendChild(text);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
    }
    else{
        alert('sorry,your browser do not support XMLHttpRequest');
    }
    alert('function done');
}
addLoadEvent(getNewContent);
