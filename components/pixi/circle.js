import * as PIXI from "pixi.js";
import { PixiComponent } from "@inlet/react-pixi";

const PixiCircle = PixiComponent("Circle", {
  create: (props) => new PIXI.Graphics(),
  applyProps: (instance, oldProps, props) => {
    const { x, y, color, width, height, alpha, blendMode } = props;
    instance.clear();
    instance.lineStyle({ width: 0 });
    instance.beginFill(color);
    instance.drawEllipse(x || 0, y || 0, width || 1, height || 1);
    instance.blendMode = blendMode || PIXI.BLEND_MODES.NORMAL
    instance.alpha = alpha || 1
    instance.filters = [new PIXI.filters.BlurFilter(60, 20)]
    instance.endFill();
  }
});

export default PixiCircle
