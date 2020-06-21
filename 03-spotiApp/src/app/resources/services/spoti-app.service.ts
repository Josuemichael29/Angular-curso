import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CONSTANTES } from '../modules/CONSTANTES';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotiAppService {

    private constantes: CONSTANTES = new CONSTANTES();


    constructor(private http: HttpClient
    ) { }

    getQuery(query: string) {
        const url = 'https://api.spotify.com/v1' + query;
        const header = new HttpHeaders({
            Authorization: 'Bearer ' + this.constantes.TOKEN_AUTHORIZATION
        });

        return this.http.get(url, { headers: header });
    }

    obtenerNuevasCanciones() {
        return this.getQuery('/browse/new-releases').pipe(
            map(data => {
                return data['albums'].items;
            })
        );
    }

    buscarArtista(artista: string) {
        return this.getQuery('/search?q=' + artista + '&type=artist').pipe(
            map(data => {
                return data['artists'].items;
            })
        );
    }

}