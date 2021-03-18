
function get(a){
    let total=a*a;
    return total;
}

function ham1(){
    let nhapvao=parseInt(document.getElementById("id").value);
    let retun=get(nhapvao);
    document.getElementById("result").innerHTML=retun;

}