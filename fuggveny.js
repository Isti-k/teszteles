export function parose(szam){
    let psE=false;
    //akkor fusson csak le, ha a számértéke egész szám
    if (!Number.NaN(szam)){
        return "ez nem szám";
        
        
    }
    if (Number.NaN(szam)){
        if(szam % 2 === 0){
            psE = true;
        }
    }
    return psE;
}


//hf mindenre jót kell írni