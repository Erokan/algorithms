function cerceveEkle(resim: string[]) : any {
    const cerceveUzunlugu = resim[0].length + 2;
    let cerceve = '';
    
    for (let i = 0; i < cerceveUzunlugu; i++){
        cerceve = cerceve.concat('*'); 
    }
    
    resim.unshift(cerceve);
    resim.push(cerceve);
    
    for (let i = 1; i < resim.length - 1; i++){
        resim[i] = '*'.concat(resim[i],'*');
    }

    return resim;
}


console.log(cerceveEkle(["abc","ded"]));