# act3

```
SceneSetup.act3();
Game.WORDS_HEIGHT_BOTTOM = 205;
sfx("cheers");
```

r: Santé !

```
publish("act3",["roofhunter",1]);
publish("act3",["roofhong",1]);
sfx("drinking");
```

(...4001)

```
publish("act3-alpha", ["dizzyhunter",1]);
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",3]);
```

h2: *Ah* ça cogne bien là où il faut.

```
publish("act3",["roofhunter",2]);
publish("act3",["roofhong",2]);
```

r: Tu sais, {{l_kiddo}}...

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",6]);
```

h2: Plus précisément, les endroits cognés sont mes amygdales gauche et droite.

```
publish("act3",["roofhunter",8]);
publish("act3",["roofhong",5]);
```

r: Tu me rappelles moi quand j'étais plus jeune. À l'époque où j'étais {{tormented}} par l'animal dans ma tête.

```
publish("act3",["roofhunter",9]);
publish("act3",["roofhong",2]);
```

r: Je suis tellement {{host_acknowledging}} de pouvoir te le transmettre, et de t'aider à tuer ta bête comme j'ai tué la mienne.

```
publish("act3",["roofhunter",2]);
```

r: Hé, question rapide : action ou véri--

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",7]);
publish("act3-alpha", ["dizzyhong",0]);
```

h2: ACTION !

```
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",2]);
```

r: Haha ! Bien.

```
publish("act3",["roofhunter",21]);
publish("act3",["roofhong",4]);
```

r: Ok. Tu vois cette piscine bleu clair en bas ?

```
publish("act3-alpha", ["dizzyhong",0]);
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",9]);
```

h2: Ouais ? Six étages plus bas ?

```
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",8]);
```

r: Saute dedans.

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",10]);
```

h2: ...

```
publish("act3",["roofhong",11]);
```

h2: Attends, quoi ?

```
publish("act3",["roofhong",10]);
publish("act3",["roofhunter",2]);
```

r: L'animal a commencé à gémir, n'est-ce pas ?

```
publish("act3",["roofhunter",23]);
```

r: *Oh nooooon c'est dangereux, ne le fais paaaaas.*

```
publish("act3",["roofhunter",22]);
```

r: Mais c'est exactement pour ça que nous avons besoin de défier la mort ! *Party hard !* Carpe diem ! Sniffe de la coke sur le ^cul^ d'une ^pute^, #YOLO !

```
publish("act3",["roofhunter",10]);
```

r: Montre à cet animal qu'on s'en bat les *^couilles^* de ses *^putains^* de râlements ! Saute.

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",13]);
```

h2: Euh, mais des fois, hum... il arrive que la peur ait raison...

```
publish("act3",["roofhunter",5]);
publish("act3",["roofhong",12]);
music(null, {fade:2});
```

r: ...

```
publish("act3-alpha", ["dizzyhunter",0]);
publish("act3",["roofhunter",6]);
publish("act3",["dd",1]);
```

r: Pardon, tu t'es fait avoir par cette propagande McPleineconscience qui dit que se sentir mal c'est *bien ?*

```
publish("act3",["roofhunter",17]);
```

r: Ce sont les ^connards^ qui dirigent ce monde qui *nous* rendent anxieux et dépressifs,

```
publish("act3",["roofhunter",18]);
```

r: Puis ils font des TED Talks pour nous dire "d'accepter" que l'on est ^baisés^ et de "faire la paix" avec ce démon sadique dans nos têtes !

```
publish("act3",["roofhunter",6]);
```

r: {{kiddo}}, je sais que *tu* sais que cet animal fait *souffrir* les gens comme nous. Il *torture* les gens comme nous.

```
publish("act3",["roofhunter",19]);
```

r: Ce n'est pas notre ami. C'est une bête enragée, qui doit soit être *tranquillisée*,

```
publish("act3",["roofhunter",20]);
```

r: Soit *se prendre une balle dans le crâne*.

```
publish("act3",["roofhunter",27]);
```

r: Sinon, tu vas la laisser gagner.

```
publish("act3",["roofhunter",31]);
publish("act3",["roofhong",14]);
publish("act3",["dd",2]);
```

h2: Non, tu as tort.

