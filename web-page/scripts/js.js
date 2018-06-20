/**
 * Created by ubuntu on 4/7/18.
 */
function addLoadEvent(e) {
    var oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = e;
    }
    else {
        window.onload = function () {
            oldonload();
            e();
        }
    }
}

function highLightPage() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var headers = document.getElementsByTagName('header');
    if (headers.length == 0) return false;
    var nav = headers[0].getElementsByTagName('nav');
    var links = nav[0].getElementsByTagName('a');
    var linkurl;
    for (var i = 0; i < links.length; i++) {
        linkurl = links[i].getAttribute('href');
        if (window.location.href.indexOf(linkurl) != -1) {
            links[i].className = 'here';
            var linkText = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute('id', linkText);
        }
    }
}

function showSection(id) {
    var section = document.getElementsByTagName('section');
    for (var i = 0; i < section.length; i++) {
        if (section[i].getAttribute('id') != id) {
            section[i].style.display = 'none';
        }
        else {
            section[i].style.display = 'block';
        }
    }
}

function prerareInternalNav() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var articles = document.getElementsByTagName('article');
    if (articles.length == 0) return false;
    var navs = articles[0].getElementsByTagName('nav');
    if (navs.length == 0) return false;
    var nav = navs[0];
    var links = nav.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var sectionId = links[i].getAttribute('href').split('#')[1];
        if (!document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display = 'none';
        links[i].destination = sectionId;
        links[i].onclick = function () {
            showSection(this.destination);
            return false;
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (targetElement == parent.lastChild) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('imageGalley')) return false;
    var img = document.createElement('img');
    img.setAttribute('id', 'placeholder');
    // img.setAttribute('src','images/photos/占位符.jpg');
    // console.log(img.src);
    var descrip = document.createElement('p');
    descrip.setAttribute('id', 'description');
    var text = document.createTextNode('choose an image');
    descrip.appendChild(text);
    var imgGalley = document.getElementById('imageGalley');
    insertAfter(descrip, imgGalley);
    insertAfter(img, descrip);
}

function showImage(e) {
    if (!document.getElementById('placeholder')) return false;
    var source = e.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.style.display = 'block';
    placeholder.setAttribute('src', source);
    if (document.getElementById('description')) {
        var text = e.getAttribute('title');
        var description = document.getElementById('description');
        description.firstChild.nodeValue = text;
    }
    return true;
}

function prepareGalley() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('imageGalley')) return false;
    var imgGalley = document.getElementById('imageGalley');
    var links = imgGalley.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {

            return !showImage(this);

        };
    }
}

function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName('table');
    for (var i = 0; i < tables.length; i++) {
        var odd = false;
        var rows = tables[i].getElementsByTagName('tr');
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                rows[j].className = "odd";
                odd = false;
            }
            else {
                odd = true;
            }
        }
    }
}

function highLightRows() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName('table');
    for (var i = 0; i < tables.length; i++) {
        var rows = tables[i].getElementsByTagName('tr');
        for (var j = 0; j < rows.length; j++) {
            rows[j].oldClassName = rows[j].className;
            rows[j].onmouseover = function () {
                this.className = 'highLight';
            };
            rows[j].onmouseout = function () {
                this.className = this.oldClassName;
            }
        }
    }
}

addLoadEvent(highLightPage);
addLoadEvent(prerareInternalNav);
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGalley);
addLoadEvent(stripeTables);
addLoadEvent(highLightRows);