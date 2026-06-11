
    function zkontroluj() {
 
    const heslo = document.getElementById("heslo").value;
 
    if (heslo === "127127") {
 
        document.getElementById("obsah").style.display = "block";
 
    } else {
 
        alert("Špatné heslo");
 
    }
 
}
