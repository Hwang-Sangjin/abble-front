import { useFrame, useThree } from "@react-three/fiber";
import {useState, useEffect} from 'react';
import { useStore } from '../../hooks/useStore';
import * as textures from '../../assets/textures';
import { Html } from "@react-three/drei";

export const ItemUI = ({position}) => {
    const [toggleInventory, setToggleInventory] = useState({
        inventoryVis: false,
    })
    const [toggleEquip, setToggleEquip] = useState({
        wateringCan: false,
        hoe: true,
        shovel: false,
    })

    const [setTexture] = useStore((state) => [state.setTexture]);
    const [setItem] = useStore((state) => [state.setItem]);
    const [setEquip] = useStore((state) => [state.setEquip]);

    // useEffect(() => {
    //     setEquip(toggleEquip);
    // }, []);

    return (
        <>
            {
                <>
                    <Html className="itemUIContainer-bottomLeft">
                        <button
                            onClick={() => setToggleEquip({wateringCan:true, hoe:false, shovel:false})}
                        >물뿌리개</button>
                        <button
                            onClick={() => setToggleEquip({wateringCan:false, hoe:true, shovel:false})}
                        >괭이</button>
                        <button
                            onClick={() => setToggleEquip({wateringCan:false, hoe:false, shovel:true})}
                        >삽</button>
                        <button
                            onClick={() => setToggleInventory(toggleInventory.inventoryVis ? {inventoryVis:false} : {inventoryVis:true})}
                        >인벤토리</button>    
                    </Html>
                    <Html className="itemUIContainer-topLeft">
                        <button>월드명</button>
                        <button>게임캐쉬</button>
                        <button>클레이튼</button>
                    </Html>
                    <Html className="itemUIContainer-bottomRight">
                        <button>보유수량</button>
                        <button>선택아이템</button>
                        <button>현재장비</button>
                    </Html>
                    <Html className="itemUIContainer-topRight">
                        <button>정보</button>
                        <button>설정</button>
                    </Html>
                    <Html>
                    {console.log(toggleInventory.inventoryVis)}
                    {console.log(toggleEquip)}
                        {
                            toggleInventory.inventoryVis ? (
                                <div className="invenTest">
                                    <h3>인벤토리</h3>
                                    <br/><br/>
                                    <h5>타일</h5>
                                    <button
                                        onClick={(e) => {
                                            setTexture('dirt');
                                        }}
                                    >
                                        dirt
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setTexture('grass');
                                        }}
                                    >
                                        grass
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setTexture('glass');
                                        }}
                                    >
                                        glass
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setTexture('wood');
                                        }}
                                    >
                                        wood
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setTexture('log');
                                        }}
                                    >
                                        log
                                    </button>
                                    <br/><br/><br/><br/>
                                    <h5>아이템</h5>
                                    <button
                                        onClick={(e) => {
                                            setItem('tree_oak');
                                        }}
                                    >
                                        tree_oak_item
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setItem('stone');
                                        }}
                                    >
                                        stone_item
                                    </button>
                                </div>
                            ) : (
                                null
                            )
                        }
                    </Html>
                </>
            }
        </>   
    )
}