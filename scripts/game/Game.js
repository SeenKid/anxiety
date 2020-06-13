window._ = {};
_.gender = 0;
window.Game = {};

Game.sections = {};
Game.queue = [];

Game.dom = $("#game_container");
Game.wordsDOM = $("#game_words");
Game.choicesDOM = $("#game_choices");
Game.canvas = $("#game_canvas");

window.SceneSetup = {}; // A big ol' singleton class that just makes it easy to create scenes.

// HELPER FUNCS
window.bb = function(){
	publish("bb", arguments);
};
window.hong = function(){
	publish("hong", arguments);
};
window.attack = function(damage, type){
	publish("attack", ["hong", damage, type]);
	_["attack_"+type+"_ch"+_.CHAPTER]++; // HACK
};
window.attackBB = function(damage, type){
	publish("attack", ["bb", damage]);
};

// Init
Game.init = function(){

	// Create the section debug menu
	Object.keys(Game.sections).forEach(function(key){
		const link = document.createElement('div');
		link.className = "section_link";
		link.innerText = key;
		link.addEventListener('click', function() {
			Game.goto(key);
		});
		document.getElementById("section_debug_list").appendChild(link);
	})

	// HP!
	window.HP = new HitPoints();

	// Animation!
	console.log("init");
	var animloop = function(){
		Game.update();
		requestAnimationFrame(animloop);
	};
	requestAnimationFrame(animloop);

};

// Call to toggle debug rendering
Game.debug = function(){
	document.body.classList.toggle('show_debug');
}

