import { Component, OnInit } from '@angular/core';
import { SpotiAppService } from '../../resources/services/spoti-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nuevasCanciones: any[] = [];

  constructor(private spotiAppService: SpotiAppService) { }

  obtenerCanciones() {
    this.spotiAppService.obtenerNuevasCanciones().subscribe(
      data => {
        this.nuevasCanciones = data;
        //console.log(this.nuevasCanciones);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.obtenerCanciones();
  }

}
