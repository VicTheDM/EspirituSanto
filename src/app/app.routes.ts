import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/views/Inicio/inicio.component';
import { GaleriaComponent } from './components/views/Galeria/galeria.component';
import { AcercaComponent } from './components/views/Acerca/acerca.component';
import { ContactoComponent } from './components/views/Contacto/contacto.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
      {path: 'inicio' , component: InicioComponent},
      // {path: 'hero' , component: ContactDetailComponent},
      {path: 'galeria' , component: GaleriaComponent},
      {path: 'acerca' , component: AcercaComponent},
      {path: 'contacto' , component: ContactoComponent},
      {path: 'testingStuff',pathMatch: 'full',redirectTo: 'inicio'},
      {path: '**',component: InicioComponent,}, // Aqui iria el nofound page];
]
