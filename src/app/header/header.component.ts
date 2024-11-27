import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {} 
    navigateToCadastro() {
      this.router.navigate(['/cadastro'])
    }

  }


