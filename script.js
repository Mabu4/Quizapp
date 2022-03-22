let questions = [];

let questionsHTML = [
    {
        'question': 'Wer hat HTML erfunden ?',
        'answer_1': 'Dieter Duck',
        'answer_2': 'Finn Bernhard',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Wieger',
        'right_answer': 3
    },
    {
        'question': 'Wie veränder ich die Größe von Schrift ?',
        'answer_1': 'Font-Weight',
        'answer_2': 'Font-Size',
        'answer_3': 'Font-Style',
        'answer_4': 'Font-family',
        'right_answer': 2
    },
    {
        'question': 'Welcher Befehl macht einen linken Außenabstand von 10px ?',
        'answer_1': 'Padding-left: 10px;',
        'answer_2': 'Padding: 10px 0px',
        'answer_3': 'Margin: 0 0 0 10px',
        'answer_4': 'Margin: 0 10px 0 0',
        'right_answer': 3
    },
    {
        'question': 'Welcher Befehl funktioniert nicht ?',
        'answer_1': 'transform: translate(10px, 0)',
        'answer_2': 'background color: #ffffff',
        'answer_3': 'position: fixed',
        'answer_4': 'transform: scale(0 2.5)',
        'right_answer': 2
    },
    {
        'question': 'Bei welchem Befehl ist die leere Box 200px breit ?',
        'answer_1': 'Padding: 10px 100px',
        'answer_2': 'margin: 10px 100px',
        'answer_3': 'max-width: 200px',
        'answer_4': 'width: 100%',
        'right_answer': 1
    }
];


let questionsCss = [
    {
        'question': 'Wer hat CSS erfunden ?',
        'answer_1': 'Steve Bern',
        'answer_2': 'Xi Ping',
        'answer_3': 'Håkon Wium Lie',
        'answer_4': 'Bert Bos',
        'right_answer': 3
    },
    {
        'question': 'Welcher Befehl existiert nicht ?',
        'answer_1': 'display: absolute;',
        'answer_2': 'object-fit: contain;',
        'answer_3': 'width: 100vw;',
        'answer_4': 'font-size: 2rem;',
        'right_answer': 1
    },
    {
        'question': 'Welche Möglichkeit gibt es um ein Element anzusprechen ?',
        'answer_1': 'identity:""',
        'answer_2': 'number:""',
        'answer_3': 'clas=""',
        'answer_4': 'id:""',
        'right_answer': 4
    },
    {
        'question': 'Welche Möglichkeit gibt es um ein Element anzusprechen ?',
        'answer_1': 'identity:""',
        'answer_2': 'number:""',
        'answer_3': 'clas=""',
        'answer_4': 'id:""',
        'right_answer': 4
    }
];

let questionsJS = [
    {
        'question': 'Welches der Objekte ist ein Server-seitiges Objekt ?',
        'answer_1': 'Function',
        'answer_2': 'File',
        'answer_3': 'FileUpload',
        'answer_4': 'Date',
        'right_answer': 2
    },
    {
        'question': 'Wie binde ich eine Javascript Datei in ein HTML Dokument ?',
        'answer_1': 'script',
        'answer_2': 'js',
        'answer_3': 'javascript',
        'answer_4': 'link',
        'right_answer': 1
    },
    {
        'question': 'Welche Schreibweise ist die richtige um Hello World auszugeben ?',
        'answer_1': 'A.System.out.printIn(Hello World)',
        'answer_2': 'B.print(Hello World)',
        'answer_3': 'C.document.write(Hello World)',
        'answer_4': 'D.response.write(Hello World)',
        'right_answer': 3
    },
    {
        'question': 'Welches Attribut muss geändert werden um ein Element unsichtbar zu machen?',
        'answer_1': 'invisible',
        'answer_2': 'invisibility',
        'answer_3': 'visible',
        'answer_4': 'visibility',
        'right_answer': 4
    },
    {
        'question': 'Welche Variable funktioniert so nicht ?',
        'answer_1': '2java',
        'answer_2': '_java_and_java_names',
        'answer_3': 'javaandjava',
        'answer_4': 'Keine der oben genannten',
        'right_answer': 1
    }
];

