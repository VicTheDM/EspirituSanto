import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'EspirituSanto';
  selector:number = 0
  selectPage(page:string){
    
  }
  
  constructor(
    private router : Router, 
    public route: ActivatedRoute,
    private titleService: Title,
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let currentRoute:any  = this.router.routerState.snapshot.root;
        const routeTitles = [];
    
        // Mientras haya un hijo, sigue recorriendo la estructura de rutas
        do {
          // Si existe un título en los datos de la ruta, lo agrega al arreglo
          if (currentRoute.data['title']) {
            routeTitles.push(currentRoute.data['title']);
          }
          // Avanza al siguiente hijo
          currentRoute = currentRoute.firstChild;
        } while (currentRoute);
    
        // Une los títulos recolectados con " - " como separador
        return routeTitles.length ? routeTitles.join(' - ') : null;
      })
    ).subscribe((title: string|null) => {
      if (title) {
        // Prepende "PCM - " al título final
        this.titleService.setTitle(`Espiritu santo`);
      }
    });
  }

}
