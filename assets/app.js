const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
    help: "Supported commands: <span class=\"code\">about</span>, <span class=\"code\">experience</span>, <span class=\"code\">education</span>, <span class=\"code\">skills</span>, <span class=\"code\">projects</span>",
    about: "Hello 👋<br>As the domain suggests, my name is Chahat Chugh. I’m a full-stack developer currently living in Gurgaon .I want To be a part of an organisation that gives me ample opportunities to bring innovation and new ideas on board while leveraging my analytical skills and ‘go get it’ attitude . It is what pushes me every day to become a better engineer.",
    skills: "<span class=\"code\">Languages:</span> JavaScript, C++<br><span class=\"code\">Technologies:</span> Node.js, Git, MongoDb , MySQL<br><span class=\"code\">Frameworks:</span> React.js , React Native , Angular",
    education: "Graphic Era Deemed University <br> Computer Science (BATCH : 2015-2019)",
    resume: "<a href='./chahat_chugh_resume.pdf' class='success link'>resume.pdf</a>",
    experience: "Kellton Tech Solutions Ltd . (04-02-2019 till Present)<br>Software Engineer",
    projects: "1: Bajaj Capital (React.js and Node.js)<br> 2: Vestige (React Native)<br> 3: Zoylo (React native)"
};
let userInput, terminalOutput;

const app = () => {
    userInput = document.getElementById('userInput');
    terminalOutput = document.getElementById('terminalOutput')
    document.getElementById('dummyKeyboard').focus();
    console.log('Application loaded');
};

const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        console.log('Oops! no such command');
    } else {
        output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

const key = function keyEvent(e) {
    const input = userInput.innerHTML;

    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
        return;
    }

    if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = '';
        return;
    }

    userInput.innerHTML = input + e.key;
}

const backspace = function backSpaceKeyEvent(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
}

document.addEventListener('keydown', backspace);
document.addEventListener('keypress', key);
document.addEventListener('DOMContentLoaded', app);
