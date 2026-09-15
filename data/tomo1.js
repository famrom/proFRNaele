const TOMO1 = {
  id: "tomo1",
  title: "Tomo 1 — Naele",
  comic: {
    pages: [
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
  grammar: []
};
const TOMOS = [TOMO1];