let questionsJAVA = [
    {
        'question': 'Was ist die Größe einer Doppel-Variable ?',
        'answer_1': '8-bit',
        'answer_2': '16-bit',
        'answer_3': '32-bit',
        'answer_4': '64-bit',
        'right_answer': 4
    },
    {
        'question': 'Was ist der Standardwert der Bytevariablen ?',
        'answer_1': '0',
        'answer_2': '0.0',
        'answer_3': 'null',
        'answer_4': 'not defined',
        'right_answer': 1
    },
    {
        'question': 'Method Overriding ist ein Beispiel für ?',
        'answer_1': 'Static Binding',
        'answer_2': 'Dynamic Binding',
        'answer_3': 'Beides von den oben genannten',
        'answer_4': 'Keines von den oben genannten',
        'right_answer': 2
    },
    {
        'question': 'Welche Methode muss von allen Threads implementiert werden ?',
        'answer_1': 'wait()',
        'answer_2': 'start()',
        'answer_3': 'stop()',
        'answer_4': 'run()',
        'right_answer': 4
    },
    {
        'question': 'Was ist Serialization ?',
        'answer_1': 'Der Prozess des Schreibens des Zustands eines Objekts in ein anderes Objekt.',
        'answer_2': 'Der Prozess des Schreibens des Zustands eines Objekts in einen Bytestream.',
        'answer_3': 'Beides der oben genannten',
        'answer_4': 'Keines der oben genannten',
        'right_answer': 2
    },
    {
        'question': 'Was ist static Block ?',
        'answer_1': 'Es wird verwendet, um synchronisierten Code zu erstellen.',
        'answer_2': 'Es gibt keinen solchen Block',
        'answer_3': 'Es wird verwendet, um den statischen Datenmember zu initialisieren.',
        'answer_4': 'Keines von den beiden oben genannten',
        'right_answer': 3
    }
];


let currentQuestion = 0;

let rightQuestions = 0;

let audioSuccess = new Audio('./audio/right.mp3');
let audioFail = new Audio('./audio/wrong.mp3');


function init(theme){
    chooseTheme(theme); //Das Thema (HTML, CSS, JS, oder Java) wird bestimmt
    document.getElementById('total-questions').innerHTML = questions.length; //Die Anzeige von den insgesamten Fragen wird bestimmt
    showQuestion(); //Die Fragen werden angezeigt
}


function chooseTheme(theme){ //Das Thema wird bestimmt

    currentQuestion = 0;
    rightQuestions = 0;

    if (theme == 'HTML') {
        return questions = questionsHTML.slice(0);
    }

    if(theme == 'CSS') {
        return questions = questionsCss.slice(0);
    }

    if(theme == 'JS') {
        return questions = questionsJS.slice(0);
    }

    if(theme == 'JAVA') {
        return questions = questionsJAVA.slice(0);
    }
}


function showQuestion(){
    
    if(gameIsOver()) {
        showResult();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}


function gameIsOver(){
    return currentQuestion >= questions.length;
}


function updateProgressBar(){
    //Progress Bar wird breiter und die angezeigte Zahl wird erhöht
    let percent1 = (currentQuestion + 1) / questions.length * 100; //das currentQuestion zum Anfang auf 0 steht wird +1 gerechnet
    let percent = Math.round(percent1);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}


function updateToNextQuestion() {
    // Next Question with Answers and raise the number of the current Question 
    let question = questions[currentQuestion];
    document.getElementById('actual-question').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = 'answer_'+question['right_answer'];

    if(rightAnswerSelected(selectedQuestionNumber)){
        document.getElementById(selection).parentNode.style.backgroundColor = '#9DFF70';
        document.getElementById('number-'+selection).style.backgroundColor = '#3AB800';
        document.getElementById('number-'+selection).style.color = 'white';
        audioSuccess.play();
        rightQuestions++;
    }else {
        document.getElementById(selection).parentNode.style.backgroundColor = '#ff000062';
        document.getElementById('number-'+selection).style.backgroundColor = '#ff0000ec';
        document.getElementById('number-'+selection).style.color = 'white';
        document.getElementById(idOfRightAnswer).parentNode.style.backgroundColor = '#9DFF70';
        document.getElementById('number-'+idOfRightAnswer).style.backgroundColor = '#3AB800';
        document.getElementById('number-'+idOfRightAnswer).style.color = 'white';
        audioFail.play();
    }
    document.getElementById('next_button').disabled = false;
}


function rightAnswerSelected(selectedQuestionNumber){
    let question = questions[currentQuestion];
    return selectedQuestionNumber == question['right_answer'];
}


function nextQuestion(){
    currentQuestion++;
    document.getElementById('next_button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById('answer_'+i).parentNode.style.backgroundColor = 'white';
        document.getElementById('number-answer_'+i).style.backgroundColor = 'lightgray';
        document.getElementById('number-answer_'+i).style.color = 'black';
    }
}


function showResult(){
    document.getElementById('quiz').classList.add('d-none1');
    document.getElementById('result-container').classList.remove('d-none1');
    document.getElementById('amount-of-right-questions').innerHTML = `${rightQuestions}`;
    document.getElementById('amount-of-questions').innerHTML = `${questions.length}`;

    finischedProgressBar();
}


function finischedProgressBar(){
    let percent = (currentQuestion) / questions.length * 100;
    let progressBar = document.getElementById('progress-bar-finish');
    progressBar.style.flexGrow = '1';
    progressBar.style.width = `${percent}%`;
    progressBar.innerHTML = `${percent}%`;
}


function restartGame() {
    document.getElementById('quiz').classList.remove('d-none1');
    document.getElementById('result-container').classList.add('d-none1');
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}