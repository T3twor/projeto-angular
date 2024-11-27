import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CadastroComponent } from '../app/cadastro/cadastro.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
];
