import assert from "power-assert";
import * as PIXI from "pixi.js";
import { FitText } from "../src/FitText";

describe("FitText", () => {
  it("should be inherited PIXI.Text", () => {
    assert.strictEqual(new FitText("test", 0) instanceof PIXI.Text, true);
  });

  it("should be width is specified value", () => {
    const label = new FitText("あいうえお", 10);
    assert.strictEqual(label.width, 10);
  });

  it("should be fix width and change scale.", () => {
    const label = new FitText("あいうえお", 10);
    const originalScale = label.scale.x;
    label.text = "ああああああああああああああああああああああああああああああああああ";
    assert.strictEqual(label.width, 10);
    assert.ok(originalScale > label.scale.x);
  });
});
