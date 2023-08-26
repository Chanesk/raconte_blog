import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Raconte } from '../model/raconte.model';

@Injectable({
  providedIn: 'root',
})
export class raconteService {
  racontes:Raconte[] = [
          {
            id: 0,
            title: 'Le casse tête',
            image:
              'https://res.cloudinary.com/dzhpzsyog/image/upload/v1691879475/raconte/adrian-moise-CUxKEcbyE4c-unsplash_hisqg6.jpg',
            createdDate: new Date(),
            content:
              "Installée dans son salon, une femme âgée vivant seule décida de faire un casse-tête pour passer le temps. C'était la nuit où l'obscurité et la noirceur totale prenaient toute la place autour de ces lieux.Soudain, une impression étrange la saisit: au fur et à mesure qu'elle avançait dans son casse-tête et assemblait les pièces, elle reconnaît peu à peu dans son puzzle le décor de son propos salon... puis de sa télévision... puis d'elle-même vue de face! De plus en plus fébrile et prise d'une curiosité sans précédent, elle décida quand même de continuer.Les dernièrs derniers morceaux qu'elle assembla furent ceux qui illustraient la fenêtre qui se trouvait derrière elle. La toute dernière pièce du casse-tête quant à elle, montrait le coin de la fenêtre avec le visage terrifiant d'un homme la regardant!",
            category: {
              id: 0,
              name: 'horreur',
            },
            user: {
              id: 0,
              name: 'charlene',
              email: 'chanesK@gmail.com',
              imgUrl:
                'https://res.cloudinary.com/dzhpzsyog/image/upload/v1692472827/raconte/Copie_de__VAN6376_dlgezb.jpg',
            },
          },
          {
            id: 1,
            title: 'D’où viennent les vampires',
            image:
              'https://res.cloudinary.com/dzhpzsyog/image/upload/v1691879393/raconte/sander-sammy-X_FiOMrGBGk-unsplash_kurtrv.jpg',
            createdDate: new Date(),
            content:
              'Nombreuses furent les civilisations dans lesquelles la peur des vampires se propagea au fil des siècles. Les plus connus d’entre eux viennent toutefois peut-être d’Europe. La folie des vampires s’empara du Vieux Continent après un épisode assez singulier. En 1725, en rentrant chez lui, dans le village serbe de Kisilova, Peter Plogojowitz demanda à son fils de lui servir à manger (une autre version dit qu’il aurait demandé une paire de chaussures à sa femme). Jusque-là, rien d’anormal. Sauf que Peter Plogojowitz était mort trois jours auparavant. Dans les jours qui suivirent, son fils trouva lui aussi la mort. Puis ce fut au tour de neuf autres villageois qui affirmèrent sur leur lit de mort que Plogojowitz les avait étranglés avant de sucer leur sang.Quand les villageois exhumèrent sa dépouille, ils s’aperçurent qu’il n’avait pas commencé à se décomposer et que sa bouche était maculée de sang. Terrifiés, ils enfoncèrent un pieu dans son cœur. Du sang s’écoula alors de sa bouche et de ses oreilles, et ils décidèrent de le brûler pour ne pas tenter le diable. La nouvelle de sa mort, de son retour puis de sa nouvelle mort se propagea à la vitesse de l’éclair en Allemagne, en France et en Angleterre, provoquant l’effroi de tout un chacun.',
            category: {
              id: 0,
              name: 'fiction',
            },
            user: {
              id: 0,
              name: 'charlene',
              email: 'chanesK@gmail.com',
              imgUrl:
                'https://res.cloudinary.com/dzhpzsyog/image/upload/v1692472827/raconte/Copie_de__VAN6376_dlgezb.jpg',
            },
          },
          {
            id: 2,
            title: 'L’amour et la liberté',
            image:
              'https://res.cloudinary.com/dzhpzsyog/image/upload/v1691879362/raconte/scott-broome-BcVvVvqiCGA-unsplash_idhhq4.jpg',
            createdDate: new Date(),
            content:
              'Sophie et Paul, tous deux 28 ans En couple depuis 8 ans déjà, ils s’aiment avec force et sérénité. Si fort, que vivre très loin de l’autre ne leur fait pas peur. Il y a deux ans, Sophie est partie vivre à Washington pour y suivre un cours de philo très réputé, et Paul est parti de son côté en Malaisie, travailler dans une association humanitaire.Des milliers de kilomètres les séparent, souvent ils se manquent (ils ne se voient que tous les 4-6 mois), mais ils ont fait ce choix sans hésiter. Parce qu’ils savent avec certitude que leur amour est solide. A toute épreuve.',
            category: {
              id: 0,
              name: 'fait réel',
            },
            user: {
              id: 0,
              name: 'charlene',
              email: 'chanesK@gmail.com',
              imgUrl:
                'https://res.cloudinary.com/dzhpzsyog/image/upload/v1692472827/raconte/Copie_de__VAN6376_dlgezb.jpg',
            },
          },
          {
            id: 3,
            title:
              'Betty Hill, première femme à avoir rencontré les extraterrestres',
            image:
              'https://res.cloudinary.com/dzhpzsyog/image/upload/v1691879395/raconte/daniel-ZK0uz8cjdMs-unsplash_jtgoms.jpg',
            createdDate: new Date(),
            content:
              'Dans le rétroviseur, Betty aperçoit d’une lumière très forte, qui danse dans le ciel juste au-dessus des White Mountains. «Je savais qu’il ne s’agissait pas d’un avion, dira-t-elle plus tard. Elle bougeait bizarrement.» Barney sort les jumelles et aperçoit distinctement des rangées de hublots et les silhouettes de plusieurs occupants. Paniqué, le couple repart en trombe dans une série de bips étranges qui font vibrer la voiture.Une fois rentrés chez eux, ils remarquent certains détails troublants: leurs montres se sont arrêtées, la robe de Betty présente des taches roses, la carrosserie de leur voiture est abîmée, les chaussures de Barney sont déchirées et il se plaint de douleurs étranges… Épuisés, ils dorment quarante-huit heures d’affilée. Deux jours plus tard, Betty appelle la base militaire voisine de Pease pour signaler l’incident, qui lui confirme avoir capté cette nuit-là «quelque chose» sur les radars. Des avions de chasse auraient même effectué une mission de reconnaissance. Walter Webb, un enquêteur du NICAP –National Investigations Committee on Aerial Phenomena (l’association américaine de recherche sur les ovnis)– est aussitôt envoyé pour recueillir son témoignage. Mais il y a un gros trou dans le récit du couple: deux heures pendant lesquelles aucun des époux ne se souvient de ce qu’il s’est passé, entre leur fuite en voiture et leur arrivée chez eux.',
            category: {
              id: 0,
              name: 'fiction',
            },
            user: {
              id: 0,
              name: 'charlene',
              email: 'chanesK@gmail.com',
              imgUrl:
                'https://res.cloudinary.com/dzhpzsyog/image/upload/v1692472827/raconte/Copie_de__VAN6376_dlgezb.jpg',
            },
          },
          {
            id: 4,
            title: 'La voisine',
            image:
              'https://res.cloudinary.com/dzhpzsyog/image/upload/v1691879477/raconte/aaron-blanco-tejedor-VBe9zj-JHBs-unsplash_pfkzu1.jpg',
            createdDate: new Date(),
            content:
              "C'est un jeune homme qui habitait dans un immeuble à logement. Une nuit, quelqu'un frappa à sa porte et il se lèva pour aller ouvrir: une femme se trouvait devant lui. Cette dernière lui demanda timidement si elle pouvait passer la nuit chez lui, car son conjoint la battait et elle s'était enfuit. Elle le rassura en mentionnant qu'elle avait appelé sa famille et qu'ils viendront la chercher dès le lendemain matin. Compatissant, le jeune homme lui offrit donc une couverture et lui suggèra de passer la nuit sur le divan dans le salon.Au réveil, la couverture est pliée et bien rangée sur le coin du sofa et la jeune femme semble avoir quitté les lieux. Le jeune homme se prépara et parti donc travailler. Le soir suivant, on frappe à nouveau à sa porte. C'est encore la même femme, mais cette fois, son visage porte des marques de violence. Elle lui demande à nouveau l'hospitalité. Incapable de refuser, le jeune homme lui propose de dormir au même endroit que la nuit précédente. Au petit matin, même manège: elle n'est plus là. Cette situation se répète tout au long de la semaine. Inquiet, le jeune homme décida de se rendre au poste de police pour expliquer la situation. Un agent lui montra alors une photo sur laquelle il reconnaît la femme. La police lui apprend alors que cette femme a été battue à mort par son conjoint, dans son appartement quelques temps auparavant...",
            category: {
              id: 0,
              name: 'horreur',
            },
            user: {
              id: 0,
              name: 'charlene',
              email: 'chanesK@gmail.com',
              imgUrl:
                'https://res.cloudinary.com/dzhpzsyog/image/upload/v1692472827/raconte/Copie_de__VAN6376_dlgezb.jpg',
            },
          },
          {
            id: 5,
            title:
              'Être ami avec ses collègues, la clé du bonheur au travail ?',
            image:
              'https://res.cloudinary.com/dzhpzsyog/image/upload/v1691879475/raconte/christina-wocintechchat-com-eF7HN40WbAQ-unsplash_gfl7gn.jpg',
            createdDate: new Date(),
            content:
              "De belles histoires humaines se développent au bureau, dans le rush d’un dossier à rendre ou autour de la machine à café. Après tout, on passe plus de temps avec ses collègues qu’avec sa famille. “On partage des moments de complicité autour de projets professionnels. L’humour et la solidarité contribuent naturellement à cimenter l’équipe”, soutient Laure Becker, consultante au sein du cabinet Diversity Conseil et coach en leadership et management.Lauranne Weill, 31 ans, cheffe d’un labo de design ergonomique et intrapreneuse chez PSA Peugeot Citroën, peut en témoigner : 'J’ai monté une startup au sein du groupe avec deux collègues : ils sont devenus mes meilleurs amis. On travaillait le soir et les weekends sur notre projet, on se stimulait intellectuellement et émotionnellement… Aujourd’hui, je ne les imagine pas hors de ma vie.'",
            category: {
              id: 0,
              name: 'fait réel',
            },
            user: {
              id: 0,
              name: 'charlene',
              email: 'chanesK@gmail.com',
              imgUrl:
                'https://res.cloudinary.com/dzhpzsyog/image/upload/v1692472827/raconte/Copie_de__VAN6376_dlgezb.jpg',
            },
          },
        ];

  getAllRaconte(): Raconte[] {
    return this.racontes;
  }
  getRaconteById(raconteId: number): Raconte {
    const raconte = this.racontes.find((raconte) => raconte.id === raconteId);
    if (!raconte) {
      throw new Error('Raconte not found!');
    } else {
      return raconte;
    }
  }
}
