import * as nftModels from '../assets/nftModels';
import { nanoid } from 'nanoid'; // 빨리 끝내면 firebase에 올려서 키값도 바꿔줘야겠다.
import create from 'zustand';
 // 이거 REST API로 하시려나? 여쭤봐야할듯.
 // 잠만 어차피 NFT 요소들은 개인 컴퓨터에 저장시켜줘도 되지 않나? 백업 안내페이지도 만들어야되고 좀 복잡해지나? 어차피 해커톤이니 이렇게 가도 되나?
const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
    tileTexture: 'dirt', // default 타일 텍스쳐.
    tiles: getLocalStorage('tiles') || [], // DevTools Application Storage에서 tiles 키값으로 불러옴.
    addTile: (x,y,z) => // 설치
        set((state) => ({
            tiles: [
                ...state.tiles,
                { key: nanoid(), pos: [x,y,z], tileTexture: state.tileTexture},
            ]
        })),
    removeTile: (x,y,z) => { // 제거
        set((state) => ({
            tiles: state.tiles.filter((tile) => {
                const [_x, _y, _z] = tile.pos;
                return _x !== x || _y !== y || _z !== z;
            }),
        }))
    },
    setTileTexture: (tileTexture) => { // 타일 텍스쳐 선택
        set((state) => ({
            tileTexture,
        }))
    },
    // setNFTModel: (url)
    saveTile: () => { // 상태 저장. interval 만들어서 저장 돌림. 서버만들면 데이터가 변할때 마다 저장되게 바꿔야함.
        set((state) => {
            setLocalStorage('tiles', state.tiles);
        })
    },

    groundTexture: 'dirt', // default 타일 텍스쳐.
    grounds: getLocalStorage('grounds') || [], // DevTools Application Storage에서 tiles 키값으로 불러옴.
    addGround: (x,y,z) => // 설치
        set((state) => ({
            grounds: [
                ...state.grounds,
                { key: nanoid(), pos: [x,y,z], groundTexture: state.groundTexture},
            ]
        })),
    removeGround: (x,y,z) => { // 제거
        set((state) => ({
            grounds: state.grounds.filter((ground) => {
                const [_x, _y, _z] = ground.pos;
                return _x !== x || _y !== y || _z !== z;
            }),
        }))
    },
    setGroundTexture: (groundTexture) => { // 타일 텍스쳐 선택
        set((state) => ({
            groundTexture,
        }))
    },
    // setNFTModel: (url)
    saveGround: () => { // 상태 저장. interval 만들어서 저장 돌림. 서버만들면 데이터가 변할때 마다 저장되게 바꿔야함.
        set((state) => {
            setLocalStorage('grounds', state.grounds);
        })
    },

    itemTexture: 'dirt', // default 타일 텍스쳐.
    items: getLocalStorage('items') || [], // DevTools Application Storage에서 tiles 키값으로 불러옴.
    addItem: (x,y,z) => // 설치
        set((state) => ({
            items: [
                ...state.items,
                { key: nanoid(), pos: [x,y,z], itemTexture: state.itemTexture},
            ]
        })),
    removeItem: (x,y,z) => { // 제거
        set((state) => ({
            items: state.items.filter((item) => {
                const [_x, _y, _z] = item.pos;
                return _x !== x || _y !== y || _z !== z;
            }),
        }))
    },
    setItemTexture: (itemTexture) => { // 타일 텍스쳐 선택
        set((state) => ({
            itemTexture,
        }))
    },
    // setNFTModel: (url)
    saveItem: () => { // 상태 저장. interval 만들어서 저장 돌림. 서버만들면 데이터가 변할때 마다 저장되게 바꿔야함.
        set((state) => {
            setLocalStorage('items', state.items);
        })
    },
}));
