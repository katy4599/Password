import input from 'input';

async function main() {
    const answer = 'Katy is Cool';
    let guess = await input.text('Guess the password');

    while (guess != answer) {
        guess = await input.text('Guess the password');
    }
    
    if (guess == answer) {
        console.log('You are smart.');
    }
}

main()