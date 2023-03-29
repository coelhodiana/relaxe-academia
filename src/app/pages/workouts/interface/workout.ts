export interface Train {
  workouts: Workout[]
}

export interface Workout {
  id: number;
  nome: string;
  descricao: string;
  repeticoes: string;
  descanso: string;
  url: string;
}
