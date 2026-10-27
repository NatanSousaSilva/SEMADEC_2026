export const colunas_modalidades = {
  "Coletivas": [
    { chave: "id", titulo: "Jogo" },
    { chave: "equipe1", titulo: "Equipe 1" },
    { chave: "equipe2", titulo: "Equipe 2" },
    { chave: "fase", titulo: "Fase" },
    { chave: "data", titulo: "Data" },
    { chave: "horario", titulo: "Horário" },
    { chave: "ganhador", titulo: "Ganhador" }
  ],

  "Futsal": [
    { chave: "id", titulo: "Jogo" },
    { chave: "grupo", titulo: "Grupo"},
    { chave: "equipe1", titulo: "Equipe 1" },
    { chave: "equipe2", titulo: "Equipe 2" },
    { chave: "fase", titulo: "Fase" },
    { chave: "data", titulo: "Data" },
    { chave: "horario", titulo: "Horário" },
    { chave: "ganhador", titulo: "Ganhador" }
  ],

  ////////

  "Tenis_mesa_individual": [
    { chave: "jogo", titulo: "Jogo" },
    { chave: "competidor1", titulo: "Competidor 1" },
    { chave: "competidor2", titulo: "Competidor 2" },
    { chave: "fase", titulo: "Fase" },
    { chave: "data", titulo: "Data" },
    { chave: "horario", titulo: "Horário" },
    { chave: "ganhador", titulo: "Ganhador" }
  ],

};

export const colunas_grupos = {
  Futsal: [
    { chave: "nome", titulo: "Turma" },
    { chave: "vitorias", titulo: "Vitórias" },
    { chave: "empates", titulo: "Empates" },
    { chave: "derrotas", titulo: "Derrotas" },
    { chave: "gols", titulo: "Gols" },
    { chave: "gols_sofridos", titulo: "Gols Sofridos" },
    { chave: "saldo_gols", titulo: "Saldo de Gols" }
  ],

  Queimada: [
    { chave: "nome", titulo: "Turma" },
    { chave: "vitorias", titulo: "Vitórias" },
    { chave: "derrotas", titulo: "Derrotas" },
    { chave: "sets_jogados", titulo: "Sets Jogados" },
    { chave: "pontos_favor", titulo: "Pontos a Favor" },
    { chave: "pontos_contra", titulo: "Pontos Contra" },
    { chave: "saldo_pontos", titulo: "Saldo de Pontos" }
  ],

  Tenis_mesa_dupla: [
    { chave: "codigo", titulo: "Código" },
    { chave: "competidor", titulo: "Dupla" },
    { chave: "turma", titulo: "Equipe" },
  ],

  Individual: [
    { chave: "codigo", titulo: "Código" },
    { chave: "competidor", titulo: "Competidor" },
    { chave: "turma", titulo: "Turma" }
  ],

  jiu_jitsu: [
    { chave: "codigo", titulo: "Código"},
    { chave: "competidor", titulo: "Competidor"},
    { chave: "turma", titulo: "Turma" },
    { chave: "peso", titulo: "Peso"}
  ],
};

export const coletivas = [
  "Futsal",
  "Queimada",
  "Basquete",
  "Vôlei de Praia Feminino",
  "Vôlei de Praia Masculino",
  "Tênis de Mesa Dupla",
  "Futvôlei",
];

export const individuais = [
  "Tênis de Mesa Feminino",
  "Tênis de Mesa Masculino",
  "Arremesso de Peso",
  "Arremesso de Vara",
  "Corrida",
  "Xadrez Femino",
  "Xadrez Masculino",
  "Jiu-Jitsu",
];

export const categorias = [
  "Programação",
  "Modalidades Coletivas",
  "Modalidades Individuais",
  "Gincana",
  "Classificação Geral",
];


export const programacao = [
  {
    dia: "Terça (03/nov)",
    atividades: [
      { horario: "7h-8h30", nome: "Aula", local: "-" },
      { horario: "8h50-12h", nome: "Futsal", local: "Ginásio", cor: "azul" },
      { horario: "10h30-12h", nome: "Tênis de mesa", local: "Biblioteca", cor: "laranja" },
      { horario: "12h-13h", intervalo: true },
      { horario: "13h-14h30", nome: "Aula", local: "-" },
      { horario: "14h30-16h", nome: "Gincana", local: "Pátio e Auditório", cor: "vermelho" },
      { horario: "14h50-16h", nome: "Tênis de mesa", local: "Biblioteca", cor: "laranja" },
      { horario: "16h-18h", nome: "Queimada", local: "Ginásio", cor: "verde" },
      { horario: "16h-18h", nome: "Vôlei praia", local: "Quadra de Areia", cor: "dourado" },
      { horario: "16h-18h", nome: "Xadrez", local: "Salas de Aula", cor: "cinza" }
    ]
  },
  {
    dia: "Quarta (04/nov)",
    atividades: [
      { horario: "7h-8h30", nome: "Aula", local: "-" },
      { horario: "8h50-12h", nome: "Futsal", local: "Ginásio", cor: "azul" },
      { horario: "9h30-12h", nome: "Oficinas culinárias", local: "Refeitório", cor: "roxo" },
      { horario: "10h30-12h", nome: "Tênis de mesa", local: "Biblioteca", cor: "laranja" },
      { horario: "12h-13h", intervalo: true },
      { horario: "13h-14h30", nome: "Aula", local: "-" },
      { horario: "14h50-18h", nome: "Futsal", local: "Ginásio", cor: "azul" },
      { horario: "16h-18h", nome: "Futvôlei", local: "Quadra de Areia", cor: "dourado" },
      { horario: "16h-18h", nome: "Atletismo", local: "Campo de futebol", cor: "vermelho" }
    ]
  },
  {
    dia: "Quinta (05/nov)",
    atividades: [
      { horario: "7h-8h30", nome: "Aula", local: "-" },
      { horario: "8h50-10h", nome: "Futsal - Semifinal", local: "Ginásio", cor: "azul" },
      { horario: "10h-11h", nome: "Basquete", local: "Ginásio", cor: "laranja" },
      { horario: "11h-12h", nome: "Vôlei - Final", local: "Ginásio", cor: "verde" },
      { horario: "10h-12h", nome: "Jiu-jitsu", local: "Pátio", cor: "cinza" },
      { horario: "12h-13h", intervalo: true },
      { horario: "13h-14h30", nome: "Aula", local: "-" },
      { horario: "14h30-15h30", nome: "Gincana", local: "Pátio", cor: "vermelho" },
      { horario: "14h50-16h30", nome: "Queimada", local: "Ginásio", cor: "verde" },
      { horario: "16h30-18h", nome: "Futsal - Disputa 3º e Final", local: "Ginásio", cor: "azul" }
    ]
  }
];
