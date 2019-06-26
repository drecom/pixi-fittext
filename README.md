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
const fitText = new FitText("Hello FitText!", requiredWidth, { fill: 0xFFFFFF });

// when set text property, FitText adjust x scale automaticaly.
fitText.text = "adjust x scale auto.";
```

![fittext1](https://raw.githubusercontent.com/drecom/pixi-fittext/master/fittext1.png)  
![fittext2](https://raw.githubusercontent.com/drecom/pixi-fittext/master/fittext2.png)
