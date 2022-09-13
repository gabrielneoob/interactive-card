const padraoRegexp = /j/;

const texto = 'javaScript';
const novoTexto = texto.replace(padraoRegexp, 'B');

//flag: g
//flag: i

let regexp = /Pe/gi;

'Perdeu perdido'.replace(/Pe/g, 'Ba');

// Character class /[]/

// Procura: Todo a, A, i, I;
regexp = /[ai]/gi;

// De A à Z
regexp = /[a-zA-Z]/g;

'JavaScript é a Linguagem.'.replace(regexp, '0');

// Quantificador
regexp = /aaaa/g;
let regexpAlt = /a{4}/g;

// Regex Padroes
const regexCEP = /\d{5}[-\s]?\d{3}/g;
const ceps = [
  '00000-000',
  '00000 000',
  '00000000'
]

for (cep of ceps) {
  console.log(cep, cep.match(regexCEP));
};

const regexCpf = /(\d{3}[.-]?){3}\d{2}/g;
const cpfs = [
  '000-000-000-00',
  '000.000.000.00',
  '000.000.000-00',
  '000000000-00',
  '00000000000'
];

for (cpf of cpfs) {
  console.log(cpf, cpf.match(regexCpf));
}