// Parse scene markdown!
Game.parseSceneMarkdown = function(md){

	// Split into sections...
	md = md.trim().replace(/\r/g, "");
	md = "\n" + md;
	var sections = md.split(/\n\#\s*/);
	sections.shift();
	sections.forEach(function(section){

		var split_index = section.indexOf("\n\n");
		var id = section.slice(0, split_index).toLocaleLowerCase();
		var text = section.slice(split_index+2);

		// Split into lines
		text = text.trim();
		var lines = text.split("\n\n");
		for(var i=0; i<lines.length; i++) lines[i]=lines[i].trim(); // trim it all!

		// New section
		Game.sections[id] = {
			id: id,
			lines: lines
		};

	});

};

////////////////////////////////////////////////////////////////////////////////////////////////
// SCENE MANAGEMENT ////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const Genders = [ '0', '1', '2' ];

Game.start = function(){
	Game.FORCE_CANT_SKIP = false; // for the replay
	window._ = {}; // global var, reset

	_.g_acts = {
		acknowledging: ['reconnaissant·e', 'reconnaissant', 'reconnaissante'],
		alone: ['tout·e seul·e', 'tout seul', 'toute seule'],
		an: ['un·e', 'un', 'une'],
		broken: ['cassé·e', 'cassé', 'cassée'],
		cpronoun: ['Læ', 'Le', 'La'],
		dead: ['mort·e', 'mort', 'morte'],
		freed: ['libéré·e', 'libéré', 'libérée'],
		harmed: ['blessé·e', 'blessé', 'blessée'],
		human: ['Humain·e', 'Humain', 'Humaine'],
		kiddo: ['Gamin·e', 'Gamin', 'Gamine'],
		kind: ['gentil·le', 'gentil', 'gentille'],
		loved: ['aimé·e', 'aimé', 'aimée'],
		meant_to: ['censé·e', 'censé', 'censée'],
		patient: ['patient·e', 'patient', 'patiente'],
		sorry: ['Désolé·e', 'Désolé', 'Désolée'],
		spronoun: ['Iel', 'Il', 'Elle'],
		spronounplural: ['Iels', 'Ils', 'Elles'],
	};

	_.g_act1 = {
		alone_bis: ['DÉLAISSÉ·E', 'DÉLAISSÉ', 'DÉLAISSÉE'],
		disgusting: ['dégoûtant·e', 'dégoûtant', 'dégoûtante'],
		eaten: ['mangé·e', 'mangé', 'mangée'],
		eater: ['mangeur·se', 'mangeur', 'mangeuse'],
		idiot: ['idiot·e', 'idiot', 'idiote'],
		invited: ['invité·e', 'invité', 'invitée'],
		lost: ['paumé·e', 'paumé', 'paumée'],
		normal: ['normal·e', 'normal', 'normale'],
		of_self: ['D\'IEL-MÊME', 'DE LUI-MÊME', 'D\'ELLE-MÊME'],
		player: ['joueur·se', 'joueur', 'joueuse'],
		productive: ['productif·ve', 'productif', 'productive'],
		sociopath: ['manipulateur·trice pervers·e', 'manipulateur pervers', 'manipulatrice perverse'],
		used: ['utilisé·e', 'utilisé', 'utilisée'],

		// Host
		that_weirdo: ['ce·tte taré·e', 'ce taré', 'cette tarée']
	};

	_.g_act2 = {
		condemned: ['condamné·e', 'condamné', 'condamnée'],
		confined: ['confiné·e', 'confiné', 'confinée'],
		cutie: ['ma·on mignon·ne', 'mon mignon', 'ma mignonne'],
		forced: ['obligé·e', 'obligé', 'obligée'],
		friend: ['ami·e', 'ami', 'amie'],
		full: ['plein·e', 'plein', 'pleine'],
		happy: ['heureux·se', 'heureux', 'heureuse'],
		irrational: ['irrationnel·le', 'irrationnel', 'irrationnelle'],
		little_one: ['petit·e', 'petit', 'petite'],
		mad: ['taré·e', 'taré', 'tarée'],
		pervert: ['pervers·e', 'pervers', 'perverse'],
		pervert_bis: ['GROS·SE PERVERS·E DÉGOÛTANT·E', 'GROS PERVERS DÉGOÛTANT', 'GROSSE PERVERSE DÉGOÛTANTE'],
		pleasure_zombie: ['ESCLAVE DE L\'HÉDONISME', 'CHAROGNARD SANS CERVELLE', 'COPULATRICE STUPIDE'],
		poisoned: ['empoisonné·e', 'empoisonné', 'empoisonnée'],
		rotten: ['pourri·e', 'pourri', 'pourrie'],
		scary: ['FLIPPANT·E', 'FLIPPANT', 'FLIPPANTE'],
		smart: ['intelligent·e', 'intelligent', 'intelligente'],
		special: ['spécial·e', 'spécial', 'spéciale'],
		taken: ['pris·e', 'pris', 'prise'],
		vicious: ['vicieux·se', 'vicieux', 'vicieuse'],

		// Host
		bastard: ['enfoiré·e', 'enfoiré', 'enfoirée'],
		pretty: ['beaux·lles', 'beaux', 'belles'],
		redhead: ['roux·sse', 'roux', 'rousse'],
		than_host: ['qu\'iel', 'que lui', 'qu\'elle'],
		that: ['Ce·tte', 'Ce', 'Cette']
	};

	_.g_act3 = {
		respected: ['respecté·e', 'respecté', 'respectée'],

		// Host
		tormented: ['tourmenté·e', 'tourmenté', 'tourmentée']
	};

	_.g_act4 = {
		all_human: ['tout·e humain·e', 'tout humain', 'toute humaine'],
		confident: ['sûr·e', 'sûr', 'sûre'],
		content: ['content·e', 'content', 'contente'],
		gone: ['parti·e', 'parti', 'partie'],
		impolite: ['malpoli·e', 'malpoli', 'malpolie'],
		open: ['ouvert·e', 'ouvert', 'ouverte'],
		psycho: ['UN·E DANGEREUX·SE PSYCHOPATHE PANIQUÉ·E', 'UN DANGEREUX PSYCHOPATHE PANIQUÉ', 'UNE DANGEREUSE PSYCHOPATHE PANIQUÉE'],
		student: ['étudiant·e', 'étudiant', 'étudiante'],
		traumatized: ['TRAUMATISÉ·E', 'TRAUMATISÉ', 'TRAUMATISÉE'],
		troubled: ['tout·e troublé·e', 'tout troublé', 'toute troublée'],
		went: ['allé·e', 'allé', 'allée'],

		// Crush (Host)
		rejected: ['REJETÉ·E', 'REJETÉ', 'REJETÉE'],
		seen: ['vu·e', 'vu', 'vue'],
		sit: ['assis·e', 'assis', 'assise']
	};

	_.setGender = function(g){
		const g_preview = $("#player_gender_preview");
		switch (g) {
			case 0:
				g_preview.innerHTML = "neutre";
				break;
			case 1:
				g_preview.innerHTML = "masculin";
				break;
			case 2:
				g_preview.innerHTML = "féminin";
		}

		_.gender = g;
		localStorage.setItem('gender', g);

		acknowledging=_.g_acts.acknowledging[g].toUpperCase();

		alone=_.g_acts.alone[g];
		u_alone=alone.toUpperCase();

		an=_.g_acts.an[g];
		u_an=an.toUpperCase();

		broken=_.g_acts.broken[g];
		u_broken=broken.toUpperCase();

		cpronoun=_.g_acts.cpronoun[g];
		u_cpronoun=cpronoun.toUpperCase();

		dead=_.g_acts.dead[g];
		u_dead=dead.toUpperCase();

		harmed=_.g_acts.harmed[g];
		u_harmed=harmed.toUpperCase();

		human=_.g_acts.human[g];
		u_human=human.toUpperCase();
		l_human=human.toLowerCase();

		kiddo=_.g_acts.kiddo[g];
		l_kiddo=kiddo.toLowerCase();

		kind=_.g_acts.kind[g];
		u_kind=kind.toUpperCase();

		loved=_.g_acts.loved[g];
		u_loved=loved.toUpperCase();

		meant_to=_.g_acts.meant_to[g];
		u_meant_to=meant_to.toUpperCase();

		sorry=_.g_acts.sorry[g];
		l_sorry=sorry.toLowerCase();

		spronoun=_.g_acts.spronoun[g];
		u_spronoun=spronoun.toUpperCase();
		l_spronoun=spronoun.toLowerCase();

		freed=_.g_acts.freed[g];
		patient=_.g_acts.patient[g];

		productive=_.g_act1.productive[g];
		u_productive=productive.toUpperCase();

		alone_bis=_.g_act1.alone_bis[g];
		disgusting=_.g_act1.disgusting[g];
		eaten=_.g_act1.eaten[g];
		eater=_.g_act1.eater[g];
		idiot=_.g_act1.idiot[g];
		invited=_.g_act1.invited[g];
		lost=_.g_act1.lost[g];
		normal=_.g_act1.normal[g];
		of_self=_.g_act1.of_self[g];
		player=_.g_act1.player[g];
		sociopath=_.g_act1.sociopath[g];
		used=_.g_act1.used[g];

		scary=_.g_act2.scary[g];
		u_scary=scary.toUpperCase();
		l_scary=scary.toLowerCase();

		condemned=_.g_act2.condemned[g];
		confined=_.g_act2.confined[g];
		cutie=_.g_act2.cutie[g];
		forced=_.g_act2.forced[g];
		friend=_.g_act2.friend[g];
		full=_.g_act2.full[g];
		happy=_.g_act2.happy[g];
		irrational=_.g_act2.irrational[g];
		little_one=_.g_act2.little_one[g];
		mad=_.g_act2.mad[g];
		pervert=_.g_act2.pervert[g];
		pervert_bis=_.g_act2.pervert_bis[g];
		pleasure_zombie=_.g_act2.pleasure_zombie[g];
		rotten=_.g_act2.rotten[g];
		smart=_.g_act2.smart[g];
		special=_.g_act2.special[g];
		taken=_.g_act2.taken[g];
		vicious=_.g_act2.vicious[g];

		respected=_.g_act3.respected[g];

		all_human=_.g_act4.all_human[g];
		confident=_.g_act4.confident[g];
		content=_.g_act4.content[g];
		gone=_.g_act4.gone[g];
		impolite=_.g_act4.impolite[g];
		g_open=_.g_act4.open[g];
		psycho=_.g_act4.psycho[g];
		student=_.g_act4.student[g];
		traumatized=_.g_act4.traumatized[g];
		troubled=_.g_act4.troubled[g];
		went=_.g_act4.went[g];
	};

	_.setHostGender = function(g){
		const g_preview = $("#host_gender_preview");
		switch (g) {
			case 0:
				g_preview.innerHTML = "neutre";
				break;
			case 1:
				g_preview.innerHTML = "masculin";
				break;
			case 2:
				g_preview.innerHTML = "féminin";
		}

		_.hostGender = g;
		localStorage.setItem('host_gender', g);

		host_cpronoun=_.g_acts.cpronoun[g];
		host_ucpronoun=host_cpronoun.toUpperCase();
		host_lcpronoun=host_cpronoun.toLowerCase();

		host_spronoun=_.g_acts.spronoun[g];
		host_uspronoun=host_spronoun.toUpperCase();
		host_lspronoun=host_spronoun.toLowerCase();

		host_acknowledging=_.g_acts.acknowledging[g];
		host_alone=_.g_acts.alone[g];
		host_loved=_.g_acts.loved[g].toUpperCase();
		host_spronounplural=_.g_acts.spronounplural[g];

		that_weirdo=_.g_act1.that_weirdo[g];

		that = _.g_act2.that[g];
		l_that = that.toLowerCase();

		bastard=_.g_act2.bastard[g];
		pretty=_.g_act2.pretty[g];
		redhead=_.g_act2.redhead[g];
		than_host=_.g_act2.than_host[g];

		tormented=_.g_act3.tormented[g];

		rejected=_.g_act4.rejected[g];
		seen=_.g_act4.seen[g];
		sit=_.g_act4.sit[g];
	};

	const storedGender = localStorage.getItem('gender');
	_.setGender(Genders.includes(storedGender) ? parseInt(storedGender, 10) : 0);

	const storedHostGender = localStorage.getItem('host_gender');
	_.setHostGender(Genders.includes(storedHostGender) ? parseInt(storedHostGender, 10) : 0);

	$("#g_neutral").checked = true;
	$("#hg_neutral").checked = true;

	$("#player_gender_options_toss").onclick = function(){
		sfx("ui_click");

		const prev_gender = _.gender;
		do {
			if ($("#g_tosswith0").checked) {
				_.setGender(Math.round(Math.random() * 2));
			} else {
				_.setGender(Math.round(Math.random() + 1));
			}
		} while (_.gender == prev_gender);

		update_player_gender_menu();
	};

	$("#host_gender_options_toss").onclick = function(){
		sfx("ui_click");

		const prev_gender = _.hostGender;
		do {
			if ($("#hg_tosswith0").checked) {
				_.setHostGender(Math.round(Math.random() * 2));
			} else {
				_.setHostGender(Math.round(Math.random() + 1));
			}
		} while (_.hostGender == prev_gender);

		update_host_gender_menu();
	};

	$("#g_neutral").onchange = function(){ _.setGender(0); };
	$("#g_male").onchange = function(){ _.setGender(1); };
	$("#g_female").onchange = function(){ _.setGender(2); };

	$("#hg_neutral").onchange = function(){ _.setHostGender(0); };
	$("#hg_male").onchange = function(){ _.setHostGender(1); };
	$("#hg_female").onchange = function(){ _.setHostGender(2); };
};

var last_frame = Date.now();
Game.update = function(){

	// TIME
	const now = Date.now();
	const delta = (now - last_frame) / 1000;
	last_frame = now;

	// Removing this till I can see why it's needed...
	// Reshaping the passing of time will come back to haunt you! [Spacie]
	// DELTA = Math.min(DELTA, 1/20); // no slower than 20fps

	if(!Game.paused){

		// Timeout callbacks...
		Game.timeoutCallbacks.forEach(tc => {
			tc.timeLeft -= 1000 * delta;
			if(tc.timeLeft <= 0) tc.callback();
		});
		Game.timeoutCallbacks = Game.timeoutCallbacks.filter(tc => tc.timeLeft > 0);

		// The interface
		Game.updateText();
		Game.updateCanvas(delta);

		// Ayyy
		publish("update");
	}

	// Options update
	Options.update();

};

// PAUSING THE GAME
Game.paused = false;
Game.pausedDOM = $("#paused");
Game.pause = function(){

	Game.paused = true;
	Game.pausedDOM.style.display = "block";
	Howler.mute(true);

	$("#paused").setAttribute("modal", (Options.showing||About.showing||ContentNotes.showing) ? "yes" : "no" );

	publish("GAME_PAUSED");

};
window.addEventListener("blur", Game.pause);
Game.onUnpause = function(){
	if(Game.paused && !(Options.showing||About.showing||ContentNotes.showing)){
		Game.paused = false;
		Game.pausedDOM.style.display = "none";
		Howler.mute(false);
	}

	publish("GAME_UNPAUSED");

};
Game.pausedDOM.onclick = function(e){
	if(Options.showing){
		publish("hide_player_gender_options");
		publish("hide_host_gender_options");
		publish("hide_options");
	}else if(About.showing){
		$("#close_about").onclick();
	}else if(About.showing){
		publish("hide_cn");
	}else{
		Game.onUnpause();
	}
	e.stopPropagation();
};

// UNPAUSE OR SKIP DIALOGUE?
var _unpauseOrSkip = function(){
	if(Game.paused){
		Game.onUnpause();
	}else{
		Game.clearAllTimeouts();
		publish("super_hack_skip_intro");
	}
};
window.addEventListener("click", _unpauseOrSkip);
window.addEventListener("touchstart", _unpauseOrSkip);


// "SET TIMEOUT" for text and stuff
Game.timeoutCallbacks = [];
Game.setTimeout = function(callback, interval){
	Game.timeoutCallbacks.push({
		callback: callback,
		timeLeft: interval
	});
};
// SKIP TEXT WHEN CLICK ANYWHERE (but NOT capture in choice)
Game.clearAllTimeouts = function(){

	// NOPE
	if(Game.FORCE_CANT_SKIP) return;

	// Is this DURING while someone is talking?
	var isInterrupting = (Game.WHO_IS_SPEAKING!=null);

	// If not, clear all
	// Otherwise, clear all BUT last one... UNLESS there's only one left
	if(Game.timeoutCallbacks.length==1) isInterrupting=false;
	for(var i=0; i<Game.timeoutCallbacks.length; i++){
		if(isInterrupting && i==Game.timeoutCallbacks.length-1) break;
		Game.timeoutCallbacks[i].callback();
	}
	if(isInterrupting){
		Game.timeoutCallbacks = [ Game.timeoutCallbacks[Game.timeoutCallbacks.length-1] ]; // last one
	}else{
		Game.timeoutCallbacks = [];
	}

};

// CLICK TO SKIP DIALOGUE
//window.addEventListener("click", Game.clearAllTimeouts);
//window.addEventListener("touchstart", Game.clearAllTimeouts);
/*Game.canvas.addEventListener("click", Game.clearAllTimeouts);
Game.canvas.addEventListener("touchstart", Game.clearAllTimeouts);
Game.choicesDOM.addEventListener("click", Game.clearAllTimeouts);
Game.choicesDOM.addEventListener("touchstart", Game.clearAllTimeouts);*/

Game.goto = function(sectionID){

	// Clear choices
	Game.choicesDOM.innerHTML = "";

	// Show each line...
	var section = Game.sections[sectionID];
	if(!section){
		throw "NO SECTION NAMED "+sectionID;
	}
	var lines = section.lines;
	Game.queue = Game.queue.concat(lines);
	Game.executeNextLine();

};

Game.executeNextLine = function(){

	// Parse handlebars
	var originalLine = Game.queue.shift();
	if(!originalLine) return; // END OF QUEUE.
	line = Game.parseLine(originalLine);

	// Execute line
	var promiseNext;
	if(line==""){
		// If no line, get immediate promise...
		promiseNext = Game.immediatePromise();
	}else{

		// Execute based on what type it is!
		var lineType = Game.getLineType(line);
		switch(lineType){
			case "text":
				promiseNext = Game.executeText(line);
				break;
			case "choice":
				promiseNext = Game.executeChoice(line);
				break;
			case "code":
				promiseNext = Game.executeCode(line);
				break;
			case "wait":
				promiseNext = Game.executeWait(line);
				break;
		}

		// If it's a goto, end THIS section immediately.
		if(lineType=="goto"){
			Game.clearQueue(); // CLEAR ALL ELSE IN QUEUE
			Game.executeGoto(line);
			return;
		}

	}

	// Do next line?
	if(Game.queue.length>0){
		promiseNext.then(function(){
			Game.executeNextLine();
		});
	}

};
Game.clearQueue = function(){
	Game.queue = [];
};
Game.addToQueue = function(line){
	Game.queue.push(line);
}


////////////////////////////////////////////////////////////////////////////////////////////////
// TEXT AND STUFF //////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// Immediate Promise
Game.immediatePromise = function(){
	return new RSVP.Promise(function(resolve){
		resolve();
	});
};

// Move the text DOM to latest
Game.FORCE_TEXT_Y = -1;
Game.WORDS_HEIGHT_BOTTOM = -1;
(function(){
	const wordsObserver = new TickableObserver(() => {
		const offset = 80
		if(Game.WORDS_HEIGHT_BOTTOM < 0) Game.WORDS_HEIGHT_BOTTOM = 250;
		let advanceTextPosition = 0

		// Either force the text somewhere...
		if(Game.FORCE_TEXT_Y != -1){
			Game.wordsDOM.style.transform = `translateY(${Game.FORCE_TEXT_Y}px)`;
			advanceTextPosition = Game.wordsDOM.clientHeight + Game.FORCE_TEXT_Y + 5
		}
		// Or calculate its position based on a window...
		else {
			const wordsHeight = Game.wordsDOM.clientHeight;
			let diff = wordsHeight - (Game.WORDS_HEIGHT_BOTTOM - offset)
			if(diff < 0) diff = 0
			Game.wordsDOM.style.transform = `translateY(${offset - diff}px)`;
			advanceTextPosition = offset - diff + wordsHeight + 5
		}

		// "Instant mode" was only used for clearing... so lets just do it when it's clear?
		if(Game.wordsDOM.children.length == 0) flushElementTransitions(Game.wordsDOM);

		// Also, move the click_to_advance DOM
		$('#click_to_advance').style.transform = `translateY(${Math.round(advanceTextPosition)}px)`;
	});

	// The words UI depends on these things:
	wordsObserver.watch(() => Game.FORCE_TEXT_Y);
	wordsObserver.watch(() => Game.WORDS_HEIGHT_BOTTOM);
	wordsObserver.watch(() => Game.wordsDOM.children.length);
	Game.updateText = () => wordsObserver.tick();

})()

// CLEAR TEXT
Game.clearText = function(){
	Game.wordsDOM.innerHTML = "";
	Game.updateText();
};

Game.clearAll = function(){
	Game.clearText();
	Game.resetScene();
	music(null);
	stopAllSounds();
};
window.clearText = Game.clearText;

// CUSSING?!
window.NO_CUSS_MODE = false;
var GRAWLIXES = ["@","#","✩","$","%","&"];
var GRAWLIX_INDEX = 0;

// Execute text! Just add it to text DOM.
Game.TEXT_SPEED = 50;
Game.CLICK_TO_ADVANCE = true;
Game.FORCE_CANT_SKIP = false;
Game.OVERRIDE_TEXT_SPEED = 1;
Game.FORCE_TEXT_DURATION = -1;
Game.WHO_IS_SPEAKING = null; // "h", "b", "n" etc...
Game.CURRENT_SPEAKING_SPEED = 1;
Game.FORCE_NO_VOICE = false;
Game.NO_NARRATOR_SOUNDS = false;
Game.executeText = function(line){

	return new RSVP.Promise(function(resolve){

		// Who's speaking?
		// b: Beebee, h: Hong, n: Narrator, n2: Narrator 2, n3: Narrator 3
		var regex = /^([^\:]+)\:(.*)/
		var speaker = line.match(regex)[1].trim();
		var dialogue = line.match(regex)[2].trim();

		// IF IT'S A SPECIAL ATTACK, SKIP ALL THIS
		if(speaker=="fear_harm" || speaker=="fear_alone" || speaker=="fear_bad"){
			Game.setTimeout(function(){
				publish("hide_click_to_advance");
				resolve(); // DONE WITH IT.
			}, Game.TEXT_SPEED*7);
			return;
		}

		// Add the bubble, with animation
		var div = document.createElement("div");
		Game.wordsDOM.appendChild(div);
		Game.WHO_IS_SPEAKING = speaker; // WHO'S SPEAKING?!
		Game.CURRENT_SPEAKING_SPEED = Game.OVERRIDE_TEXT_SPEED;
		if(Game.OVERRIDE_FONT_SIZE){
			div.style.fontSize = Game.OVERRIDE_FONT_SIZE+"px";
		}
		switch(speaker){
			case "b":
				div.className = "beebee-bubble";
				break;
			case "h":
				div.className = "hong-bubble";
				break;
			case "h2": case "h3":
				div.className = "hong2-bubble";
				break;
			case "a":
				div.className = "al-bubble";
				break;
			case "s":
				div.className = "shire-bubble";
				break;
			case "r":
				div.className = "hunter-bubble";
				break;
			case "n":
				div.className = "narrator-bubble";
				break;
			case "n2": // narrator 2
				div.className = "narrator-bubble-2";
				break;
			case "n3": // narrator 3
				div.className = "narrator-bubble-3";
				break;
			case "n4": // narrator 4
				div.className = "narrator-bubble-4";
				break;
			case "n5": // narrator 5
				div.className = "narrator-bubble-5";
				break;
			case "i": // Intermission
				div.className = "narrator-bubble-i";
				break;
		}
		requestAnimationFrame(function(){
			requestAnimationFrame(function(){
				div.style.opacity = 1;
				div.style.left = 0;
			});
		});

		// Clear both
		var clearBoth = document.createElement("div");
		clearBoth.className = "clear-both";
		Game.wordsDOM.appendChild(clearBoth);

		// CUSSING OR NO CUSSING?
		if(window.NO_CUSS_MODE){
			// Slice it out with Grawlixes, 1 by 1.
			var censorMode = false;
			for(var i=0; i<dialogue.length; i++){
				var chr = dialogue[i];
				if(chr=="^"){
					censorMode = !censorMode; // toggle
					dialogue = dialogue.slice(0,i) + dialogue.slice(i+1); // slice out the one character
					i--; // step back
				}else if(censorMode){
					var grawlix = GRAWLIXES[GRAWLIX_INDEX];
					GRAWLIX_INDEX = (GRAWLIX_INDEX+1) % GRAWLIXES.length;
					dialogue = dialogue.slice(0,i) + grawlix + dialogue.slice(i+1); // replace the character
				}
			}
		}else{
			// remove all "^" signs
			dialogue = dialogue.replace(/\^/g, "");
		}

		// Add the text
		var interval = 0;
		var SPEED = Math.round(Game.TEXT_SPEED / Game.OVERRIDE_TEXT_SPEED);
		if(Game.FORCE_TEXT_DURATION>0){
			SPEED = Math.round(Game.FORCE_TEXT_DURATION/dialogue.length);
		}

		// IF IT'S BEEBEE, HONG, or NARRATOR 3, or HUNTER, or AL or SHIRE
		if(speaker=="b" || speaker=="h" || speaker=="h2" || speaker=="h3" || speaker=="n3" || speaker=="r" || speaker=="a" || speaker=="s"){

			// Put in the text, each character a DIFFERENT SPAN...
			var span, chr;
			var isItalicized = false;
			for(var i=0; i<dialogue.length; i++){

				// Is it italicized?
				chr = dialogue[i];
				if(chr=="*") isItalicized = !isItalicized; // toggle!

				// Add letter span
				span = document.createElement("span");
				if(chr=="*"){
					// else, empty. can't NOT add span, coz screws up indexing.
				}else{
					span.innerHTML = isItalicized ? "<i>"+chr+"</i>" : chr;
				}
				span.style.opacity = 0;
				div.appendChild(span);

			}

			// Then REVEAL letters one-by-one
			for(var i=0; i<dialogue.length; i++){

				var chr = dialogue[i];

				// If it's the last char & it's "-", skip
				if(i==dialogue.length-1 && chr=="-") break;

				// for scopin'
				(function(index, interval, speaker, forceNoSound){
					Game.setTimeout(function(){

						// Show it
						div.children[index].style.opacity = 1;

						// And SOUND?
						if(!forceNoSound){
							var chr = div.children[index].innerHTML;
							if(chr!=" "){
								if(speaker=="h" || speaker=="h2"){
									voice("hong", {volume:0.3});
								}
								if(speaker=="b" || speaker=="h3"){
									voice("beebee", {volume:0.5});
								}
								if(speaker=="n3"){
									voice("typewriter", {volume:0.5});
								}
								if(speaker=="r"){
									voice("hunter", {volume:0.17});
								}
								if(speaker=="a"){
									voice("al", {volume:0.3});
								}
								if(speaker=="s"){
									voice("shire", {volume:0.4});
								}
							}
						}

					}, interval);
				})(i, interval, speaker, Game.FORCE_NO_VOICE);

				// Bigger interval
				if(i!=dialogue.length-1){ // NOT last
					if(chr=="."){
						if(dialogue[i+1]=="\""){ // UNLESS next one's a punctuation!
							interval += 0;
						}else{
							interval += SPEED*10;
						}
					}else if(chr=="?" || chr=="!"){ // gap unless next one's ALSO punctuation.
						if(dialogue[i+1]==" "){ // next one's a space? gap!
							interval += SPEED*10;
						}else{ // if not, no!
							interval += SPEED;
						}
					}else if(chr=="," || chr==":"){
						interval += SPEED*5;
					}else{
						interval += SPEED;
					}
				}

			}

		}else{

			// IF NARRATOR

			// *Emphasize multiple words* => *Emphasize* *multiple* *words*
			var regex = /\*([^\*]*)\*/g;
			var emphasized = dialogue.match(regex) || [];
			for(var i=emphasized.length-1; i>=0; i--){ // backwards coz replacing

				// Convert
				var originalEm = emphasized[i]
				var em = originalEm;
				em = em.substr(1,em.length-2); // remove *
				var ems = em.split(" ");
				ems = ems.map(function(word){
					return "*"+word+"*";
				});
				em = ems.join(" ");

				// Replace in main string
				var startIndex = dialogue.indexOf(originalEm);
				dialogue = dialogue.slice(0, startIndex) + em + dialogue.slice(startIndex+originalEm.length);

			}

			// Put in the text, each word a DIFFERENT SPAN
			var span;
			var dialogueWords = dialogue.split(" ");
			for(var i=0; i<dialogueWords.length; i++){

				// Is it an emphasized word?
				var reggie = /\*(.*)\*/;
				var word = dialogueWords[i];
				if(reggie.test(word)){
					word = "<i>" + word.match(reggie)[1].trim() + "</i>";
				}

				// Actual emphasis
				reggie = /\_(.*)\_/;
				if(reggie.test(word)){
					word = "<i class='italics'>" + word.match(reggie)[1].trim() + "</i>";
				}

				// Add the span
				span = document.createElement("span");
				span.innerHTML = word+" ";
				span.style.opacity = 0;
				div.appendChild(span);

			}

			// Then REVEAL words one-by-one
			for(var i=0; i<dialogueWords.length; i++){

				var word = dialogueWords[i];

				// for scopin'
				(function(index, interval, word){
					Game.setTimeout(function(){

						// Show
						div.children[index].style.opacity = 1;

						// SOUND
						var chr = word.slice(-1);
						var isEmphasis = (chr=="*");
						if(!Game.NO_NARRATOR_SOUNDS){
							voice(isEmphasis ? "narrator_emphasis" : "narrator");
						}

					}, interval);
				})(i, interval, word);

				// Interval
				interval += SPEED*6;

				// Larger interval if punctuation...
				var chr = word.slice(-1);
				var isIcon = (word[0]=="#" && chr=="#");
				if(chr=="*") chr = word[word.length-2]; // coz emphasis
				if(chr=="," || chr==":") interval += SPEED*5;
				if(chr=="." || chr=="?" || chr=="!") interval += SPEED*10;
				if(word.slice(-3)=="...") interval += SPEED*15;

				// Oh, was it an ICON?
				if(word[0]=="#" && chr=="#"){
					interval += SPEED*10;

					var span = div.children[i];
					span.innerHTML = "";
					span.style.display = "block";
					var iconName = word.slice(1,-1)
					var icon = new Image();
					icon.src = Library.images["fear_"+iconName].hackSrc;
					div.children[i].appendChild(icon);
					icon.style.display = "block";
					if(speaker!="i"){
						icon.style.margin = "0 auto";
					}
					icon.style.width = "80px";
					icon.style.height = "80px";

				}

			}

		}

		// Return overrides to default
		Game.OVERRIDE_TEXT_SPEED = 1;
		Game.OVERRIDE_FONT_SIZE = false;
		Game.FORCE_TEXT_DURATION = -1;
		Game.FORCE_NO_VOICE = false;

		// Return promise
		var nextLineDelay = Game.TEXT_SPEED*7; // don't override this
		if(dialogue.slice(-1)=="-") nextLineDelay=0; // sudden interrupt!
		if(!Game.FORCE_CANT_SKIP){
			if(Game.CLICK_TO_ADVANCE){ // IF IT'S CLICK-TO-ADVANCE, "INFINITE" TIMEOUT.
				nextLineDelay = 1000*10000; // ten thousand seconds
			}
		}

		// No one's speaking anymore.
		Game.setTimeout(function(){
			Game.WHO_IS_SPEAKING = null;
			publish("DONE_SPEAKING");
		}, interval);

		// Show the clicky UI
		if(!Game.FORCE_CANT_SKIP){
			if(Game.CLICK_TO_ADVANCE){
				Game.setTimeout(function(){
					publish("show_click_to_advance");
				}, interval+Game.TEXT_SPEED*2);
			}
		}

		// DONE WITH IT
		Game.setTimeout(function(){
			publish("hide_click_to_advance");
			resolve(); // DONE WITH IT.
		}, interval+nextLineDelay);

		// VISIBLE: FALSE FOR ANY ELEMENTS PAST 10
		var VISIBLE_LIMIT = 10;
		var w = Game.wordsDOM.children;
		if(w.length>VISIBLE_LIMIT){
			w[ w.length - VISIBLE_LIMIT - 1 ].style.visibility = "hidden";
			w[ w.length - VISIBLE_LIMIT - 2 ].style.visibility = "hidden";
		}

	});

}

// CHOICE UI SOUNDS
Loader.addSounds([
	{ id:"ui_show_choice", src:"sounds/ui/show_choice.mp3" },
	{ id:"ui_click", src:"sounds/ui/click.mp3" },
	{ id:"ui_hover", src:"sounds/ui/hover.mp3" }
]);

// Execute choice! Add it to choice DOM.
Game.OVERRIDE_CHOICE_LINE = false;
Game.OVERRIDE_CHOICE_SPEAKER = null;
Game.OVERRIDE_FONT_SIZE = false;
Game.executeChoice = function(line){

	var choiceText = line.match(/\[([^\]]*)\]/)[1].trim();
	var choiceID = line.match(/\(\#([^\)]*)\)/);
	var THERE_IS_NO_CHOICE;
	if(!choiceID){
		THERE_IS_NO_CHOICE = true;
	}else{
		choiceID = choiceID[1].trim().toLocaleLowerCase();
	}

	var preChoiceCodeIfAny = null;
	if(/\`(.*)\`/.test(line)){
		preChoiceCodeIfAny = line.match(/\`(.*)\`/)[0]; // 0, with backticks
	}

	// SUPER HACK: #play1# and #play2#
	choiceText = choiceText.replace("#play1#", "<div class='mini-icon' pic='play1'></div>");
	choiceText = choiceText.replace("#play2#", "<div class='mini-icon' pic='play2'></div>");

	// Choice text, add italics where *word word words*
	var originalChoiceText = choiceText;
	var italicsRegex = /\*([^\*]*)\*/g;
	var results;
	while(results=italicsRegex.exec(choiceText)){
		// Modify choiceText in place, it's fine.
		var startOfMatch = results.index;
		var endOfMatch = results.index + results[0].length;
		choiceText = choiceText.slice(0,startOfMatch) + "<i>" + results[1] + "</i>" + choiceText.slice(endOfMatch);
	}
	// Add bold where _word word word_
	var boldRegex = /\_([^\*]*)\_/g;
	var results;
	while(results=boldRegex.exec(choiceText)){
		// Modify choiceText in place, it's fine.
		var startOfMatch = results.index;
		var endOfMatch = results.index + results[0].length;
		choiceText = choiceText.slice(0,startOfMatch) + "<b>" + results[1] + "</b>" + choiceText.slice(endOfMatch);
	}

	var div = document.createElement("div");
	div.innerHTML = choiceText;
	div.setAttribute("speaker", Game.OVERRIDE_CHOICE_SPEAKER ? Game.OVERRIDE_CHOICE_SPEAKER : "b");
	if(!THERE_IS_NO_CHOICE){
		div.onclick = function(event){

			// Any pre-choice code?
			if(preChoiceCodeIfAny) Game.executeCode(preChoiceCodeIfAny);

			// Override line... ONCE
			if(!Game.OVERRIDE_CHOICE_LINE){
				if(Game.OVERRIDE_CHOICE_SPEAKER){
					Game.addToQueue(Game.OVERRIDE_CHOICE_SPEAKER+": "+originalChoiceText);
				}else{
					Game.addToQueue("b: "+originalChoiceText);
				}
			}
			Game.OVERRIDE_CHOICE_SPEAKER = null;
			Game.OVERRIDE_CHOICE_LINE = false;

			// Play sound
			sfx("ui_click");

			// Goto that choice, now!
			Game.goto(choiceID);

			// STOP THE PROP
			event.stopPropagation();

		};
		div.onmouseover = function(){
			sfx("ui_hover");
		};
	}else{
		div.setAttribute("speaker", Game.OVERRIDE_CHOICE_SPEAKER ? Game.OVERRIDE_CHOICE_SPEAKER : "none");
	}

	// Add choice, animated!
	div.classList.add("hidden");
	Game.choicesDOM.appendChild(div);
	requestAnimationFrame(function(){
		div.classList.remove("hidden");
		sfx("ui_show_choice", {volume:0.4});
	});

	// Or... FORCE
	if(Game.OVERRIDE_FONT_SIZE){
		div.style.fontSize = Game.OVERRIDE_FONT_SIZE+"px";
	}else{

		// If it's too big, shrink font size
		setTimeout(function(){
			var choiceHeight = div.getBoundingClientRect().height;
			if(choiceHeight>40) div.style.fontSize = "18px";
			// And if still too much???
			setTimeout(function(){
				var choiceHeight = div.getBoundingClientRect().height;
				if(choiceHeight>40) div.style.fontSize = "17px";
				// And if still too much???
				setTimeout(function(){
					var choiceHeight = div.getBoundingClientRect().height;
					if(choiceHeight>40) div.style.fontSize = "16px";
					// And if still too much???
					setTimeout(function(){
						var choiceHeight = div.getBoundingClientRect().height;
						if(choiceHeight>40) div.style.fontSize = "15px";
						// And if still too much???
						setTimeout(function(){
							var choiceHeight = div.getBoundingClientRect().height;
							if(choiceHeight>40) div.style.fontSize = "14px";
							// And if still too much???
							setTimeout(function(){
								var choiceHeight = div.getBoundingClientRect().height;
								if(choiceHeight>40) div.style.fontSize = "13px";
								// And if still too much???
								setTimeout(function(){
									var choiceHeight = div.getBoundingClientRect().height;
									if(choiceHeight>40) div.style.fontSize = "12px";
								},1);
							},1);
						},1);
					},1);
				},1);
			},1);
		},1);

	}
	Game.OVERRIDE_FONT_SIZE = false;

	// Wait a bit before adding new line
	return new RSVP.Promise(function(resolve){
		Game.setTimeout(resolve, 100);
	});

}

// Execute code!
Game.executeCode = function(line){

	var code = line.match(/\`+([^\`]*)\`+/)[1].trim();
	try{
		eval(code);
	}catch(e){
		console.log(e);
	}

	// Return immediate promise
	return Game.immediatePromise();

}

// Execute wait! Just wait.
Game.executeWait = function(line){

	// Get integer from (...NN)
	var waitTime = parseInt(line.match(/^\(\.\.\.(\d+)\)/)[1].trim());

	// Unless it's click to advance, then IGNORE ALL WAITS
	if(!Game.FORCE_CANT_SKIP){

		// Specific wait-time, don't skip?
		var waitTimeString = waitTime+"";
		var lastDigit = waitTimeString[waitTimeString.length-1];
		var cantSkip = (lastDigit!="0"); // CAN'T SKIP.

		if(!cantSkip && Game.CLICK_TO_ADVANCE && waitTime<=999){ // hack: unless the wait is long.
			waitTime = 0;
		}

	}

	// Delayed promise
	return new RSVP.Promise(function(resolve){
		Game.setTimeout(resolve, waitTime);
	});

};

// Execute goto! Just goto.
Game.executeGoto = function(line){
	var gotoID = line.match(/^\(\#(.*)\)/)[1].trim().toLocaleLowerCase();
	Game.goto(gotoID);
}

// Determine line type... text, choice, or code?
Game.getLineType = function(line){

	// Is it a choice?
	var isChoice = /\[.*\]\(.*\)/.test(line);
	if(isChoice) return "choice";

	// Is it a goto?
	var isGoto = /^\(\#(.*)\)/.test(line);
	if(isGoto) return "goto";

	// Is it code?
	var isCode = /^\`/.test(line);
	if(isCode) return "code";

	// Is it a wait?
	var isWait = /^\(\.\.\.\d+\)/.test(line);
	if(isWait) return "wait";

	// Otherwise, it's text.
	return "text";

};

// Parse all the handlebars...
Game.parseLine = function(line){

	// Get rid of newlines
	line = line.replace(/\n/gi,"");

	// Get the IFs, if any
	var lookForIfs = true;
	while(lookForIfs){

		lookForIfs = false;

		// Look for an IF!
		var regex = /\{\{if[^\/]*\/if\}\}/ig; // the reason it's inside here is to reset .exec
		var regexResult = regex.exec(line);
		if(regexResult){

			// The result...
			var fullConditional = regexResult[0];
			var startsAtIndex = regexResult.index;
			var endsAtIndex = startsAtIndex + fullConditional.length;

			// Extract the condition
			var condition = fullConditional.match(/\{\{if\s+([^\{\}]*)\}\}/)[1];

			// Extract the inside text
			var insideText = fullConditional.match(/\}\}(.*)\{\{\/if/)[1].trim()+" ";

			// Eval condition!
			var conditionIsTrue = false;
			try{
				conditionIsTrue = eval(condition);
			}catch(e){
				console.log(e);
			}

			// Edit the line
			var insert = conditionIsTrue ? insideText : "";
			line = line.slice(0,startsAtIndex) + insert + line.slice(endsAtIndex);

			// Keep searching...
			lookForIfs = true;

		}

	}

	// Evaluate {{expressions}}, if any
	var lookForExpressions = true;
	while(lookForExpressions){

		lookForExpressions = false;

		// Look for an IF!
		//debugger;
		var regex = /\{\{[^\}]*\}\}/ig; // the reason it's inside here is to reset .exec
		var regexResult = regex.exec(line);
		if(regexResult){

			// The result...
			var fullExpression = regexResult[0];
			var startsAtIndex = regexResult.index;
			var endsAtIndex = startsAtIndex + fullExpression.length;

			// Extract the expression
			var expression = fullExpression.match(/\{\{([^\}]*)\}\}/)[1];

			// Eval condition!
			var evaluated = "";
			try{
				evaluated = eval(expression);
			}catch(e){
				console.log(e);
			}

			// Edit the line
			line = line.slice(0,startsAtIndex) + evaluated + line.slice(endsAtIndex);

			// Keep searching...
			lookForExpressions = true;

		}

	}

	// Return line!
	return line;

};

////////////////////////////////////////////////////////////////////////////////////////////////
// WHERE STUFF WILL BE DRAWN ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

Game.canvas.width = 360 * 2;
Game.canvas.height = 600 * 2; //450 * 2;
Game.canvas.style.width = Game.canvas.width/2 + "px";
Game.canvas.style.height = Game.canvas.height/2 + "px";
Game.context = Game.canvas.getContext("2d");

// A blank scene
Game.scene = null;
Game.resetScene = function(){

	// Kill all of previous scene
	if(Game.scene){
		Game.scene.children.forEach(function(child){
			if(child.kill) child.kill();
		});
		if(Game.scene.kill) Game.scene.kill();
	}

	// New scene!
	Game.scene = {};
	Game.scene.children = [];

	// Misc
	Game.WORDS_HEIGHT_BOTTOM = -1;

};
Game.resetScene();

// Update & draw all the kids!
Game.updateCanvas = function(delta){

	// UPDATING:
	// -------------------------------------------------------------
	for(const child of Game.scene.children) {
		if(child.update) child.update(delta);
	}

	// RENDERING:
	// -------------------------------------------------------------

	// For retina
	var ctx = Game.context;
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
	ctx.scale(2, 2);

	// Update/Draw all kids

	for(const child of Game.scene.children) child.draw(ctx, delta);


	// Restore
	ctx.scale(0.5, 0.5);

	// Draw HP
	HP.draw();

};

// HACK: PREVENT ACCIDENTALLY TABBING & BREAKING UI
window.addEventListener("keydown", function(e){
	if(e.keyCode==9){
		e.preventDefault();
		e.stopPropagation();
	}
	if(e.keyCode==32){ // SPACE TO ADVANCE
		_unpauseOrSkip();
	}
});

// CUSSING
var queryParams = {};
if(window.location.search){
	window.location.search.substr(1).split("&").forEach(function(item){
	    var split = item.split("=");
	    queryParams[split[0]] = split[1];
	});
}
if(queryParams.c){
	window.NO_CUSS_MODE = true;
}else{
	var doCuss = document.createElement("style");
	doCuss.innerHTML = ".hide-if-cuss-free{ display:inline; }";
	document.body.appendChild(doCuss);
}
