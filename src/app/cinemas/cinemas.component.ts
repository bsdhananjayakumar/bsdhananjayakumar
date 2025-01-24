import { Component, OnInit } from '@angular/core';
import { CinemasService, Ville, Cinema, Salle } from '../services/cinemas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {
  public villes: Ville[] = [];
  public cinemas: Cinema[] = [];
  public salles: Salle[] = [];
  public currentVille!: Ville;
  public currentCinema!: Cinema;
  public currentProjection: { tickets: any[] } = { tickets: [] };
  public selectedTickets: any[] = [];

  constructor(public cinemaService: CinemasService) {}

  ngOnInit(): void {
    this.cinemaService.getVilles().subscribe({
      next: (data: Ville[]) => {
        this.villes = data;
      },
      error: (err) => {
        console.error('Error fetching villes:', err);
      },
    });
  }

  public onGetCinemas(v: Ville): void {
    this.currentVille = v;
    this.salles = [];
    this.cinemaService.getCinemas(v).subscribe({
      next: (data: Cinema[]) => {
        this.cinemas = data;
      },
      error: (err) => {
        console.error('Error fetching cinemas:', err);
      },
    });
  }

  public onGetSalles(c: Cinema): void {
    this.currentCinema = c;
    this.cinemaService.getSalles(c).subscribe({
      next: (data: Salle[]) => {
        this.salles = data;
        this.salles.forEach((salle) => {
          this.cinemaService.getProjections(salle).subscribe({
            next: (projections) => {
              salle.projections = projections;
            },
            error: (err) => {
              console.error('Error fetching projections:', err);
            },
          });
        });
      },
      error: (err) => {
        console.error('Error fetching salles:', err);
      },
    });
  }

  // Other methods remain unchanged...
}
