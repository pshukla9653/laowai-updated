import {Sprite, Stage, withFilters, Container, useTick} from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import {useEffect, useMemo, useRef, useState} from 'react'
import PixiCircle from './circle'
import useWindowSize from '../hooks/windw-size'

const backgroundColor = 0x111111

const Filters = withFilters(Container, {
  displacement: PIXI.filters.DisplacementFilter
})

const PixiStage = () => {
  return (
    <Stage className={'pixi'} width={300} height={300} options={{backgroundColor}}>
      <PixiContent/>
    </Stage>
  )
}

const PixiContent = () => {
  const size = useWindowSize();
  const displacementSprite = useRef()
  const [ready, setReady] = useState(false)
  const aspectRatio = useMemo(() => size.height / size.width, [size]);

  useEffect(() => {
    displacementSprite.current.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.MIRRORED_REPEAT
    setReady(true)
  }, [])

  const ellipseMask = useMemo(() => {
    const mask = new PIXI.Graphics()
    mask.beginFill(0x000)
    mask.lineStyle(0);
    mask.drawCircle(100, 100, 10);
    mask.endFill()

    return mask
  }, [])

  useTick(delta => {
    const change = delta * 0.6
    displacementSprite.current.x += change
  })

  return (
    <>
      <Sprite image={'/pixi/displace.jpg'} ref={displacementSprite} scale={{x: 12, y: 12}} />
      {ready && (
        <Filters displacement={{
          construct: [displacementSprite.current],
          scale: {x: 50, y: 50}
        }}>
          <Sprite texture={PIXI.Texture.WHITE} tint={0x111111} width={1000} height={1000} anchor={0.5} />
          <Sprite image={'/images/gallery-page/smoke.png'}
                  x={150} y={200} anchor={0.5}
                  blendMode={3}
                  width={1200 * aspectRatio} height={300} />
          <PixiCircle width={30 * aspectRatio} height={20} anchor={0.5} x={185} y={260} color={0xF5B63B}
                      blendMode={9} alpha={0.5}/>
        </Filters>
      )}
    </>
  )
}

export default PixiStage
