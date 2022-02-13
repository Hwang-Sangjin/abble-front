import boxTest1Img from '../images/nfts/boxTest1.png';
import Character_Deer_Texture_1024Img from '../images/nfts/Character_Deer_Texture_1024.png';
import dossiCharTest1Img from '../images/nfts/dossiCharTest1.png';
import grenadeTest1Img from '../images/nfts/grenadeTest1.png';
import objTest1Img from '../images/nfts/objTest1.png';
import objTest2Img from '../images/nfts/objTest2.png';
import penseTest1Img from '../images/nfts/penseTest1.png';
import plainTest1Img from '../images/nfts/plainTest1.png';
import rigleTest1Img from '../images/nfts/rigleTest1.png';
import seedTest1Img from '../images/nfts/seedTest1.png';
import stoneTest1Img from '../images/nfts/stoneTest1.png';
import swordTest1Img from '../images/nfts/swordTest1.png';
import tree_Oak_Tex_256Img from '../images/nfts/Tree_Oak_Tex_256.png';
import wallTest1Img from '../images/nfts/wallTest1.png';
import wallTest2Img from '../images/nfts/wallTest2.png';
import wallTest2Type1Img from '../images/nfts/wallTest2Type1.png';
import wallTest3Type1Img from '../images/nfts/wallTest3Type1.png';
import waterTest1Img from '../images/nfts/waterTest1.png';
import { TextureLoader, NearestFilter, LinearMipMapLinearFilter  } from 'three';
import { useGLTF } from '@react-three/drei';

// 테스트할때 쓸 모델들.
// tree_Oak_Tex_256
// boxTest1
// wallTest2
// penseTest1

export const boxTest1 = new TextureLoader().load(boxTest1Img);
export const Character_Deer_Texture_1024 = new TextureLoader().load(Character_Deer_Texture_1024Img);
export const dossiCharTest1 = new TextureLoader().load(dossiCharTest1Img);
export const grenadeTest1 = new TextureLoader().load(grenadeTest1Img);
export const objTest1 = new TextureLoader().load(objTest1Img);
export const objTest2 = new TextureLoader().load(objTest2Img);
export const penseTest1 = new TextureLoader().load(penseTest1Img);
export const plainTest1 = new TextureLoader().load(plainTest1Img);
export const rigleTest1 = new TextureLoader().load(rigleTest1Img);
export const seedTest1 = new TextureLoader().load(seedTest1Img);
export const stoneTest1 = new TextureLoader().load(stoneTest1Img);
export const swordTest1 = new TextureLoader().load(swordTest1Img);
export const tree_Oak_Tex_256 = new TextureLoader().load(tree_Oak_Tex_256Img);
export const wallTest1 = new TextureLoader().load(wallTest1Img);
export const wallTest2 = new TextureLoader().load(wallTest2Img);
export const wallTest2Type1 = new TextureLoader().load(wallTest2Type1Img);
export const wallTest3Type1 = new TextureLoader().load(wallTest3Type1Img);
export const waterTest1 = new TextureLoader().load(waterTest1Img);

// 이거 문제있네. 여기서 플립해줘야 제대로 넘어간다. 심볼에서 플립넣으면 안먹힌다.
tree_Oak_Tex_256.flipY = false;
boxTest1.flipY = false;
wallTest2.flipY = false;
penseTest1.flipY = false;

// 이것도 문제네. 필터도 적용시켜서 넘겨줘야하네. 나머지 텍스쳐도 다 일일이 처리해줘야하나보다.
tree_Oak_Tex_256.magFilter = NearestFilter;
tree_Oak_Tex_256.minFilter = LinearMipMapLinearFilter;
boxTest1.magFilter = NearestFilter;
boxTest1.minFilter = LinearMipMapLinearFilter;
wallTest2.magFilter = NearestFilter;
wallTest2.minFilter = LinearMipMapLinearFilter;
penseTest1.magFilter = NearestFilter;
penseTest1.minFilter = LinearMipMapLinearFilter;

// export const GltfTreeOak = () => {
//     const { nodes, materials } = useGLTF('/models/nFTs/Tree_Oak_Tex_256.gltf'); 
//     const geometry=nodes.Tree_Oak_Tex_Comp.geometry;
//     const material=materials.Mat_Tree_Oak_Comp;
//     return {"geometry":geometry, "material":material};
// }

// export const GltfBox1 = () => {
//     const { nodes, materials } = useGLTF('/models/nFTs/boxTest1.gltf');
//     const geometry=nodes.Box_Comp.geometry;
//     const material=materials.Mat_Box_Comp;
//     return {"geometry":geometry, "material":material};
// };
// export const GltfWall2 = () => {
//     const { nodes, materials } = useGLTF('/models/nFTs/wallTest2.gltf')
//     const geometry=nodes.Wall_Outer_Edge_Comp.geometry;
//     const material=materials.Mat_Wall_Outer_Edge_Comp;
//     return {"geometry":geometry, "material":material};
// };
// export const GltfPense1 = () => {
//     const { nodes, materials } = useGLTF('/models/nFTs/penseTest1.gltf')
//     const geometry=nodes.Bridge_Fence_Comp.geometry;
//     const material=materials.Mat_Bridge_Fence_Comp;
//     return {"geometry":geometry, "material":material};
// };



