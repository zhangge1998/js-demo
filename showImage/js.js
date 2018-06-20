/**
 * Created by ubuntu on 4/2/18.
 */
function addLoadEvent(e){
    var oldOnload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=e;
    }
    else{
        window.onload=function(){
            oldOnload();
            e();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(targetElement==parent.lastChild){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imageGalley')) return false;
    var img=document.createElement('img');
    img.setAttribute('id','placeholder');
    img.setAttribute('src','image/占位符.jpg');
    var descrip=document.createElement('p');
    descrip.setAttribute('id','description');
    var text=document.createTextNode('choose an image');
    descrip.appendChild(text);
    var imgGalley=document.getElementById('imageGalley');
    insertAfter(img,imgGalley);
    insertAfter(descrip,img);
}

function showImage(e) {
    if(!document.getElementById('placeholder')) return false;
    var source = e.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
    if(document.getElementById('description')){
        var text = e.getAttribute('title');
        var description = document.getElementById('description');
        description.firstChild.nodeValue = text;
    }
    return true;
}

function prepareGalley(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imageGalley')) return false;
    var imgGalley=document.getElementById('imageGalley');
    var links=imgGalley.getElementsByTagName('a');
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return !showImage(this);

        };
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGalley);
