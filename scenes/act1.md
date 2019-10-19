# act1

```
SceneSetup.act1();
```

(...300)

n: ET VOICI L'ANXIÉTÉ DE L'HUMAIN·E

n: _TU_ ES L'ANXIÉTÉ

{{if window.localStorage.continueChapter=="replay"}}
(#act1_replay)
{{/if}}

{{if window.localStorage.continueChapter!="replay"}}
(#act1_normal)
{{/if}}



# act1_replay

`hong({mouth:"0_neutral", eyes:"0_neutral"})`

h: Oh ! Encore ?

`hong({eyes:"0_neutral"})`

n: TON TRAVAIL EST DE PROTÉGER TON HUMAIN DU *DANGER*

`bb({eyes:"look", mouth:"small_lock"})`

n: EN FAIT, RIEN QUE DE JOUER DE NOUVEAU À CE JEU LE MET EN *DANGER* 

n: VITE, PRÉVIENS-LE !

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: Humain·e ! Écoute, on est en danger ! Les joueur·ses...

[...vont nous torturer de nouveau !](#act1_replay_torture)

[...ne vont pas trouver une autre fin !](#act1_replay_alternate)

[...vont développer une dissonance ludo-narrative !](#act1_replay_dissonance)

# act1_replay_torture

```
window.HACK_REPLAY = JSON.parse(localStorage.act4);
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

{{if window.HACK_REPLAY.act1_ending=="fight"}}
b: Ils vont nous faire nous recroqueviller et pleurer !
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="flight"}}
b: Ils vont nous faire détruire ton téléphone pour nous avoir donné une crise de panique !
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="fight"}}
b: Ils vont nous *interdire* de nous bagarrer avec l'hôte de la fête !
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="flight"}}
b: Ils vont nous faire nous bagarrer avec le Sympatisant Anti-Vilain qu'est l'hôte de la fête !
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="jump"}}
h: Au moins on sautera pas du toit cette f--
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="walkaway"}}
b: ILS VONT NOUS FAIRE SAUTER DU TOIT.
{{/if}}

`bb({body:"fear"});`

b: TOUTES CES CHOSES HORRIBLES VONT NOUS ARRIVER, ET ON--

(#act1_replay_end)


#act1_replay_alternate

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: OK, l'histoire est la même, mais chaque chapitre a deux fins possibles, en plus de toutes les options de branches de dia--

`bb({body:"fear"});`

b: Les joueur·ses vont être déçu·es, ferme cet onglet, efface ce logiciel, et on--

(#act1_replay_end)


# act1_replay_dissonance

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: Un quoi maintenant ?

`bb({eyes:"normal"});`

b: Le fil de l'histoire parlait de comment on peut *CHOISIR* de construire une collaboration saine avec sa peur,

`bb({eyes:"normal_right"});`

b: Mais jouer de nouveau la partie donnera la même histoire, impliquant que vos *CHOIX* n'importent pas,

`bb({eyes:"narrow_eyebrow"});`

b: Ce qui contredit le message et la mécanique du jeu,

`bb({eyes:"fear"});`

b: Et ainsi détruit la fabrique de l'univers narratif,

`bb({body:"fear"});`

b: Et alors on--

(#act1_replay_end)


# act1_replay_end

`bb({body:"panic"})`

b: MEEEEEUUUUUURRRRRRS !!!

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.clearText();
```

(...1001)

```
bb({body:"laugh"});
hong({body:"laugh"});
Game.clearText();
sfx("laugh");
```

(...5001)

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"0_sammich"});
```

h: Ok, on recommence.

```
Game.clearText();
```

n4: (LAISSE _TON_ ANGOISSE BLAH BLAH BLAH LE PLUS PROCHE DE _TA_ PEUR BLAH BLAH TU CONNAIS LA CHANSON)

```
sfx("squeak");
hong({body:"0_squeeze"});
bb({body:"squeeze"});
```

(#act1_normal_choice)



# act1_normal

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: Oh zut, mon loup est de retour. Faaaaantastique.

`hong({eyes:"0_neutral"})`

n: VOTRE TRAVAIL EST DE PROTÉGER VOTRE HUMAIN DU *DANGER*

`bb({eyes:"look", mouth:"small_lock"})`

n: EN FAIT, CE SANDWICH LE MET EN *DANGER*, JUSTE MAINTENANT, LÀ

n: VITE, PRÉVIENS-LE !

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: Humain ! Écoute, on est en danger ! Le danger est...

`bb({body:"squeeze"})`

n4: (LAISSE _TON_ ANXIÉTÉ SORTIR ET JOUER ! CHOISIS CE QUI RESSEMBLE LE PLUS À CE QUE _TA_ PEUR TE DIT)

(#act1_normal_choice)

# act1_normal_choice

[On mange tout seul le midi ! Encore !](#act1a_alone) `bb({body:"squeeze_talk"})`

[Pendant qu'on mange, on n'est pas productif !](#act1a_productive) `bb({body:"squeeze_talk"})`

[Ce pain blanc est mauvais pour notre santé !](#act1a_bread) `bb({body:"squeeze_talk"})`

# act1a_alone

```
bb({body:"normal", mouth:"small", eyes:"narrow"});
hong({body:"0_sammich"});
```

b: Ne sais-tu pas que la solitude est aussi toxique que fumer 15 cigarettes par jour ?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Julianne Holt-Lunstad 2010, Journal PLoS Medicine)

`hong({eyes:"0_annoyed"})`

h: Hum, merci de citer tes sources, mais--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: Ce qui implique que si on ne trouve pas quelqu'un *maintenant* on va-

`bb({body:"panic"})`

b: MOURRRRRRRRRRRIR

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "alone");
publish("hp_show");
```

(...2500)

`_.fifteencigs = true`

n: TU AS UTILISÉ *PEUR DE NE PAS ÊTRE AIMÉ*

(#act1b)

# act1a_productive

```
bb({body:"normal", mouth:"small", eyes:"normal"});
hong({body:"0_sammich"});
```

b: Sors ton ordinateur portable et travaille *maintenant* !

`hong({eyes:"0_annoyed"})`

h: Hum, je préfèrerais ne pas mettre de miettes sur mon cla--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Si on ne contribue pas à la société, on est un parasite !

b: Le corps-société ira demander des médicaments au docteur-société pour éliminer ses parasites-sociaux et on va--

```
bb({body:"panic", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: MOURRRRRRIRRRRRRRRR

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "bad");
publish("hp_show");
```

(...2500)

`_.parasite = true`

n: TU AS UTILISÉ LA *PEUR D'ÊTRE UNE MAUVAISE PERSONNE*

(#act1b)

# act1a_bread

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich", eyes:"0_annoyed"});
```

h: Est-ce que ces études ont été reprodui--

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Le blé raffiné augmente le taux de sucre dans le sang, ils devront nous amputer les bras et on va-

`bb({body:"panic"})`

b: MOURRRRRRRIRRRRRRRRRR

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "harm");
publish("hp_show");
```

(...2500)

`_.whitebread = true`

n: TU AS UTILISÉ LA *PEUR D'AVOIR MAL*

(#act1b)

# act1b

n: C'EST SUPER EFFICACE

`bb({mouth:"smile", eyes:"smile"});`

b: Tu vois, humain ? Je suis ton fidèle loup protecteur !

`bb({body:"pride_talk"});`

b: Aie confiance en tes intuitions ! Tes pensées sont toujours justifiées !

`bb({body:"pride"});`

n: METS LA JAUGE D'ÉNERGIE DE TON HUMAIN À ZÉRO

n: POUR PROTÉGER SES BESOINS PHYSIQUES + SOCIAUX + MORAUX, TU PEUX UTILISER :

n: LA PEUR D'*ÊTRE BLESSÉ* #harm#

n: LA PEUR D'*ÊTRE DÉLAISSÉ* #alone#

n: ET LA PEUR D'*ÊTRE UNE MAUVAISE PERSONNE* #bad#

`Game.OVERRIDE_TEXT_SPEED = 1.25;`

n4: (ASTUCE: CHOISIS CE QUI TOUCHE LE PLUS À TES PEURS LES PLUS SOMBRES ET PROFONDES !~)

h: ...

```
hong({body:"putaway"});
sfx("rustle");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: Tu sais quoi ? Peut-être que je ferais mieux de vérifier mon téléphone.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: PROTÉGE TON HUMAIN

n: DU MONDE. DES AUTRES. DE LUI-MÊME.

n: BONNE CHANCE

(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

`music('battle', {volume:0.5})`

n: PREMIER ROUND: *COMBATTEZ !*

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: Hum. Le flux Facebook annonce une fête ce week-end.

`bb({eyes:"uncertain"});`

b: Mais ce·tte taré·e organise une fête *chaque* semaine ?

`bb({eyes:"uncertain_right"});`

b: C'est pour chercher à combler quel vide intérieur ? C'est quelqu'un de profondément perturbé !

`hong({eyes:"surprise"});`

h: Ah et, j'ai été invité ?

`bb({eyes:"fear", mouth:"normal"});`

b: Dans ce cas !

[Dis oui, ou tu crèveras de solitude !](#act1c_loner)

[Dis non, c'est bourré de drogues dangereuses !](#act1c_drugs)

[Ignore l'invitation, on ne fait que rendre les fêtes tristes.](#act1c_sad)

# act1c_loner

{{if _.fifteencigs}}
b: Quinze cigarettes par jour, humain ! Quinze !
{{/if}}

{{if !_.fifteencigs}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.fifteencigs}}
b: Et personne ne viendra à nos funérailles, ils jetteront nos cendres dans l'océan, on sera mangé par une baleine,
{{/if}}

{{if !_.fifteencigs}}
b: et nous deviendrons de la CROTTE DE BALEINE !
{{/if}}

{{if !_.fifteencigs}} `_.whalepoop = true` {{/if}}

(...500)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

{{if !_.fifteencigs}}
b: Donc ouais, on devrait aller à cette fête !
{{/if}}

{{if _.parasite}}
b:Mais amène ton ordi pour travailler, et ne pas être un parasite social.
{{/if}}

{{if _.whitebread}}
b: Tant qu'on ne nous sert pas du PAIN BLANC
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: BIEN. Si ça peut te faire taire, ok.

h: Je vais dire oui.

{{if _.whalepoop}}
b: Crotte de baleine, humain ! Crotte de baleine !
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

`bb({mouth:"small", eyes:"fear"});`

{{if _.whitebread}}
b: ou même pire... du PAIN BLANC
{{/if}}

{{if _.whitebread}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if _.whitebread}}
b: On va faire une overdose de méthamphétamines et de pains blancs, notre cadavre ne rentrera pas dans le four crématoire !
{{/if}}

{{if !_.whitebread}}
b: On va faire une overdose de tant de médicaments que l'embaumeur se demandera pourquoi notre cadavre est *déjà* embaumé !
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.parasite}}
b: En plus, on peut pas faire la fête, on doit travailler sinon on est un terrible parasite de la société !
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: BIEN. Si ça peut te faire taire, ok.

h: Je vais dire non.

`_.partyinvite="no"`

(#act1d)

# act1c_sad

`bb({eyes:"uncertain_right", mouth:"normal"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.fifteencigs}}
b: La seule chose qu'on fait, c'est pleurer dans notre coin en disant que la solitude est aussi mortelle que fumer 15 cigarettes par jour.
{{/if}}

{{if _.parasite}}
b: La seule chose qu'on fait pendant une fête, c'est nous inquiéter de la façon dont on pourrait être productif à la place.
{{/if}}

{{if _.whitebread}}
b: La seule chose qu'on fait, c'est nous inquiéter de la façon dont les aliments malsains vont nous tuer.
{{/if}}

```
bb({mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"lookaway"});
```

h: Héhé, je me demande bien pourquoi.

`hong({eyes:"neutral"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Donc si on y va, on va les mettre mal à l'aise, mais si on rejette leur invitation, on va aussi les incommoder !

`bb({body:"fear", eyes:"fear"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: LA SEULE CHOSE QU'ON FAIT C'EST FAIRE EN SORTE QUE LES GENS SE SENTENT MAL, DONC ON DEVRAIT SE SENTIR MAL

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`hong({mouth:"anger", eyes:"anger"});`

h: Ugh. Si ça peut te faire taire, ok.

h: Je vais ignorer l'invitation.

`_.partyinvite="ignore"`

(#act1d)

# act1d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"annoyed"});
```

h: De toutes façons, Facebook c'est trop pour moi. J'ai besoin de quelque chose de plus calme, moins anxiogène.

`hong({eyes:"neutral"});`

h: Il se passe quoi sur Twitter ?

`bb({eyes:"look"});`

[Oh non, regarde cette horrible info !](#act1d_news)

[Oh non, est-ce que ça parlerait pas secrètement de *nous* ?](#act1d_subtweet)

[Hé, un gif de chat qui boit du lait !](#act1d_milk)


# act1d_news

```
bb({eyes:"pained1"});
music(null, {fade:2});
```

b: Oh là là, on dirait que tout fout le camp, non ?

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: C'est comme si tout prenait fin, tout était en train de mourir et que nous étions condamnés et qu'on ne peut rien y faire.

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: Retweetons cette histoire !

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.badnews=true`

```
music('battle', {volume:0.5});
hong({mouth:"anger", eyes:"anger"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: D'accord, je vais retweeter ça, mais tais-toi s'il te plaît !

`hong({mouth:"neutral", eyes:"annoyed"});`

h: On s'en fout, on va jeter un œil à Snapchat.

(#act1e)


# act1d_subtweet

`bb({eyes:"fear"});`

b: C'est un subtweet ! Un traître, subtweet traître et malsain !

`hong({eyes:"annoyed"});`

h: Heu... Probablement pas ?

`bb({eyes:"narrow", mouth:"small"});`

b: Mais et s'ils parlent tous derrière notre dos

h: Ils n--

`bb({body:"fear", eyes:"fear", mouth:"normal"});`

b: DEVANT NOTRE DOS

`hong({eyes:"sad", mouth:"sad"});`

h: Je n--

`bb({eyes:"narrow", mouth:"small"});`

b: Mais *et si*

h: A--

`bb({eyes:"narrow_eyebrow"});`

b: *et si*

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
hong({mouth:"shut"});
```

h: ...

(...1000)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.subtweet=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: O-KAY, essayons Snapchat.

(#act1e)

# act1d_milk

`hong({mouth:"smile", eyes:"neutral"});`

h: Ah ouais, c'est mignon, je viens de le retweeter, je pen--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: LES CHATS NE PEUVENT PAS DIGÉRER LE LAIT ET NOUS SOMMES D'HORRIBLES PERSONNES QUI APPRÉCIENT LA CRUAUTÉ ENVERS LES ANIMAUX
```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("18p", "bad");
```

(...2500)


`_.catmilk=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: O-KAY, essayons Snapchat.

(#act1e)

# act1e

`hong({mouth:"neutral", eyes:"neutral"});`

h: Ah, des photos d'hier soir. Alors c'est à *ça* que ça ressemblent ces fêtes hebdomadaires.

{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

`hong({mouth:"sad", eyes:"annoyed"});`

h: Argh, ça a l'air beaucoup trop bondé pour mon anxiété.

h: J'aurais peut-être pas dû dire oui à l'invitation ?

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[Changer de réponse ? Comme un con ?!](#act1e_yes_dontchange)

[Change notre réponse ! Y'a trop de monde !](#act1e_yes_changetono)

{{if _.subtweet}}
[Ouais, c'est sûr ils nous subtweetaient.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Attends, on a retweeté sans vérifier les faits.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[Tu sais que tu te tiens très mal?](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Ils comptaient sur notre présence et maintenant, on trahit leur confiance ? Tu veux mourir seul ?!

{{if _.fifteencigs}}
b: QUINZE. CIGARETTES.
{{/if}}

{{if _.whalepoop}}
b: CROTTE. DE BALEINE.
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Tais-toi, tais-toi, je vais accepter !

(#act1f)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Tu n'as jamais entendu parler des mouvements de foule ?

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: En 2003, un nightclub de Rhode Island a pris feu et la panique des gens a bloqué les sorties. 100 personnes ont brûlées vives-

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({mouth:"shock"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: TU VEUX QUE ÇA NOUS ARRIVE-

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 2.5;
```

b: DIS NON DIS NON DIS NON DIS NON DIS NON DIS NON DIS NON DIS N-


```
bb({body:"normal", eyes:"fear", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
hong({eyes:"anger", mouth:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Tais-toi, tais-toi, je vais changer ma réponse pour non ! La vache !

(#act1f)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... ça a vraiment l'air fun.

h: J'aurais peut-être pas du dire non à l'invitation ?

`bb({mouth:"normal", eyes:"normal"});`

[Changer notre réponse ? Comme un con ?!](#act1e_no_dontchange)

[Change ta réponse ! Ne meurs pas seul !](#act1e_no_changetoyes)

{{if _.subtweet}}
[Ouais, c'est sûr ils nous subtweetaient.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Attends, on a retweeté sans vérifier les faits.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[Tu sais que tu te tiens très mal ?](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: Tout le monde comptait sur nous !

b: ...les laisser tout seuls pour qu'ils aient une bonne fête sans un horrible et dégoutant {{if _.whitebread}}mangeur de pain blanc{{/if}} paumé comme no--


```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
bb({body:"normal", eyes:"uncertain", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Tais-toi, tais-toi, je vais refuser l'invitation !

(#act1f)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: La solitude chronique augmente notre taux de cortisol ainsi que les risques de maladie cardio-vasculaire et d'AVC !

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.fifteencigs}}
b: QUINZE. CIGARETTES.
{{/if}}

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Tais-toi, tais-toi, je vais accepter l'invitation ! La vache !

(#act1f)

# act1e_ignore_subtweet

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: On va récolter le fruit de tous nos tweets problématiques !

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: On va se faire appeler et se faire révoquer et traîner par une corde derrière un cheval sur l'autoroute de l'information !

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Pourquoi es-tu comme ça ?!

(#act1f)

# act1e_ignore_factcheck

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: On répand de la désinformation ! On détruit la confiance envers la presse libre !

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: On est la raison pour laquelle le fascisme va émerger des ruines de la démocratie !

```
bb({body:"normal", eyes:"anger"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
_.factcheck = true;
```

h: Pourquoi es-tu comme ça ?!

(#act1f)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Tu veux un bretzel comme colonne vertébrale ?! Arrête de te voûter au-dessus de ton écran !

```
bb({body:"meta"});
```

b: Ca veut dire que toi aussi.

```
bb({body:"normal", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Pourquoi es-tu comme ça ?!

(#act1f)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... ça a l'air vraiment fun.

h: Je n'aurais peut-être pas dû ignorer l'invitation ?

`bb({mouth:"normal", eyes:"normal"});`

[Continue à ignorer, on est toujours des rabat-joies.](#act1e_ignore_continue)

[En fait, dis oui.](#act1e_ignore_changetoyes)

[En fait, dis non.](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: C'est assez malpoli de continuer à les ignorer, par contre, non ?

`bb({eyes:"normal_right"});`

b: Enfin, les autres gens nous ignorent *nous*, donc

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

b: disons que c'est équitable.

(#act1f)

# act1e_ignore_changetoyes

`hong({eyes:"surprise", mouth:"smile"});`

h: Tu me... laisses m'amuser ?

b: Enfin, je veux dire, la solitude *peut* nous tuer.

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: C'est trop bondé. Les foules sont dangereuses.

(#act1e_yes_changetono)


# act1f

```
hong({mouth:"neutral", eyes:"neutral"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Peu importe. Une nouvelle notification Tinder.

`bb({eyes:"uncertain"})`

b: Quoi, cette appli de drague?

`hong({eyes:"annoyed"})`

h: C'est pas une appli de drague, c'est juste un moyen de rencontrer de nouvelles person--

`bb({eyes:"narrow"})`

b: C'est une appli de drague.

```
hong({eyes:"surprise", mouth:"smile"});
bb({eyes:"normal"});
```

h: Oh, j'ai eu un match ! Pas mal !

```
bb({eyes:"narrow_eyebrow"});
hong({eyes:"sad", mouth:"anger"})
```

h: S'il te plait, ne ruine pas ça pour m--

```
bb({body:"panic"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: DANGER DANGER DANGER DANGER DANGER DANGER

`bb({body:"fear", eyes:"fear", mouth:"normal"})`

[Nous sommes *utilisés* par d'autre gens.](#act1f_used_by_others)

[On *utilise* d'autres gens.](#act1f_using_others)

[TON MATCH EST UN TUEUR EN SÉRIE](#act1f_killer)

# act1f_used_by_others

`bb({body:"point_crotch", eyes:"normal", mouth:"normal"})`

b: De la drague au hasard peut remplir le vide ici-bas,

b: mais ça ne remplira jamais le vide...

`bb({body:"point_heart", eyes:"pretty", mouth:"small"})`

b: là-*dedans*.

(...1000)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Ce que je veux dire, c'est QU'ON VA MOURIR SEUL

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

`bb({eyes:"narrow", mouth:"small"})`

b: Tu penses que les parties génitales des gens sont des Pokémons à collectionner ?

```
bb({body:"sing", eyes:"pretty", mouth:"shut"});
music("pokemon");
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

```
Game.FORCE_TEXT_DURATION = 1000;
Game.FORCE_NO_VOICE = true;
```

b: ♫ (thème de pokémon)-

(...5600)

```
bb({mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2400;
```

b: ♫ Un jour je serai le meilleur ^baiseur^-

(...500)

```
bb({eyes:"narrow", mouth:"small"});
Game.FORCE_TEXT_DURATION = 2100;
```

b: ♫ Je les ^niquerai^ sans répit-

(...1500)

```
bb({eyes:"pretty"});
Game.FORCE_TEXT_DURATION = 2300;
```

b: ♫ Je ferai tout pour être séducteur-

(...500)

```
bb({eyes:"fear", mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2000;
```

b: ♫ Et jouir à l'infini !

(...1000)

```
bb({eyes:"smile", mouth:"smile"});
Game.FORCE_TEXT_DURATION = 1000;
```

b: ♫ PERVERS-MON ! ATTRAPEZ-LES TO-

```
Game.FORCE_CANT_SKIP = false;
Game.clearText();
music(false);
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Le truc, c'est qu'on est juste un manipulateur pervers.

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`_.pokemon=true`

(#act1g)

# act1f_killer

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.whitebread}}
b: They'll trap you in a well and force-feed you white bread to fatten you up so they can wear your skin like a suit!
{{/if}}

{{if _.parasite}}
b: They'll bludgeon you with a pomodoro timer and say "YOU SHOULDA BEEN MORE PRODUCTIVE YOU PARASITE"
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: They'll tear your flesh to gory confetti, turn your entrails into streamers, and mix your blood into a punch bowl!
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: How's THAT for a party invite?!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.serialkiller=true`

(#act1g)

# act1g

```
bb({body:"normal", mouth:"normal", eyes:"look"});
hong({body:"2_tired"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
music(false);
```

h: ...

(...500)

h: i'm so sick of this game.

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}"loneliness will kill us"... {{/if}}
{{if _.parasite}}"we're a society-parasite"... {{/if}}
{{if _.whitebread}}"don't eat that, it'll kill us"... {{/if}}
{{if _.subtweet}}"they're talking behind our back"... {{/if}}
{{if _.badnews}}"the world is burning"... {{/if}}
{{if _.hookuphole}}"we'll die alone"... {{/if}}
{{if _.serialkiller}}"they're a serial killer"... {{/if}}
{{if _.catmilk}}"cats can't digest milk"... {{/if}}
{{if _.pokemon}}a ^crappy^ parody song... {{/if}}

h: i just want to live my life.

h: i just want to be free from all this... pain.

`bb({eyes:"look_sad"});`

b: Hey... human...

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: It'll be okay.

(...600)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: As your loyal guard-wolf, I'll always keep an eye out for danger, and do my best to keep you safe.

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b: I promise.

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: Last app. Instagram. What you got?

`hong({eyes:"sad"});`

h: It's... more party pictures.

`hong({mouth:"sad"});`

h: Everyone looks so happy. Free from worry. Free from anxiety.

`hong({mouth:"anger"});`

h: God, why can't I be like them? Why can't I just be *normal?*

`bb({eyes:"normal_right"});`

b: Speaking of parties, about this weekend's invite. Here's my FINAL decision:

`bb({eyes:"normal"});`

[We should go.](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[We should not go.](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: We sh--

```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: *^FUCK^.*

`hong({body:"2_you"});`

h: YOU.

(...500)

b: w

(...1500)

`bb({eyes:"wat_2"});`

b: wha?

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: I'm going to say YES to that party,

{{if _.act1g=="go"}}
h: NOT because you want me to, but because *I* want to.
{{/if}}

{{if _.act1g=="dont"}}
h: Precisely BECAUSE you don't want me to.
{{/if}}

```
hong({body:"putaway"});
sfx("rustle");
```

h: You're NOT in control of me.

```
sfx("rustle2");
hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});
```

h: Now excuse me while I eat this delicious sandwich in ^goddamn^ peace.

`hong({body:"2_sammich_eat"});`

(...601)

```
sfx("sandwich");
hong({body:"2_sammich_eaten", eyes:"0_lookaway", mouth:"0_chew1"})
```

(...601)

```
bb({body:"normal", eyes:"uncertain", mouth:"shut"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
```

b: ...

```
bb({eyes:"normal_right"});
Game.OVERRIDE_TEXT_SPEED = 1;
```

b: ...

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 4;
```

b: ..................

(...500)

`bb({mouth:"normal"});`

[AHHHH WE'RE GONNA DIE](#act1h_death) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHHH EVERYONE HATES US](#act1h_loneliness) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHHH WE'RE HORRIBLE PEOPLE](#act1h_worthless) `Game.OVERRIDE_CHOICE_LINE = true;`

# act1h_death

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH WE'RE GONNA DIE AAAAAAHHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "harm");
```

(...2500)

(#act1i)

# act1h_loneliness

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH EVERYONE HATES US AAAAAAHHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "alone");
```

(...2500)

(#act1i)

# act1h_worthless

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH WE'RE HORRIBLE PEOPLE AAAAAAHHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "bad");
```

(...2500)

(#act1i)

# act1i

```
bb({mouth:"smile_lock", eyes:"smile", body:"normal"});
music('battle', {volume:0.5});
```

n: CONGRATULATIONS

(...500)

n: YOU'VE SUCCESSFULLY PROTECTED YOUR HUMAN'S PHYSICAL + SOCIAL + MORAL NEEDS

n: WHY, LOOK HOW GRATEFUL THEY ARE!

(...500)

n: NOW THAT THEIR ENERGY IS ZERO, YOU CAN DIRECTLY CONTROL THEIR ACTIONS

`bb({mouth:"smile", eyes:"normal"});`

n: PICK YOUR ENDING MOVE

`bb({mouth:"small_lock", eyes:"fear"});`

n: *FINISH THEM*

[{FIGHT: Punish your stressful phone!}](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[{FLIGHT: Curl up in a ball and cry!}](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({mouth:"normal", eyes:"narrow"})`

b: Your phone was giving you a panic attack!

`bb({eyes:"anger"})`

b: Zuckerberg and Co are hijacking your mental health for venture capitalist money!

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Punish your phone! Destroy it! Kill it!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL I--

(#act1j)

# act1i_cry

`bb({eyes:"fear", mouth:"normal"})`

b: The whole world is filled with danger!

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Do like the armadillo! Curl up into a ball for self-defense!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CR-- 

(#act1j)

# act1j

`SceneSetup.act1_outro()`
