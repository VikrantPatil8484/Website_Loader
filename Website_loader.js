function myfunc() {
    setTimeout(showpage, 2000)
}
function showpage() {
    document.getElementById("loader").
        style.display = "none";
    document.getElementById("mydiv").style.display = "block";

}
