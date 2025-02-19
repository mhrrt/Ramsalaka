const gridLetters = [
    'श', '्री', 'रा', 'म', 'च', 'र', 'ि', 'त', 'मा',
    'ना', 'स', 'अ', 'य', 'ो', 'ध', '्', 'या', 'का',
    'न्', 'द', 'श', 'ा', 'श', 'ि', 'व', 'र', 'ा',
    'म', 'च', 'न', '्द', 'र', 'स', 'ा', 'र', 'थ',
    'ि', 'त', 'र', 'ा', 'ग', 'ह', 'ा', 'व', 'े',
    'श', 'र', 'ा', 'म', 'क', 'ृ', 'प', 'ा', 'ल'
];

const answers = {
    'श': "आपके कार्य में सफलता मिलेगी।",
    'रा': "आपको थोड़ा धैर्य रखना चाहिए।",
    'म': "परिस्थिति आपके अनुकूल होगी।",
    'ना': "समय प्रतिकूल हो सकता है।",
    'स': "ईश्वर का ध्यान रखें, सफलता मिलेगी।",
    'अ': "नए कार्यों के लिए अच्छा समय है।"
};

document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById('shalakaGrid');
    gridLetters.forEach(letter => {
        const cell = document.createElement('div');
        cell.textContent = letter;
        cell.addEventListener('click', () => {
            document.getElementById('result').textContent = 
                answers[letter] || "श्रीराम कृपा आपके साथ है!";
        });
        grid.appendChild(cell);
    });
});
