const PRE_NATAL = {
  descricao: 'Pre-natal',
  pontuacao: 10,
};

const PEDIATRIA = {
  descricao: 'Pediatria',
  pontuacao: 10,
};

const GINECOLOGIA = {
  descricao: 'Ginecologia',
  pontuacao: 15,
};

export const TIPOS_CONSULTA = {
  [PRE_NATAL.descricao]: PRE_NATAL,
  [PEDIATRIA.descricao]: PEDIATRIA,
  [GINECOLOGIA.descricao]: GINECOLOGIA,
};
