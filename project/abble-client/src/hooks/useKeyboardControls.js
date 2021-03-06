import {useState, useEffect} from 'react';
import {useStore} from './useStore';
import * as nftModels from '../assets/nftModels';

function actionByKey(key) {
    const keys = {
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyA: 'moveLeft',
        KeyD: 'moveRight',
        Space: 'jump',
    }
    return keys[key];
}

// F-6 : 장비 토글 구현
// function toggleByKey(key) {
//     const keys = {
//         KeyQ: 'toggleInventory', // 인터렉션이 뭐뭐 필요하지?
//         KeyE: 'toggleNFTMarket',
//         KeyR: 'toggleEquip', // 물뿌리개 같은거...가 아니라 지금 물뿌리개만 있으면 되는거 아닌가? 아 땅도 갈아야 하는구나.
//     }
//     return keys[key];
// }

// Digit은 장비로 쓰는게 좋지 않을까 싶네.
// 여튼 여기 HUD로 만들어서 선택하게 만듬.
function textureByKey(key) {
    const keys = {
      Digit1: 'dirt',
      Digit2: 'grass',
      Digit3: 'glass',
      Digit4: 'wood',
      Digit5: 'log',
    };
    return keys[key];
}

function nftByKey(key) {
    const keys = {
      Digit6: 'tree_Oak_Tex_256',
      Digit7: 'boxTest1',
      Digit8: 'wallTest2',
      Digit9: 'penseTest1',
    };
    return keys[key];
}

export const useKeyboardControls = () => {
    const [movement, setMovement] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
    })
    
    const [setTileTexture] = useStore((state) => [state.setTileTexture]);
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            // 클릭으로 바꿔야함.
            if (actionByKey(e.code)) {
                console.log(e.code);
                setMovement((state) => ({
                    ...state,
                    [actionByKey(e.code)]: true,
                }));
            }

            //Change texture key, 여기 텍스쳐 이름으로 모델 구분할거다.
            if(textureByKey(e.code)){
                setTileTexture(textureByKey(e.code));
            }

        }
        const handleKeyUp = (e) => {
            // 클릭으로 바꿔야함.
            if (actionByKey(e.code)) {
                setMovement((state) => ({
                    ...state,
                    [actionByKey(e.code)]: false,
                }));
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [setTileTexture]);

    return movement;
}