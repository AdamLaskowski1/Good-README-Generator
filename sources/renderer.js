function renderREADME(props){
    const {projectName, userName, application, installation, usage, credits, license} = props
    return `
# ${projectName}

# ${userName}

## Link to Application
${application}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}

`
}

module.exports = {
    renderREADME
}
