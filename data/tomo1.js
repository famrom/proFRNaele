const TOMO1 = {
  id: "tomo1",
  title: "Tomo 1 — Naele",
  comic: {
    pages: [
      {
        page: 0,
        panels: [
          { id: "cover", img: "images/tomo1/cover/portada.jpg", isCover: true, lines: [] }
        ]
      },
      {
        page: 1,
        panels: [
          { id: 1, img: "images/tomo1/comic/pagina01/panel_01.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "C'est le moment... Je pars en France.", type: "dialogue" }
          ]},
          { id: 2, img: "images/tomo1/comic/pagina01/panel_02.jpg", lines: [
            { speaker: "Margot", color: "#4B3F72", text: "Tu vas me manquer, Naele ! Au revoir !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele dit au revoir à sa meilleure amie Margot.", type: "narration" }
          ]},
          { id: 3, img: "images/tomo1/comic/pagina01/panel_03.jpg", lines: [
            { speaker: "Père", color: "#2F6F4E", text: "Bon voyage, ma fille ! À bientôt !", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Au revoir, maman ! Au revoir, papa !", type: "dialogue" }
          ]},
          { id: 4, img: "images/tomo1/comic/pagina01/panel_04.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Salut, Séville ! Bonjour, la France !", type: "dialogue" }
          ]},
          { id: 5, img: "images/tomo1/comic/pagina01/panel_05.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "VROOOOOM !", type: "sfx", sfxType: "engine" }
          ]},
          { id: 6, img: "images/tomo1/comic/pagina01/panel_06.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "J'étudie le français. Je parle un peu. Je suis prête.", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele voyage seule vers son destin.", type: "narration" }
          ]},
          { id: 7, img: "images/tomo1/comic/pagina01/panel_07.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "CRACK ! BOOM !", type: "sfx", sfxType: "thunder" }
          ]},
          { id: 8, img: "images/tomo1/comic/pagina01/panel_08.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Qu'est-ce que c'est ?!", type: "dialogue" }
          ]},
          { id: 9, img: "images/tomo1/comic/pagina01/panel_09.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "CRRRRRH !", type: "sfx", sfxType: "screech" }
          ]},
          { id: 10, img: "images/tomo1/comic/pagina01/panel_10.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Je suis à Nantes ? Les vêtements sont étranges...", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "L'atterrissage en France est très bizarre.", type: "narration" }
          ]},
          { id: 11, img: "images/tomo1/comic/pagina01/panel_11.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Quoi ?! Pas d'Internet ? Pas de réseau ?! C'est une blague ?", type: "dialogue" }
          ]},
          { id: 12, img: "images/tomo1/comic/pagina01/panel_12.jpg", lines: [
            { speaker: "Homme", color: "#2F6F4E", text: "Bonjour ! Tu es Naele ?", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "La famille d'accueil attend Naele à l'aéroport.", type: "narration" }
          ]}
        ]
      },
      {
        page: 2,
        panels: [
          { id: 13, img: "images/tomo1/comic/pagina02/panel_01.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "Bonjour ! Tu es Naele ?", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Oui... Bonjour. Je suis Naele.", type: "dialogue" }
          ]},
          { id: 14, img: "images/tomo1/comic/pagina02/panel_02.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "Bienvenue en France ! Je suis le père de Madou. Je m'appelle Félix.", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele utilise ses premières phrases de survie en français.", type: "narration" }
          ]},
          { id: 15, img: "images/tomo1/comic/pagina02/panel_03.jpg", lines: [
            { speaker: "Séverine", color: "#A1527A", text: "Enchantée, Naele ! Je m'appelle Séverine, je suis la mère.", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Enchantée, Séverine,", type: "dialogue" }
          ]},
          { id: 16, img: "images/tomo1/comic/pagina02/panel_04.jpg", lines: [
            { speaker: "Séverine", color: "#A1527A", text: "Nous sommes très heureux ! Tu parles français ?", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Je parle un peu... Je suis fatiguée.", type: "dialogue" }
          ]},
          { id: 17, img: "images/tomo1/comic/pagina02/panel_05.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "Pas de problème ! Vous êtes fatiguées, les filles. On y va.", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Merci, Félix.", type: "dialogue" }
          ]},
          { id: 18, img: "images/tomo1/comic/pagina02/panel_06.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "C'est impossible... Pourquoi le téléphone affiche '1992' ? Bug de réseau ?", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele ne comprend pas le problème avec son téléphone.", type: "narration" }
          ]},
          { id: 19, img: "images/tomo1/comic/pagina02/panel_07.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "BIP... CLAC.", type: "sfx", sfxType: "beep" },
            { speaker: "Naele", color: "#B23A48", text: "Oh non ! Plus de batterie ?", type: "dialogue" }
          ]},
          { id: 20, img: "images/tomo1/comic/pagina02/panel_08.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Ton sac est super cool ! C'est quelle marque ?", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "C'est... une marque espagnole.", type: "dialogue" }
          ]},
          { id: 21, img: "images/tomo1/comic/pagina02/panel_09.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Tu as quel âge, Madou ?", type: "dialogue" },
            { speaker: "Madou", color: "#C77D1E", text: "J'ai 12 ans ! Et toi ?", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "J'ai 12 ans aussi.", type: "dialogue" }
          ]},
          { id: 22, img: "images/tomo1/comic/pagina02/panel_10.jpg", lines: [
            { speaker: "Narrateur", color: "#5B5548", text: "Tout semble vieux autour d'elle dans l'aéroport.", type: "narration" }
          ]},
          { id: 23, img: "images/tomo1/comic/pagina02/panel_11.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Une vieille publicité ?", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele pense encore à une mauvaise blague.", type: "narration" }
          ]},
          { id: 24, img: "images/tomo1/comic/pagina02/panel_12.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "La voiture est sur le parking. Allez, en route !", type: "dialogue" }
          ]}
        ]
      },
      {
        page: 3,
        panels: [
          { id: 25, img: "images/tomo1/comic/pagina03/panel_01.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Attendez... un moment, s'il vous plaît.", type: "dialogue" }
          ]},
          { id: 26, img: "images/tomo1/comic/pagina03/panel_02.jpg", lines: [
            { speaker: "Narrateur", color: "#5B5548", text: "Un simple bout de papier va faire basculer sa réalité.", type: "narration" }
          ]},
          { id: 27, img: "images/tomo1/comic/pagina03/panel_03.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "FRRRR", type: "sfx", sfxType: "rustle" }
          ]},
          { id: 28, img: "images/tomo1/comic/pagina03/panel_04.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Vingt-deux... janvier... mille neuf cent quatre-vingt-douze ?!", type: "dialogue" }
          ]},
          { id: 29, img: "images/tomo1/comic/pagina03/panel_05.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Ce n'est pas possible... Je suis partie le 22 janvier 2027 !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele découvre une vérité impossible : elle est en 1992.", type: "narration" }
          ]},
          { id: 30, img: "images/tomo1/comic/pagina03/panel_06.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Naele ? Ça va ? Tu es toute pâle !", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Le... le journal... Quelle est la date aujourd'hui ?", type: "dialogue" }
          ]},
          { id: 31, img: "images/tomo1/comic/pagina03/panel_07.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Bah, le 22 janvier ! C'est l'hiver ! 1992, évidemment !", type: "dialogue" }
          ]},
          { id: 32, img: "images/tomo1/comic/pagina03/panel_08.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Non... non, non, non ! C'est un cauchemar ! Je suis dans le passé ?!", type: "dialogue" },
            { speaker: "SFX", color: "#8A7B4E", text: "FLAP", type: "sfx", sfxType: "whoosh" },
            { speaker: "Narrateur", color: "#5B5548", text: "Le choc est trop grand. Son esprit refuse d'y croire.", type: "narration" }
          ]},
          { id: 33, img: "images/tomo1/comic/pagina03/panel_09.jpg", lines: [
            { speaker: "Séverine", color: "#A1527A", text: "Oh là là, tu es blanche comme un linge ! Félix, elle fait un malaise !", type: "dialogue" }
          ]},
          { id: 34, img: "images/tomo1/comic/pagina03/panel_10.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "Il y a un café juste là. Vite, un sucre pour Naele !", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Je... oui... un verre d'eau...", type: "dialogue" }
          ]},
          { id: 35, img: "images/tomo1/comic/pagina03/panel_11.jpg", lines: [
            { speaker: "Narrateur", color: "#5B5548", text: "La famille d'accueil aide Naele face au choc.", type: "narration" }
          ]},
          { id: 36, img: "images/tomo1/comic/pagina03/panel_12.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "Assieds-toi ici. Papa commande une boisson.", type: "dialogue" }
          ]}
        ]
      },
      {
        page: 4,
        panels: [
          { id: 37, img: "images/tomo1/comic/pagina04/panel_01.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "Tu AS soif ? Tu es fatiguée du voyage ?", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Oui... Un peu. Je ne comprends pas.", type: "dialogue" }
          ]},
          { id: 38, img: "images/tomo1/comic/pagina04/panel_02.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "Voilà ! Un soda pour Naele. C'est bon pour l'énergie !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Félix apporte une boisson fraîche pour calmer le stress de Naele.", type: "narration" }
          ]},
          { id: 39, img: "images/tomo1/comic/pagina04/panel_03.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Fido Dido ? C'est incroyable... Cette mascotte est partout.", type: "dialogue" }
          ]},
          { id: 40, img: "images/tomo1/comic/pagina04/panel_04.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "GLOU... GLOU...", type: "sfx", sfxType: "sip" },
            { speaker: "Naele", color: "#B23A48", text: "Merci, Félix. Le soda est très bon.", type: "dialogue" }
          ]},
          { id: 41, img: "images/tomo1/comic/pagina04/panel_05.jpg", lines: [
            { speaker: "Narrateur", color: "#5B5548", text: "Le serveur du bar ressemble à un acteur de cinéma français.", type: "narration" }
          ]},
          { id: 42, img: "images/tomo1/comic/pagina04/panel_06.jpg", lines: [
            { speaker: "Séverine", color: "#A1527A", text: "Tu es stressée ? La France est un beau pays, ne t'inquiète pas !", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Oui, merci Séverine. Je suis contente d'être ici.", type: "dialogue" }
          ]},
          { id: 43, img: "images/tomo1/comic/pagina04/panel_07.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "Allez, direction la voiture ! Vannes est à une heure d'ici.", type: "dialogue" }
          ]},
          { id: 44, img: "images/tomo1/comic/pagina04/panel_08.jpg", lines: [
            { speaker: "Narrateur", color: "#5B5548", text: "La famille marche vers la voiture sur le parking de l'aéroport.", type: "narration" }
          ]},
          { id: 45, img: "images/tomo1/comic/pagina04/panel_09.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Pas d'écran tactile... pas de GPS... C'est une vraie voiture ancienne !", type: "dialogue" }
          ]},
          { id: 46, img: "images/tomo1/comic/pagina04/panel_10.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "CLAC !", type: "sfx", sfxType: "clack" },
            { speaker: "Narrateur", color: "#5B5548", text: "Pas de Bluetooth. Félix utilise une vieille cassette de musique.", type: "narration" }
          ]},
          { id: 47, img: "images/tomo1/comic/pagina04/panel_11.jpg", lines: [] },
          { id: 48, img: "images/tomo1/comic/pagina04/panel_12.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Ce n'est pas un rêve. Je suis vraiment en 1992. Comment est-ce possible ?!", type: "dialogue" }
          ]}
        ]
      },
      {
        page: 5,
        panels: [
          { id: 49, img: "images/tomo1/comic/pagina05/panel_01.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "Bienvenue à la maison ! Nous sommes à Vannes.", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "La maison familiale à Vannes est typique et très ancienne.", type: "narration" }
          ]},
          { id: 50, img: "images/tomo1/comic/pagina05/panel_02.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Waouh... La maison est très belle !", type: "dialogue" },
            { speaker: "Madou", color: "#C77D1E", text: "Merci ! Entrons, il fait froid dehors.", type: "dialogue" }
          ]},
          { id: 51, img: "images/tomo1/comic/pagina05/panel_03.jpg", lines: [
            { speaker: "Séverine", color: "#A1527A", text: "Installe-toi dans le salon, Naele.", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Merci, la maison est chaleureuse.", type: "dialogue" }
          ]},
          { id: 52, img: "images/tomo1/comic/pagina05/panel_04.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Naele, c'est mon frère et ma sœur !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Les présentations continuent dans le salon avec la famille.", type: "narration" }
          ]},
          { id: 53, img: "images/tomo1/comic/pagina05/panel_05.jpg", lines: [
            { speaker: "Frère", color: "#3D5A80", text: "Bonjour Naele ! Bienvenue !", type: "dialogue" },
            { speaker: "Sœur", color: "#7A9E7E", text: "Bonjour Naele ! Bienvenue !", type: "dialogue" }
          ]},
          { id: 54, img: "images/tomo1/comic/pagina05/panel_06.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Enchantée !", type: "dialogue" }
          ]},
          { id: 55, img: "images/tomo1/comic/pagina05/panel_07.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Qu'est-ce que c'est ?", type: "dialogue" }
          ]},
          { id: 56, img: "images/tomo1/comic/pagina05/panel_08.jpg", lines: [
            { speaker: "Narrateur", color: "#5B5548", text: "La technologie confirme la réalité de la situation.", type: "narration" }
          ]},
          { id: 57, img: "images/tomo1/comic/pagina05/panel_09.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "CLIC", type: "sfx", sfxType: "clack" }
          ]},
          { id: 58, img: "images/tomo1/comic/pagina05/panel_10.jpg", lines: [
            { speaker: "Présentateur", color: "#555555", text: "...Aujourd'hui, en ce mois de janvier 1992, l'actualité en France...", type: "dialogue" }
          ]},
          { id: 59, img: "images/tomo1/comic/pagina05/panel_11.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Les informations... La date... C'est officiel. Je suis bloquée dans le passé.", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele monte dans sa chambre pour découvrir son nouvel univers.", type: "narration" }
          ]},
          { id: 60, img: "images/tomo1/comic/pagina05/panel_12.jpg", lines: [
            { speaker: "Séverine", color: "#A1527A", text: "Tu es fatiguée, Naele. Madou, montre la chambre à Naele, s'il te plaît.", type: "dialogue" },
            { speaker: "Madou", color: "#C77D1E", text: "Oui, maman ! Suis-moi !", type: "dialogue" }
          ]}
        ]
      },
      {
        page: 6,
        panels: [
          { id: 61, img: "images/tomo1/comic/pagina06/panel_01.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Génial ! Tu as beaucoup de vêtements !", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Oui ! Et j'ai des cadeaux de Séville !", type: "dialogue" }
          ]},
          { id: 62, img: "images/tomo1/comic/pagina06/panel_02.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Regarde ! C'est de l'huile d'olive et du jambon d'Espagne.", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele apporte des spécialités d'Andalousie pour la famille.", type: "narration" }
          ]},
          { id: 63, img: "images/tomo1/comic/pagina06/panel_03.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Miam ! J'adore le jambon ! Merci Naele !", type: "dialogue" }
          ]},
          { id: 64, img: "images/tomo1/comic/pagina06/panel_04.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Et ça, c'est pour le frigo. Une danseuse de flamenco.", type: "dialogue" }
          ]},
          { id: 65, img: "images/tomo1/comic/pagina06/panel_05.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Waouh... Le plastique est bizarre... Le style est très original ! C'est très moderne !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Le style moderne de 2027 surprend beaucoup Madou.", type: "narration" }
          ]},
          { id: 66, img: "images/tomo1/comic/pagina06/panel_06.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Ah oui... En 1992, on ne fabrique pas des aimants comme ça.", type: "dialogue" }
          ]},
          { id: 67, img: "images/tomo1/comic/pagina06/panel_07.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Oh là là ! C'est quoi ce vêtement ? C'est incroyable ! Tu habilles comme ça en Espagne ?", type: "dialogue" }
          ]},
          { id: 68, img: "images/tomo1/comic/pagina06/panel_08.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Heu... oui. J'aime le style moderne.", type: "dialogue" },
            { speaker: "Madou", color: "#C77D1E", text: "En France, on ne porte pas ça ! C'est fantastique, on dirait un film de science-fiction !", type: "dialogue" }
          ]},
          { id: 69, img: "images/tomo1/comic/pagina06/panel_09.jpg", lines: [
            { speaker: "Séverine", color: "#A1527A", text: "Oh, merci Naele ! C'est magnifique ! Tu es très gentille.", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "De rien, Séverine.", type: "dialogue" }
          ]},
          { id: 70, img: "images/tomo1/comic/pagina06/panel_10.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Regarde Félix ! Cet objet est super drôle ! Quelle drôle de matière !", type: "dialogue" }
          ]},
          { id: 71, img: "images/tomo1/comic/pagina06/panel_11.jpg", lines: [
            { speaker: "Séverine", color: "#A1527A", text: "Ah oui, c'est amusant !", type: "dialogue" },
            { speaker: "Séverine", color: "#A1527A", text: "Naele, tu ranges tes affaires. Après, on mange !", type: "dialogue" },
            { speaker: "Madou", color: "#C77D1E", text: "Oui, maman ! Suis-moi !", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "D'accord, merci.", type: "dialogue" }
          ]},
          { id: 72, img: "images/tomo1/comic/pagina06/panel_12.jpg", lines: [
            { speaker: "Narrateur", color: "#5B5548", text: "Seule dans la pièce, la réalité du voyage temporel frappe à nouveau Naele.", type: "narration" }
          ]}
        ]
      },
      {
        page: 7,
        panels: [
          { id: 73, img: "images/tomo1/comic/pagina07/panel_01.jpg", lines: [
            { speaker: "Narrateur", color: "#5B5548", text: "Sur la table de nuit, un gros téléphone sans fil de l'époque.", type: "narration" }
          ]},
          { id: 74, img: "images/tomo1/comic/pagina07/panel_02.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Un téléphone fixe... sans fil. C'est le top de la technologie ici.", type: "dialogue" }
          ]},
          { id: 75, img: "images/tomo1/comic/pagina07/panel_03.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "CLIC... CLIC...", type: "sfx", sfxType: "clack" }
          ]},
          { id: 76, img: "images/tomo1/comic/pagina07/panel_04.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Mon portable ne marche pas. Mais... est-ce que je peux appeler l'Espagne avec ça ?", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele cherche une solution pour contacter sa maison.", type: "narration" }
          ]},
          { id: 77, img: "images/tomo1/comic/pagina07/panel_05.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "BIP... BOP... BEEP...", type: "sfx", sfxType: "beep" },
            { speaker: "Naele", color: "#B23A48", text: "S'il vous plaît... s'il vous plaît... Marche...", type: "dialogue" }
          ]},
          { id: 78, img: "images/tomo1/comic/pagina07/panel_06.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "Tûûût... Tûûût... Tûûût..", type: "sfx", sfxType: "ringtone" },
            { speaker: "Naele", color: "#B23A48", text: "Ça sonne ! Ça sonne en Espagne !", type: "dialogue" }
          ]},
          { id: 79, img: "images/tomo1/comic/pagina07/panel_07.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "CLIC.", type: "sfx", sfxType: "clack" },
            { speaker: "Papa", color: "#8B5E3C", text: "Allô ? Oui bonjour ?", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Le téléphone fixe traverse le temps et connecte le futur.", type: "narration" }
          ]},
          { id: 80, img: "images/tomo1/comic/pagina07/panel_08.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Papa ?! Papa, c'est moi ! Naele !", type: "dialogue" }
          ]},
          { id: 81, img: "images/tomo1/comic/pagina07/panel_09.jpg", lines: [
            { speaker: "Papa", color: "#8B5E3C", text: "Ah, Naele, ma chérie ! Tu es bien arrivée à Vannes ? Tout va bien avec la famille ?", type: "dialogue" }
          ]},
          { id: 82, img: "images/tomo1/comic/pagina07/panel_10.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Papa, écoute-moi ! Ce n'est pas normal ! Je ne suis pas en 2027 ! Je suis en 1992 !", type: "dialogue" }
          ]},
          { id: 83, img: "images/tomo1/comic/pagina07/panel_11.jpg", lines: [
            { speaker: "Papa", color: "#8B5E3C", text: "Hahaha ! En 1992 ? Tu as regardé un vieux film dans l'avion ? Tu es fatiguée du voyage, ma fille.", type: "dialogue" }
          ]},
          { id: 84, img: "images/tomo1/comic/pagina07/panel_12.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Non, papa ! C'est vrai ! Rien ne marche ! Internet n'existe pas ! Papa !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Son père ne comprend pas la situation et s'amuse de l'histoire.", type: "narration" }
          ]}
        ]
      },
      {
        page: 8,
        panels: [
          { id: 85, img: "images/tomo1/comic/pagina08/panel_01.jpg", lines: [
            { speaker: "Papa", color: "#8B5E3C", text: "Tu es à Vannes ? La famille est sympa ?", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Oui, ils sont gentils... Mais papa, je suis en 1992 !", type: "dialogue" }
          ]},
          { id: 86, img: "images/tomo1/comic/pagina08/panel_02.jpg", lines: [
            { speaker: "Mamá", color: "#4E7A9E", text: "C'est Naele ? Donne-moi le téléphone !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "La mère de Naele prend le téléphone en Espagne.", type: "narration" }
          ]},
          { id: 87, img: "images/tomo1/comic/pagina08/panel_03.jpg", lines: [
            { speaker: "Mamá", color: "#4E7A9E", text: "Allô Naele ! Tu es fatiguée ? Tu manges bien ?", type: "dialogue" }
          ]},
          { id: 88, img: "images/tomo1/comic/pagina08/panel_04.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Maman ! S'il te plaît, écoute ! Mon portable ne marche pas !", type: "dialogue" }
          ]},
          { id: 89, img: "images/tomo1/comic/pagina08/panel_05.jpg", lines: [
            { speaker: "Mamá", color: "#4E7A9E", text: "C'est normal, Naele. Le voyage est long. Tu es fatiguée. Repose-toi !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Ses parents pensent que c'est une blague.", type: "narration" }
          ]},
          { id: 90, img: "images/tomo1/comic/pagina08/panel_06.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Ce n'est pas une blague ! Je regarde la télévision... C'est le passé !", type: "dialogue" }
          ]},
          { id: 91, img: "images/tomo1/comic/pagina08/panel_07.jpg", lines: [
            { speaker: "Mamá", color: "#4E7A9E", text: "Il est tard, Naele. Demain, tu as le collège. Bonne nuit ! Je t'aime !", type: "dialogue" }
          ]},
          { id: 92, img: "images/tomo1/comic/pagina08/panel_08.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Maman ! Non ! Attends !", type: "dialogue" }
          ]},
          { id: 93, img: "images/tomo1/comic/pagina08/panel_09.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "BIP... BIP... BIP...", type: "sfx", sfxType: "beep" },
            { speaker: "Narrateur", color: "#5B5548", text: "La communication s'arrête brutalement à cause de l'heure.", type: "narration" }
          ]},
          { id: 94, img: "images/tomo1/comic/pagina08/panel_10.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Ils ne me croient pas... Personne ne me croit.", type: "dialogue" }
          ]},
          { id: 95, img: "images/tomo1/comic/pagina08/panel_11.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Attends ! Le téléphone fonctionne avec 2027... J'appelle Margot !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele tente une dernière chance avec sa meilleure amie.", type: "narration" }
          ]},
          { id: 96, img: "images/tomo1/comic/pagina08/panel_12.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "BIP... BOP... BEEP...", type: "sfx", sfxType: "beep" }
          ]}
        ]
      },
      {
        page: 9,
        panels: [
          { id: 97, img: "images/tomo1/comic/pagina09/panel_01.jpg", lines: [
            { speaker: "Margot", color: "#4B3F72", text: "Allô ? Naele ? Tu es en France ?", type: "dialogue" }
          ]},
          { id: 98, img: "images/tomo1/comic/pagina09/panel_02.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Margot ! Merci ! Écoute, c'est urgent ! C'est fou !", type: "dialogue" }
          ]},
          { id: 99, img: "images/tomo1/comic/pagina09/panel_03.jpg", lines: [
            { speaker: "Margot", color: "#4B3F72", text: "Calme-toi. Quel est le problème à Vannes ?", type: "dialogue" }
          ]},
          { id: 100, img: "images/tomo1/comic/pagina09/panel_04.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Je suis à Vannes, oui. Mais je suis en 1992 ! Les journaux, la télé, les voitures... Tout est de 1992 !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "La mente brillante de Margot cherche tout de suite une explication.", type: "narration" }
          ]},
          { id: 101, img: "images/tomo1/comic/pagina09/panel_05.jpg", lines: [
            { speaker: "Margot", color: "#4B3F72", text: "Quoi ?! Un voyage dans le temps ? Mais... comment tu m'appelles ?", type: "dialogue" }
          ]},
          { id: 102, img: "images/tomo1/comic/pagina09/panel_06.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Avec le téléphone fixe de la famille ! Ça connecte avec ton mobile !", type: "dialogue" }
          ]},
          { id: 103, img: "images/tomo1/comic/pagina09/panel_07.jpg", lines: [
            { speaker: "Margot", color: "#4B3F72", text: "C'est incroyable ! Une anomalie dans le réseau ! Naele, c'est une super opportunité !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Pour Margot, cette situation impossible est un défi passionnant.", type: "narration" }
          ]},
          { id: 104, img: "images/tomo1/comic/pagina09/panel_08.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Une opportunité ?! Je suis seule en 1992 ! Je ne parle pas français !", type: "dialogue" }
          ]},
          { id: 105, img: "images/tomo1/comic/pagina09/panel_09.jpg", lines: [
            { speaker: "Margot", color: "#4B3F72", text: "Tu es forte. Tu es en France pour trois mois. Tu dois apprendre le français ! C'est un mode survie !", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Margot pousse son amie à relever le défi de la langue française.", type: "narration" }
          ]},
          { id: 106, img: "images/tomo1/comic/pagina09/panel_10.jpg", lines: [
            { speaker: "Margot", color: "#4B3F72", text: "Vis ta vie là-bas ! Va au collège Jules Simon ! Parle avec Madou ! Apprends la langue !", type: "dialogue" }
          ]},
          { id: 107, img: "images/tomo1/comic/pagina09/panel_11.jpg", lines: [
            { speaker: "Margot", color: "#4B3F72", text: "Moi, en 2027, j'étudie ce mystère. On parle tous les jours !", type: "dialogue" }
          ]},
          { id: 108, img: "images/tomo1/comic/pagina09/panel_12.jpg", lines: [
            { speaker: "Margot", color: "#4B3F72", text: "Parfait ! Bon courage pour le collège ! À bientôt !", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Merci Margot. À bientôt ! CLIC.", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Les mots de Margot redonnent confiance à Naele.", type: "narration" }
          ]}
        ]
      },
      {
        page: 10,
        panels: [
          { id: 109, img: "images/tomo1/comic/pagina10/panel_01.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "CLAC.", type: "sfx", sfxType: "clack" },
            { speaker: "Narrateur", color: "#5B5548", text: "La conversation est terminée. Le silence revient.", type: "narration" }
          ]},
          { id: 110, img: "images/tomo1/comic/pagina10/panel_02.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Naele ? Ça va ? Le dîner est prêt !", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Oui, ça va. Je viens !", type: "dialogue" }
          ]},
          { id: 111, img: "images/tomo1/comic/pagina10/panel_03.jpg", lines: [
            { speaker: "Félix", color: "#2F6F4E", text: "Tu aimes la soupe, Naele ?", type: "dialogue" }
          ]},
          { id: 112, img: "images/tomo1/comic/pagina10/panel_04.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Oui, j'aime beaucoup. Merci Félix.", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Naele écoute attentivement les mots en français.", type: "narration" }
          ]},
          { id: 113, img: "images/tomo1/comic/pagina10/panel_05.jpg", lines: [] },
          { id: 114, img: "images/tomo1/comic/pagina10/panel_06.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Ils sont gentils. Je suis en sécurité ici.", type: "dialogue" }
          ]},
          { id: 115, img: "images/tomo1/comic/pagina10/panel_07.jpg", lines: [
            { speaker: "Narrateur", color: "#5B5548", text: "La nuit tombe sur la ville de Vannes.", type: "narration" }
          ]},
          { id: 116, img: "images/tomo1/comic/pagina10/panel_08.jpg", lines: [
            { speaker: "Madou", color: "#C77D1E", text: "Bonne nuit, Naele ! À demain !", type: "dialogue" },
            { speaker: "Naele", color: "#B23A48", text: "Bonne nuit, Madou ! À demain !", type: "dialogue" }
          ]},
          { id: 117, img: "images/tomo1/comic/pagina10/panel_09.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "Demain... C'est le premier jour au Collège Jules Simon.", type: "dialogue" }
          ]},
          { id: 118, img: "images/tomo1/comic/pagina10/panel_10.jpg", lines: [
            { speaker: "Naele", color: "#B23A48", text: "C'est une grande aventure... Je suis prête.", type: "dialogue" },
            { speaker: "Narrateur", color: "#5B5548", text: "Une incroyable aventure commence pour elle.", type: "narration" }
          ]},
          { id: 119, img: "images/tomo1/comic/pagina10/panel_11.jpg", lines: [
            { speaker: "SFX", color: "#8A7B4E", text: "Zzzzz...", type: "sfx", sfxType: "rustle" }
          ]},
          { id: 120, img: "images/tomo1/comic/pagina10/panel_12.jpg", lines: [
            { speaker: "Narrateur", color: "#5B5548", text: "FIN DU CHAPITRE 1", type: "narration" }
          ]}
        ]
      }
    ]
  },
  characters: [
    { id: "naele", name: "Naele", color: "#B23A48", panels: [
      { img: "images/tomo1/characters/naele_01.jpg", lines: [{ speaker: "Naele", color: "#B23A48", text: "Je suis Naele. J'ai 12 ans. Je suis espagnole.", type: "narration" }] },
      { img: "images/tomo1/characters/naele_02.jpg", lines: [{ speaker: "Naele", color: "#B23A48", text: "Je pratique le volley-ball et la gymnastique.", type: "narration" }] },
      { img: "images/tomo1/characters/naele_03.jpg", lines: [{ speaker: "Naele", color: "#B23A48", text: "Elle est une bonne étudiante.", type: "narration" }] },
      { img: "images/tomo1/characters/naele_04.jpg", lines: [{ speaker: "Naele", color: "#B23A48", text: "Elle habite à Séville. Elle adore les frites !", type: "narration" }] }
    ]},
    { id: "margot", name: "Margot", color: "#4B3F72", panels: [
      { img: "images/tomo1/characters/margot_01.jpg", lines: [{ speaker: "Margot", color: "#4B3F72", text: "Je m'appelle Margot. J'ai 12 ans.", type: "narration" }] },
      { img: "images/tomo1/characters/margot_02.jpg", lines: [{ speaker: "Margot", color: "#4B3F72", text: "Elle danse très bien !", type: "narration" }] },
      { img: "images/tomo1/characters/margot_03.jpg", lines: [{ speaker: "Margot", color: "#4B3F72", text: "Elle est une bonne chercheuse. Elle adore le chocolat chaud.", type: "narration" }] },
      { img: "images/tomo1/characters/margot_04.jpg", lines: [{ speaker: "Margot", color: "#4B3F72", text: "Nous sommes amies !", type: "narration" }] }
    ]},
    { id: "madou", name: "Madou", color: "#C77D1E", panels: [
      { img: "images/tomo1/characters/madou_01.jpg", lines: [{ speaker: "Madou", color: "#C77D1E", text: "Bonjour ! Je suis Madou. J'ai 12 ans.", type: "narration" }] },
      { img: "images/tomo1/characters/madou_02.jpg", lines: [{ speaker: "Madou", color: "#C77D1E", text: "Ils jouent au basket-ball.", type: "narration" }] },
      { img: "images/tomo1/characters/madou_03.jpg", lines: [{ speaker: "Madou", color: "#C77D1E", text: "Elle est musicienne. Elle joue de la flûte.", type: "narration" }] },
      { img: "images/tomo1/characters/madou_04.jpg", lines: [{ speaker: "Madou", color: "#C77D1E", text: "Vannes est en France. Vannes est une ville de Bretagne.", type: "narration" }] }
    ]}
  ],
  grammar: [
    {
      id: "grammaire1",
      title: "Les couleurs de la grammaire 1",
      img: "images/tomo1/grammar/grammaire01.jpg",
      sections: [
        {
          title: "Les pronoms sujets",
          items: [
            { fr: "Je", note: "(Moi)" },
            { fr: "Tu", note: "(Toi)" },
            { fr: "Il / Elle", note: "(Lui / Elle)" },
            { fr: "Nous", note: "(Moi + Toi)" },
            { fr: "Vous", note: "(Toi + Lui)" },
            { fr: "Ils / Elles", note: "(Eux / Elles)" }
          ]
        },
        {
          title: "Le verbe être",
          items: [
            { fr: "Je suis" },
            { fr: "Tu es" },
            { fr: "Il / Elle est" },
            { fr: "Nous sommes" },
            { fr: "Vous êtes" },
            { fr: "Ils / Elles sont" }
          ]
        },
        {
          title: "Les verbes en -ER (parler)",
          items: [
            { fr: "Je parle" },
            { fr: "Tu parles" },
            { fr: "Il / Elle parle" },
            { fr: "Nous parlons" },
            { fr: "Vous parlez" },
            { fr: "Ils / Elles parlent" }
          ]
        },
        {
          title: "Les phrases clés de survie",
          items: [
            { fr: "Comment tu t'appelles ?" },
            { fr: "Est-ce que tu parles français ?" },
            { fr: "Quel âge as-tu ?" },
            { fr: "Ça va ? Oui, ça va." },
            { fr: "Quelle est la date aujourd'hui ? Aujourd'hui, c'est..." },
            { fr: "Qu'est-ce que c'est ? C'est..." },
            { fr: "Bonjour !" },
            { fr: "Enchanté !" },
            { fr: "Au revoir !" }
          ]
        }
      ]
    }
  ]
};
const TOMOS = [TOMO1];
