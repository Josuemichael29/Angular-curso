import { Component, OnInit } from '@angular/core';
import { SpotiAppService } from '../../resources/services/spoti-app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public readonly PLACEHOLDER_BUSCAR = 'Buscar Artista';
  public artistaEncontrados: any[] = [];

  constructor(private spotiAppService: SpotiAppService) { }

  buscar(artista: string) {
    this.spotiAppService.buscarArtista(artista).subscribe(
      data => {
        this.artistaEncontrados = data;
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
