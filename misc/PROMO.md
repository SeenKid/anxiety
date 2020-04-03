# intro

`SceneSetup.intro();`

# intro-play-button

[<div class="mini-icon" pic="play1"></div> PLAY! <div class="mini-icon" pic="play2"></div>](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

# intro-start

(...500)

`clearText()`

n3: derp

`publish("show_options_bottom")`

# intro-start-2

`clearText()`

(...1000)

`publish("intro-to-game-2")`

n2: CECI EST UN·E HUMAIN·E

(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`

# act1

`SceneSetup.act1();`

(...300)

n: ET CECI EST L'ANXIÉTÉ DE L'HUMAIN·E

n: _TU_ ES L'ANXIÉTÉ

[On mange tout·e seul·e le midi ! Encore !](#act1a_alone)

[Pendant qu'on mange, on n'est pas productif·ve !](#act1a_productive)

[Ce pain blanc est mauvais pour notre santé !](#act1a_bread)

# act1a_alone

`bb({mouth:"small", eyes:"narrow"})`

b: Tu savais que rester tout·e seul·e, c'est aussi toxique que fumer 15 cigarettes par jour ?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Julianne Holt-Lunstad 2010, Journal PLoS Medicine)

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: Hum, merci de citer tes sources, mais--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: Ce qui veut dire que si on ne trouve pas quelqu'un *maintenant* on va-

`bb({body:"panic"})`

b: MOURRRRRRRRRRRIR

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("20p", "alone");
publish("hp_show");
```

(...2500)
