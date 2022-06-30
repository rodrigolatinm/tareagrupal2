//Metodo 1 que reciba un Array de nacionalidades y cuente las diferentes nacionalidades que existen.



const nacionalidades=["mexicano", "argentino", "argentino", "venezolano","peruano", "mexicano", "argentino", "peruano", "venezolano"];

contador={};

let contar = nacionalidades.forEach(item => {
    if (contador[item]){
        contador[item]+=1;
    }
    else{
        contador[item]=1;
    }
})
console.log(contador)


 //Metodo 2 que reciba un Array de nacionalidades y cuente las diferentes nacionalidades que existen.
 
 
// const nacionalidades=["mexicano", "argentino", "argentino", "venezolano","peruano", "mexicano", "argentino", "peruano", "venezolano"];
// const resultado = nacionalidades.reduce((acc, el) => ((acc[el] = acc[el] + 1 || 1), acc), {})
// console.log(resultado)