const generateRandomNum = num => {
    return Math.floor(Math.random() * num);
}

const taskManager = {
    day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    task: ['clean your room', 'study for 2 hours', 'take a walk', 'ride a bike', 'procrastinate'],
    advice: ['Luck comes from hard work', 'Take time to know yourself', "Don't make assumptions", 'Be patient and persistent', 'No task is beneath you', 'When you quit, you fail']
}

let personalTask = [];

for(let prop in taskManager) {
    let optionIdx = generateRandomNum(taskManager[prop].length);

    switch(prop) {
        case 'day':
            personalTask.push(`On ${taskManager[prop][optionIdx]}, you should:`)
            break
        case 'task':
            personalTask.push(`${taskManager[prop][optionIdx]}`)
            break
        case 'advice':
            personalTask.push(`Your advice for today is: ${taskManager[prop][optionIdx]}`)
            break
        default:
            personalTask.push('There is not enough info.')
    }
}

const formatTask = task => {
    const formatted = personalTask.push('\n');
    console.log(formatted);
}

formatTask(personalTask);