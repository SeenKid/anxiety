# act1

```
SceneSetup.act1();
```

(...300)

n: ET VOICI L'ANXIÉTÉ DE L'{{u_human}}

n: _TU_ ES L'ANXIÉTÉ

{{if window.localStorage.continueChapter=="replay"}}
(#act1_replay)
{{/if}}

{{if window.localStorage.continueChapter!="replay"}}
(#act1_normal)
{{/if}}



# act1_replay

`hong({mouth:"0_neutral", eyes:"0_neutral"})`

h: Oh ! Encore ?

`hong({eyes:"0_neutral"})`

n: TON TRAVAIL EST DE PROTÉGER TON {{u_human}} DU *DANGER*

`bb({eyes:"look", mouth:"small_lock"})`

n: EN FAIT, RIEN QUE L'ACTION DE JOUER DE NOUVEAU À CE JEU {{u_cpronoun}} MET EN *DANGER*

n: VITE, PRÉVIENS-{{u_cpronoun}} !

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: {{human}} ! Écoute, on est en danger ! {{cpronoun}} {{player}}...

[...va nous torturer à nouveau !](#act1_replay_torture)

[...ne va pas trouver une autre fin !](#act1_replay_alternate)

[...va développer une dissonance ludo-narrative !](#act1_replay_dissonance)

# act1_replay_torture

```
window.HACK_REPLAY = JSON.parse(localStorage.act4);
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

{{if window.HACK_REPLAY.act1_ending=="fight"}}
b: {{spronoun}} va nous faire nous recroqueviller et pleurer !
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="flight"}}
b: {{spronoun}} va nous faire détruire ton téléphone pour nous punir de t'avoir fait faire une crise de panique !
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="fight"}}
b: {{spronoun}} va nous *interdire* de nous bagarrer avec l'hôte de la fête !
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="flight"}}
b: {{spronoun}} va nous faire nous bagarrer avec l'Anti-Vilain Sympathique qu'est l'hôte de la fête !
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="jump"}}
h: Au moins on sautera pas du toit cette f--
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="walkaway"}}
b: {{u_spronoun}} VA NOUS FAIRE SAUTER DU TOIT.
{{/if}}

`bb({body:"fear"});`

b: TOUTES CES CHOSES HORRIBLES VONT NOUS ARRIVER, ET ON VA--

(#act1_replay_end)


#act1_replay_alternate

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: OK, l'histoire est la même, mais chaque chapitre a deux fins possibles, en plus de toutes les options de branches de dia--

`bb({body:"fear"});`

b: L{{if _.gender==0}}æ joueur·se{{/if}}{{if _.gender==1}}e joueur{/if}}{{if _.gender==2}}a joueuse{{/if}} va être {{if _.gender==0}}déçu·e{{/if}}{{if _.gender==1}}déçu{/if}}{{if _.gender==2}}déçue{{/if}}, fermer cet onglet, effacer ce logiciel, et on va--

(#act1_replay_end)


# act1_replay_dissonance

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: Une quoi ?

`bb({eyes:"normal"});`

b: Le fil de l'histoire parlait de comment on peut *CHOISIR* de construire une collaboration saine avec sa peur,

`bb({eyes:"normal_right"});`

b: Mais jouer une nouvelle partie donnera la même histoire, ce qui implique que vos *CHOIX* n'importent pas,

`bb({eyes:"narrow_eyebrow"});`

b: Ce qui contredit le message et la mécanique du jeu,

`bb({eyes:"fear"});`

b: Et donc détruit le tissu de l'univers narratif,

`bb({body:"fear"});`

b: Et donc on va--

(#act1_replay_end)


# act1_replay_end

`bb({body:"panic"})`

b: MOURRIIIIIIIIIIIR !!!

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

n4: (LAISSE _TON_ ANGOISSE BLA BLA BLA LA PLUS PROCHE DE _TA_ PEUR BLA BLA TU CONNAIS LA CHANSON)

```
sfx("squeak");
hong({body:"0_squeeze"});
bb({body:"squeeze"});
```

(#act1_normal_choice)



# act1_normal

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: Oh cool, mon loup est de retour. Faaaaantastique.

`hong({eyes:"0_neutral"})`

n: TON TRAVAIL EST DE PROTÉGER TON {{u_human}} DU *DANGER*

`bb({eyes:"look", mouth:"small_lock"})`

n: EN FAIT, CE SANDWICH {{u_cpronoun}} MET EN *DANGER*, JUSTE MAINTENANT, LÀ

n: VITE, PRÉVIENS-{{u_cpronoun}} !

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: {{human}} ! Écoute, on est en danger ! Le danger, c'est que...

`bb({body:"squeeze"})`

n4: (LAISSE _TON_ ANXIÉTÉ SORTIR ET JOUER ! CHOISIS CE QUI RESSEMBLE LE PLUS À CE QUE _TA_ PEUR TE DIT)

(#act1_normal_choice)

# act1_normal_choice

[On mange {{alone}} le midi ! Encore !](#act1a_alone) `bb({body:"squeeze_talk"})`

[Pendant qu'on mange, on n'est pas {{productive}} !](#act1a_productive) `bb({body:"squeeze_talk"})`

[Ce pain blanc est mauvais pour notre santé !](#act1a_bread) `bb({body:"squeeze_talk"})`

# act1a_alone

```
bb({body:"normal", mouth:"small", eyes:"narrow"});
hong({body:"0_sammich"});
```

b: Tu savais que rester {{alone}}, c'est aussi toxique que fumer 15 cigarettes par jour ?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Julianne Holt-Lunstad 2010, Journal PLoS Medicine)

`hong({eyes:"0_annoyed"})`

h: Hum, merci de citer tes sources, mais--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: Ce qui veut dire que si on ne trouve pas quelqu'un *maintenant* on va-

`bb({body:"panic"})`

b: MOURRIIIIIIIIIIIR

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "alone");
publish("hp_show");
```

(...2500)

`_.fifteencigs = true`

n: TU AS UTILISÉ *PEUR DE NE PAS ÊTRE {{loved}}*

(#act1b)

# act1a_productive

```
bb({body:"normal", mouth:"small", eyes:"normal"});
hong({body:"0_sammich"});
```

b: Sors ton ordinateur portable et travaille *maintenant* !

`hong({eyes:"0_annoyed"})`

h: Hum, je préférerais ne pas mettre de miettes sur mon cla--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Si on ne contribue pas à la société, on est un parasite !

b: Le corps-société ira demander des médicaments au docteur-société pour éliminer ses parasites-sociaux et on va--

```
bb({body:"panic", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: MOURRIIIIIIIIIIIR

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

b: Le blé raffiné augmente le taux de sucre dans le sang, on devra nous amputer les bras et on va-

`bb({body:"panic"})`

b: MOURRIIIIIIIIIIIR

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

b: Tu vois, {{l_human}} ? Je suis ton fidèle loup protecteur !

`bb({body:"pride_talk"});`

b: Aie confiance en tes intuitions ! Tes pensées sont toujours justifiées !

`bb({body:"pride"});`

n: METS LA JAUGE D'ÉNERGIE DE TON {{u_human}} À ZÉRO

n: POUR PROTÉGER SES BESOINS PHYSIQUES + SOCIAUX + MORAUX, TU PEUX UTILISER :

n: LA PEUR D'ÊTRE *{{harmed}}* #harm#

n: LA PEUR D'ÊTRE *{{alone_bis}}* #alone#

n: ET LA PEUR D'ÊTRE *UNE MAUVAISE PERSONNE* #bad#

`Game.OVERRIDE_TEXT_SPEED = 1.25;`

n4: (ASTUCE : CHOISIS CE QUI TOUCHE LE PLUS À TES PEURS LES PLUS SOMBRES ET PROFONDES !~)

h: ...

```
hong({body:"putaway"});
sfx("rustle");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: Tu sais quoi ? Peut-être que je ferais mieux de vérifier mon téléphone.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: PROTÈGE TON {{u_human}}

n: DU MONDE. DES AUTRES. {{of_self}}.

n: BONNE CHANCE

(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

`music('battle', {volume:0.5})`

n: PREMIER ROUND : *COMBATTEZ !*

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: Hum. Mon flux Facebook annonce une fête ce week-end.

`bb({eyes:"uncertain"});`

b: Mais ce·tte taré·e organise une fête *chaque* semaine ?

`bb({eyes:"uncertain_right"});`

b: C'est pour chercher à combler quel vide intérieur, au juste ? Ça doit être quelqu'un de profondément perturbé !

`hong({eyes:"surprise"});`

h: Ah et, j'ai été {{invited}} ?

`bb({eyes:"fear", mouth:"normal"});`

b: Dans ce cas !

[Dis oui, ou tu crèveras de solitude !](#act1c_loner)

[Dis non, c'est bourré de drogues dangereuses !](#act1c_drugs)

[Ignore l'invitation, on ne ferait que rendre les gens tristes.](#act1c_sad)

# act1c_loner

{{if _.fifteencigs}}
b: Quinze cigarettes par jour, {{l_human}} ! Quinze !
{{/if}}

{{if !_.fifteencigs}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.fifteencigs}}
b: Et personne ne viendra à nos funérailles, on jettera nos cendres dans l'océan, on sera {{eaten}} par une baleine,
{{/if}}

{{if !_.fifteencigs}}
b: et on deviendra de la CROTTE DE BALEINE !
{{/if}}

{{if !_.fifteencigs}} `_.whalepoop = true` {{/if}}

(...500)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

{{if !_.fifteencigs}}
b: Donc ouais, on devrait aller à cette fête !
{{/if}}

{{if _.parasite}}
b: Mais amène ton ordi pour travailler, et ne pas être un parasite social.
{{/if}}

{{if _.whitebread}}
b: Tant qu'on ne nous sert pas du PAIN BLANC
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: BIEN. Si ça peut te faire taire, ok.

h: Je vais dire oui.

{{if _.whalepoop}}
b: De la crotte de baleine, {{l_human}} ! De la crotte de baleine !
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
b: On va faire une overdose de méthamphétamines et de pain blanc, notre cadavre ne rentrera pas dans le four crématoire !
{{/if}}

{{if !_.whitebread}}
b: On va faire une telle overdose de médicaments que l'embaumeur se demandera pourquoi notre cadavre est *déjà* embaumé !
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.parasite}}
b: En plus, on peut pas faire la fête, on doit travailler sinon on est un terrible parasite de la société !
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
b: La seule chose qu'on fait, c'est pleurer dans notre coin en nous disant que rester {{alone}} est aussi mortel que fumer 15 cigarettes par jour.
{{/if}}

{{if _.parasite}}
b: La seule chose qu'on fait pendant une fête, c'est nous inquiéter de la façon dont on pourrait être {{productive}} à la place.
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

b: Donc si on y va, on va læ mettre mal à l'aise, mais si on rejette son invitation, on va aussi l'incommoder !

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

h: De toute façon, Facebook c'est trop pour moi. J'ai besoin de quelque chose de plus calme, de moins anxiogène.

`hong({eyes:"neutral"});`

h: Il se passe quoi sur Twitter ?

`bb({eyes:"look"});`

[Oh non, regarde cette horrible info !](#act1d_news)

[Oh non, est-ce que ça parlerait pas secrètement de *nous* ?](#act1d_subtweet)

[Hé, un gif de chat qui boit du lait !](#act1d_milk)


# act1d_news

```
bb({eyes:"pained1"});
music(null, {fade:2});
```

b: Oh là là, on dirait que tout fout le camp, non ?

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: C'est comme si tout prenait fin, que tout était en train de mourir et que nous étions condamnés et qu'on ne pouvait rien y faire.

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: Retweetons cette histoire !

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

h: D'accord, je vais retweeter ça, mais tais-toi s'il te plaît !

`hong({mouth:"neutral", eyes:"annoyed"});`

h: On s'en fout, on va jeter un œil à Snapchat.

(#act1e)


# act1d_subtweet

`bb({eyes:"fear"});`

b: C'est un subtweet ! Un subtweet traître et malsain !

`hong({eyes:"annoyed"});`

h: Heu... Probablement pas ?

`bb({eyes:"narrow", mouth:"small"});`

b: Mais et s'ils parlent tous de nous derrière notre dos

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

b: LES CHATS NE PEUVENT PAS DIGÉRER LE LAIT ET ON EST UNE PERSONNE HORRIBLE QUI APPRÉCIE LA CRUAUTÉ ENVERS LES ANIMAUX

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

h: J'aurais peut-être pas dû dire oui à l'invitation ?

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[Changer notre réponse ? Comme {{an}} {{idiot}} ?!](#act1e_yes_dontchange)

[Change notre réponse ! Y a trop de monde !](#act1e_yes_changetono)

{{if _.subtweet}}
[Ouais, c'est vraiment nous que ça visait.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Attends, on a retweeté sans vérifier les faits.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[Tu sais que ta posture est très mauvaise ?](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Iel comptait sur notre présence et maintenant, on trahit sa confiance ? Tu veux mourir {{alone}} ?!

{{if _.fifteencigs}}
b: QUINZE. CIGARETTES.
{{/if}}

{{if _.whalepoop}}
b: DE LA CROTTE. DE BALEINE.
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

h: Tais-toi, tais-toi, je vais accepter !

(#act1f)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Tu n'as jamais entendu parler des mouvements de foule ?

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: En 2003, un nightclub de Rhode Island a pris feu et la panique des gens a bloqué les sorties. 100 personnes ont été brûlées vives-

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

h: Tais-toi, tais-toi, je vais changer ma réponse et dire qu'en fait non ! La vache !

(#act1f)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... ça a vraiment l'air fun.

h: J'aurais peut-être pas dû dire non à l'invitation ?

`bb({mouth:"normal", eyes:"normal"});`

[Changer notre réponse ? Comme {{an}} {{idiot}} ?!](#act1e_no_dontchange)

[Change ta réponse ! Ne meurs pas {{alone}} !](#act1e_no_changetoyes)

{{if _.subtweet}}
[Ouais, c'est vraiment nous que ça visait.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Attends, on a retweeté sans vérifier les faits.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[Tu sais que ta posture est très mauvaise ?](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: Tout le monde comptait sur nous !

b: ...les laisser tout seuls pour qu'ils aient une bonne fête sans {{an}} horrible et dégoûtant {{if _.whitebread}}{{eater}} de pain blanc{{/if}} {{lost}} comme no--


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

h: Tais-toi, tais-toi, je vais refuser l'invitation !

(#act1f)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: La solitude chronique augmente notre taux de cortisol ainsi que nos risques de maladie cardio-vasculaire et d'AVC !

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

h: Tais-toi, tais-toi, je vais accepter l'invitation ! La vache !

(#act1f)

# act1e_ignore_subtweet

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: On va récolter le fruit de tous nos tweets problématiques !

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: On va se faire traîner devant la justice populaire et se faire déclarer coupable et traîner par une corde derrière un cheval sur l'autoroute de l'information !

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

h: Pourquoi est-ce que tu es comme ça ?!

(#act1f)

# act1e_ignore_factcheck

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: On répand de la désinformation ! On détruit la confiance de l'opinion envers la presse libre !

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: On est la raison pour laquelle le fascisme va émerger des ruines de la démocratie !

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

h: Pourquoi est-ce que tu es comme ça ?!

(#act1f)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Tu veux un bretzel comme colonne vertébrale ?! Arrête de te voûter au-dessus de ton écran !

```
bb({body:"meta"});
```

b: Et toi aussi.

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

h: Pourquoi est-ce que tu es comme ça ?!

(#act1f)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... ça a l'air vraiment fun.

h: Je n'aurais peut-être pas dû ignorer l'invitation ?

`bb({mouth:"normal", eyes:"normal"});`

[Continue à ignorer, on est toujours {{an}} rabat-joie.](#act1e_ignore_continue)

[En fait, dis oui.](#act1e_ignore_changetoyes)

[En fait, dis non.](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: C'est assez malpoli de continuer à l'ignorer, par contre, non ?

`bb({eyes:"normal_right"});`

b: Enfin, les autres nous ignorent *nous*, donc

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

h: Tu me... laisses m'amuser ?

b: Enfin, je veux dire, la solitude *peut* nous tuer.

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: C'est trop bondé. C'est dangereux, les foules.

(#act1e_yes_changetono)


# act1f

```
hong({mouth:"neutral", eyes:"neutral"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Peu importe. J'ai une nouvelle notification Tinder.

`bb({eyes:"uncertain"})`

b: Quoi, cette appli de drague ?

`hong({eyes:"annoyed"})`

h: C'est pas une appli de drague, c'est juste un moyen de rencontrer de nouvelles person--

`bb({eyes:"narrow"})`

b: C'est une appli de drague.

```
hong({eyes:"surprise", mouth:"smile"});
bb({eyes:"normal"});
```

h: Oh, j'ai eu un match ! Pas mal !

```
bb({eyes:"narrow_eyebrow"});
hong({eyes:"sad", mouth:"anger"})
```

h: S'il te plaît, ne ruine pas ça pour m--

```
bb({body:"panic"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: DANGER DANGER DANGER DANGER DANGER DANGER

`bb({body:"fear", eyes:"fear", mouth:"normal"})`

[On est *{{used}}* par d'autres gens.](#act1f_used_by_others)

[On *utilise* d'autres gens.](#act1f_using_others)

[TON MATCH EST UN TUEUR EN SÉRIE](#act1f_killer)

# act1f_used_by_others

`bb({body:"point_crotch", eyes:"normal", mouth:"normal"})`

b: Un peu de drague au hasard peut remplir le vide ici-bas,

b: mais ça ne remplira jamais le vide...

`bb({body:"point_heart", eyes:"pretty", mouth:"small"})`

b: là-*dedans*.

(...1000)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Ce que je veux dire, c'est QU'ON VA MOURIR {{u_alone}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

`bb({eyes:"narrow", mouth:"small"})`

b: Tu penses que les parties génitales des gens sont des Pokémons à collectionner ?

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

b: ♫ Et jouir à l'infini !

(...1000)

```
bb({eyes:"smile", mouth:"smile"});
Game.FORCE_TEXT_DURATION = 1000;
```

b: ♫ PERVERS-MON ! ATTRAPEZ-LES TO-

```
Game.FORCE_CANT_SKIP = false;
Game.clearText();
music(false);
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Le truc, c'est qu'on est juste {{an}} {{sociopath}}.

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
b: Iel va te piéger dans un puits et te gaver de pain blanc pour te faire grossir, pour pouvoir s'habiller avec ta peau !
{{/if}}

{{if _.parasite}}
b: Iel te matraquera avec un minuteur et te dira "T'AURAIS DÛ ÊTRE PLUS {{u_productive}} ESPÈCE DE PARASITE"
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: Iel va déchiqueter ta chair en confettis gores, fera des serpentins avec tes entrailles, et mélangera ton sang dans un saladier à punch !
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: Et ÇA, c'est comment comme invitation ?!
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

h: J'en ai tellement marre de ce jeu.

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}"la solitude va nous tuer"... {{/if}}
{{if _.parasite}}"on est un parasite social"... {{/if}}
{{if _.whitebread}}"ne mange pas ça, ça va nous tuer"... {{/if}}
{{if _.subtweet}}"ils parlent dans notre dos"... {{/if}}
{{if _.badnews}}"le monde est en feu"... {{/if}}
{{if _.hookuphole}}"on va mourir {{alone}}"... {{/if}}
{{if _.serialkiller}}"c'est un·e tueur·se en série"... {{/if}}
{{if _.catmilk}}"les chats ne peuvent pas digérer le lait"... {{/if}}
{{if _.pokemon}}une chanson parodique ^merdique^... {{/if}}

h: Je veux juste vivre ma vie.

h: Je veux juste être {{freed}} de toute cette... souffrance.

`bb({eyes:"look_sad"});`

b: Hé... {{l_human}}...

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: Ça va aller.

(...600)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: En tant que loyal loup protecteur, je garderai toujours un œil sur toi, et ferai de mon mieux pour te protéger.

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b: Je te le promets.

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: Dernière appli. Instagram. Qu'est-ce qu'on a là ?

`hong({eyes:"sad"});`

h: C'est... encore plus de photos de fêtes.

`hong({mouth:"sad"});`

h: Tout le monde a l'air si joyeux. Libre de soucis. Libre d'angoisses.

`hong({mouth:"anger"});`

h: Bon sang, pourquoi est-ce que je ne peux pas être comme eux ? Pourquoi je ne peux juste pas être *{{normal}} ?*

`bb({eyes:"normal_right"});`

b: En parlant de fête... à propos de cette invitation pour ce week-end. Voici ma décision FINALE :

`bb({eyes:"normal"});`

[On devrait y aller.](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[On ne devrait pas y aller.](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: On devr--

```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: VA.

h: TE.

h: FAIRE.

`hong({body:"2_you"});`

h: *^FOUTRE^.*

(...500)

b: q

(...1500)

`bb({eyes:"wat_2"});`

b: quoi?

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: Je vais dire OUI à cette fête,

{{if _.act1g=="go"}}
h: PAS parce que tu me le demandes, mais parce que *JE* le veux.
{{/if}}

{{if _.act1g=="dont"}}
h: Précisement PARCE QUE tu ne veux pas que j'y aille.
{{/if}}

```
hong({body:"putaway"});
sfx("rustle");
```

h: Tu ne me contrôles PAS...

```
sfx("rustle2");
hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});
```

h: Maintenant, excuse-moi pendant que je mange ce délicieux sandwich en paix, ^bordel^.

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

[AHHHH ON VA MOURIR](#act1h_death) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHHH TOUT LE MONDE NOUS DÉTESTE](#act1h_loneliness) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHHH ON EST QUELQU'UN D'HORRIBLE](#act1h_worthless) `Game.OVERRIDE_CHOICE_LINE = true;`

# act1h_death

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH ON VA MOURIR AAAAAAHHHHHHH

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

b: AHHHH TOUT LE MONDE NOUS DÉTESTE AAAAAAHHHHHHH

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

b: AHHHH ON EST QUELQU'UN D'HORRIBLE AAAAAAHHHHHHH

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

n: FÉLICITATIONS

(...500)

n: TU AS PROTÉGÉ LES BESOINS PHYSIQUES + SOCIAUX + MORAUX DE TON {{u_human}} AVEC SUCCÈS

n: REGARDE COMMENT {{u_spronoun}} T'EST {{acknowledging}} !

(...500)

n: MAINTENANT QUE SON ÉNERGIE EST À ZÉRO, TU PEUX DIRECTEMENT CONTRÔLER SES ACTIONS

`bb({mouth:"smile", eyes:"normal"});`

n: CHOISIS TA DERNIÈRE ACTION

`bb({mouth:"small_lock", eyes:"fear"});`

n: *FINIS-{{u_cpronoun}}*

[{FIGHT: Punis ton téléphone super stressant !}](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[{FLIGHT: Mets-toi en boule et pleure !}](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({mouth:"normal", eyes:"narrow"})`

b: Ton téléphone était en train de te faire faire une crise de panique !

`bb({eyes:"anger"})`

b: Zuckerberg et Cie sont en train de détourner ta santé mentale pour en faire de l'argent pour les investisseurs !

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Punis ton téléphone ! Détruis-le ! Tue-le !

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-LE TUE-L--

(#act1j)

# act1i_cry

`bb({eyes:"fear", mouth:"normal"})`

b: Le monde entier est rempli de dangers !

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Fais comme le tatou ! Mets-toi en boule pour te protéger !

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: METS-TOI EN BOULE ET PLEURE METS-TOI EN BOULE ET PLEURE METS-TOI EN BOULE ET PLEURE METS-TOI EN BOULE ET PLE--

(#act1j)

# act1j

`SceneSetup.act1_outro()`
