# intro

`SceneSetup.intro();`

# intro-play-button

(...51)

[PLAY!](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

# intro-start

(...500)

`clearText()`

n3: Alors, avant qu'on ne commence, comment est-ce que *tu* aimes lire?

`publish("show_options_bottom")`

# intro-start-2

n3: Maintenant, commençons notre histoire...

```
publish("hide_tabs");
clearText();
```

(...1000)

`publish("intro-to-game-2")`

n2: CECI EST UN HUMAIN
(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`

# act1

```
SceneSetup.act1();
publish("hide_tabs");
music('battle', {volume:0.5});
```

(...300)

n: ET CECI EST L'ANXIÉTÉ DE L'HUMAIN

n: _TU_ ES L'ANXIÉTÉ

(#act1_normal)


# act1_normal

```
hong({body:"putaway"});
sfx("rustle");
Game.OVERRIDE_TEXT_SPEED = 1.5;
```
h: Non. Non, je t'écoute pas. Je vais vérifier mon téléphone.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: TON TRAVAIL EST DE PROTÉGER TON HUMAIN DU *DANGER*

`bb({eyes:"look", mouth:"small_lock", body:"fear"})`

b: Gasp! Tu procrastines sur Twitter! Encore!

```
bb({eyes:"normal", mouth:"normal", body:"normal"});
hong({eyes:"annoyed"});
```

h: Ouais je me demande pourquoi je ne m'asseois pas un moment pour écouter mes pensées plus souvent.

`hong({eyes:"neutral"});`

n: VITE, AVERTIS-LE D'UN *DANGER!*

```
bb({eyes:"look"});
```

[Oh non, regarde cette horrible nouvelle!](#act1d_news)

[Oh non, est-ce que ce tweet est à propos de *nous?*](#act1d_subtweet)

[Hé, un GIF d'un chat qui boit du lait!](#act1d_milk)

# act1d_milk

`hong({mouth:"smile", eyes:"surprise"});`

h: Hé ouais c'est mignon, je v--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: LES CHATS NE PEUVENT PAS DIGÉRER LE LAIT ET ON EST DES PERSONNES HORRIBLES POUR AVOIR APPRÉCIÉ CELA

(...200)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("20p", "bad");
publish("hp_show");
```



