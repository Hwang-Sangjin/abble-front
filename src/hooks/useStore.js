import * as nftModels from '../nftModels';
import { nanoid } from 'nanoid'; // 빨리 끝내면 firebase에 올려서 키값도 바꿔줘야겠다.
import create from 'zustand';
 // 이거 REST API로 하시려나? 여쭤봐야할듯.
 // 잠만 어차피 NFT 요소들은 개인 컴퓨터에 저장시켜줘도 되지 않나? 백업 안내페이지도 만들어야되고 좀 복잡해지나? 어차피 해커톤이니 이렇게 가도 되나?
const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
    texture: 'dirt', // default 타일 텍스쳐.
    nft: 'tree_Oak_Tex_256', // nft 모델 UI.
    models: getLocalStorage('world') || [], // DevTools Application Storage에서 world 키값으로 저장됨.
    addModel: (x,y,z) => // 설치
        set((state) => ({
            models: [
                ...state.models,
                { key: nanoid(), pos: [x,y,z], texture: state.texture, nft: state.nft},
            ]
        })),
    removeModel: (x,y,z) => { // 제거
        set((state) => ({
            models: state.models.filter((model) => {
                const [_x, _y, _z] = model.pos;
                return _x !== x || _y !== y || _z !== z;
            }),
        }))
    },
    setTexture: (texture) => { // 타일 텍스쳐 선택
        set((state) => ({
            texture,
        }))
    },
    setNft: (nft) => { // 모델 선택
        set((state) => ({
            nft,
        }))
    },
    // setNFTModel: (url)
    saveWorld: () => { // 상태 저장. interval 만들어서 저장 돌림. 서버만들면 데이터가 변할때 마다 저장되게 바꿔야함.
        set((state) => {
            setLocalStorage('world', state.models);
        })
    }
}));
