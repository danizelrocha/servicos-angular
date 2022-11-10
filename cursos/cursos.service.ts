import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'Phonegap', 'Gilson','Alef', 'Daniel']

 // private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];
 // logService: any;
  constructor(private LogService: LogService){
       console.log('CursosService');
  }

   getCursos() {
    this.LogService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
    //return this.cursos;
  }
 addCursos(curso: string){
   this.LogService.consoleLog(`Criando um novo curso ${curso}`);
   this.cursos.push(curso);
   this.emitirCursoCriado.emit(curso);
   CursosService.criouNovoCurso.emit(curso);
  }
}
