import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError} from 'rxjs'
import { retry, catchError } from 'rxjs/operators';
//import { from } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  //injetando o HTTPCLIENT
  url = 'http://localhost:3000/ofertas'

  constructor(private http: HttpClient){}

  //HEADERS
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  //obtem todas as ofertas

  getOfertas(): Observable<any[]>{
  
    //return this.ofertas
    //efetuar uma requisicao http
    return this.http.get<any[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))}
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
  
    //.toPromise()
   // .then((resposta: any) => resposta.json())
    //retornar um promisse Oferta
  }
  
 
