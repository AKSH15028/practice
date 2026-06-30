import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  isLoggedIn(): boolean {
    // Check if the token exists in localStorage
    return localStorage.getItem('userToken') !== null;
  }

  openProfile() {
    
  }
}
