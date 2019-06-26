# pixi-fittext

pixi-fittext is a module for PIXI.js that changes the scale depending on the length of the string.
It is a premise used for game project using pixi.js.

## Install

```
# install this module
npm install @drecom/pixi-fittext
```

## Usage

```
const requiredWidth = 240;

// FitText extends PIXI.Text, The parameter same as PIXI.Text except for the requiredWidth.
const fitText = new FitText("Hello FitText!", requiredWidth);

// when set text property, FitText adjust x scale automaticaly.
fitText.test = "adjust x scale auto.";
```

![](data:image/png;base64,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)

![](data:image/png;base64,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)
