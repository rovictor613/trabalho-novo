const perguntas = [
    {
        enunciado: "Qual é a importância de incluir frutas e vegetais na sua dieta?",
        alternativas: [
            { texto: "Eles fornecem vitaminas e minerais essenciais que ajudam a prevenir doenças e manter a saúde em dia.", pontos: 1 },
            { texto: "Eles são apenas um complemento, e você pode viver bem sem consumi-los.", pontos: 0 }
        ]
    },
    {
        enunciado: "Por que é importante limitar o consumo de açúcar?",
        alternativas: [
            { texto: "O excesso de açúcar pode levar a problemas como obesidade e diabetes tipo 2.", pontos: 1 },
            { texto: "O açúcar não tem impacto significativo na saúde, então não é necessário limitar seu consumo.", pontos: 0 }
        ]
    },
    {
        enunciado: "Qual é o benefício de consumir proteínas em todas as refeições?",
        alternativas: [
            { texto: "As proteínas ajudam na construção e reparo dos tecidos e são essenciais para o funcionamento do corpo.", pontos: 1 },
            { texto: "As proteínas são importantes apenas para o crescimento muscular, não sendo necessárias para a maioria das pessoas.", pontos: 0 }
        ]
    },
    {
        enunciado: "Como a ingestão adequada de água afeta sua saúde?",
        alternativas: [
            { texto: "A água é crucial para a hidratação, a digestão e a eliminação de toxinas do corpo.", pontos: 1 },
            { texto: "Beber água não é tão importante, pois outras bebidas podem substituir sua função.", pontos: 0 }
        ]
    },
    {
        enunciado: "Qual é a função das gorduras saudáveis na dieta?",
        alternativas: [
            { texto: "Gorduras saudáveis ajudam na função cerebral, absorção de vitaminas e produção de hormônios.", pontos: 1 },
            { texto: "Gorduras devem ser evitadas completamente, pois todas são prejudiciais à saúde.", pontos: 0 }
        ]
    }
];

let perguntaIndex = 0;
let pontuacao = 0;

function carregarPergunta() {
    const pergunta = perguntas[perguntaIndex];
    const quizDiv = document.getElementById('quiz');
    
    quizDiv.innerHTML = `
        <div class="question">${pergunta.enunciado}</div>
        <ul class="alternativas">
            ${pergunta.alternativas.map((alt, index) => `
                <li>
                    <input type="radio" name="resposta" id="alt${index}" value="${alt.pontos}">
                    <label for="alt${index}">${alt.texto}</label>
                </li>
            `).join('')}
        </ul>
    `;
}

function mostrarResultado() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Sua pontuação final é ${pontuacao} de ${perguntas.length}.`;
}

document.getElementById('next-button').addEventListener('click', () => {
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    if (respostaSelecionada) {
        pontuacao += parseInt(respostaSelecionada.value);
        perguntaIndex++;
        if (perguntaIndex < perguntas.length) {
            carregarPergunta();
        } else {
            mostrarResultado();
            document.getElementById('next-button').disabled = true;
        }
    } else {
        alert('Por favor, selecione uma resposta.');
    }
});

// Inicializa o quiz
carregarPergunta();