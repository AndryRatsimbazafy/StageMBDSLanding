import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss'],
})
export class ConferenceComponent implements OnInit {
  conferenceList = [
    {
      title: `Vendredi 7 mai, 12h : Rénovation énergétique, par où commencer ?`,
      content: `Vous souhaitez procéder à une rénovation énergétique ? Sachez qu’une rénovation globale sera la meilleure solution
  pour réduire votre facture énergétique. L’isolation est un point crucial à ne pas négliger, vous découvrirez notamment
  lors de cette conférence quel sont les endroits du bâti à isoler en priorité. Rendez-vous le 7 mai à 12h !`,
    },
    {
      title: `Samedi 8 mai, 11h : Bien déchiffrer un devis`,
      content: `L’un des prérequis indispensables pour éviter les arnaques lors de la réalisation de travaux est de signer un devis en
      bonne et due forme. Mais encore faut-il le comprendre ! Nous vous proposons un décryptage pour bien déchiffrer et
      vérifier toutes les lignes !`
    },
    {
      title: `Samedi 8 mai, 15h : Bien sécuriser son logement`,
      content: `« Personne n’est à l’abri d’un cambriolage… C’est pourquoi il est important de bien sécuriser son logement. Lors de
      cette conférence, nous vous présenterons les différentes solutions qui vous permettent de limiter les risques : les portes
      blindées, les serrures sécurisées ou encore les appareils connectés.`
    },
    {
      title: `Dimanche 9 mai, 11h : Aménager un extérieur pratique et multifonctions`,
      content: `En été ou hiver, votre espace extérieur est un endroit unique pour vivre des instants privilégiés en famille et entre amis.
      L’aménager, l’organiser et créer des espaces avec des fonctions précises vous permettra de l’optimiser au mieux. Une
      conférence pour concevoir votre ’espace extérieur idéal !`
    },
    {
      title: `Samedi 15 mai, 11h : Changer sa chaudière, ce qu’il faut savoir`,
      content: `La chaudière est un équipement essentiel du foyer. Un certain nombre de questions techniques se posent lorsqu’il est
      temps de la changer. Lors de cette conférence, Engie fournisseur d’énergie, et Ariston fabriquant d’appareil de
      chauffage, vous exposeront leurs conseils pour faire le bon choix.`
    },
    {
      title: `Dimanche 16 mai, 11h : Déco&aménagement : les clés pour optimiser l’espace`,
      content: `Les mètres carrés sont une denrée rare aussi faut-il les optimiser. Comment y parvenir sans dépenser un important
      budget ? Une sélection d’experts spécialisés en décoration et en aménagement vous donnent des conseils et astuces
      pour toutes les pièces de la maison.`
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
