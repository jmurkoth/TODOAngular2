# VS Code Setting

## Extensions used
* [Angular v2 TypeScript Snippets] (https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2) from John Papa
* VSCode-Icons from Roberto Huertasm
* TSLint ffrom egamma

## VS CODE  Settings
* Use the following entries in the settings.json file
  * First entry ```files.exclude``` is to exclude the js and .map files that are auto generated
  * Second entry ```tslint.rulesDirectory``` is to set the rules directory to use codelyzer rules
  * Third entry ```tslint.rulesDirectory```  is to  set VSCODE to use the 
```CODE

{
    "files.exclude": {
        "app/**/*.js": { "when": "$(basename).ts"}, // Exclude the js file from showing if it matches the ts file name
         "app/**/*.js.map": { "when": "$(basename)"}
    },
    "tslint.rulesDirectory": "./node_modules/codelyzer",
    "typescript.tsdk": "node_modules/typescript/lib"
}
```