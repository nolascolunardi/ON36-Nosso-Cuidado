const PRE_NATAL = {
  descricao: 'Pre-natal',
  pontuacao: 10,
};

const PEDIATRIA = {
  descricao: 'Pediatria',
  pontuacao: 5,
};

const GINECOLOGIA = {
  descricao: 'Ginecologia',
  pontuacao: 5,
};

export const TIPOS_CONSULTA = {
  PRE_NATAL,
  [PEDIATRIA.descricao]: PEDIATRIA,
  'Pre-natal': GINECOLOGIA,
};
