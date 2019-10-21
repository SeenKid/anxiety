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
_.a2_hoodie_callback = "de quarantaine";
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
_.a2_hoodie_callback = "de la loi";
```

(#act2c)

# act2b_louder_meaning

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: En fait, même si tu trouves une noble but à ta vie, tu peux *toujours* tout faire foirer !

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Alfred Nobel voulait la paix dans le monde et que les cultures se comprennent entre elles. Donc il a décidé de simplifier les voyages.

`bb({eyes:"normal_r"})`

b: Donc il devait trouver un moyen de créer des tunnels pour les trains pour pas cher. Alors, il a inventé un nouveau matériau appelé "dynamite"...

`bb({body:"one_up", eyes:"normal"})`

b: qui était utilisé pendant la Première Guerre Mondiale pour TUER DES MILLIONS DE GENS

`bb({body:"two_up", eyes:"shock"})`

b: C'EST L'EFFET PAPILLON, HUMAIN ! COMBIEN DE GENS ES-TU ACCIDENTELLEMENT EN TRAIN DE TUER LÀ TOUT DE SUITE

```
_.a2_second_danger = 'butterfly';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "de la Première Guerre Mondiale";
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
_.a2_hoodie_callback = "de zombies";
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
_.a2_hoodie_callback = "d'Hitler";
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
_.a2_hoodie_callback = "de monoxyde de carbone";
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

`_.a2_hoodie_callback = "de quarantaine";`

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

b: à moins qu'ils ne *penchent* secrètement dans ce genre de trucs

`bb({body:"scream_a_1"})`

b: parce que ce sont de TRÈS GROS PERVERS DÉGOÛTANTS

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "de la loi";`

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

`_.a2_hoodie_callback = "de l'effet papillon";`

(#act2d)

# act2c_louder_zombies

`bb({body:"normal", mouth:"small", eyes:"angry"})`

b: Ces zombies du plaisir boîteront lentement vers toi en marmonnant,

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: AIIIIIIIMES. AIIIIIIIMES.

`bb({body:"scream_a_1"})`

b: Puis, ils te MORDRONT et te transformeront en POTE SANS CERVELLE et/ou UN COPULATEUR IDIOT !

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "de zombies";`

