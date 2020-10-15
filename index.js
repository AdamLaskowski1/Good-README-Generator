const { promptUser } = require("./sources/questions");
const { renderREADME } = require("./sources/renderer");
const { writeFileAsync } = require("./sources/writer");

async function generateREADME(){
    try {
        const answers = await promptUser();
        const projectREADME = renderREADME(answers);
        writeFileAsync("README" + ".md", projectREADME);
        console.log("Complete!");
    } catch(err) {
        console.log("Something went wrong");
    }
}

generateREADME();