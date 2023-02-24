function inverterString(str) {
    let stringInvertida = '';
    for (let i = 1; i <= str.length; i++) {
        const letra = str[str.length - i];
        stringInvertida += letra;
    }
    console.log(stringInvertida);
}

inverterString('world');
inverterString('teste');