import './App.scss';
import { OrbitControls, Sky } from '@react-three/drei';
import { Debug, Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { Ground } from './component/Ground';
import Model from './component/Model';
import Models from './component/Models';
import { Player } from './component/Player';
import { Hud, TileHud } from './component/Hud';
import { NftHud } from './component/NftHud';

function App() {
  return (
    <Canvas shadowMap sRGB>
      <Sky sunPosition={[100, 20, 100]}/>
      <ambientLight intensity={0.25} />
      <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
      <Hud position={[0,0,-2]}/>
      {/* <TileHud position={[0,10,-2]}/> */}
      <NftHud position={[0,0.5,-3]}/>
      <OrbitControls/>
      <Physics>
        <Debug color="black" scale={1.1}>
          <Ground position={[0, 0.5, 0]}/>
          <Player/>
          <Models />
        </Debug>
      </Physics>
    </Canvas>
  );
}

export default App;
