function cerceveEkle(resim: string[]) : any {
    const cerceve = '*'.repeat(resim[0].length + 2);

    resim.unshift(cerceve);
    resim.push(cerceve);
    
    for (let i = 1; i < resim.length - 1; i++){
        resim[i] = '*'.concat(resim[i],'*');
    }

    return resim;
}


console.log(cerceveEkle(["abc","ded"]));