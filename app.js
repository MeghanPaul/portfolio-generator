const profileDataArgs = process.argv.slice(2);
const [userName,gitHubName] = profileDataArgs;
const fs = require('fs');
const generatePage = require('./src/page-template.js');
/*console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++)
    {
        console.log(profileDataArr[i]);
    }

    console.log('===============');

    profileDataArr.forEach((profileItem) => console.log(profileItem));
};



printProfileData(profileDataArgs);*/




fs.writeFile('./index.html',generatePage(userName,gitHubName), err => {
    if(err) throw new Error(err);
    console.log('Portfolio complete! Check out index.html to see the output!')
});