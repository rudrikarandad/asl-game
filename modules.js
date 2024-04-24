let output = "";
var previousWords = new Array();
var prevAmt = 0;
let thisWord;
let correctCount = 0;
let questionCount = 1;

function randomize(imgs, module){
	thisWord = Math.floor(Math.random()*module.length);
	output = module[thisWord];
	
	for(let i=0; i<previousWords.length; i++){
		if(output == previousWords[i]){
			thisWord = Math.floor(Math.random()*module.length);
			output = module[thisWord];
			i=0;
		}
	}
	
	previousWords[prevAmt] = module[thisWord];
	prevAmt++;
	
	document.getElementById("question").src = imgs[thisWord];
	document.getElementById("torf").innerHTML = "";
}

function check(module){
	let index = 0;
	let input = document.getElementById('userAnswer').value;
	
	for(let i=0; i<module.length; i++){
		if(input.toLowerCase().replace(' ',"") == module[i].toLowerCase().replace(' ',"")){
			index = i;
		}
	}
	if(module[index]==output){
		correctCount++; 
		document.getElementById("torf").innerHTML = "CORRECT<br>"+correctCount+"/"+questionCount;
	}
	else{
		document.getElementById("torf").innerHTML = "INCORRECT<br>"+correctCount+"/"+questionCount; 
	}
}

var daily = new Array();
daily[0] = "Hello";
daily[1] = "Goodbye";
daily[2] = "Welcome";
daily[3] = "Please";
daily[4] = "Thank You";
daily[5] = "Excuse Me";
daily[6] = "Sorry";
daily[7] = "Take Care"
daily[8] = "Hearing";
daily[9] = "Deaf";
daily[10] = "Blind";
daily[11] = "I Love You";
daily[12] = "Yes";
daily[13] = "No";
daily[14] = "Maybe";
daily[15] = "Finger Spelling";
daily[16] = "Sign";
daily[17] = "Sick";
daily[18] = "Pain";
daily[19] = "Highschool";
daily[20] = "College";

var grammar = new Array();
grammar[0] = "Right";
grammar[1] = "Left";
grammar[2] = "North";
grammar[3] = "South";
grammar[4] = "East";
grammar[5] = "West"
grammar[6] = "Down";
grammar[7] = "Up";
grammar[8] = "Near";
grammar[9] = "Far";
grammar[10] = "Myself";
grammar[11] = "My";
grammar[12] = "You";
grammar[13] = "We";
grammar[14] = "Us";
grammar[15] = "Our";
grammar[16] = "Those";
grammar[17] = "Your";
grammar[18] = "Yours, theirs, hers, his";
grammar[19] = "Someone, something";
grammar[20] = "Thing";
grammar[21] = "Nothing";
grammar[22] = "Here";
grammar[23] = "There";
grammar[24] = "In";
grammar[25] = "Out";
grammar[26] = "Between";
grammar[27] = "Above";
grammar[28] = "Below";
grammar[29] = "From";
grammar[30] = "And";
grammar[31] = "But";
grammar[32] = "Because";

var desc = new Array();
desc[0] = "Pretty";
desc[1] = "Ugly";
desc[2] = "Smart";
desc[3] = "Large";
desc[4] = "Small";
desc[5] = "Tall";
desc[6] = "Short";
desc[7] = "Thin"
desc[8] = "Fat";
desc[9] = "Polite";
desc[10] = "Kind";
desc[11] = "Lazy";
desc[12] = "Funny";
desc[13] = "Friendly";
desc[14] = "Proud";
desc[15] = "Tired";
desc[16] = "Lonely";
desc[17] = "Surprised";
desc[18] = "Angry";
desc[19] = "Happy";
desc[20] = "Sad";

//Images taken from https://cdn.preterhuman.net/texts/thought_and_writing/language/The%20Complete%20Idiot's%20Guide%20to%20Learning%20American%20Sign%20Language.pdf
var dimgs = new Array();
dimgs[0] = "gestures/hello.png";
dimgs[1] = "gestures/goodbye.png";
dimgs[2] = "gestures/welcome.png";
dimgs[3] = "gestures/please.png";
dimgs[4] = "gestures/thankyou.png";
dimgs[5] = "gestures/excuseme.png";
dimgs[6] = "gestures/sorry.png";
dimgs[7] = "gestures/takecare.png"
dimgs[8] = "gestures/hearing.png";
dimgs[9] = "gestures/deaf.png";
dimgs[10] = "gestures/blind.png";
dimgs[11] = "gestures/ily.png";
dimgs[12] = "gestures/yes.png";
dimgs[13] = "gestures/no.png";
dimgs[14] = "gestures/maybe.png";
dimgs[15] = "gestures/fingerspelling.png";
dimgs[16] = "gestures/sign.png";
dimgs[17] = "gestures/sick.png";
dimgs[18] = "gestures/pain.png";
dimgs[19] = "gestures/highschool.png";
dimgs[20] = "gestures/college.png";

var gimgs = new Array();
gimgs[0] = "gestures/right.png";
gimgs[1] = "gestures/left.png";
gimgs[2] = "gestures/north.png";
gimgs[3] = "gestures/south.png";
gimgs[4] = "gestures/east.png";
gimgs[5] = "gestures/west.png"
gimgs[6] = "gestures/down.png";
gimgs[7] = "gestures/up.png";
gimgs[8] = "gestures/near.png";
gimgs[9] = "gestures/far.png";
gimgs[10] = "gestures/myself.png";
gimgs[11] = "gestures/my.png";
gimgs[12] = "gestures/you.png";
gimgs[13] = "gestures/we.png";
gimgs[14] = "gestures/us.png";
gimgs[15] = "gestures/our.png";
gimgs[16] = "gestures/those.png";
gimgs[17] = "gestures/your.png";
gimgs[18] = "gestures/pronouns.png";
gimgs[19] = "gestures/someonething.png";
gimgs[20] = "gestures/thing.png";
gimgs[21] = "gestures/nothing.png";
gimgs[22] = "gestures/here.png";
gimgs[23] = "gestures/there.png";
gimgs[24] = "gestures/in.png";
gimgs[25] = "gestures/out.png";
gimgs[26] = "gestures/between.png";
gimgs[27] = "gestures/above.png";
gimgs[28] = "gestures/below.png";
gimgs[29] = "gestures/from.png";
gimgs[30] = "gestures/and.png";
gimgs[31] = "gestures/but.png";
gimgs[32] = "gestures/because.png";

var deimgs = new Array();
deimgs[0] = "gestures/pretty.png";
deimgs[1] = "gestures/ugly.png";
deimgs[2] = "gestures/smart.png";
deimgs[3] = "gestures/large.png";
deimgs[4] = "gestures/small.png";
deimgs[5] = "gestures/tall.png";
deimgs[6] = "gestures/short.png";
deimgs[7] = "gestures/thin.png"
deimgs[8] = "gestures/fat.png";
deimgs[9] = "gestures/polite.png";
deimgs[10] = "gestures/kind.png";
deimgs[11] = "gestures/lazy.png";
deimgs[12] = "gestures/funny.png";
deimgs[13] = "gestures/friendly.png";
deimgs[14] = "gestures/proud.png";
deimgs[15] = "gestures/tired.png";
deimgs[16] = "gestures/lonely.png";
deimgs[17] = "gestures/surprised.png";
deimgs[18] = "gestures/angry.png";
deimgs[19] = "gestures/happy.png";
deimgs[20] = "gestures/sad.png";

//sidebar: https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
function openNav() {
	document.getElementById("mySidebar").style.width = "250px"; 
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}