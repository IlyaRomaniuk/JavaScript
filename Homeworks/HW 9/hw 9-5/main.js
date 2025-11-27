let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

coursesArray.forEach(course => {
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('course')

    let h2 = document.createElement('h2');
    h2.innerText = course.title;

    let monthDiv = document.createElement('div');
    monthDiv.innerText = `Month duration: ${course.monthDuration}`;

    let hoursDiv = document.createElement('div');
    hoursDiv.innerText = `Hour duration: ${course.hourDuration}`;

    let modulesDiv = document.createElement('div');
    let ul = document.createElement('ul');

    course.modules.forEach(module => {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    });

    modulesDiv.appendChild(ul);

    courseDiv.appendChild(h2);
    courseDiv.appendChild(monthDiv);
    courseDiv.appendChild(hoursDiv);
    courseDiv.appendChild(modulesDiv);

    div.appendChild(courseDiv);
});