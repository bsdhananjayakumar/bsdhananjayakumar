import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define interfaces for the API responses
export interface Ville {
  id: number;
  name: string;
  _links: {
    cinemas: { href: string };
  };
}

export interface Cinema {
  id: number;
  name: string;
  _links: {
    salles: { href: string };
  };
}

export interface Salle {
  id: number;
  name: string;
  _links: {
    projections: { href: string };
  };
  projections?: Projection[]; // Optional property to hold projections
}


export interface Projection {
  id: number;
  movie: string;
  tickets: any[];
  _links: {
    tickets: { href: string };
  };
}

@Injectable({
  providedIn: 'root',
})
export class CinemasService {
  public host: string = 'http://199.192.21.20:8383';

  constructor(private http: HttpClient) {}

  // Fetch list of villes
  public getVilles(): Observable<Ville[]> {
    return this.http.get<Ville[]>(`${this.host}/villes`);
  }

  // Fetch list of cinemas for a given ville
  public getCinemas(v: Ville): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(v._links.cinemas.href);
  }

  // Fetch list of salles for a given cinema
  public getSalles(c: Cinema): Observable<Salle[]> {
    return this.http.get<Salle[]>(c._links.salles.href);
  }

  // Fetch list of projections for a given salle
  public getProjections(salle: Salle): Observable<Projection[]> {
    const url = salle._links.projections.href.replace('{?projection}', '');
    return this.http.get<Projection[]>(`${url}?projection=p1`);
  }

  // Fetch ticket places for a given projection
  public getTicketPlaces(p: Projection): Observable<any[]> {
    const url = p._links.tickets.href.replace('{?projection}', '');
    return this.http.get<any[]>(`${url}?projection=ticketProj`);
  }

  // Make a payment for selected tickets
  public payerTickets(dataForm: any): Observable<void> {
    return this.http.post<void>(`${this.host}/payerTickets`, dataForm);
  }
}
