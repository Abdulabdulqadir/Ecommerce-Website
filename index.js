
var localname = localStorage.getItem('Name')
if(localname.length > 10){
    localname = localname.slice(0, 8)+"..."
}
else{
    localname = localname
}
if (localStorage.getItem('logged')=='true') {
    document.getElementById('na').innerText = localname || "My Account";
    document.getElementById('n').setAttribute('onclick', 'window.location.href="myDetails.html"')
}
else{
    document.getElementById('na').innerText = "My Account"
    document.getElementById('n').setAttribute('onclick', 'window.location.href="login.html"')
}
window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 250) {
        document.getElementById('i').style.opacity = '1';
        document.getElementById('i').style.visibility = 'visible';
        document.getElementById('ii').style.bottom = '20px';
        document.getElementById('ii').style.transform = 'rotate(360deg)';
    } else {
        document.getElementById('i').style.opacity = '0';
        document.getElementById('i').style.visibility = 'hidden';
        document.getElementById('ii').style.bottom = '-150px';
        document.getElementById('ii').style.transform = 'rotate(0deg)';
    }
});