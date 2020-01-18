# act4

```
SceneSetup.act4();
publish("SAVE_GAME", ["act4"]);
Game.FORCE_CANT_SKIP = true;
```

(...5001)

```
publish("set_how_many_prompts", [1]);
Game.FORCE_CANT_SKIP = false;
Game.CLICK_TO_ADVANCE = true;
```

n3: (jeu sauvegardé)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
var hong_frame = _.INJURED ? 9 : 0;
publish("act4", ["hong_walks_in",hong_frame]);
sfx("grass_step1", {volume:0.1});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.2});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.25});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.3});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...1667)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...1333)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.20});
```

(...167)

```
publish("act4_hong_sits");
```

(...66)

```
publish("act4", ["hong_transition", "next"]);
sfx("squeak");
```

(...133)

`publish("act4", ["hong_transition", "next"]);`

(...1333)

```
publish("act4", ["hong_transition", "next"]);
sfx("rustle");
```

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1001)

```
publish("act4", ["hong_transition", "next"]);
```

(...333)

```
publish("act4", ["hong_transition", 9]);
sfx("sandwich");
```

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1466)

`publish("act4-out-1");`

(...201)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

```
publish("act4-show-chars");
Game.FORCE_CANT_SKIP = false;
```

(...901)

`hong({body:"sigh_1"})`

(...601)

```
hong({body:"sigh_2"});
bb({eyes:"look_down"});
```

h: *sigh*

```
hong({body:"hold", eyes:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Donc, quelle est la morale de l'histoire ?

`hong({body:"one_up", eyes:"annoyed"})`

h: Qu'a-t-on *appris* ? J'*étais* stupide, mes "amis" *étaient* en train de me manipuler, et on est presque *mort*.

`hong({body:"normal", eyes:"normal"})`

{{if _.INJURED}}
[Ouais, sans parler de la facture de l'hôpital.](#act4a_bill)
{{/if}}

{{if !_.INJURED}}
[Ouais, sans parler des dommages au foie.](#act4a_liver)
{{/if}}

[Ouais, c'*était* le pire des scénarios possibles.](#act4a_worst)

[Ouais, j'avais raison.](#act4a_right)

# act4a_bill

`hong({eyes:"annoyed_l", mouth:"narrow"});`

h: Ouais. Je pense pas que mon assurance-vie couvre le fait d'"être un ^crétin^".

`hong({eyes:"annoyed", mouth:"normal"});`

b: Et pourtant nous avons survécu !

`hong({eyes:"normal"});`

h: ?

(#act4b)

# act4a_liver

`bb({eyes:"normal_d"});`

b: On a définitivement perdu quelques années d'espérance de vie...

`bb({eyes:"surprise"});`

b: Mais au moins, on *a* toujours une espérance de vie ! On a survécu !

```
hong({eyes:"surprise"});
bb({eyes:"normal"});
```

h: ?

(#act4b)

# act4a_worst

`bb({eyes:"normal_d"});`

b: Et pourtant...

h: Hm ?

`bb({eyes:"surprise"});`

b: Nous avons survécu !

(#act4b)

# act4a_right

`bb({eyes:"normal_d"});`

b: Bon... t'avais vu juste.

`hong({eyes:"surprise"});`

h: Hm ?

`bb({eyes:"normal"});`

b: J'*étais* le loup qui criait au loup. Donc quand le *véritable* danger est arrivé, tu ne m'as - à juste titre - pas cru.

`bb({eyes:"surprise_r"});`

b: Et pourtant, on a survécu !

(#act4b)

# act4b

```
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

b: Malgré tout, on est toujours là.

`hong({eyes:"suspect"});`

{{if _.INJURED}}
h: Tu sembles plutôt calme, en considérant le fait que nous venons juste d'avoir une expérience de mort imminente.
{{/if}}

{{if !_.INJURED}}
h: Tu sembles plutôt calme, en considérant le fait que nous venons juste d'avoir une expérience de mort *imminente* imminente.
{{/if}}

```
hong({eyes:"normal"});
bb({eyes:"annoyed_d", mouth:"narrow"});
```

b: A vrai dire, ça rend tout moins flippant en comparaison. Et puis, ça me fait réfléchir.

`bb({eyes:"normal", mouth:"normal"});`

b: Si me battre contre toi craint, parce je ne te protège pas...

h: Mais me battre contre toi craint *aussi*, parce que ça te fait juste crier plus fort...

`bb({eyes:"normal_r"})`

b: Alors peut-être que...

`bb({eyes:"normal"})`

h: Alors peut-être que nous ne devons pas nous battre.

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
```

(...301)

`publish("smash",[0]);`

(...2001)

```
publish("smash",[1]);
sfx("smash_glass");
```

(...2601)

```
publish("smash",[2]);
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

(...2001)

`Game.FORCE_CANT_SKIP = false;`

(#act4b_2)

# act4b_2

```
music('dontfight',{fade:5, volume:0.6});
bb({eyes:"annoyed_d"});
```

b: Je ne suis pas un Grand Méchant Loup. Mais je ne suis pas non plus un chien de garde.

`bb({eyes:"sad_d"})`

b: Je suis un chien battu.

`bb({eyes:"sad"})`

b: On a traversé des trucs durs. Peut-être un traumatisme ou un délaissement. C'est pour ça que parfois, je surréagis et fait tout de suite :

```
sfx("yaps", {volume:0.6});
bb({body:"yap_1"});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 215;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: YAP YAP YAP YAP YAP

(...1884)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_CANT_SKIP = false;
bb({body:"normal", mouth:"scream", eyes:"scream_sad"});
```

b: Mais je ne *veux* pas être un chien lâche ! Je veux te protéger ! Je veux être un bon chien !

`bb({eyes:"sad", mouth:"normal"});`

b: Humain... aideras-tu à apprivoiser ce loup ?

`hong({eyes:"sad"})`

h: Je... j'essaierai.

`hong({eyes:"normal_l", body:"chin", mouth:"narrow"})`

h: Ok. Une bonne relation avec des émotions. Les relations ont besoin de communication. Bon, communiquons.

`hong({eyes:"normal", body:"hands_1", mouth:"normal"})`

h: Les cinq prochains minutes vont sonner super mielleuses, mais faisons semblant jusqu'à ce que nous y arrivons.

```
hong({body:"hands_2", mouth:"normal"});
```

h: Cher loup intérieur... comment *tu* te sens ?

n2: TOTAL DES PEURS UTILISÉES :

n2: *BLESSÉ* {{_.attack_harm_total}}, *MALAIMÉ* {{_.attack_alone_total}}, *MAUVAISE PERSONNE* {{_.attack_bad_total}}

n2: DE QUELLE PEUR VEUX-TU PARLER EN PREMIER ? (TU POURRAS CHOISIR LES AUTRES PLUS TARD)

```
_.a4_fears_discussed = 0;
_.num_thanks = 0;
hong({body:"normal"});
bb({eyes:"normal"});
```

[J'ai peur qu'on soit blessés.](#act4_harm)

[J'ai peur qu'on soit seuls.](#act4_alone)

[J'ai peur qu'on soit de mauvaises personnes.](#act4_bad)

# act4_harm

```
_.a4_talked_about_harm = true;
_.a4_fears_discussed += 1;
```

`bb({eyes:"normal_d"})`

b: Je veux te protéger physiquement,

`bb({eyes:"sad_d"})`

b: Mais *le monde entier* semble si dangereux. Si plein de tragédies et de méchancetés.

`bb({eyes:"sad"})`

{{if _.a4_fears_discussed==1}}
b: J'sais pas, assez de *moi* choisissant ce qui va être dit. Qu'est-ce que *tu* dis, humain ?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: De nouveau, retour sur toi, humain. Qu'est-ce que tu en penses ?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: D'autres idées, humain ?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Tu as raison. Protégeons-nous.](#act4_harm_skills)

[Mettons nous encore *plus* en danger.](#act4_harm_exposure)

[Merci.](#act4_thanks) `_.thanks_for = "ma sécurité physique";`

# act4_harm_skills

`bb({eyes:"look_down", body:"paw"})`

b: Mais... comment ? J'ai des crocs et des griffres, mais je suis juste une métaphore.

```
bb({ body:"normal", eyes:"normal" });
hong({ body:"one_up", eyes:"surprise" });
```

h: On pourrait apprendre l'auto-défense ? Rejoindre une communauté qui se protège les uns les autres ? Améliorer notre santé générale & nos barrières personnelles ?

```
bb({ eyes:"annoyed_r" });
hong({ body:"normal", eyes:"normal" });
```

b: Peut-être, mais...

[Où est-ce qu'on peut même commencer ?](#act4_harm_skills_start)

[Et si ça ne marche pas ?](#act4_harm_skills_work)

[Et si on exagère sur la "sécurité" ?](#act4_harm_skills_overboard)

# act4_harm_skills_start

`bb({ eyes:"sad_d" })`

b: Il y a tant à faire, tellement de choses qu'on doit réparer à props de nous. Par où on *commence* même ?

`hong({ body:"shrug", eyes:"surprise" })`

h: On est en train de commencer là.

`bb({ eyes:"normal", mouth:"narrow" })`

b: Hein ?

```
bb({ body:"normal", mouth:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal"});
```

h: On est en train de pratiquer une bonne communication là. Ce qui nous aidera à détecter mieux les dangers, avec moins de faux positifs,

`hong({ eyes:"surprise" });`

h: Et *ça* nous protégera d'être blessé !

`hong({ eyes:"normal", mouth:"normal" });`

h: Par conséquent : c'*est* un entraînement d'auto-défense.

`bb({ eyes:"normal_r" })`

b: Huh. Je m'attendais plus à quelque chose du genre :

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
hong({ eyes:"sad", mouth:"smile" });
bb({ body:"karate_1" });
sfx("hiya");
```

(...1001)

`Game.FORCE_CANT_SKIP = false;`

(#act4_something_else)

# act4_harm_skills_work

`bb({ eyes:"normal" });`

h: C'est vrai, il n'y a pas de moyen de nous protéger à 100%...

`hong({ body:"one_up" });`

h: Mais même 1% d'amélioration est toujours quelque chose qui vaut le coup, n'est-ce pas ?

```
bb({ eyes:"annoyed" });
hong({ normal:"one_up" });
```

b: Tu ne vois pas le verre à 99% rempli, mais à 1% rempli ?

`bb({ eyes:"normal" });`

h: Ce qui vaut toujours quelque chose si tu es dans le désert.

`bb({ eyes:"closed" });`

b: Bien. Bottoms up, alors.

(#act4_something_else)

# act4_harm_skills_overboard

`bb({ body:"chest", eyes:"annoyed" })`

b: Je veux dire, la raison principale pour laquelle tu as ignoré mes avertissements était parce que *j'ai* trop exagéré avec la sécurité !

`bb({ body:"normal", eyes:"normal" })`

h: Hum oui, tu as raison. Nous devons faire de la sécurité avec modération. Tout avec modération.

`bb({ eyes:"suspect" })`

b: Désolé, *TOUT* avec modération ?

`hong({ eyes:"annoyed" })`

h: *Un nombre modéré de choses* avec modération.

```
bb({ eyes:"closed" });
hong({ eyes:"normal" });
```

b: Merci de rendre tes déclarations récursivement auto-consistantes.

(#act4_something_else)


# act4_harm_exposure

`bb({ mouth:"scream_talk", eyes:"scream", MOUTH_LOCK:true });`

b: *QUOI*

```
bb({ mouth:"narrow", eyes:"suspect" });
hong({ body:"one_up" });
```

h: Je veux dire, disons qu'un chien est effrayé du tonnerre.

`hong({ body:"hands_1" });`

h: Une astuce que les dompteurs utilisent est de jouer un son de tonnerre à un volume faible, puis donne au chien une friandise pour rester calmer.

`hong({ body:"hands_2" });`

h: Après plusieurs jours, le dompteur augmente le volume petit à petit, jusqu'à ce que le chien dépasse sa peur du tonnerre.

```
hong({ body:"normal", eyes:"surprise" });
bb({ mouth:"normal", eyes:"normal" });
```

h: Ça s'appelle la thérapie d'exposition !

`hong({ body:"point", eyes:"normal" });`

h: Vu que tu es un chien, ça devrait marcher aussi, non ? Tous les mammifères ont cette même réponse de "combattre ou fuir".

`hong({ body:"normal" });`

[Et si on se désensibilise *beaucoup* trop ?](#act4_harm_exposure_overboard)

[Et si on est exposé au *véritable* danger ?](#act4_harm_exposure_hurt)

[Je suis un loup, pas un chien.](#act4_harm_exposure_dog) `bb({ eyes:"suspect" })`

# act4_harm_exposure_dog

h: Et je serai tendre et patient jusqu'à ce que tu deviennes un mignon petit chiot domestiqué.

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"sad", mouth:"smile" })`

b: Ooow.

(#act4_something_else)

# act4_harm_exposure_overboard

`bb({ eyes:"annoyed" })`

b: On vient *tout juste* de voir ce qui se passe si tu éteins ta peur - tu te mets *vraiment* dans des situations dangeureuses.

`bb({ eyes:"angry_r", body:"one_up" })`

b: Qui plus est, est-ce que *trop* de désensibilisation ne pas faire de nous des psychopathes ?

`bb({ mouth:"scream", eyes:"scream", body:"two_up" })`

b: Bientôt, on prendra des traitements tout en regardant des pornos snuff meurtriers !

`hong({ eyes:"annoyed" })`

h: Je... pense qu'il y a une ligne entre ça et le tonnerre.

`bb({ body:"normal", mouth:"normal", eyes:"suspect" })`

b: Mais *où* exactement, humain ? *Où ?!*

`hong({ eyes:"surprise", body:"one_up" })`

h: Je ne sais pas. Mais *tu* peux m'aider !

`hong({ eyes:"normal", body:"normal" })`

h: En travaillant et en négociant avec toi, nous dessinerons cette ligne.

`bb({ body:"paw", mouth:"narrow", eyes:"closed" })`

b: Ok. Mais je n'ai pas de pouces opposables, donc tu devras faire le dessin.

(#act4_something_else)

# act4_harm_exposure_hurt

`bb({ body:"two_up", eyes:"angry_r" })`

{{if _.INJURED}}
b: Par exemple : on a sauté d'un *toit !*
{{/if}}

{{if !_.INJURED}}
b: Par exemple : on a failli sauté d'un *toit !*
{{/if}}

```
hong({ eyes:"annoyed" });
bb({ body:"normal", eyes:"annoyed" });
```

h: Ouais, t'as raison. Ça *peut* aller trop loin.

`hong({ eyes:"normal" });`

h: Mais c'est pour ça que, si nous pratiquons la thérapie d'exposition, on avancera petit à petit.

h: Juste avant de rencontrer le *véritable* danger, on s'arrête.

`bb({ eyes:"annoyed_r", mouth:"narrow" });`

b: Ouais, j'ai dessiné la ligne entre entendre un bruyant tonnerre, et être dans une tempête, avec un grand chapeau pointu.

(#act4_something_else)

# act4_thanks

`_.num_thanks += 1`

{{if _.num_thanks==1}}
(#act4_thanks_1)
{{/if}}

{{if _.num_thanks==2}}
(#act4_thanks_2)
{{/if}}

{{if _.num_thanks==3}}
(#act4_thanks_3)
{{/if}}

# act4_thanks_1

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"annoyed" })`

b: Attends, pas d'arguments pour ou contre ce que je ressens ? Juste... "merci" ?

`hong({ eyes:"surprise", body:"shrug" })`

h: Ouais ! Merci de te préoccuper de {{_.thanks_for}}.

```
bb({ eyes:"closed_annoyed", MOUTH_LOCK:true });
hong({ eyes:"normal", body:"normal" });
```

b: ...

h: Ça va ?

`bb({ eyes:"super_sad", mouth:"narrow" });`

b: Tu ne m'avais jamais dit *merci* avant.

`hong({ mouth:"smile" });`

h: Ooow, espèce de grosse peluche de loup paniqueur.

(#act4_something_else)

# act4_thanks_2

h: Même si tu surréagis, j'apprécie que tu prennes soin de {{_.thanks_for}}.

`bb({ eyes:"annoyed" })`

b: Attends... tu n'es pas juste en train de répéter "merci" pour éviter de vraiment parler de ces peurs, n'est-ce pas ?

```
bb({ eyes:"normal" });
hong({ eyes:"annoyed", body:"chin" });
```

h: Eh bien, les choses sont compliquées, et je n'ai pas toujours les réponses clés en main.

`hong({ eyes:"annoyed_l", body:"one_up" })`

h: Ce n'est pas comme si la vie te donnait une liste de 3 réponses pré-faites d'un dialogue.

`hong({ eyes:"normal", mouth:"smile", body:"normal" })`

h: Mais pour le moment, je peux au moins te dire merci.

b: Eh bien, merci à toi aussi, pour m'écouter patiemment.

`bb({ eyes:"closed" });`

b: Espèce de petit mammifère sans cheveux.

(#act4_something_else)

# act4_thanks_3

h: Mêmes si tes aboiements m'effraient, tu essaies simplement de protéger {{_.thanks_for}}.

`bb({ eyes:"smile_r" });`

b: Ok, si tu continues de me flatter comme ça, Internet va se faire des idées bizarres à propos de nous.

```
bb({ eyes:"smile" });
hong({ eyes:"annoyed" });
```

h: Oh allez, je suis juste un vulnérable collégien and tu es un grand et terrifiant loup. Qu'est-ce qui pourrait arriver de ma--

`hong({ eyes:"normal", body:"point" });`

h: En fait, n'y réponds pas.

(#act4_something_else)




# act4_alone

```
_.a4_talked_about_alone = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"sad_d" });`

b: Je veux être sûr que tu remplisses ce profond besoin d'être humain d'appartenance...

`bb({ eyes:"sad_u" });`

b: Mais je m'inquiètes que si quelqu'un nous connaissait - le *vrai* nous - nous les ferions fuir.

`bb({ eyes:"sad" });`

{{if _.a4_fears_discussed==1}}
b: J'sais pas, assez de *moi* choisissant ce qui va être dit. Qu'est-ce que *tu* dis, humain ?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: De nouveau, retour sur toi, humain. Qu'est-ce que tu en penses ?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: D'autres idées, humain ?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Je suis d'accord : travaillons sur notre vie sociale.](#act4_alone_skills)

[Je pense que les gens nous aiment bien. Et si on vérifiait ?](#act4_alone_experiment)

[Merci.](#act4_thanks) `_.thanks_for = "mon appartenance sociale";`

# act4_alone_skills

```
bb({ eyes:"normal" });
hong({ body:"chin" });
```

h: Nous pourrions entraîner nos techniques à poser des questions, écouter et avoir de l'empathie, être ouvert et vulnéable, etc ?

`hong({ eyes:"normal_l" });`

h: Ou avoir de meilleures habitudes sociales, comme prévoir du temps à passer avec des amis ou aller régulièrement à des rassemblements ?

`hong({ body:"one_up" });`

h: On pourrait aussi apprendre à être plus à l'aise avec le rejet.

`hong({ eyes:"normal" });`

h: Ou apprendre à reconnaître quand les personnes *ne sont pas* en train de nous rejeter, mais qu'elles sont juste fatiguées ou ont une tronche de ^pétasse^ de base.

```
hong({ body:"normal" });
bb({ eyes:"annoyed_r" });
```

b: Ça fait beaucoup d'options.  Mais, à propos "d'apprendre des techniques sociales"...

[Est-ce que ça n'est pas *manipulateur ?*](#act4_alone_skills_manipulative)

[Est-ce que cela ne nous rendra pas *plus manipulable ?*](#act4_alone_skills_manipulated)

[Et si on échoue toujours ?](#act4_alone_skills_fail)

# act4_alone_skills_manipulative

`bb({ eyes:"suspect" });`

b: Est-ce que les tueurs en séries qui peuvent lire les émotions de leurs victimes ne sont pas fort en "empathie" ?

`bb({ eyes:"annoyed" });`

b: C'était bien Charles Manson qui s'était fait des amis et influencer des gens ?

`hong({ eyes:"annoyed", body:"chin" });`

h: Nah, tu as raison.

h: "Techniques sociales" ne veut rien dire si tu ne prêtes pas vraiment attention *aux* gens.

`hong({ body:"normal" });`

h: Pour faire simple, ne sois juste pas un ^enfoiré^.

`bb({ eyes:"annoyed", mouth:"smile" });`

b: C'est un sous-titre de poster de motivation qu'on a là.

`hong({ body:"shrug", mouth:"narrow" });`

h: “Ne Sois Pas Un ^Enfoiré^™”

(#act4_something_else)

# act4_alone_skills_manipulated

`bb({ eyes:"angry" })`

b: On va devenir un paillasson "Bienvenue", disant S'il vous plaît et Merci quand les gens s'essuieront sur nous !

`bb({ mouth:"scream", eyes:"scream" })`

b: On embrassera tellement de fesses qu'on aura l'impression d'avoir du rouge à lèvre marron !

```
bb({ mouth:"normal", eyes:"normal" });
hong( body:"chin" });
```

h: Nah, tu as raison. "Techniques sociales" ne peut pas juste être "faire plaisir aux autres", c'est aussi mettre des *limites.*

`hong( body:"one_up" });`

h: On ne peut pas inviter les gens chez nous, s'il n'y a pas de murs pour maintenir notre chez nous.

```
hong( eyes:"angry", mouth:"narrow" });
bb( eyes:"annoyed", mouth:"smile" });
```

h: Et aussi... re: cette image mentale du rouge à lèvres... *ew ??*

(#act4_something_else)

# act4_alone_skills_fail

`bb({ eyes:"annoyed" });`

h: On va peut-être échouer. En fait, on *va* échouer.

```
bb({ eyes:"normal" });
hong({ eyes:"surprise", body:"shrug" });
```

h: Et c'est bon ! Échouer est la façon dont n'importe qui apprend quelque chose de nouveau au début !

`hong({ body:"normal", eyes:"normal" });`

h: Alors, échouons ensemble, ok ?

`bb({ eyes:"normal_r" });`

b: D'accord, j'imagine... dans le pire des cas, on peut juste fuir la ville et obtenir une nouvelle identité.

`bb({ eyes:"normal" });`

h: Ouais, je pense que ça ne vaut que deux bitcoins ces temps-ci.

(#act4_something_else)

# act4_alone_experiment

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: On pourrait essayer quelques expériences !

`hong({ body:"chin" });`

h: On pourrait aussi ping un ami pour sortir, reconnecter avec un vieux pote, ou même juste discuter avec un barista.

`hong({ body:"normal" });`

h: Je pense qu'on pourrait trouver qu'on est plus aimable que ce qu'on suspecte.

`bb({ eyes:"annoyed" });`

[Et si ce sont des petites, "victoires" bas de gamme ?](#act4_alone_experiment_cheap)

[Et si c'est un fardeau pour les autres ?](#act4_alone_experiment_burden)

[Mais les petites discussions, ce n'est pas le *vrai* nous !](#act4_alone_experiment_real_us)

# act4_alone_experiment_real_us

`bb({ eyes:"sad" });`

b: Si on se force à sourire, on ne pourra jamais vraiment se connecter avec qui que ce soit,

`bb({ eyes:"super_sad" });`

b: *Mais* si on s'ouvre, les gens verront qu'on est tout troublé à l'intérieur !

`hong({body:"chin", mouth:"narrow", MOUTH_LOCK:true})`

h: ...

```
hong({body:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Roule sur le dos.

b: Quoi.

`hong({body:"hands_1"})`

h: Quand les chiens veulent montrer de l'amour et de la confiance, ils se mettent en position de vulnérabilité en exposant leur ventre.

`hong({body:"one_up"})`

h: Peut-être qu'on n'est pas *encore* assez sécurisé pour être trop vulnérable, mais avec assez d'entraînement,

`hong({body:"normal", eyes:"surprise"})`

h: Un jour, on pourra montrer aux gens le véritable nous - tout troublé, tout humain.

```
hong({eyes:"normal"});
bb({ eyes:"super_sad", mouth:"smile", body:"chest" });
```

b: Je roulerai sur le dos si tu me donnes une friandise.

`bb({ eyes:"normal", mouth:"normal" });`

h: Non.

(#act4_something_else)


# act4_alone_experiment_cheap

b: Dire "salut" au barista ne mérite pas franchement une médaille d'or au Crawl des Olympiques Sociales.

```
hong({ body:"point", eyes:"surprise" });
bb({ eyes:"normal" });
```

h: Ça l'est pour *nous !*

`hong({ body:"one_up", eyes:"annoyed" });`

h: Dans l'arène sociale, on n'est même pas poids plume, on est plutôt... poids quark.

`hong({ body:"normal", eyes:"normal" });`

h: Si on doit commencer par des petites, victoires bas de gamme, alors soit. Faut monter la 1ère marche avant de monter la 1000ème.

b: Ouais ! Peut-être qu'après avoir dit "Salut", on peut avancer en disant...

`bb({ body:"two_up", mouth:"smile", eyes:"smile_u" });`

b: *"Comment allez-vous ?"*

`hong({ body:"shrug", mouth:"smile", eyes:"surprise_l" });`

h: *"Pas terrible !"*

(#act4_something_else)

# act4_alone_experiment_burden

`bb({ eyes:"suspect_r" })`

b: Peut-être qu'un barista veut préparer son fichu café, pas être une *expérience* pour voir si tes techniques sociales craignent.

`bb({ eyes:"annoyed" })`

h: Ok, si finalement il semble qu'on *soit* un fardeau...

```
hong({ eyes:"surprise" });
bb({ eyes:"normal" });
```

h: C'est aussi bon à savoir !

`hong({ eyes:"normal" });`

h: On peut alors apprendre comment demander de façon pro-active aux gens avec quoi ils sont confortables, connaître et respecter leurs limites.

```
hong({ eyes:"annoyed_l", mouth:"narrow" });
bb({ eyes:"annoyed", mouth:"smile" });
```

h: T'sais, toutes ces ^merdes^ de "techniques inter-personnes" qu'on voit dans les brochures des conseillers.

(#act4_something_else)



# act4_bad

```
_.a4_talked_about_bad = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"annoyed_r" })`

b: Je veux défendre des besoins moraux, ce qui te conduit à être une meilleure personne,

`bb({ eyes:"sad_d" })`

b: Mais on a l'impression que tout au fond, on est fondamentalement... cassé.

`bb({ body:"two_up", eyes:"angry" })`

{{if _.INJURED}}
b: Et ne me réponds pas qu'on *n'est pas* troublé. On a sauté d'un *toit*.
{{/if}}

{{if !_.INJURED}}
b: Et ne me réponds pas qu'on *n'est pas* troublé. On a failli sauté d'un *toit*.
{{/if}}

`bb({ body:"normal", eyes:"sad" })`

{{if _.a4_fears_discussed==1}}
b: J'sais pas, assez de *moi* choisissant ce qui va être dit. Qu'est-ce que *tu* dis, humain ?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: De nouveau, retour sur toi, humain. Qu'est-ce que tu en penses ?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: D'autres idées, humain ?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Donc on est cassé. Réparons-nous.](#act4_bad_fix)

[Donc on est cassé. Acceptons-le.](#act4_bad_accept)

[Merci.](#act4_thanks) `_.thanks_for = "mon bien-être moral";`

# act4_bad_fix

```
bb({eyes:"normal"});
hong({body:"chin"});
```

h: On pourrait lentement établir de meilleures habitudes, être en plus adéquation avec ce qu'on valorise,

`hong({body:"one_up"});`

h: Et si besoin, on peut demander l'aide d'un professionnel - un thérapeute ou un conseiller.

`hong({body:"normal"});`

h: Il y a des moyens de nous réparer.

[Et si on ne peut pas du tout nous réparer ?](#act4_bad_fix_cant)

[Et si on nous répare "trop" ?](#act4_bad_fix_too_much)

[On ne peut pas se permettre l'aide d'un professionnel.](#act4_bad_fix_afford)

# act4_bad_fix_cant

`hong({eyes:"annoyed"});`

h: Nah, j'imagine que tu as raison.

h: On ne peut pas tout réparer.

`bb({mouth:"scream", eyes:"scream_sad"});`

b: Ahhh je savais que ça serait toujours tout cassé !

`hong({eyes:"surprise"});`

h: Mais on peut au moins être *moins* cassé.

```
bb({mouth:"normal", eyes:"annoyed"});
hong({eyes:"sad", mouth:"smile"});
```

h: Les cicatrices guérissent avec le temps, mais elles ne disparaissent jamais complètement. Et ça va.

`bb({eyes:"annoyed_r"});`

b: J'imagine. Qui plus est,

```
Game.FORCE_TEXT_Y = 460;
Game.clearText();
publish("act4-sexy", [true]);
```

b: Les cicatrices sont *sexy.*

```
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-sexy", [false]);
bb({body:"chest", mouth:"smile_talk", MOUTH_LOCK:true, eyes:"sexy"}, 0);
hong({eyes:"normal", mouth:"normal"}, 0);
```

h: S'il te plaît, ne fait pas ça.

(#act4_something_else)

# act4_bad_fix_too_much

`bb({ eyes:"angry_d" })`

b: C'est fou à dire, mais... un part de moi *veut* avoir ce trouble.

`bb({ eyes:"angry" })`

b: Je veux dire, sans lui, ne serions-nous pas *ennuyeux ?*

`bb({ eyes:"sad_r", body:"one_up" })`

b: Sans le trouble, notre art ne serait-il pas éculé et insipide ?

`bb({ eyes:"sad_u", body:"two_up" })`

b: Sans le trouble, ne serions-nous pas incapable de nous connecter avec nos amis qui ont ce trouble ?

`bb({ eyes:"sad", body:"chest" })`

b: Si jamais nous étions content de la vie, ne cesserions-nous pas de faire des grandes choses ?

`hong({ MOUTH_LOCK:true })`

h: ...

h: Si on a même peur... "d'échapper aux peurs"...

h: Je ne pense pas qu'on échapperait aux peurs.

`bb({ eyes:"smile_u", body:"normal", mouth:"smile" })`

b: Oh, super ! Ouf ! Quel soulagement !

(#act4_something_else)

# act4_bad_fix_afford

`bb({ body:"one_up", eyes:"sexy", mouth:"normal" })`

b: "Doc', je suis anxieux du fait que je paie 100€/h juste pour vous entendre demander *qu'est-ce que ça vous fait ressentir ?*"

`bb({ body:"paw", eyes:"closed", mouth:"narrow" })`

b: "Mm-hmm. Et qu'est-ce que ça vous fait ressentir ?"

```
bb({ body:"normal", eyes:"normal", mouth:"normal" });
hong({ eyes:"sad" });
```

h: Nah, c'est une inquiétude tout à fait raisonnable.

`hong({ eyes:"annoyed", mouth:"sad" });`

h: Et ça craint vraiment que la médecine mentale ne soit pas abordable pour beaucoup de gens.

`hong({ eyes:"normal", mouth:"normal" });`

h: Malgré tout, il existe des options pas chères ou gratuites :

`hong({ body:"chin" })`

h: Groupes de soutien, thérapie en ligne, centres de soin étudiants/bénévoles...

`hong({ body:"hands_1" })`

h: Prendre l'habitude de faire de la méditation libre, regarder des vidéos de soins mentaux approuvées...
# new english version : Building habits like meditation, sleeping well, chatting regularly with friends, learning new things...

`hong({ body:"hands_2" })`

h: Emprunter un livre à bibliothèque sur la Thérapie Cognitive Comportementale ou la Thérapie d'Acceptation et d'Engagement...
# new english version : Going to a library to borrow workbooks for evidence-based psychotherapies...

`hong({ body:"one_up" })`

h: Il y a une liste remplie de ressources à la fin de ce jeu !

```
hong({ body:"normal" });
bb({ eyes:"annoyed", mouth:"narrow" });
```

b: Eh bien, *ce* quatrième mur n'aura pas tenu longtemps.

`hong({ body:"point" });`

h: Certaines choses sont plus importantes que la convention narrative. Comme la santé mentale.

(#act4_something_else)


# act4_bad_accept

```
bb({ eyes:"normal" });
hong({ eyes:"normal_l", body:"one_up", mouth:"narrow" });
```

h: Je veux dire, c'est ce que disent les thérapeutes, pas vrai ? Accepte toutes émotions, mêmes les négatives ?

```
bb({ eyes:"annoyed" });
hong({ eyes:"normal", body:"normal", mouth:"normal" });
```

b: Attends.

["Accepter" comme dans *abandonner* ?](#act4_bad_accept_give_up)

["Accepter" comme dans *approuver* ?](#act4_bad_accept_approve)

["Accepter" comme dans *prendre littéralement* ?](#act4_bad_accept_literally)

# act4_bad_accept_give_up

`bb({ eyes:"angry", body:"one_up" });`

b: Est-ce que tu penses que Martin Luther King aurait dit, "Zut alors ! On ne peut pas s'asseoir à l'avant du bus, on n'a qu'à l'*accepter*" ?

`bb({ eyes:"angry_r", body:"two_up" });`

b: Pourquoi le Complexe Industriel d'Auto-Assistance pense qu'agiter le drapeau blanc est une sorte de *sagesse profonde ?*

`bb({ eyes:"annoyed", body:"normal" });`

h: Je pense que les thérapistes disent "d'accepter" les mauvaises choses dans le sens : reconnaît qu'elles existent et sont difficiles à changer,

h: Mais pas forcément abandonner un engagment pour changer.

`bb({ eyes:"suspect" });`

b: Alors les thérapistes devraient dire *reconnaît*, pas *accepte*.

`hong({ body:"chin", eyes:"annoyed" });`

h: Ouais, en y repensant, "accepter" est perturbant.

`bb({ eyes:"closed", mouth:"narrow" });`

b: Eh bien, je *reconnais* ça.

(#act4_something_else)

# act4_bad_accept_approve

`bb({ eyes:"angry" });`

b: Comme si c'était *bon* d'être cassé ou quoi ? Non !

`bb({ eyes:"angry_r", body:"one_up" });`

b: Tous ces polissons de scénaristes d'Hollywoord qui romantise la maladie mentale sont plein de crotte !

`bb({ eyes:"angry", body:"two_up" });`

b: Avoir un trouble mental *craint !* Ça vole la *vie* des gens ! Pourquoi on devrait "accepter" ça ?!

`bb({ body:"normal" });`

h: Je pense que les thérapistes disent "d'accepter" nos émotions dans le sens : sois patient avec eux.

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Comme quand lutter dans les sables mouvants te font plonger plus vite, et que la solution est de s'allonger patiemment à plat,

`hong({ eyes:"surprise" });`

{{if _.INJURED}}
h: Combattre contre toi, ma peur, m'a poussé à me jeter d'un toit.
{{/if}}

{{if !_.INJURED}}
h: Combattre contre toi, ma peur, m'a presque poussé à me jeter d'un toit.
{{/if}}

`hong({ body:"normal", eyes:"normal" });`

h: Au lieu de ça, la solution est de faire ce qu'on est en train de faire maintenant - ne pas se battre, mais être patient chacun avec l'autre.

`bb({ eyes:"annoyed" });`

b: Alors ils devraient dire *ça* au lieu d'utiliser des mots problématiques comme "accepter".

`hong({ body:"chin", eyes:"annoyed" });`

h: Ouais, en y repensant, "accepter" est perturbant.

`bb({ eyes:"closed_annoyed", mouth:"narrow" });`

b: Je n'accepte pas "accepte".

(#act4_something_else)

# act4_bad_accept_literally

`bb({ eyes:"sad", body:"one_up" });`

b: Mais tu *sais* déjà que tu ne devrais pas me prendre au sens littéral !

`bb({ eyes:"sad_u", body:"two_up" });`

b: L'entièreté du *problème* réside dans le fait que je veuille t'aider, mais que je crains à utiliser les mots pour le faire !

`bb({ eyes:"sad", body:"normal" });`

h: Je pense que les thérapistes disent "d'accepter" dans le sens : "ne les combats ou les ignore pas".

`hong({ eyes:"surprise", body:"one_up" });`

h: T'écouter, travailler *avec* toi, mais ne pas prendre ce que tu dis comme la vérité 100% littéralement vraie.

```
hong({ eyes:"normal", body:"normal" });
bb({ eyes:"annoyed", mouth:"normal" });`
```

b: Alors ils devraient dire *ça* au lieu d'utiliser des mots problématiques comme "accepter".

`hong({ body:"chin", eyes:"annoyed" });`

h: J'imagine qu'ils craignent à utiliser des mots aussi..

(#act4_something_else)




# act4_something_else

```
bb({ body:"normal", mouth:"normal", eyes:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal" });
```

{{if _.a4_fears_discussed==1}}
h: Quoi qu'il en soit, il y a autre chose dont tu voudrais discuter ?
{{/if}}

{{if _.a4_fears_discussed==2}}
h: Bon, tu as autre chose qui te pèse sur le coeur ?
{{/if}}

{{if _.a4_fears_discussed==3}}
(#act4_something_else_2)
{{/if}}

{{if _.a4_talked_about_harm!=true}}
[J'ai peur que nous soyons blessés.](#act4_harm)
{{/if}}

{{if _.a4_talked_about_alone!=true}}
[J'ai peur que nous soyons seuls.](#act4_alone)
{{/if}}

{{if _.a4_talked_about_bad!=true}}
[J'ai peur que nous soyons de mauvaises personnes.](#act4_bad)
{{/if}}

[Nah, c'est bon pour le moment.](#act4c_prelude)

# act4_something_else_2

h: Ok, je pense qu'on a discuté de toutes nos peurs maintenant.

b: Oui, il y a uniquement trois peurs.

h: Ouaip, exactement trois.

b: Pratique.

(#act4c)

# act4c_prelude

h: Bonne conversation, coéquipier.

(#act4c)

# act4c

```
Game.clearText();
music(null,{fade:3});
bb({body:"normal", eyes:"normal", mouth:"normal", MOUTH_LOCK:true},0);
hong({body:"normal", eyes:"normal", mouth:"normal"},0);
```

b: ...

`hong({MOUTH_LOCK:true},0)`

h: ...

`bb({eyes:"annoyed_d"})`

b: C'est pas un *jeu*, tu sais.

`bb({eyes:"angry_d", body:"one_up"})`

b: Construire une relation saine avec ses émotions n'est pas quelque chose d'aussi simple que de cliquer des boutons sur un écran.

`bb({eyes:"sad", body:"normal"})`

b: *Peut*-on vraiment bien s'entendre ?

b: *Peut*-on vraiment travailler ensemble, comme une équipe ?

`hong({eyes:"sad", body:"one_up"})`

h: Eh bien,

```
hong({eyes:"surprise_l"});
bb({eyes:"normal"});
```

a: E-excuse moi...

```
Game.clearText();
publish("act4-in-2");
music('campus', {volume:0.5, fade:1});
```

(...2101)

(#act4d)

# act4d

`Game.WORDS_HEIGHT_BOTTOM = 221;`

`publish("act4", ["alshire", 0]);`

a: Ç-ça ne te dérange pas si je m'asseois avec toi pour déjeuner ?

`publish("act4", ["alshire", 1]);`

{{if _.TOP_FEAR=="harm"}}
s: *C'est lui* ton coup de cœur ? Pourquoi est-il assis tout seul comme un tueur en série psychopathe ?
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: Demander à ton coup de coeur si tu peux t'asseoir avec lui ? Tu te rends comptes à quel point tu sembles être dans le *besoin* ?!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s:  *C'est lui* ton coup de cœur ? On a interrompu sa paix et sa tranquilité ! Nous sommes tellement un fardeau !
{{/if}}

`publish("act4", ["alshire", 2]);`

a: J-je veux dire, ç-ça pose pas de problème sinon, je vais juste...

`publish("act4", ["alshire", 3]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "h2"`

[Attends, je t'ai vu à la fête, non ?](#act4d_recognition) `publish("act4", ["hong_to_alshire",1])`

[Ouais, bien sûr ! Viens.](#act4d_yes) `publish("act4", ["hong_to_alshire",2])`

[Désolé, j'ai besoin d'un peu de temps seul là.](#act4d_no) `publish("act4", ["hong_to_alshire",8])`

# act4d_recognition

`publish("act4", ["hong_to_alshire",2]);`

h2: Ouais, tu étais sur le canapé ! A la première fête où je suis allé...

`publish("act4", ["hong_to_alshire",10]);`

{{if _.a2_ending=="fight"}}
h2: Où j'ai eu cette crise de panique et frappé l'hôte.
{{/if}}

{{if _.a2_ending=="flight"}}
h2: Où j'ai eu cette crise de panique et suis parti en pleurant.
{{/if}}

```
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Attends humain, on est en train de la mettre mal à l'aise.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Ah, je ne veux pas te mettre sur la selette !

`publish("act4", ["hong_to_alshire",4]);`

h2: Juste me souvenir d'un visage amical, c'est tout.

```
publish("act4", ["hong_to_alshire",5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: AHHHHH JE LE SAVAIS ! CE SONT DE DANGEREUX PSYCHOPATES PANIQUÉS !
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: AAHHH LA PREMIÈRE IMPRESSION QU'ON A FAITE EST "ON A ÉTÉ TÉMOIN DE TON TRAUMA" ! ILS NOUS DÉTESTENT, C'EST SÛR !
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AAAHHH ON A FAIT SE SOUVENIR À QUELQU'UN D'UN ÉVÈNEMENT TRAUMATISANT. NOTRE SIMPLE PRÉSENCE BLESSENT LES AUTRES.
{{/if}}

(#act4e)

# act4d_yes

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Attends humain, ils ont l'air mal à l'aise.

```
publish("act4", ["hong_to_alshire", 6]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Ah, pas de pression, bien sûr !

`publish("act4", ["hong_to_alshire", 4]);`

h2: Juste pour dire, tu peux t'asseoir ici si tu veux.

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: ILS SONT *TROP* AMICAUX ! COMME TED BUNDY, LE TUEUR EN SÉRIE !
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: ILS FONT JUSTE SEMBLANT D'ÊTRE GENTILS ! PERSONNE NE VEUT *VRAIMENT* ÊTRE PROCHE DE NOUS !
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AHHH ON FAIT TOUJOURS SENTIR LES AUTRES GÊNÉS ! ON EST UNE TÂCHE SUR LA PLANÈTE TERRE !
{{/if}}

(#act4e)

# act4d_no

```
publish("act4", ["hong_to_alshire", 9]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Attends humain, on est peut-être en train de les mettre mal à l'aise.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Ah, je ne voulais pas être rude !

`publish("act4", ["hong_to_alshire", 6]);`

h2: J'ai juste besoin de temps pour traiter mes émotions. S'il te plaît, ne le prends pas comme un rejet personnel.

```
publish("act4", ["hong_to_alshire", 7]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: QUELLES PENSÉES MALADES, TORDUES SONT-ILS EN TRAIN DE TRAITER ?! QUELS SOMBRES DESIRS REMPLISSENT CE CŒUR DE PSYCHOPATHE ?!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: ON A ÉTÉ PERSONNELLEMENT REJETÉ ! ON NE SERA JAMAIS AIMÉ !
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: ON A INTERROMPU LEUR TRAITEMENT ÉMOTIONNEL ! MAINTENANT, ILS SERONT TRAUMATISÉS POUR TOUJOURS ET C'EST ENITIÈREMENT DE NOTRE FAUTE !
{{/if}}

(#act4e)

# act4e

```
Game.WORDS_HEIGHT_BOTTOM = 195;
publish("act4", ["alshire", 6]);
```

s: FUIT FUIT FUIT FUIT FUIT FUIT FUIT FUIT FUIT FUIT FUIT FUIT FUIT FUIT FUIT

```
Game.clearText();
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["alshire", 10]);
sfx("pop");
```

(...1001)

```
publish("act4", ["alshire", 11]);
sfx("alshire_run");
```

(...2601)

```
publish("act4-out-3");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
```

(...1201)

`publish("act4-jumpcut-hong");`

h: Huh. C'était bizarre.  Je me demande ce qui se passe dans sa tête.

`publish("act4", ["hong_closer", 2]);`

h: Qu'importe, tu disais ?

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 6]);
```

b: Euh, j'ai oublié ? Quelque chose à propos d'équipes et de travail ?

```
publish("act4", ["bb_closer", 0]);
publish("act4", ["hong_closer", 3]);
```

h: ¯\_(ツ)_/¯

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 4]);
```

b: Ils disent que tu devrais "faire la paix" avec tes émotions, comme si tes émotions étaient des "criminels de guerre".

`publish("act4", ["bb_closer", 7]);`

b: Mais je veux que nous soyons *plus* que simplement en paix ! Je veux que nous soyons *alliés !*

`publish("act4", ["bb_closer", 3]);`

b: Je veux être un bon chien de garde. De la même façon que la faim et la soif sont tes alertes pour tes besoins physiques,

`publish("act4", ["bb_closer", 8]);`

b: Je veux être l'alarme pour tes besoins *psychologiques* - tes besoins pour la sécurité, l'appartenance et la bonté.

`publish("act4", ["bb_closer", 1]);`

b: Mais... je crains à mon travail, alors j'ai besoin que tu me dresses.

`publish("act4", ["bb_closer", 4]);`

b: Je ne suis ni "toujours valide", ni "toujours irrationnel". J'essaie juste... de faire de mon mieux. Alors, s'il te plaît,

`publish("act4", ["bb_closer", 30]);`

b: Aide moi à t'aider !

`publish("act4", ["bb_closer", 6]);`

b: Malgré le fait qu'apprendre de nouveaux tours à un vieux chien *prendra* un bon moment. Peut-être des *années.*

`publish("act4", ["bb_closer", 3]);`

b: Et parfois, je rechuterai, je retomberai dans mes vieilles habitudes.

`publish("act4", ["bb_closer", 2]);`

b: J'aboierai aux ombres. Je t'effrayerai avec des mots. Je pourrai même te montrer quelques images intrusives de... choses.

`publish("act4", ["bb_closer", 9]);`

b: Je suis désolé ! Je suis un chien battu ! Les chiens battus font caca sur ton lit parfois !

`publish("act4", ["bb_closer", 4]);`

b: Mais si tu es patient avec moi... que tu restes et t'asseoies avec moi...

`publish("act4", ["bb_closer", 8]);`

b: Peut-être que tu pourras apprivoiser ce loup.

`publish("act4", ["bb_closer", 0]);`

`Game.clearText();`

(...1000)

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Bon chien.](#act4f-pat-bb) `Game.OVERRIDE_CHOICE_SPEAKER = "h"; publish("act4", ["hong_closer", 2]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "b"`

[Bon humain.](#act4f-pat-hong) `Game.OVERRIDE_CHOICE_SPEAKER = "b"; publish("act4", ["bb_closer", 8]);`

# act4f-pat-hong

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 13]);
```

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...6501)

`publish("act4", ["bb_closer", 15]);`

(...1001)

(#act4f)

# act4f-pat-bb

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 10]);
```

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...6501)

`publish("act4", ["bb_closer", 12]);`

(...1001)

(#act4f)

# act4f

```
Game.FORCE_CANT_SKIP = false;
publish("act4", ["bb_closer", 16]);
publish("act4", ["hong_closer", 5]);
```

{{if _.fifteencigs}}
b: AAAAA TU MANGES ENCORE TOUT SEUL QUINZE CIGARETTES AAAAA
{{/if}}

{{if _.parasite}}
b: AAAAA T'ES TOUJOURS PAS PRODUCTIF EN MANGEANT ON EST DES PARASITES DE LA SOCIÉTÉ AAAAA
{{/if}}

{{if _.whitebread}}
b: AAAAA TU MANGES ENCORE PLUS DE PAIN BLANC AAAAA
{{/if}}

```
publish("act4", ["bb_closer", 18]);
publish("act4", ["hong_closer", 6]);
sfx("yaps", {volume:0.6});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 205;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: YAP YAP YAP YAP YAP

(#credits)
