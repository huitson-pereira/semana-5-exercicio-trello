const {startOfMonth, endOfMonth, eachDayOfInterval, format} = require("date-fns");
const { ptBR } = require("date-fns/locale");

function listarDiasDoMes(mes, ano=2023){
    const inicioDoMes = startOfMonth(new Date(ano, mes - 1));
    const fimDoMes = startOfMonth(new Date(ano, mes - 1));
    const diasDoMes = eachDayOfInterval({start: inicioDoMes, end: fimDoMes});
    const diasFormatados = diasDoMes.map((dia) => format(dia, "dd/MM/yyyy", {locale: ptBR}));

    diasFormatados.forEach((dia, index) => {
        const diaDaSemana = format(diasDoMes[index], "EEEE",{locale: ptBR});
        diasFormatados[index] = `${dia} - ${diaDaSemana}`;
    });
    return diasFormatados;
}


module.exports = listarDiasDoMes;