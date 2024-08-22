//Exercicio 1
let estados = [
"Acre (AC)",
"Alagoas (AL)",
"Amapá (AP)",
"Amazonas (AM)",
"Bahia (BA)",
"Ceará (CE)",
"Espírito Santo (ES)",
"Goiás (GO)",
"Maranhão (MA)",
"Mato Grosso (MT)",
"Mato Grosso do Sul (MS)",
"Minas Gerais (MG)",
"Pará (PA)",
"Paraíba (PB)",
"Paraná (PR)",
"Pernambuco (PE)",
"Piauí (PI)",
"Rio de Janeiro (RJ)",
"Rio Grande do Norte (RN)",
"Rio Grande do Sul (RS)",
"Rondônia (RO)",
"Roraima (RR)",
"Santa Catarina (SC)",
"São Paulo (SP)",
"Sergipe (SE)",
"Tocantins (TO)",
]

estados.forEach(function(estado, i){
    console.log(i+1, estado);
})


//Exercicio 2

const joao = {
    //Atributos (propriedades - características)
    nome: 'João',
    idade: 19,
    cidade: 'Registro',
    hobby: 'sinuca',
    mscPref: 'Boate Azul'
};

console.log(`Meu nome é ${joao.nome}, tenho ${joao.idade} anos, moro em ${joao.cidade}, gosto de jogar ${joao.hobby} e minha música preferida é ${joao.mscPref}.`);


//Exercicio 3

const filmList = [
    {
        Titulo: "Bem Vindos à Vizinhança",
        Genero: "Suspense",
        Ano: 2022,
        Classificacao: "+16",
    },
    {
        Titulo: "Ilha do Medo",
        Genero: "Suspense",
        Ano: 2010,
        Classificacao: "+16",
    },
    {
        Titulo: "Carros 1",
        Genero: "Ação",
        Ano: 2006,
        Classificacao: "L - Livre para todos os públicos",
    },
  ];
  
  console.log(filmList);
  
  filmList.forEach(function(filmeList){
      console.log(`Título: ${filmeList.Titulo}`);
      console.log(`Gênero: ${filmeList.Genero}`);
      console.log(`Ano: ${filmeList.Ano}`);
      console.log(`Classificação: ${filmeList.Classificacao}`);
      console.log();
  })

  