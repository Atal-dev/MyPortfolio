import React from 'react'
import Waves from './WaveC';


function Wave() {
  return (
    <div>

<Waves
lineColor="#fff"
// backgroundColor="rgba(255, 255, 255, 0.2)"
waveSpeedX={0.02}
waveSpeedY={0.01}
waveAmpX={40}
waveAmpY={20}
friction={0.9}
tension={0.01}
maxCursorMove={120}
xGap={12}
yGap={36}
style={{
  position:"Fixed",
  zIndex:"-1"
}}
/>
    </div>
  )
}

export default Wave
