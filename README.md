# @eppendorf/config-stylelint

Centralized linting rules for scss/css using stylelint.

## preqrequisits

- [stylelint](https://stylelint.io/) needs to be installd in your project

## install

```bash
# install the package from gitlab
$ yarn add git+https://git@gitlab.dasgip.de/ai-web/lib/config-stylelint --dev
```

## use

create or edit a .stylelintrc.json

```json
{
  // ...
  "extends": [
    "@eppendorf/config-stylelint"
  ]
  // ...
}
```
