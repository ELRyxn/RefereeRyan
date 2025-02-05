
const setup = () => {
    let btnOptellen=document.getElementById("btnOptellen");
    let btnDelen=document.getElementById("btnDelen");


    btnOptellen.addEventListener("click", optellen);
    btnDelen.addEventListener("click", delen);
}

const optellen = () => {
    let txtOutput=document.getElementById("txtOutput");
    let txtGeel=document.getElementById("txtGeel");
    let txtDubbelGeel=document.getElementById("txtDubbelGeel");
    let txtRood=document.getElementById("txtRood");


    let g1=parseInt(txtGeel.value, 10);
    let g2=parseInt(txtDubbelGeel.value, 10);
    let g3=parseInt(txtRood.value, 10);

    let resultaat = g1+g2+g3;

    let resultaatTekst=g1+" + "+g2+" + "+g3+" = " +resultaat;
    txtOutput.innerHTML=resultaatTekst;
}

const delen = () => {
    // analoog
    let txtGemiddeldeKaarten=document.getElementById("txtOutput");
    let txtTotaleKaarten=document.getElementById("txtTotaleKaarten");
    let txtWedstrijden=document.getElementById("txtWedstrijden");



    let g1=parseInt(txtTotaleKaarten.value, 10);
    let g2=parseInt(txtWedstrijden.value, 10);

    let resultaat = g1/g2;

    let resultaatTekst=g1+" / "+g2+" = " +resultaat;
    txtGemiddeldeKaarten.innerHTML=resultaatTekst;

}


window.addEventListener('load',setup);

















