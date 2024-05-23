const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('teste02.pdf');

pdf(dataBuffer).then(function(data) {
  var dat =data.text.split("\n");

  // console.log(dat)
  var dtSpl =dat.map((val,index)=>{
    palavrasSeparadas =val.split(/(?=[A-Z])/);
    return palavrasSeparadas;
  })
  var dtSplint =dat.map((val,index)=>{
    palavrasSeparadas =val.split(/(?=[A-Z])/);
    return palavrasSeparadas.join(' ');
  })
  var fatura = [];
  var pegarItensDaFatura = dtSplint.map((val,index) =>{
    const regex = /Itens.+Fatu.+unid.+quant|(Energia|en).+(El[ée]t|scee|I.+C.+M|comp.|inj)|tax.+via|contr.+ilum.+publ.+|(T.O.+T.+A.+L)|total/gmi; 
    if(regex.test(val)){
      var match = val.match(/^(Energia|en).+(El[ée]t|scee|I.+C.+M|comp.|inj)|tax.+via|contr.+ilum.+publ.|\b\d[\d,.]*\b|-\b[\d,.]*\b/gmi);
      if(match != null)
        fatura.push(match)
      return match;
    }
      
  })
  var infoFatura 
  // se precisar salvar o texto em um arquivo
  fs.writeFileSync('output.txt', data.text);
});