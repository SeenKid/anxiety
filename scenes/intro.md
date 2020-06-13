# intro

`SceneSetup.intro();`

# intro-play-button

(...51)

```
_.PLAYED_BEFORE = !!window.localStorage.continueChapter;
```

{{if !_.PLAYED_BEFORE}}
`Game.OVERRIDE_FONT_SIZE=30;`
{{/if}}

{{if !_.PLAYED_BEFORE}}
[#play1# JOUER ! #play2#](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="act2"}}
[_CONTINUER_ : La Fête](#act2) `publish("LOAD_GAME", ["act2"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="act3"}}
[_CONTINUER_ : L'autre Fête](#act3) `publish("LOAD_GAME", ["act3"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="act4"}}
[_CONTINUER_ : L'autre Sandwich](#act4) `publish("LOAD_GAME", ["act4"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="replay"}}
`Game.OVERRIDE_FONT_SIZE=30;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="replay"}}
[#play1# REJOUER ! #play2#](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE}}
[Sélection du Chapitre](#chapter-select) `Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

[(notes sur le contenu)](#intro-play-button) `Game.OVERRIDE_CHOICE_LINE=true; publish('show_cn');`

# chapter-select

`publish("HACK_chselect");`

[I. Le Sandwich](#intro-start) `publish("HACK_chselect_end"); publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

[II. La Fête](#act2) `publish("HACK_chselect_end"); publish("LOAD_GAME", ["act2"]); Game.OVERRIDE_CHOICE_LINE=true;`

{{if window.localStorage.act3}}
[III. L'Autre Fête](#act3) `publish("HACK_chselect_end"); publish("LOAD_GAME", ["act3"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if !window.localStorage.act3}}
[III. L'Autre Fête]()
{{/if}}

{{if window.localStorage.act4}}
[IV. L'Autre Sandwich](#act4) `publish("HACK_chselect_end"); publish("LOAD_GAME", ["act4"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if !window.localStorage.act4}}
[III. L'Autre Sandwich]()
{{/if}}

{{if window.localStorage.credits}}
[V. Crédits](#to-credits) `publish("HACK_chselect_end"); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if !window.localStorage.credits}}
[V. Crédits]()
{{/if}}

[(menu principal)](#intro-play-button) `publish("HACK_chselect_end"); Game.OVERRIDE_CHOICE_LINE=true;`

# to-credits

`stopAllSounds();`

(...101)

(#credits)

# intro-start

(...500)

`clearText()`

n3: Bienvenue ! Ceci n'est pas vraiment un "jeu", mais plutôt une histoire interactive. J'espère que t'aimes lire, pigeon !

n3: Alors, avant de commencer, comment est-ce que *tu* préfères lire ?

`publish("show_options_bottom")`

# intro-start-gender

n3: Cool ! Ah, au fait, comment est-ce que tu voudrais être genré·e par le jeu ?

`publish("show_player_gender_options_bottom")`

# intro-start-2

n3: Super ! Note : tu peux changer tes réglages à tout moment avec l'icone ⚙ en bas. Le jeu sauvegarde aussi automatiquement après chaque chapitre !

n3: Et maintenant, commençons notre histoire...

`clearText()`

(...1000)

`publish("intro-to-game-2")`

n2: CECI EST {{if _.gender==0}}UN·E HUMAIN·E{{/if}}{{if _.gender==1}}UN HUMAIN{{/if}}{{if _.gender==2}}UNE HUMAINE{{/if}}

(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`
