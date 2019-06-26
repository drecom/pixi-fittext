/// <reference types="pixi.js" />
export declare class FitText extends PIXI.Text {
    private requiredWidth;
    constructor(text: string, requiredWidth: number, style?: any, canvas?: any);
    _onTextureUpdate(): void;
    text: string;
    private fitScale;
}
