# act2

`SceneSetup.act2();`

{{if _.badnews && !_.factcheck}}
(#act2-preamble-news1)
{{/if}}

{{if _.badnews && _.factcheck}}
(#act2-preamble-news2)
{{/if}}

{{if _.catmilk}}
(#act2-preamble-cat)
{{/if}}

(#act2-preamble-tinder)


# act2-preamble-news1

```
publish("act2",["dee",3]);
```

s: Mais as-tu *vu* ce "reportage" à propos de cette chose horrible qui s'est passée quelque part?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: S-salut...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Je déteste vraiment les infos. C'est seulement du sensationnalisme et du putaclic.

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: La... la fête est sympa...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: C'est vrai, mais ils suivent juste des incitations. Le *vrai* problème c'est les gens qui cliquent sur le putaclic.

```
publish("act2",["dee",3]);
```

s: Qui retweeterait un reportage aussi épouvantable, et rendrait tous ses amis tristes ?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, n'est-ce pas ?

(#act2-preamble-end)


# act2-preamble-news2

```
publish("act2",["dee",3]);
```

s: Mais as-tu *vu* ce "reportage qui est devenu viral?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: S-salut...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Ouais, complètement faux. Qui tomberait dans le panneau et retweeterait ça ?

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: La... la fête est sympa...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Sérieusement mec. Genre, salut, ouvre Google et vérifie d'abord?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, n'est-ce pas?

(#act2-preamble-end)


# act2-preamble-cat

```
publish("act2",["dee",3]);
```

s: Comme je disais, le Complexe Industriel des Memes exploite les chats.

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: S-salut...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: Dis-m'en davantage.

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: La... la fête est sympa...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: Et bien, hier j'ai vu quelqu'un retweeter un GIF où un chat buvait du lait.
```
publish("act2",["dee",3]);
```

s: Ils ne peuvent pas digérer cette ^merde^! Qui retweeterait de la *cruauté animale* comme ça ?
```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, n'est-ce pas?

(#act2-preamble-end)


# act2-preamble-tinder

```
publish("act2",["dee",1]);
```

s: Donc ouais, je n'ai jamais reçu de réponse!

```
publish("act2",["dee",0]);
publish("act2",["party_hong","next"]);
```

h2: S-salut...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: Même si vous avez matché sur Tinder ?

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: La... la fête est sympa...

```
publish("act2",["party_hong","next"]);
```

{{if _.serialkiller}}
(#act2-preamble-serialkiller)
{{/if}}

{{if _.hookuphole}}
(#act2-preamble-hookuphole)
{{/if}}

{{if _.pokemon}}
(#act2-preamble-pokemon)
{{/if}}

# act2-preamble-serialkiller

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Ouais, je sais pas ! Quoi, j'ai l'air d'un *tueur en série* ou quoi ? Tellement parano.

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, n'est-ce pas?

(#act2-preamble-end)


# act2-preamble-hookuphole

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Ouais, je sais pas ! Peut-être qu'ils pensent qu'un flirt ne peux remplir le vide dans leur coeur ?

s: Arrête d'être aussi prude ! Ouvre ton esprit, puis tes jambes !

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, n'est-ce pas?

(#act2-preamble-end)


# act2-preamble-pokemon

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Ouais, je sais pas ! Pas si sexy que ça, mais ç'aurait été une bonne prise!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Attrapez-les tous!™

(#act2-preamble-end)


# act2-preamble-end

```
Game.clearText();
publish("act2-out-1");
music(null, {fade:1});
```

(...3000)

```
music('battle', {volume:0.5});
publish("hp_show");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

n: DEUXIÈME ROUND: *COMBATTEZ !*

[Oh non, ils nous détestent tous !](#act2a_social)

[T'étais en train de *reluquer* la rousse ?](#act2a_perv)

[Hé, parlons du sens de la vie.](#act2a_meaning)

# act2a_social

`bb({eyes:"sad"})`

b: On ruine l'ambiance de la fête en étant un tel tas de tristesse !

`bb({eyes:"shock", body:"two_up"})`

b: On tue la bonne ambiance ! On commet un meurtre d'ambiance de premier degré !

`bb({eyes:"normal", body:"normal"})`

b: Humain, on doit partir *maintenant* avant que--

```
_.a2_first_danger = 'social';
_.a2_attack_1 = "alone";
```

(#act2b)

# act2a_perv

`bb({eyes:"suspect"})`

b: Elles sont plus belles que nous, ce qui veut dire que si on ose même les *regarder*, alors--

`bb({eyes:"shock", body:"two_up"})`

b: ON EST FLIPPANTS

`bb({body:"normal"})`

b: On est des flippants, méchants, mauvais mauvais mauvais terribles terribles perv--

```
_.a2_first_danger = 'perv';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2a_meaning

`bb({body:"one_up", eyes:"normal_r"})`

b: Au final, que peut-on vraiment faire qui ait de l'importance? 

`bb({body:"normal", eyes:"sad"})`

b: Contribuer à l'humanité ? Toutes les grandes oeuvres se décomposent à la manière d'Ozymandias. L'amour ? La mort les séparera toujours.

`bb({eyes:"sad_r"})`

b: Et de la mort, il y en a ! *On* va mourir. *Nos êtres aimés* vont mourir.

`bb({eyes:"shock", body:"two_up"})`

b: Diable, la Seconde Loi de la Thermodynamique implique que même notre *univers* va mourir !

`bb({eyes:"suspect", body:"normal"})`

b: Oh, "la mort nous fait apprécier la vie" ? C'est comme dire que l'esclavage est bien parce que ça nous fait apprécier la liberté !

`bb({body:"one_up"})`

b: Oh, "tu dois créer ton propre sens à la vie" ? C'est ce que les cultistes et les théoriciens du complot font !

`bb({eyes:"shock", body:"two_up"})`

b: La vie n'a pas de sens, la mort n'a pas de sens, même *sens* ça n'a pas de sens ! Qu'est-ce qu'une âme mortelle est supposée--

```
_.a2_first_danger = 'meaning';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2b

`bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"suspect"})`

b: Euh... est-ce-que tu peux m'entendre, humain?

`bb({eyes:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"shock", mouth:"small_talk", body:"chest", MOUTH_LOCK:true})`

b: *GASP*

`bb({mouth:"small_talk"})`

b: JE DOIS T'AVERTIR À PROPOS...

[De *PLUS* du même danger !](#act2b_louder)

{{if _.a2_first_danger=="social"}}
[D'un danger social *différent* !](#act2b_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[D'un danger moral *différent* !](#act2b_different_moral)
{{/if}}

[Tu ignores le danger ! C'est dangereux !](#act2b_ignore)

# act2b_louder

`_.a2_first_choice = "louder"`

{{if _.a2_first_danger=="social"}}
(#act2b_louder_social)
{{/if}}

{{if _.a2_first_danger=="perv"}}
(#act2b_louder_perv)
{{/if}}

{{if _.a2_first_danger=="meaning"}}
(#act2b_louder_meaning)
{{/if}}

# act2b_louder_social

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: LES ÉMOTIONS SONT CONTAGIEUSES ! DONC SI TU NE PARS PAS TU VAS INFECTER TOUT LE MONDE AVEC TON PROBLÈME MENTAL !

b: Tu vas créer une épidémie mortelle de SYNDROME DE LA TRISTESSE !

`bb({eyes:"suspect", body:"normal", mouth:"normal"})`

b: On doit se barrer d'ici et se mettre en quarantaine dans une petite pièce avec NetFlix et livraison à domicile!

```
_.a2_second_danger = 'netflix';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "a quarantine";
```

(#act2c)

# act2b_louder_perv

`bb({eyes:"suspect", body:"two_up", mouth:"normal"})`

b: SOIS PAS FLIPPANT. C'EST CONTRE LA LOI !

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: Loi des Gens Flippants, Section 74.5: (1) N'importe qui mate (a) ces épaules musclées (b) ces fesses rebondies (2) doit être certifié par la présente comme

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: "UN GROS PERVERS DÉGUEULASSE"

```
_.a2_second_danger = 'law';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "the law";
```

(#act2c)

# act2b_louder_meaning

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: En fait, même si tu trouves une noble but à ta vie, tu peux *toujours* tout faire foirer !

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Alfred Nobel voulait la paix dans le monde et que les cultures se comprennent entre elles. Donc il a décidé de simplifier les voyage.

`bb({eyes:"normal_r"})`

b: Donc il devait trouver un moyen de créer des tunnels pour les trains pour pas cher. Alors, il a inventé un nouveau matériau appelé "dynamite"...

`bb({body:"one_up", eyes:"normal"})`

b: qui était utilisé pendant la Première Guerre Mondiale pour TUER DES MILLIONS DE GENS

`bb({body:"two_up", eyes:"shock"})`

b: C'EST L'EFFET PAPILLON, HUMAIN ! COMBIEN DE GENS ES-TU ACCIDENTELLEMENT EN TRAIN DE TUER LÀ TOUT DE SUITE

```
_.a2_second_danger = 'butterfly';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "World War I";
```

(#act2c)

# act2b_different_social

`_.a2_first_choice = "different"`

`bb({eyes:"normal_r", body:"point", mouth:"normal"})`

b: En fait, tu sais ce qui est pire que le fait que personne ne t'aime ? Que *tout le monde* t'aime.

`bb({body:"one_up", eyes:"suspect", mouth:"normal"})`

b: C'est-à-dire, devenir un de *ces* animaux de fête en chasse de plaisir.

`bb({body:"normal", mouth:"small"})`

b: Une vie superficielle avec des amis superficiels qui connaissent uniquement ton côté superficiel !

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: Humain, on doit fuir ces zombies du plaisir avant qu'ils nous transforme en l'un des leurs !

```
_.a2_second_danger = 'zombies';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "zombies";
```

(#act2c)

# act2b_different_moral

`_.a2_first_choice = "different"`

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: Des gens meurent de famines et de génocides *maintenant tout de suite* et nous, on fait la fête !

`bb({body:"point", eyes:"closed", mouth:"small"})`

b: Une sage personne a un jour dit, "la seule chose qui permet au mal de triompher est l'inaction des Hommes de bien".

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: ON EST EN TRAIN DE RIEN FAIRE.

`bb({mouth:"small"})`

b: EN FAISANT LA FÊTE, ON EST EN TRAIN D'AIDER *HITLER*.

```
_.a2_second_danger = 'hitler';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "Hitler";
```

(#act2c)

# act2b_ignore

`_.a2_first_choice = "ignore"`

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Tu penses que t'es en sécurité parce que tu as retiré les batteries du détecteur de monoxyde de carbone ?

`bb({eyes:"suspect_r"})`

b: Tu ne sentiras même pas le poison ! Tu vas juste t'assoupir et après tu vas--

`bb({body:"scream_c_1"})`

b: MOURIIIIIIIIIIIIIIIIIIR

```
_.a2_second_danger = 'ignore';
_.a2_attack_2 = "harm";
_.a2_hoodie_callback = "carbon monoxide";
```

(#act2c)

# act2c

```
hong({body:"ignore_sweat"});
bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true});
```

b: ...

`bb({eyes:"happy", mouth:"smile", body:"chest"})`

b: Oh Dieu merci, humain, je pense que tu peux m'entendre de nouveau !

`bb({eyes:"closed", body:"point"})`

b: JE DOIS T'AVERTIR À PROPOS DE...

{{if _.a2_first_choice=="louder"}}
[*Encore plus* du même danger !](#act2c_louder)
{{/if}}

{{if _.a2_first_choice!="louder"}}
[*Plus* du même danger !](#act2c_louder)
{{/if}}

{{if _.a2_first_danger=="social"}}
[Un danger social *différent* !](#act2c_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[Un danger moral *différent* !](#act2c_different_moral)
{{/if}}

[Est-ce que t'as vérifié le punch avant de le boire ?](#act2c_punch)

#act2c_louder

{{if _.a2_second_danger=="netflix"}}
(#act2c_louder_netflix)
{{/if}}

{{if _.a2_second_danger=="law"}}
(#act2c_louder_law)
{{/if}}

{{if _.a2_second_danger=="butterfly"}}
(#act2c_louder_butterfly)
{{/if}}

{{if _.a2_second_danger=="zombies"}}
(#act2c_louder_zombies)
{{/if}}

{{if _.a2_second_danger=="hitler"}}
(#act2c_louder_hitler)
{{/if}}

{{if _.a2_second_danger=="ignore"}}
(#act2c_louder_ignore)
{{/if}}

# act2c_louder_netflix

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: En vrai, Netflix & la livraison de nourriture ne permettra d'être assez en quarantaine ! On pourra toujours infecté le livreur !

`bb({body:"one_up", mouth:"small"})`

b: Il faut qu'on déménage au Yukon au Canada, et qu'on se fasse livré la nourriture par drône !

`bb({body:"two_up", mouth:"normal"})`

b: Et ensuite, ils devront stériliser leur drône pour retirer nos GERMES DE TAS DE TRISTESSE

`_.a2_attack_3 = "alone";`

`_.a2_hoodie_callback = "a quarantine";`

(#act2d)

# act2c_louder_law

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: Le GROS PERVERS DÉGOÛTANT devra être condamné à 72 heures dans un de ces dispositifs d'humiliation publique médiéval

b: à moins qu'ils ne *penchent* secrètement dans de ce genre de trucs

`bb({body:"scream_a_1"})`

b: parce que ce sont de TRÈS GROS PERVERS DÉGOÛTANT

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "the law";`

(#act2d)

# act2c_louder_butterfly

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: EFFET PAPILLON ! T'es en train d'utiliser un verre en plastique non-biodégradable ?

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: BAM, UNE FUITE DE POISON D'UNE DÉCHARGE ET TUE UN ENFANT

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: T'es en train de transpirer et ton cœur bat très fort ?

`bb({body:"scream_a_1"})`

b: BAM, TU METS EN FAILLITE TON ASSURANCE SANTÉ ET DES MILLIONS DE GENS MEURENT

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "the butterfly effect";`

(#act2d)

# act2c_louder_zombies

`bb({body:"normal", mouth:"small", eyes:"angry"})`

b: Ces zombies du plaisir boîteront lentement vers toi en marmonnant,

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: AIIIIIIIMES. AIIIIIIIMES.

`bb({body:"scream_a_1"})`

b: Puis, ils te MORDRONT et te transformeront en POTE SANS CERVELLE et/ou UN COPULATEUR IDIOT !

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "zombies";`

(#act2d)

# act2c_louder_hitler

`bb({body:"scream_a_1"})`

b: LES NAZIS MARCHENT AU PAS DE L'OIE DANS LES RUES LÀ TOUT DE SUITE

`bb({body:"one_up", mouth:"smile", eyes:"happy"})`

b: En train de se dire, *heureusement que les 'bons Hommes' se relâchaient avec des trucs genre la 'détente' et 'la prise de soin de soi' !*

`bb({body:"point", mouth:"smile", eyes:"happy_r"})`

b: *Maintenant nos plans vont se dérouler sans problèmes, le Reich dans les délais !*

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "Hitler";`

(#act2d)

# act2c_louder_ignore

`bb({body:"normal", mouth:"normal", eyes:"normal_r"})`

b: En y repensant, est-ce qu'on sait si le bâtiment *a* un détecteur de monoxyde ?!

`bb({body:"two_up", mouth:"small", eyes:"normal"})`

b:  Et si on était en train d'être empoisonné *LÀ TOUT DE SUITE ?*

`bb({body:"scream_a_1"})`

b: ON NE VERRAIT MÊME PAS LA MORT S'APPROCHER. ON S'ARRÊTERAIT JUSTE D'EXISTER POUR TOUJOURS ET À JAMA--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "carbon monoxide";`

(#act2d)

# act2c_different_social

`bb({body:"normal", mouth:"normal", eyes:"sad"})`

b: Et si on était juste *fondamentalement incapable* d'être aimé, ou d'aimé quelqu'un ?

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: Et si quelque chose était irréversiblement cassé à l'intérieur de nous il y a longtemps ? Ou n'a même jamais été ?

`bb({body:"scream_a_1"})`

b: AHH ON EST CASSÉ ! TELLEMENT CASSÉ TELLEMENT CASSÉ TELLEMENT CASS--

`_.a2_attack_3 = "alone";`

(#act2d)

# act2c_different_moral

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: What if we're just *fundamentally rotten?*

`bb({body:"one_up", eyes:"sad"})`

b: Others have an inner drive to do goodness, but we only do "good" out of guilt or shame, if at all.

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: What if it's in our nature to hurt others? What if we can't be anything *other* than a burden to those close to us?

`bb({body:"scream_a_1"})`

b: AHH WE'RE BROKEN! SO BROKEN SO BROKEN SO BROKE--

`_.a2_attack_3 = "bad";`

(#act2d)

# act2c_punch

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: I'm not being irrational. People *do* drug punch bowls. That is an actual thing that actually happens.

`bb({eyes:"suspect"})`

b: Human, does your head hurt? Are your limbs limp? I think we're dying.

`bb({body:"scream_a_1"})`

b: AHHH WE'RE DYING! WE'RE DYING WE'RE DYING WE'RE DYI--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "punch bowls";`

(#act2d)

# act2d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"attacked"});
attack("20p", _.a2_attack_1);
```

(...401)

```
hong({body:"attacked_2"});
attack("20p", _.a2_attack_2);
```

(...401)

```
hong({body:"attacked_3"});
attack("20p", _.a2_attack_3);
```

(...1001)

h: F^AAACK^!

h: F^ACK^ING F^ACK^-F^AKK^ITY *F^AAAAACK^*

`bb({body:"two_up", mouth:"smile", eyes:"happy"});`

b: Yay, human! I'm so happy you can hear me again!

`bb({body:"normal", mouth:"small", eyes:"sad"})`

b: Why were you ignoring me?

`hong({body:"facepalm"})`

h: Holy ^hell^, you absolute moron.

`hong({body:"facepalm_2"})`

h: You know that Native American story?

h: "There are two wolves inside you, one is hope, one is despair, which wolf wins? The one you feed."

```
hong({body:"facepalm_3"});
bb({eyes:"normal"});
```

h: I was trying to *starve* you, you sadistic ^asshole^!

`hong({body:"smile", mouth:"smile"})`

h: Screw it, I'll do positive affirmations instead.

h: *I am loved. I am good. I am smart. I am beautiful. I am special.*

`bb({eyes:"suspect"});`

[Golly, that's so narcissistic!](#act2d_narcissist)

[Y'know affirmations were *disproven?*](#act2d_disproven)

[omg don't credit random stories to indigenous folk](#act2d_racist)

# act2d_disproven

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: In fact, they actually *backfire* for people with low self-esteem! 

`bb({body:"one_up", mouth:"small", eyes:"normal"})`

b: It was a well-designed study – randomized controlled trial, experimenter was blinded as to who was in which group.

`bb({body:"two_up", mouth:"small", eyes:"normal_r"})`

b: Results: if you already had low self-esteem, being asked to repeat affirmations makes you feel *worse* than if you'd said nothing at all!

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: Wood 2009, Psychological Science. Look it up on Google Scholar, human,

`bb({body:"scream_b_1"})`

b: THEN STOP SPREADING UNSCIENTIFIC FAKE NEWS

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_narcissist

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: You *need* to humbly see your own flaws in order to grow as a person!

`bb({body:"two_up", eyes:"suspect"})`

b: You can't spray air freshener over a moldy room! Covering up your flaws makes you worse in the long run.

`bb({body:"chest", mouth:"smile", eyes:"closed"})`

b: Thankfully, I, as your loyal guard-wolf, can alert you to your flaws. And right now, it's-

`bb({body:"scream_b_1"})`

b: EVERYTHING. EVERYTHING IS WRONG

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_racist

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Native Americans are *actual people*, not some "noble savages" you can namedrop to make your fortune-cookie advice more *exotic*.

`bb({eyes:"suspect_r"})`

b: You're reducing individual persons & complex cultures to a Hallmark card! That's "benevolent racism"! 

`bb({body:"scream_b_1"})`

b: STOP BEING RACIST YOU SQUINTY-EYED JERK

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2e

h: ^ASSDAMMIT^.

`hong({body:"yell", mouth:"yell"})`

h: You know what? You're *irrational*.

h: Everyone knows emotions are irrational! Especially fear!

`hong({body:"facepalm_2"})`

h: You're a useless evolutionary leftover, like my appendix or wisdom teeth!

`hong({body:"yell", mouth:"yell"})`

h: ^Hell^, this whole wolf metaphor is stupid! You're just a bunch of neuro-chemicals in my head.

`hong({body:"cross", mouth:"cross"})`

h: So why should I listen to a worthless, irrational, non-existent piece of ^shit^ like you?!

`bb({eyes:"sad", MOUTH_LOCK:true})`

b: ...

[Jeez, human. That's really hurtful.](#act2e_hurtful)

[I'm a feeling. Feelings are valid.](#act2e_valid)

[Human, we're *both* "just chemicals."](#act2e_rational)

# act2e_hurtful

`bb({body:"chest"})`

b: I'm *part* of you, you know. When you say that, you're hurting *yourself*.

`bb({body:"scream_a_1"})`

b: Why are you hitting yourself, human? STOP HITTING YOURSELF.

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2e_rational

`bb({body:"normal", mouth:"normal", eyes:"normal_r"});`

b: Your deepest motivations are dopamine, your richest joys are serotonin.

`bb({body:"one_up"});`

b: Your memories are synaptic weights, your reason is fault-prone electrical signals.

`bb({eyes:"normal", body:"normal"});`

b: So if me being "just chemicals" means *I'm* irrational... then that means *you're* irrational!

`bb({body:"two_up", eyes:"shock"});`

b: And if we're *both* irrational, then we'll *never* figure out how to be fulfilled and happy!

`bb({body:"scream_a_1"})`

b: AHHH WE'RE BROKEN! SO BROKEN SO BROKEN SO BROKEN--

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2f)

# act2e_valid

`bb({body:"normal", mouth:"normal", eyes:"suspect"});`

b: Hang on... "they" say that feelings are valid, that you should always accept your emotions.

`bb({eyes:"suspect_r"});`

b: But "they" also say emotions are irrational, that emotions are not to be trusted.

`bb({eyes:"angry"});`

b: Oh my gosh, "they" have been lying to us this whole time!

`bb({body:"scream_a_1"})`

b: "THEY" FEED US CONTRADICTIONS TO MAKE US DEPENDENT ON THE SELF-HELP INDUSTRIAL COMPLEX

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2f

`hong({body:"defeated", MOUTH_LOCK:true});`

h: ...

h: I hate this. God it hurts so much I *hate* this.

h: I can't appease you. I can't ignore you. I can't fight you. 

`bb({eyes:"suspect"});`

h: No matter what I do, I can't seem to get rid of yo--

`bb({body:"cry_1"});`

b: Well maybe you're NOT *SUPPOSED* TO GET RID OF ME.

`bb({body:"cry_2"});`

b: How do you think *I* feel, human?!

`bb({body:"cry_4", mouth:"cry", eyes:"cry"})`

b: I'm trying my best to be your guard-dog, but you keep seeing me as some Big Bad Wolf!

b: So I try even *harder* to alert you to danger! *More* danger! *Different* danger!

`bb({eyes:"cry_2"})`

b: But no matter how hard I try to protect you, you *still* think I'm your enemy!

`bb({body:"cry_5"});`

b: What am I doing wrong?!

`bb({body:"cry_2"});`

b: I *know* I suck at my job. But I'm *trying*, human!

`bb({body:"cry_3"});`

b: ...I'm trying.

`bb({body:"cry_6", mouth:"right", eyes:"cry_r_1"});`

b: You don't have to heed my warnings, or agree with me, or even *like* me.

`bb({eyes:"cry_r_2"});`

b: I just... all I want is for you to be patient with me.

`bb({eyes:"cry_r_3"});`

b: I just want for you to sit with me for a while, instead of turning away and--

```
bb({eyes:"cry_r_4"});
hong({body:"listen"});
```

r: Hey.

```
hong({body:"look"});
Game.clearText();
publish("act2-in-2");
publish("hp_hide");
music('party1', {volume:0.4, fade:2});
```

(...2000)

```
publish("act2",["party_hunter",2]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: Looks like you're caught in a fight with yourself, kid.

```
publish("act2",["party_hunter",3]);
publish("act2",["party_hong",13]);
```

h2: Was it that obvious?

```
publish("act2",["party_hunter",4]);
publish("act2",["party_hong",14]);
```

r: You were, uh, mumbling at your hoodie about {{_.a2_hoodie_callback}} or something.

```
publish("act2",["party_hunter",13]);
publish("act2",["party_hong",15]);
sfx("rustle", {volume:0.6});
setTimeout(function(){
	publish("act2",["party_hong",16]);
	sfx("concrete_step3", {volume:0.6});
},401);
setTimeout(function(){
	publish("act2",["party_hong",17]);
	sfx("concrete_step4", {volume:0.6});
},801);
```

h2: oh god i'm such a mess.

```
publish("act2",["party_hunter",7]);
publish("act2",["party_hong",18]);
sfx("squeak");
```

r: Hey. You're not alone, friend. Anxiety's super common.

```
publish("act2",["party_hunter",5]);
publish("act2",["party_hong",19]);
```

{{if _.act1_ending=="fight"}}
r: Heck, just yesterday, I heard someone on campus had a nervous breakdown and smashed their phone!
{{/if}}

{{if _.act1_ending=="flight"}}
r: Heck, just yesterday, I heard someone curled up into an armadillo ball and cried in public!
{{/if}}

```
publish("act2",["party_hunter",2]);
```

r: Listen: I know what it's like to have that animal in your head.

```
publish("act2",["party_hunter",8]);
```

r: We *all* do. That's why I throw these parties every weekend, to forget our worries, forget that animal.

```
publish("act2",["party_hunter",9]);
publish("act2",["party_hong",20]);
```

h2: but my anxiety...

```
publish("act2",["party_hunter",2]);
publish("act2",["party_hong",21]);
```

r: Don't worry, kid. I used to be like you. But then I found a little trick to get that negative voice to shut up forever...

```
publish("act2",["party_hunter",3]);
Game.clearText();
music(null, {fade:1});
```

(...2001)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",22]);
sfx("rustle");
```

(...2501)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",23]);
sfx("rustle2");
```

(...1001)

```
publish("act2",["party_hunter",11]);
```

r: My own specialty blend. It's a bit stronger than... well, anything legal really.

```
publish("act2",["party_hunter",12]);
publish("act2",["party_hong",24]);
```

r: Bottoms up, ^bee-yatch^!

```
hong({body:"hold"});
bb({body:"normal", mouth:"small", eyes:"wat"});
Game.clearText();
Game.WORDS_HEIGHT_BOTTOM = -1;
publish("act2-out-3");
publish("hp_show");
```

(...3500)

[Oh my God.](#act2g_1) `Game.OVERRIDE_CHOICE_LINE=true`

[This is a bad coping mechanism.](#act2g_2) `Game.OVERRIDE_CHOICE_LINE=true`

[Don't take drinks from strangers.](#act2g_3) `Game.OVERRIDE_CHOICE_LINE=true`

# act2g_1

b: O--

(#act2g)

# act2g_2

b: T--

(#act2g)

# act2g_3

b: D--

(#act2g)

# act2g

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"forward", mouth:"forward"});
bb({body:"frazzled", mouth:"frazzled", eyes:"frazzled"});
```

h: Mmm, what an exquisite palette!

h: A full-bodied flavor of "shut your mind up," with a subtle aftertaste of "never feel anything ever again"!

b: This is bad, human. This is really, really bad.

[This is *actually* how addiction starts.](#act2h_opt1) `Game.OVERRIDE_CHOICE_LINE=true`

[I *knew* the host was deeply messed up!](#act2h_opt3) `Game.OVERRIDE_CHOICE_LINE=true`

[Also, they could have drugged that!](#act2h_opt2) `Game.OVERRIDE_CHOICE_LINE=true`


# act2h_opt1

b: This is *actu*--

(#act2h)

# act2h_opt2

b: Also, they co--

(#act2h)

# act2h_opt3

b: I *knew* th--

(#act2h)

# act2h

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"back", mouth:"back"});
bb({body:"panicked", mouth:"panicked", eyes:"panicked"});
```

h: Delicious, *and* cheaper than therapy!

b: HUMAN PLEASE STOP

h: Hehehe!

h: And what are *you* gonna do about it, ^asshole^?

b: I'm so sorry, human.

b: I'm going to have to use my SPECIAL ATTACK

```
bb({body:"special_a"});
music('battle', {volume:0.5});
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act2h_attack) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act2h_attack) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act2h_attack) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`

# act2h_attack

```
bb({body:"special_b_1"});
hong({body:"forward", mouth:"forward"});
sfx("charging");
```

h: What's this ^crap^?

h: You're gonna yap more stupid *words* at me to--

```
bb({body:"special_c"});
sfx("hadouken");
```

(...901)

(#act2i)

# act2i

```
publish("hide_tabs");
publish("show_special_attack");
Game.FORCE_CANT_SKIP = true;
music(null);
stopAllSounds();
```

(...5000)

```
publish("show_tabs");
hong({ body:"final", mouth:"final" });
bb({ body:"normal", mouth:"normal", eyes:"sad" });
attack("100p", _.SPECIAL_ATTACK);
Game.FORCE_CANT_SKIP = false;
setTimeout(function(){
	publish("remove_special_attack");
},30);
```

(...2500)

h: WHAT THE ^HELL^ WAS THAT

b: I'm sorry. I needed to show you the consequences.

{{if _.SPECIAL_ATTACK=="harm"}}
h: I COULD *SEE* MY OWN CORPSE. I COULD *FEEL* THE SENSATION OF BEING ACTUALLY DEAD.
{{/if}}

{{if _.SPECIAL_ATTACK=="alone"}}
h: I COULD *SEE* EVERYONE'S LOOK OF DISGUST. I COULD *HEAR* ALL THE THINGS THEY SAID.
{{/if}}

{{if _.SPECIAL_ATTACK=="bad"}}
h: I COULD *HEAR* THE CRUNCHING OF RIBS. I COULD *TASTE* THE BLOOD IN THE AIR.
{{/if}}

b: I'm sorry, human.

n: *FINISH THEM*

[{FIGHT: Punch the host.}](#act2j_fight) `Game.OVERRIDE_CHOICE_LINE=true`

[{FLIGHT: Let's get out of here.}](#act2j_flight) `Game.OVERRIDE_CHOICE_LINE=true`

# act2j_fight

`bb({ eyes:"angry" });`

b: That psychopath was taking advantage of you.

b: They were trying to corrupt you, make you as messed up as they are!

`bb({ body:"yell_angry_1" });`

b: Punch that jerk! Knock their friggin' lights out!

`bb({ body:"final_1" });`

b: PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THE--

`_.a2_ending = "fight";`

(#act2k)

# act2j_flight

b: I *knew* all these partygoers were deeply messed up. They all dull their pain with horrible things!

`bb({ body:"yell_1" });`

b: And they're tricking you into doing the same thing! They're corrupting you! We need to get out!

`bb({ body:"final_1" });`

b: GET OUT GET OUT GET OUT GET OUT GET OUT GET OUT GET OUT GET OUT GET OUT GET OU--

`_.a2_ending = "flight";`

(#act2k)

# act2k

```
Game.clearText();
publish("act2-in-4");
publish("hp_hide");
music('party1', {volume:0.6, fade:1.5});
```

(...2001)

```
publish("act2",["party_hong",26]);
sfx("slide");
```

(...1001)

```
publish("act2",["party_hunter",14]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: You alright, kid?

`publish("act2",["party_hunter",13]);`

{{if _.a2_ending=="fight"}}
(#act2k_fight)
{{/if}}

{{if _.a2_ending=="flight"}}
(#act2k_flight)
{{/if}}

# act2k_fight

```
Game.clearText();
publish("act2",["party_hunter",21]);
publish("act2",["party_hong",33]);
music(null);
sfx("hit");
```

(...1000)

```
sfx("record_scratch");
publish("act2",["party_hunter",22]);
publish("act2",["party_hong",34]);
publish("act2",["dee",6]);
publish("act2",["dum",6]);
```

r: Y-you...

```
publish("act2",["party_hunter",23]);
publish("act2",["party_hong",35]);
publish("act2",["dee",5]);
publish("act2",["dum",5]);
music('party1', {volume:0.6, fade:6});
```

r: are *kinky*.

r: I like that. Come to my party next weekend, cutie.

```
publish("act2",["party_hunter",19]);
publish("act2",["party_hong",36]);
```

h2: ok bye, ciao, adios, au revoir

r: The animal might have won today, but come back, and I'll mix something even stronger for you!

h2: sayōnara, auf wiedersehen, zài jiàn, shalom

r: You and me, kid, we'll show that beast who's boss!

(#act2k_end)

# act2k_flight

`publish("act2",["party_hong",36]);`

h2: ok sorry i have to run

`publish("act2",["party_hunter",16]);`

r: ^Damn^ it. The animal won today, huh?

`publish("act2",["party_hunter",15]);`

h2: no no, just, uh, gotta run a marathon. gotta go fast.

`publish("act2",["party_hunter",19]);`

r: Come to my party next weekend, cutie. I'll mix something even stronger for you.

h2: ok thanks gonna run run run run run

r: You and me, kid, we'll show that beast who's boss!

(#act2k_end)

# act2k_end

```
Game.clearText();
publish("act2-out-5");
publish("act2-outro", ["end1"]);
music("hum", {fade:2, volume:0.6});
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2500)

```
publish("act2", ["act2_end",2]);
sfx("whoosh");
```

(...1000)

b: Human! Are you okay?!

```
publish("act2", ["act2_end","next"]);
```

b: Gosh, that was *close.* We really could've--

```
Game.clearText();
publish("act2", ["act2_end","next"]);
music(null);
sfx("squeak");
```

(...1500)

```
publish("act2", ["act2_end","next"]);
sfx("hit");
```

(...1000)

h: I'm coming back to the party next weekend.

h: The next time we fight, I'm not just going to *defeat* you...

h: I'm going to ^fuck^ing *kill* you.

```
Game.clearText();
publish("act2", ["act2_end","next"]);
sfx("concrete_step1");
````

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step2", {volume:0.8});
```

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step3", {volume:0.5});
```

(...901)

`sfx("concrete_step4", {volume:0.25});`

(...3000)

`_.INTERMISSION_STAGE = 2;`

(#intermission)
