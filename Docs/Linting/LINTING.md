# Linting Set up
This project uses [TS Lint](https://palantir.github.io/tslint) to do Linting in combination with [Codelyzer](https://github.com/mgechev/codelyzer)
### 1. Prerequisites
* [tslint.json](../../tsconfig.json) has all the linting rules that are being followed for the project 
* Make sure that you have installed the application level dependencies
``` shell
    cd TODOAngular2
    npm i
```
Note that you need to have tslint plugin install on your editor.

Codelyzer should work out of the box with Atom but for VSCode you will have to open Code > Preferences > User Settings, and enter the following config:
```shell
{
  "tslint.rulesDirectory": "./node_modules/codelyzer",
  "typescript.tsdk": "node_modules/typescript/lib"
}
```
## How to Run Linting
* Run the following command
``` shell
     npm run lint
```
## Linting Rules
These are the linting rules that are in place  in this Angular project. For detailed tests and examples of most of these rules
refer to this [Github Repo](https://github.com/palantir/tslint/tree/master/test/rules)

* [class-name](https://palantir.github.io/tslint/rules/class-name/)
* [comment-format](https://palantir.github.io/tslint/rules/comment-format/) 
* [curly](https://palantir.github.io/tslint/rules/curly/) 
* [eofline](https://palantir.github.io/tslint/rules/eofline/) 
* [forin](https://palantir.github.io/tslint/rules/forin/)
* [indent](https://palantir.github.io/tslint/rules/indent/) 
* [label-position](https://palantir.github.io/tslint/rules/label-position/) 
* [max-line-length](https://palantir.github.io/tslint/rules/max-line-length/)
* [member-access](https://palantir.github.io/tslint/rules/member-access/) 
* [member-ordering](https://palantir.github.io/tslint/rules/member-ordering/)
* [no-arg](https://palantir.github.io/tslint/rules/no-arg/)
* [no-bitwise](https://palantir.github.io/tslint/rules/no-bitwise/)
* [no-console](https://palantir.github.io/tslint/rules/no-console/) 
* [no-construct](https://palantir.github.io/tslint/rules/no-construct/)
* [no-debugger](https://palantir.github.io/tslint/rules/no-debugger/) 
* [no-duplicate-variable](https://palantir.github.io/tslint/rules/no-duplicate-variable/)
* [no-empty](https://palantir.github.io/tslint/rules/no-empty/)
* [no-eval](https://palantir.github.io/tslint/rules/no-eval/) 
* [no-inferrable-types](https://palantir.github.io/tslint/rules/no-inferrable-types/) 
* [no-shadowed-variable](https://palantir.github.io/tslint/rules/no-shadowed-variable/)
* [no-string-literal](https://palantir.github.io/tslint/rules/no-string-literal/)
* [no-switch-case-fall-through](https://palantir.github.io/tslint/rules/no-switch-case-fall-through/) 
* [no-trailing-whitespace](https://palantir.github.io/tslint/rules/no-trailing-whitespace/)
* [no-unused-expression](https://palantir.github.io/tslint/rules/no-unused-expression/)
* [no-unreachable](https://palantir.github.io/tslint/rules/no-unreachable/)
* [no-use-before-declare](https://palantir.github.io/tslint/rules/no-use-before-declare/)
* [no-var-keyword](https://palantir.github.io/tslint/rules/no-var-keyword/) 
* [object-literal-sort-keys](https://palantir.github.io/tslint/rules/object-literal-sort-keys/)
* [one-line](https://palantir.github.io/tslint/rules/one-line/)
* [quotemark](https://palantir.github.io/tslint/rules/quotemark/)
* [radix](https://palantir.github.io/tslint/rules/radix/)
* [semicolon](https://palantir.github.io/tslint/rules/semicolon/)
* [triple-equals](https://palantir.github.io/tslint/rules/triple-equals/)
* [typedef-whitespace](https://palantir.github.io/tslint/rules/typedef-whitespace/)
* [variable-name](https://palantir.github.io/tslint/rules/variable-name/)
* [whitespace](https://palantir.github.io/tslint/rules/whitespace/)

## Codelyzer Rules
For details about these rules see this [Github Repo](https://github.com/mgechev/codelyzer/tree/master/src).
These are based on the [Angular Style Guide](https://angular.io/styleguide)
* [directive-selector](https://angular.io/docs/ts/latest/guide/style-guide.html#!#02-08)
* [component-selector](https://angular.io/docs/ts/latest/guide/style-guide.html#!#02-07)
* [use-input-property-decorator](https://angular.io/docs/ts/latest/guide/style-guide.html#!#05-12)
* [use-output-property-decorator](https://angular.io/docs/ts/latest/guide/style-guide.html#!#05-12)
* [use-host-property-decorator](https://angular.io/docs/ts/latest/guide/style-guide.html#!#06-03)
* [no-attribute-parameter-decorator](https://github.com/mgechev/codelyzer/blob/master/test/noAttributeParameterDecoratorRule.spec.ts)
* [no-input-rename](https://github.com/mgechev/codelyzer/blob/master/test/noInputRenameRule.spec.ts)
* [no-output-rename](https://github.com/mgechev/codelyzer/blob/master/test/noOutputRenameRule.spec.ts)
* [no-forward-ref](https://github.com/mgechev/codelyzer/blob/master/test/noForwardRefRule.spec.ts)
* [use-life-cycle-interface](https://github.com/mgechev/codelyzer/blob/master/test/useLifeCycleInterfaceRule.spec.ts)
* [use-pipe-transform-interface](https://github.com/mgechev/codelyzer/blob/master/test/usePipeTransformInterfaceRule.spec.ts)
* [pipe-naming](https://github.com/mgechev/codelyzer/blob/master/test/pipeNamingRule.spec.ts)
* [component-class-suffix](https://github.com/mgechev/codelyzer/blob/master/test/componentClassSuffixRule.spec.ts)
* [directive-class-suffix](https://github.com/mgechev/codelyzer/blob/master/test/directiveClassSuffix.spec.ts)
* [templates-use-public](https://github.com/mgechev/codelyzer/blob/master/test/templatesUsePublicRule.spec.ts)
* [no-access-missing-member](https://github.com/mgechev/codelyzer/blob/master/test/noAccessMissingMemberRule.spec.ts)
* [invoke-injectable](https://github.com/mgechev/codelyzer/blob/master/test/invokeInjectableRule.spec.ts)