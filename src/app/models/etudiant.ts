export interface Etudiant {
  idEtudiant?: number;
  prenomE?: string;
  nomE?: string;
  op?: Option;
}

export enum Option {
  GAMIX,
  SE,
  SAE,
  INFINI
}
