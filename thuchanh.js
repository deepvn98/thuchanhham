function chosse(luachon){
    let a="";
    if(luachon){
        a= "chuc ban choi vui ve";
    }else {
        a= "gap lai ban lan sau";
    }return a;
}
let com= confirm("ban co muon choi");
let co=chosse(com);
alert(co)