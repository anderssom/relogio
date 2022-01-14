/**
 * No script o primeiro passo é criar a função que irá “preparar” 
 * o relógio, demos o nome para esta função de “relogio()”, vamos
 *  entender como ele funciona.
 */

function reloio () {

    /*
    Primeiramente na função “relogio()” criamos o objeto data do tipo 
    Date e obtivemos as horas, minutos e segundos devidamente armazenados 
    nas variáveis hor, min, seg.
    */    
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    /*
    Estas funções retornam os valores menores que 10 com um dígito só, 
    no caso de relógios, estes valores são mostrados com dois dígitos, 
    com o zero na frente, 01, 02, …, 09, então, precisamos “ajustar” e
    stes valores, vamos usar IF para testar se o valor é menor que dez,
    se for, vamos adicionar o “0” na frente do valor.
    */

    if (hora < 10){
        hora = "0" + hora;
    }
    if (minuto < 10){
        minuto = "0" + minuto;
    }
    if (segundo < 10) {
        segundo = "0" + segundo;
    }

    //Em seguida vamos juntar todas as informações de horas, minutos e segundos em uma só variável, no caso, a variável “horas”.
    var horas = hora + ":" + minuto + ":" + segundo;

    //O último passo da função é adicionar a hora devidamente preparada que está na variável “horas” no <span>
    document.getElementById("time").innerHTML = horas;
}
    //Com a função pronta, basta criar o timer “setInterval” que irá chamar a função “relogio()” de um em um segundo.
    var timer = setInterval(reloio,1000);
