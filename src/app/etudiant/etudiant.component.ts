import {Component} from '@angular/core';
import {Etudiant, Option} from "../models/etudiant";
import {EtudiantService} from "../services/etudiant.service";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  newEtudiant: Etudiant = {prenomE:"",nomE:"",op:Option.GAMIX};
  // etudiant!: Etudiant;
  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) {
  }

  ngOnInit(): void {
    this.getEtudiants();
  }

  addEtudiant() {
    this.etudiantService.addEtudiant(this.newEtudiant)
      .subscribe((etudiant) => {
        this.etudiants.push(etudiant);
        this.newEtudiant = {prenomE:"",nomE:"",op:Option.GAMIX};
      });
  }

  getEtudiants() {
    this.etudiantService.getEtudiants()
      .subscribe((etudiants) => {
        this.etudiants = etudiants;
      });
  }
}
