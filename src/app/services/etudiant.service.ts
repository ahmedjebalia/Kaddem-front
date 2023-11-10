import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../models/etudiant";

@Injectable()
export class EtudiantService {
  constructor(private http: HttpClient) {}

  private etudiantUrl = 'http://localhost:8089/Kaddem/etudiant';

  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.etudiantUrl+`/add-etudiant`, etudiant);
  }

  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.etudiantUrl+`/retrieve-all-etudiants`);
  }

}
