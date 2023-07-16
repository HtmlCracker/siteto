const word_list = ['быстро', 'красиво', 'безопасно'];
const sighn_list = ['-', '=', '#', '@', '!', '/', '$',
                 '%', '(', '{', '}', '&', '<', 'Ђ',
                 '*', '^', 'ɣ']

const sleep = (ms) => { return new Promise(resolve => setTimeout(resolve, ms)); }

const choose = () => {
    var index = Math.floor(Math.random() * sighn_list.length);
    return sighn_list[index];
}

const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const findLongestWord = (lst) => {
    var longestWord = 0;
    for(var i = 0; i < lst.length; i++) {
        if (lst[i].length > longestWord){
        longestWord = lst[i].length;
        }
    }
    return longestWord;
}

let count = 0;

const add_div = (letter) => {   
    count++;

    let div = `<div class="letters" id="${count-1}">${letter}</div>`;
    $('.all_letters').append(div);
};

const rand_sighn = (word) => {   
    for (let i=0; i<word.length; i++) {

        if (word[i] != answer_list[i]) {

            if (randomInteger(1,15) == 5) {   
                answer_list[i] = word[i];
            } else {
                answer_list[i] = choose();
            }
        }
    };
    return answer_list;
};

const new_div = (word) => {
    for (let i=0; i < findLongestWord(word_list); i++) {
        const el_jq = $(`#${i}`);

        if (i < word.length) {
            el_jq.html(`<div class="letters" id="${i}">${word[i]}</div>`);
            el_jq.css('display', 'inline-block');
        } else {
            el_jq.css('display', 'none');  
        }
    };
};

$(async () => {   
    for (let j=0; j < findLongestWord(word_list); j++) {   
        add_div('-');
    }
    
    await sleep(1500);

    while (true) {

    for (let word_ind=0; word_ind < word_list.length; word_ind++) {      
            answer_list = [];

            for (let i=0; i < word_list[word_ind].length; i++) {
                answer_list.push(' ');
            };
            for (let trying=0; trying < 15; trying++) {   
                if (answer_list == word_list[word_ind].split('')) {
                    break;
                } else {
                    await sleep(90);
                    new_div(rand_sighn(word_list[word_ind]));
                }
            };
            answer_list = word_list[word_ind].split('');
            new_div(rand_sighn(answer_list));

            await sleep(1500);
        };
    };
});