(#act2d)

# act2c_louder_hitler

`bb({body:"scream_a_1"})`

b: LES NAZIS MARCHENT AU PAS DE L'OIE DANS LES RUES LÀ TOUT DE SUITE

`bb({body:"one_up", mouth:"smile", eyes:"happy"})`

b: En train de se dire, *heureusement que les 'bons Hommes' se relâchaient avec des trucs genre la 'détente' et 'la prise de soin de soi' !*

`bb({body:"point", mouth:"smile", eyes:"happy_r"})`

b: *Maintenant nos plans vont se dérouler sans problèmes, le Reich dans les délais !*

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "d'Hitler";`

(#act2d)

# act2c_louder_ignore

`bb({body:"normal", mouth:"normal", eyes:"normal_r"})`

b: En y repensant, est-ce qu'on sait si le bâtiment *a* un détecteur de monoxyde ?!

`bb({body:"two_up", mouth:"small", eyes:"normal"})`

b:  Et si on était en train d'être empoisonné *LÀ TOUT DE SUITE ?*

`bb({body:"scream_a_1"})`

b: ON NE VERRAIT MÊME PAS LA MORT S'APPROCHER. ON S'ARRÊTERAIT JUSTE D'EXISTER POUR TOUJOURS ET À JAMA--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "de monoxyde de carbone";`

(#act2d)

# act2c_different_social

`bb({body:"normal", mouth:"normal", eyes:"sad"})`

b: Et si on était juste *fondamentalement incapable* d'être aimé, ou d'aimer quelqu'un ?

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: Et si quelque chose était irréversiblement cassé à l'intérieur de nous il y a longtemps ? Ou n'a même jamais été ?

`bb({body:"scream_a_1"})`

b: AHH ON EST CASSÉ ! TELLEMENT CASSÉ TELLEMENT CASSÉ TELLEMENT CASS--

`_.a2_attack_3 = "alone";`

(#act2d)

# act2c_different_moral

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Et si on était juste *fondamentalement pourris ?*

`bb({body:"one_up", eyes:"sad"})`

b: Les autres ont cette pulsion intérieur de faire le bien, mais nous, on fait le "bien" uniquement par culpabilité ou honte, voire pas du tout.

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: Et si c'était dans notre nature de blesser les autres ? Et si on ne pouvait être rien *d'autre* qu'un fardeau pour ceux proches de nous ?

`bb({body:"scream_a_1"})`

b: AHH ON EST CASSÉ ! TELLEMENT CASSÉ TELLEMENT CASSÉ TELLEMENT CASS--

`_.a2_attack_3 = "bad";`

(#act2d)

# act2c_punch

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Je ne suis pas irrationnel. Les gens droguent *vraiment* les bols de punch. C'est un truc qui se fait vraiment.

`bb({eyes:"suspect"})`

b: Humain, est-ce que ta tête te fait mal ? Tes membres sont-ils mous ? Je pense qu'on est en train de mourir.

`bb({body:"scream_a_1"})`

b: AHHH ON EST EN TRAIN DE MOURIR ! ON MEURT ON MEURT ON ME--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "de bols de punch";`

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

h: P^UUUUTAIN^ !

h: P^UTAIN^ DE P^UTAIN^ DE M^EEEEERDE^

`bb({body:"two_up", mouth:"smile", eyes:"happy"});`

b: Ouais, humain ! Je suis trop content que tu m'entendes de nouveau !

`bb({body:"normal", mouth:"small", eyes:"sad"})`

b: Pourquoi tu m'ignorais ?

`hong({body:"facepalm"})`

h: Oh ^bordel^, espèce d'idiot.

`hong({body:"facepalm_2"})`

h: Tu connais cette histoire de natifs américains ?

h: "Il y a deux loups à l'intérieur de toi, l'un est espoir, l'autre est désespoir, lequel des loups gagne ? Celui que tu nourris."

```
hong({body:"facepalm_3"});
bb({eyes:"normal"});
```

h: J'essayais de *t'affamer*, espèce de ^trou du cul^ sadique !

`hong({body:"smile", mouth:"smile"})`

h: Oh je m'en fiche, je ferai des affirmations positives à la place.

h: *Je suis aimé. Je suis bon. Je suis intelligent. Je suis spécial.*

`bb({eyes:"suspect"});`

[Mon Dieu, que c'est narcissique !](#act2d_narcissist)

[T'sais que la technique des affirmations a été *réfutée* ?](#act2d_disproven)

[OMG, ne donne pas de crédit à une histoire random d'indigènes](#act2d_racist)

# act2d_disproven

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: A vrai dire, elle *se retourne* contre les gens avec peu d'estime de soi !

`bb({body:"one_up", mouth:"small", eyes:"normal"})`

b: C'était une bonne étude - avec essai contrôlé randomisé effectué en double aveugle

`bb({body:"two_up", mouth:"small", eyes:"normal_r"})`

b: Résultats : si tu as déjà une estime de soi basse, se répéter ce genre d'affirmations te fait sentir *pire* que si tu ne disais rien du tout !

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: Wood 2009, Psychological Science. Va voir sur Google Scholar, humain,

`bb({body:"scream_b_1"})`

b: ET ARRÊTE DE PROPAGER DES FAKE NEWS NON-SCIENTIFIQUES

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_narcissist

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Tu *dois* regarder humblement tes propres défauts pour grandir en tant que personne !

`bb({body:"two_up", eyes:"suspect"})`

b: Tu ne peux pas mettre du spray pour rafraîchir l'air dans une salle toute moisie ! Couvrir tes défauts te rendent pire sur le long terme.

`bb({body:"chest", mouth:"smile", eyes:"closed"})`

b: Heureusement, moi, en tant que loyal loup protecteur, je peux t'alerter de tes défauts.  Et là tout de suite, c'est-

`bb({body:"scream_b_1"})`

b: TOUT. TOUT EST MAL

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_racist

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Les natifs américains sont de *vrais gens*, pas des "nobles sauvages" dont tu peux balancer le nom pour rendre tes conseils de biscuits chinois plus *exotiques*.

`bb({eyes:"suspect_r"})`

b: Tu es en train de réduire des individus & des cultures complexes à une carte de voeux ! C'est du "racisme bienveillant" !

`bb({body:"scream_b_1"})`

b: ARRÊTE D'ÊTRE RACISTE ESPÈCE D'^ENFOIRÉ^ ÉTROIT D'ESPRIT

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2e

h: ^BORDEL DE MERDE^.

`hong({body:"yell", mouth:"yell"})`

h: Tu sais quoi ? Tu es *irrationnel*.

h: Tout le monde sait que les émotions sont irrationnelles ! Surtout la peur !

`hong({body:"facepalm_2"})`

h: T'es un inutile reste d'évolution, comme mon appendice ou mes dents de sagesse !

`hong({body:"yell", mouth:"yell"})`

h: ^Putain^, toute cette métaphore de loup est stupide ! T'es juste un tas de neuro-chimiques dans ma tête.

`hong({body:"cross", mouth:"cross"})`

h: Alors pourquoi je devrais écouter une ^merde^ inutile, irrationnelle et non-existante comme toi ?!

`bb({eyes:"sad", MOUTH_LOCK:true})`

b: ...

[Sérieux, humain. C'est très blessant.](#act2e_hurtful)

[Je suis un sentiment. Les sentiments sont valides.](#act2e_valid)

[Humain, on est *tous les deux* "juste un tas chimique."](#act2e_rational)

# act2e_hurtful

`bb({body:"chest"})`

b: Je suis une *part* de toi, tu sais. Quand tu dis ça, tu te fais du mal à *toi-même*.

`bb({body:"scream_a_1"})`

b: Pourquoi tu te fais du mal, humain ? ARRÊTE DE TE FAIRE DU MAL.

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

b: Tes plus profondes motivations sont de la dopamines, tes joies les plus riches sont de la sérotonines.

`bb({body:"one_up"});`

b: Tes souvenirs sont des poids synaptiques, ta raison est un ensemble de signaux électriques sujets aux fautes.

`bb({eyes:"normal", body:"normal"});`

b: Donc si parce que je suis "juste chimique" *je suis* irrationnel... alors ça veut dire que *tu es* irrationnel !

`bb({body:"two_up", eyes:"shock"});`

b: Et si on *tous les deux* irrationnel, alors on n'arrivera *jamais* à trouver comment être entier et heureux !

`bb({body:"scream_a_1"})`

b: AHHH ON EST CASSÉ ! TELLEMENT CASSÉ TELLEMENT CASSÉ TELLEMENT CASS--

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

b: Attends... "ils" disent que les sentiments sont valides, que tu devrais toujours accepter tes émotions.

`bb({eyes:"suspect_r"});`

b: Mais "ils" disent aussi que les émotions sont irrationnelles, que les émotions ne sont pas dignes de confiances.

`bb({eyes:"angry"});`

b: Oh mon Dieu, "ils" nous ont menti pendant tout ce temps !

`bb({body:"scream_a_1"})`

b: "ILS" NOUS NOURRISSENT DE CONTRADICTIONS POUR NOUS RENDRE DÉPÉNDANT DU COMPLEXE INDUSTRIEL DE L'AUTO-AIDE

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

h: Je déteste ça. Dieu que ça fait mal tellement je *déteste* ça.

h: Je ne peux pas t'apaiser. Je ne peux pas t'ignorer. Je ne peux pas te combattre.

`bb({eyes:"suspect"});`

h: Qu'importe ce que je fais, je ne peux pas me débarrasser de to--

`bb({body:"cry_1"});`

b: Eh bien peut-être que tu N'ES PAS *SENSÉ* TE DÉBARASSER DE MOI.

`bb({body:"cry_2"});`

b: Comment tu penses que *je* me sens, humain ?!

`bb({body:"cry_4", mouth:"cry", eyes:"cry"})`

b: Je fais de mon mieux pour être ton chien de garde, mais tu continues de me voir comme le Grand Méchant Loup !

b: Alors j'essaie encore plus *dur* de t'alerter du danger ! *Plus* de dangers ! *Différents* dangers !

`bb({eyes:"cry_2"})`

b: Mais qu'importe à quel point j'essaie de te protéger, tu penses *toujours* que je suis ton ennemi !

`bb({body:"cry_5"});`

b: Qu'est-ce que je fais de mal ?!

`bb({body:"cry_2"});`

b: Je *sais* que je crains dans mon boulot. Mais j'*essaie*, humain !

`bb({body:"cry_3"});`

b: ... j'essaie.

`bb({body:"cry_6", mouth:"right", eyes:"cry_r_1"});`

b: Tu n'es pas obligé de tenir compte de mes avertissements, ou être d'accord avec moi, ou même *m'aimer*.

`bb({eyes:"cry_r_2"});`

b: Je veux juste... Tout ce que je veux c'est que tu sois patient avec moi.

`bb({eyes:"cry_r_3"});`

b: Je veux juste que tu t'asseois avec un moi pendant un moment, au lieu de te détourner et--

```
bb({eyes:"cry_r_4"});
hong({body:"listen"});
```

r: Hé.

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

r: On dirait que tu es pris dans une bataille avec toi-même, petit.

```
publish("act2",["party_hunter",3]);
publish("act2",["party_hong",13]);
```

h2: Ça se voyait tant que ça ?

```
publish("act2",["party_hunter",4]);
publish("act2",["party_hong",14]);
```

r: Tu étais en train de, euh, murmurer à ton sweat à propos {{_.a2_hoodie_callback}} ou quelque chose.

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

h2: Oh bon sang, je suis si lamentable.

```
publish("act2",["party_hunter",7]);
publish("act2",["party_hong",18]);
sfx("squeak");
```

r: Hé. T'es pas seul, l'ami. L'anxiété est super commun.

```
publish("act2",["party_hunter",5]);
publish("act2",["party_hong",19]);
```

{{if _.act1_ending=="fight"}}
r: Tiens, juste hier, j'ai entendu que quelqu'un a pété un plomb et explosé son téléphone !
{{/if}}

{{if _.act1_ending=="flight"}}
r: Tiens, juste hier, j'ai entendu que quelqu'un s'est mis en boule comme un tatoo et a pleuré en public !
{{/if}}

```
publish("act2",["party_hunter",2]);
```

r: Écoute : je sais ce que c'est que d'avoir un animal dans ta tête.

```
publish("act2",["party_hunter",8]);
```

r: On le sait *tous*. C'est pourquoi j'organise ces fêtes chaque week-end, pour oublier nos inquiétudes, oublier l'animal.

```
publish("act2",["party_hunter",9]);
publish("act2",["party_hong",20]);
```

h2: Mais mon anxiété...

```
publish("act2",["party_hunter",2]);
publish("act2",["party_hong",21]);
```

r: T'inquiètes pas, petit. J'étais comme toi avant. Mais j'ai trouvé une petite astuce pour faire taire à jamais cette voix négative...

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

r: Mon mélange spécial ! C'est un peu plus fort que... eh bien, tout ce qui est légal en fait.

```
publish("act2",["party_hunter",12]);
publish("act2",["party_hong",24]);
```

r: Bottoms up, ^bââ-taard^!

```
hong({body:"hold"});
bb({body:"normal", mouth:"small", eyes:"wat"});
Game.clearText();
Game.WORDS_HEIGHT_BOTTOM = -1;
publish("act2-out-3");
publish("hp_show");
```

(...3500)

[Oh mon Dieu.](#act2g_1) `Game.OVERRIDE_CHOICE_LINE=true`

[C'est une mauvaise mécanique de copie.](#act2g_2) `Game.OVERRIDE_CHOICE_LINE=true`

[Ne prends pas ces boissons d'inconnus.](#act2g_3) `Game.OVERRIDE_CHOICE_LINE=true`

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

b: C'est mal, humain. C'est vraiment, vraiment mal.

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

b: HUMAIN ARRETE S'IL TE PLAIT

h: Hehehe!

h: Et qu'est ce que *tu* va faire de ça, ^Trou du cul^?

b: Je suis tellement désolé, Humain.

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

h: QU'EST CE QUE C'EST QUE CE ^BORDEL^.

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
