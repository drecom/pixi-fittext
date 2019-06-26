export class FitText extends PIXI.Text {
  private requiredWidth: number;

  constructor(text: string, requiredWidth: number, style?: any, canvas?: any) {
    super(undefined, style, canvas);
    this.requiredWidth = requiredWidth;
    this.text = text;
  }

  public _onTextureUpdate() {
    // FitText controls width and scale.x
  }

  public get text() {
    return this._text;
  }

  public set text(value: string) {
    const text = String(value === '' || value === null || value === undefined ? ' ' : value);

    if (this._text === text) {
        return;
    }

    // Not ready yet.
    if (!this._style) {
      this._text = text;
      this.dirty = true;    
      return;
    }

    this.fitScale(value);
    this._text = text;
    this.dirty = true;
  }

  private fitScale(newText: string) {
    const measured = PIXI.TextMetrics.measureText(newText, this._style, this._style.wordWrap, this.canvas);
    const width = measured.width;

    // update
    this.width = Math.max(this.requiredWidth, width);
    this.scale.x = Math.min(1, this.requiredWidth / width);
  }
}
