import input from 'input';

async function main() {
    const answer = 'Katy is Cool';
    const guess = await input.text('Guess the password');
    
    if (guess == answer) {
        console.log('You are smart.');
    } else {
        console.log('Try again.')
    }
}

main()
    