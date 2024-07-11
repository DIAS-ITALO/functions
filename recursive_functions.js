
/* função recursiva é a função que executa um trecho de código e se determinada condição acontecer ela é executada novamente */

function recursiva(max) {
    console.log(max);

    if (max > 10) return;
    max++;
    recursiva(max);
}

recursiva(0);