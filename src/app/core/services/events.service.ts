import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Event} from '@models/event';
import { environment } from '@env';
import { EventData } from '@models/event-data';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  jsonUrl = '/assets/json/events.json'
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event>{
    return this.http.get<Event>(this.jsonUrl);
  }

  createEvent(data: EventData): Observable<EventData>{
    return this.http.post<EventData>(`${this.API_URL}/event/create`, data);
  }
}
