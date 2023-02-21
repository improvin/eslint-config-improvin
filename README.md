# eslint-config-improvin

## Welcome to Improvin's eslint config

### Install command

`yarn add --dev https://github.com/improvin/eslint-config-improvin.git`

### Install peer dependencioes

`yarn add --dev prettier eslint`

### Add a .eslintrc

```
{
  "extends": "eslint-config-improvin"
}
```

#### Note

Some editor plugins for `prettier` will attempt to use the `.prettierrc` file in your project and ignore any other forms of configuration. To use the `prettier` rules for this configuration, make sure your editor plugins support `eslint --fix` and do not have an error warning of a missing `.prettierrc` file.
