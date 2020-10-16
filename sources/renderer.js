function renderREADME(props){
    const {projectName, userName, description, application, installation, usage, contributing, license, tests, email, phone} = props
    return `
# ${projectName}

# ${userName}

## Description
${description}

## Table of Contents
* Installation
* Usage
* Contributing
* License
* Tests
* Questions

## Link to Application
${application}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## License
${license}

## Tests
${tests}

## Questions
For any questions reguarding this project, please reach out to me at:
* Phone: ${phone}
* Email: ${email}

`
}

module.exports = {
    renderREADME
}
