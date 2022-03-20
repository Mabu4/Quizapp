let questions = [
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
        'question': 'Bei welchem Befehl ist die leere Box 200px breit',
        'answer_1': 'Padding: 10px 100px',
        'answer_2': 'margin: 10px 100px',
        'answer_3': 'max-width: 200px',
        'answer_4': 'width: 100%',
        'right_answer': 1
    }

];

let currentQuestion = 0;


function init(){
    document.getElementById('total-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion(){
    let question = questions[currentQuestion];

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

    if(selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.style.backgroundColor = '#9DFF70';
        document.getElementById('number-'+selection).style.backgroundColor = '#3AB800';
        document.getElementById('number-'+selection).style.color = 'white';
    }else {
        document.getElementById(selection).parentNode.style.backgroundColor = '#ff000062';
        document.getElementById('number-'+selection).style.backgroundColor = '#ff0000ec';
        document.getElementById('number-'+selection).style.color = 'white';
        document.getElementById(idOfRightAnswer).parentNode.style.backgroundColor = '#9DFF70';
        document.getElementById('number-'+idOfRightAnswer).style.backgroundColor = '#3AB800';
        document.getElementById('number-'+idOfRightAnswer).style.color = 'white';
    }
    document.getElementById('next_button').disabled = false;
}


function nextQuestion(){
    currentQuestion++;
    showQuestion();

    document.getElementById('next_button').disabled = true;

    for (let i = 1; i < 5; i++) {

        document.getElementById('answer_'+i).parentNode.style.backgroundColor = 'white';
        document.getElementById('number-answer_'+i).style.backgroundColor = 'lightgray';
        document.getElementById('number-answer_'+i).style.color = 'black';
        
    }
}