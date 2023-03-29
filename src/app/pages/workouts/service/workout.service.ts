import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Train, Workout } from './../interface/workout';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor(private http: HttpClient) {}

  public getWorkouts(): Observable<Train[]> {
    return this.http
      .get<any>(
        'http://34.202.235.236:1337/api/treinos?populate=Exercicios.instrucao'
      )
      .pipe(
        map((response) => {
          const treinosData = response.data.map(
            (treinos: any) => treinos.attributes.Exercicios
          );

          const treinos: Train[] = treinosData.map((treino: any) => {
            return treino.map((item: any) => {
              console.log(item)


              const workout: Workout = {
                id: item.id,
                nome: item.nome,
                repeticoes: item.repeticoes,
                descanso: item.descanso,
                descricao: item.descricao,
                url: item.instrucao.data.attributes.url,
              };

              return workout;
            });
          });

          return treinos
        })
      );
  }
}
