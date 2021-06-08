const inquirer = require('inquirer')
var figlet = require('figlet');

figlet('Smit Patel', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    display()
});

function display() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'Resume',
                choices: ['About', 'Projects', 'Skills', 'Exit']
            }
        ])
        .then((ans) => {
            if (ans.Resume == "About") {
                console.log(`Hi, I'm Smit Patel.
                I am a Developer.
                I'm constantly learning new things.`)
                displayNext()
            }
            else if (ans.Resume == "Projects") {
                console.log(`Check out my GitHub: https://github.com/Smit90`)
                displayNext()
            }
            else if (ans.Resume == "Skills") {
                console.log("JS, Node JS, React JS, Bootstrap, CSS, Git, VS Code, Python, HTML, Flask")
                displayNext()
            }
            else if (ans.Resume == "Exit") {
                // console.log("(｡◕‿◕｡)")
                figlet('Bye!', function (err, data) {
                    if (err) {
                        console.log('Something went wrong...');
                        console.dir(err);
                        return;
                    }
                    console.log(data)
                });
                process.exit()
            }
            else {
                console.log("Bye.......")
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error.isTtyError)
            } else {
                console.log(error)
            }
        });
}

function displayNext() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'Resume',
                choices: ['Back']
            }
        ])
        .then(ans => {
            if (ans.Resume == "Back") {
                display()
            }
        })
}