```
publish("act3",["roofhunter",13]);
publish("act3",["roofhong",15]);
music('battle_dark', {volume:1.0}, function(){
	music('battle_dark_loop');
});
```

h2: Je ne la laisserai pas gagner.

```
publish("act3",["roofhunter",25]);
publish("act3-alpha", ["roofhong",0]);
publish("act3-alpha", ["transition",1]);
publish("act3",["dd",6]);
```

r: ^Fuck^ yeah ! Je crois en toi, bébé ! Bute-la ! <3

(#act3a)



# act3a

```
Game.clearText();
publish("act3-out");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
_.act3_bb_body = 1;
```

(...1500)

```
publish("hp_show");
```

b: non non non non non non

n: CE CHAPITRE A DEUX FINS POSSIBLES. L'UNE DES DEUX EST *VRAIMENT, VRAIMENT MAUVAISE.*

b: NON NON NON NON NON NON NON NON NON NON NON NON NON NON

n: CHOISIS SAGEMENT. PROTÈGE TON {{u_human}}

`bb({ eyes:"oh_crap", mouth:"normal_talk", MOUTH_LOCK:true });`

b: AAAAAAAAAAAAAAAAAA

`bb({ mouth:"normal" });`

n: BONNE CHANCE

```
Game.clearText();
bb({ eyes:"start" });
```

[{{human}}, tu pourrais vraiment MOURIR là !](#act3a_harm) `Game.OVERRIDE_CHOICE_LINE=true`

[Ce serait stupide et auto-destructeur !](#act3a_bad) `Game.OVERRIDE_CHOICE_LINE=true`

[Ces malades ne sont pas vraiment tes amis !](#act3a_alone) `Game.OVERRIDE_CHOICE_LINE=true`

# act3a_harm

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: H--

(#act3a_after)

# act3a_alone

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: C--

(#act3a_after)

# act3a_bad

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: C--

(#act3a_after)

# act3a_after

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Tu sais, j'aurais pu te croire... Si t'avais pas déjà essayé ça un million de fois.

h: Tu es le loup qui a crié au loup.

```
bb({ eyes:"sad" });
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act3_fork) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act3_fork) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act3_fork) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`


# act3_fork

```
Game.clearText();
bb({body:"special_attack"});
sfx("charging");
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
Game.FORCE_CANT_SKIP = false;
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: T'as déjà essayé ça.

b: {{human}}, je t'en prie...

`hong({ eyes:"look_right" });`

h: Oh je suis *{{l_sorry}}* que Big Pharma n'approuve pas mon auto-médication.

h: Regarde ^connard^, on a tous un moyen de te faire fermer ta *^putain^* de gueule.

`hong({ body:"look_up", eyes:"look_up" });`

h: Certains se lancent dans le travail à corps perdu.

`hong({ body:"look_down", eyes:"look_down" });`

h: Certains se lancent dans le sexe, la drogue, et le rafraîchissement de leur flux Facebook.

`hong({ body:"normal", eyes:"look_right" });`

h: Certains s'élancent vers d'autres gens.

`hong({ eyes:"angry" });`

h: Moi, je vais me lancer dans cette piscine.

[Tu es sous alcool et c'est SIX ÉTAGES PLUS BAS](#act3_bad_1_harm)

[Bon sang, c'est ça mes remerciements ?!](#act3_bad_1_insult) `bb({eyes:"angry"});`

[Okay, je l'admets. J'ai merdé.](#act3_good_1) `bb({mouth:"sorry", eyes:"sorry_down"});`

# act3_bad_1_harm

b: Même si tu atterris dans l'eau, la tension de surface va *au moins* te briser les côtes et te donner une commotion !

h: Meh.

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: J'ai vu un mec russe faire ça sur Youtube une fois.

(#act3_bad_2)

# act3_bad_1_insult

`hong({ eyes:"look_right" });`

h: Je- Excuse-moi, tes *remerciements ?*

`bb({ eyes:"angry" });`

b: C'est exactement pour ça que j'*existe !* Parce qu'on ne peut pas faire confiance aux humains pour se protéger d'eux-mêmes !

b: J'ai passé ma vie à essayer de protéger ton stupide derrière et maintenant tu vas just--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)

# act3_good_1

`hong({ body:"laugh_1" })``

h: Heh.

`hong({ body:"laugh_2" })``

h: Hahahaha

`hong({ body:"laugh_3" })``

h: HAHAHAHAHAHA

```
bb({ eyes:"sorry"});
hong({ body:"yell_1", mouth:"yell", eyes:"blank" });
```

h: Oh WOW ! C'est le plus gros *^putain^* d'euphémisme du siècle !

`hong({ body:"yell_2" });`

h: Ouais, gros tas de ^merde^ ! T'as vraiment bien foiré ton coup !

`hong({ body:"normal", mouth:"angry", eyes:"angry" });`

h: D'autres remarques, Captain Obvious ?

[Mais te venger de moi n'est pas la solution !](#act3_good_1_fail_revenge) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Mais cette fois, j'ai *vraiment* raison !](#act3_good_1_fail_harm) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Je t'ai {{harmed}}.](#act3_good_2a)


# act3_good_1_fail_revenge

b: Tu dois avoir une relation plus saine avec tes émotions, plutôt que de les noyer av--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)



# act3_good_1_fail_harm

b: Alors s'il te plaît, pose cette bouteille et on y va--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)




# act3_bad_2

`bb({ eyes:"sad" });`

b: S'il te plaît... non...

h: Ta barre d'énergie me semble terriblement basse, loup.

h: Si j'étais toi, je choisirais tes prochains mots avec soin...

`bb({ eyes:"normal" });`

[Bien. J'en ai fini de te protéger.](#act3_bad_2_jump) `bb({ mouth:"ignore", eyes:"ignore" });`

[J'avais raison tout du long.](#act3_bad_2_right)

[Je suis désolé.](#act3_good_2b) `bb({mouth:"sorry", eyes:"sorry_down"});`


# act3_bad_2_jump

b: Alors, vas-y et saute. Je m'en fiche.

`hong({ eyes:"look_right", mouth:"normal", MOUTH_LOCK:true });`

h: ...

```
hong({ eyes:"less_angry", mouth:"normal" });
bb({ eyes:"ignore_oh_crap" });
```

h: Ok donc. Cul sec.

```
bb({ mouth:"normal", eyes:"oh_crap" });
Game.OVERRIDE_TEXT_SPEED = 2;
```

b: ATTENDS ! NON, C'ÉTAIT DE LA PSYCHOLOGIE INVERSÉE, TU ÉTAIS SUPPOSÉ FAIRE L'*OPPOSÉ* DE CE QUE JE TE DI--

(#act3_bad_3)



# act3_bad_2_right

`bb({ eyes:"angry" });`

b: Tu *es* en train de te mettre en danger. Tes soi-disant amis *sont* en train de t'utiliser. Et *tu* utilises tes soi-disant amis.

`bb({ eyes:"sad" });`

b: Alors s'il te plaît, {{l_human}}... pourquoi est-ce que tu ne me crois pas ?!?!

h: Parce que tu n'as jamais cru en *moi*.

(#act3_bad_3)


# act3_bad_2_terrible

`bb({ eyes:"angry" });`

b: Les autres loups de garde ont un humain qui prend patiemment le temps de les entraîner, d'*apprendre* à travailler ensemble,

b: Plutôt que haïr leur loup alors qu'ils essaient seulement de les protéger ! Alors pourquoi est-ce que tu ne peux pas jus--

`bb({ eyes:"normal" });`

h: Mauvaise réponse, ^enculé^.

(#act3_bad_3)



# act3_bad_3

```
music(null);
hong({body:"drink"});
bb({body:"attacked"});
publish("bb_STOP_VIBRATING");
attackBB("100p");
```

(...2000)

```
hong({ body:"normal", mouth:"normal", eyes:"normal" });
bb({ body:"dead" });
```

(...999)

h: *"La seule chose à craindre est la peur elle-même."*

`hong({ body:"look_up", mouth:"happy", eyes:"blank" });`

h: *"Don't worry, be happy!"*

`hong({ body:"normal", mouth:"normal", eyes:"normal" });`

h: Toute la sagesse populaire de notre époque est d'accord : les émotions négatives sont *mauvaises !*

`hong({ eyes:"less_angry" });`

h: Sans blague ! C'est pour ça qu'on les appelle les émotions *négatives !*

b: {{human}}... s'il te plaît...

`hong({ eyes:"normal" });`

h: Il y a quelque temps, j'avais dit : "Je veux juste être {{freed}} de toute cette soufrance."

h: J'ai réalisé mon vœu. Je ne ressens plus la douleur, la peur, ou l'anxiété...

h: Je ne ressens plus rien du tout.

`_.a3_ending = "jump";`

(#act3_end)



# act3_good_2a

`bb({mouth:"sorry", eyes:"sorry_down"});`

b: J'étais tellement obsédé à l'idée que rien ne te blesse, que je n'ai pas réalisé que *je* te blessais.

```
bb({ eyes:"sorry"});
hong({ body:"yell_2", mouth:"yell", eyes:"blank" });
```

h: NON. TU DÉC-^ONNES^.

`hong({ body:"yell_1" });`

h: ^BORDEL^. Il t'aura fallu si longtemps pour t'en rendre compte ?!

`hong({ body:"cry", mouth:"cry", eyes:"blank" });`

h: T'aurais pu nous éviter tant de problèmes, espèce de grosse boule de poils à la ^con^. Pourquoi est-ce que tu ne l'as pas réalisé plus tôt ?

`_.apologized_for_hurt = true;`

(#act3_good_2q)



# act3_good_2b

`hong({ body:"normal", mouth:"angry", eyes:"look_right" });`

h: ... tu es *désolé.*

`hong({ eyes:"angry", MOUTH_LOCK:true });`

h: ...

h: Désolé pour *quoi* ?

(#act3_good_2q)


# act3_good_2q

`bb({mouth:"sorry", eyes:"sorry"});`

{{if _.apologized_for_hurt}}
(#act3_good_2q_already_apologized)
{{/if}}

{{if !_.apologized_for_hurt}}
(#act3_good_2q_not_already_apologized)
{{/if}}


# act3_good_2q_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"less_angry" });`

[Je suis désolé, je n'ai pas été un bon protecteur.](#act3_good_3_protector)

[Je suis désolé, je ne t'ai pas {{respected}}.](#act3_good_3_respect)

[Je suis désolé.](#act3_good_4)


# act3_good_2q_not_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"angry" }, 0);`

[Je suis désolé d'avoir {{an}} {{l_human}} aussi horrible !](#act3_bad_2_terrible) `bb({mouth:"normal", eyes:"normal"})`

[Je suis désolé, je ne t'ai pas {{respected}}.](#act3_good_3_respect)

[Je suis désolé, je t'ai {{harmed}}.](#act3_good_3_hurt)



# act3_good_3_protector

`bb({eyes:"sorry_down"});`

b: C'est mon devoir de te prévenir contre le *vrai* danger, mais je continue d'aboyer aux voitures et au facteur.

`bb({eyes:"sorry_up"});`

b: D'aboyer aux ombres. D'aboyer beaucoup.

`bb({eyes:"sorry"});`

b: C'est normal que tu veuilles me museler.

`bb({eyes:"sorry_down"});`

b: Je suis désolé.

(#act3_good_4)



# act3_good_3_respect

`bb({eyes:"sorry_down"});`

b: J'étais supposé être *ton* chien de garde loyal jusqu'au bout, mais j'ai agi comme si *tu* étais {{meant_to}} m'obéir à *moi*.

`bb({eyes:"sorry_up"});`

b: Il y a une différence entre un protecteur et un gardien de prison, et j'ai dépassé les limites.

`bb({eyes:"sorry_down"});`

b: J'en suis désolé.

(#act3_good_4)



# act3_good_3_hurt

`bb({eyes:"sorry_down"});`

b: J'étais si obsédé à l'idée de te protéger d'être {{harmed}} que je n'ai jamais réalisé que *je* te blessais.

`bb({eyes:"sorry_up"});`

b: J'ai été un mauvais chien.

`bb({eyes:"sorry_down"});`

b: J'en suis désolé.

(#act3_good_4)


# act3_good_4

```
music(null,{fade:3});
hong({ eyes:"less_angry", MOUTH_LOCK:true },0);
```

h: ...

```
hong({ body:"stop", mouth:"stop", eyes:"blank" });
```

h: Ouais, bon, c'était une mauvaise idée de toute façon.

h: J'ai uniquement fait ça pour t'embêter, et, bon bah, je t'ai embêté.

h: Disons juste qu'on est ex æquo, ok ?

```
bb({ mouth:"sorry", eyes:"sorry" });
bb({ MOUTH_LOCK:true });
```

b: ...

b: Ok.

h: Ok.

n: *EX ÆQUO*

`_.a3_ending = "walkaway";`

(#act3_end)









# act3_end

```
Game.clearText();
publish("act3-in");
publish("hp_hide");
Game.FORCE_CANT_SKIP = true;
```

{{if _.a3_ending=="walkaway"}}
(#act3_walkaway)
{{/if}}

{{if _.a3_ending=="jump"}}
(#act3_jump)
{{/if}}






# act3_walkaway

```
publish("start-walkaway-anim");
Game.WORDS_HEIGHT_BOTTOM = 205;
```

(...3501)

```
sfx("bottle_toss");
publish('hong-next');
publish("act3",["roofhunter",7]);
```

(...667)

```
publish("act3",["dd",4]);
publish("act3",["roofhunter",26]);
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("concrete_step2");
```

(...667)

```
publish('hong-next');
publish("act3",["roofhunter",27]);
```

`Game.FORCE_CANT_SKIP = false;`

r: Oh *allez*. Après tout ce que cet animal a fait pour toi, tu *abandonnes* ?

r: C'est quoi le problème, {{l_kiddo}} ? Tu as *peur* ?

```
publish('hong-next');
publish("act3",["roofhunter",26]);
```

h2: Oui.

h2: J'ai peur.

`publish('hong-next')`

h2: Et ça va !

`publish('hong-next')`

h2: Ça va d'avoir peur.

`publish('hong-next')`

(...500)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1167)

```
publish('hong-next');
```

(...833)

```
publish('hong-next');
sfx("rustle2");
```

(...1333)

```
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",31]);
sfx("concrete_step4");
```

(...667)

```
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("door");
```

(...1333)

```
publish('hong-next');
sfx("concrete_step2");
```

(...501)

```
publish('hong-next');
Game.FORCE_CANT_SKIP = false;
sfx("lock_door");
publish("act3",["roofhunter",32]);
```

(...2001)

```
publish("act3",["roofhunter",33]);
```

r: Est-ce qu'{{l_spronoun}} vient de fermer la porte ?

```
Game.clearAll();
_.INJURED = false;
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2000)

(#act4)




# act3_jump

```
publish("start-jump-anim");
Game.FORCE_TEXT_Y = 300;
```

(...2001)

```
publish('hong-next');
sfx("bottle_toss");
```

(...833)

```
sfx("concrete_step1");
sfx("claps");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",28]);
```
(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step2");
publish('hong-next');
publish("act3",["roofhunter",28]);
```

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",34]);
```

(...1167)

```
sfx("rustle2");
publish('hong-next');
```

(...1001)

`publish('hong-next')`

b: Non...

(...501)

`Game.clearText();`

`publish('hong-next')`

(...1333)

```
sfx("quack");
publish('hong-next');
```

(...1333)

`publish('hong-next')`

b: Non non non

(...501)

`Game.clearText();`

`publish('hong-next')`

(...2001)

```
sfx("rustle2");
publish('hong-next')
```

(...501)

```
sfx("concrete_step1");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",30]);
```

(...167)

```
sfx("concrete_step2");
publish('hong-next');
```

(...167)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",2]);
publish("act3",["roofhunter",15]);
```

(...167)

```
sfx("bottle_slip");
publish('hong-next');
publish("act3",["dd",3]);
publish("act3",["roofhunter",16]);
```

(...833)

```
sfx("rustle");
publish('hong-next');
```

(...167)

`publish('hong-next')`

(...167)

```
publish('hong-next');
Game.FORCE_TEXT_Y = 325;
Game.OVERRIDE_FONT_SIZE = 50;
```

b: NON !

(...400)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-injury-show");
publish("hide_tabs");
```

(...2000)

```
sfx("hospital1");
publish("act4-injury", [1]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital2");
publish("act4-injury", [2]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital3");
publish("act4-injury", [3]);
```

(...8000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...5500)

`_.INJURED = true;`

(#act4)
