const { promptUser } = require("./questions");
const { renderREADME } = require("./renderer");
const { writeFileAsync } = require("./writer");

async function generateREADME(){
    try {
        const answers = await promptUser();
        const projectREADME = renderREADME(answers);
        writeFileAsync(README + ".md", projectREADME);
        console.log("Complete!");
    } catch(err) {
        console.log("Something went wrong");
    }
}

generateREADME();