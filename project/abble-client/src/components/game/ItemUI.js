import { useFrame, useThree } from "@react-three/fiber";
import {useState, useEffect} from 'react';
import { useStore } from '../../hooks/useStore';
import * as textures from '../../assets/textures';
import { Html } from "@react-three/drei";

export const ItemUI = ({position}) => {
    //F-4 : ui 위치 고정시키기.
    //  - r3f에서 지원해주는 useThree에서 size, aspect, viwport 다 가져와야한다.
    // 리사이즈마다 위치값 변경시켜줘야하므로 3d 월드 좌표 -> 2d 뷰포트 픽셀 좌표로 변환시켜줘야한다.
    // ui 생성할 다른 더 좋은 방법 있으면 그걸로 해도 좋다.
    // 이 작업이 간단한 작업이 되지 못하는 이유는
    // 게임 월드 Canvas 내에 요소를 배치하다보니 카메라를 움직이면 UI도 따라 움직여줘야 한다.
    // 그렇다고 Canvas 바깥에 UI를 만들면 매번 UI 인터렉션 시점에 데이터를 넘겨주는 api를 작성해야한다.
    // 그러면 camera 자식에게 새로운 캔버스...? 잠만? 나 왜이러고 있지??? 맞네. 
    // Ortho Camera 하나 만들어서 camera 자식으로 넣고 거기다가 ui 생성하자.
    // 왜 이딴거에 시간을 이렇게 쏟고 있었지????????????????????????????
    // 으잉???????????????????????????? 일단 열받으니까 다른 작업부터 고고.
    // const {camera} = useThree();
    // const [uiPosition, setUiPosition] = useState({
    //     topLeft:{
    //         x:0,y:0,z:0
    //     },
    //     topRight:{
    //         x:0,y:0,z:0
    //     },
    //     bottomRight:{
    //         x:0,y:0,z:0
    //     },
    //     bottomLeft:{
    //         x:0,y:0,z:0
    //     },
    // });
    // useEffect(() => {
    //     setUiPosition({
    //         topLeft:{
    //             x:camera.position, 
    //             y:camera.position, 
    //             z:camera.position
    //         },
    //         topRight:{
    //             x:camera.position, 
    //             y:camera.position, 
    //             z:camera.position
    //         },
    //         bottomRight:{
    //             x:camera.position, 
    //             y:camera.position, 
    //             z:camera.position
    //         },
    //         bottomLeft:{
    //             x:camera.position, 
    //             y:camera.position, 
    //             z:camera.position
    //         },
    //     })
    //     console.log(uiPosition);
    // },[]);

    const [toggleInventory, setToggleInventory] = useState({
        inventoryVis: false,
    })
    const [toggleEquip, setToggleEquip] = useState({
        wateringCan: false,
        hoe: true,
        shovel: false,
    })

    const [setTileTexture] = useStore((state) => [state.setTileTexture]);
    const [setItemTexture] = useStore((state) => [state.setItemTexture]);
    const [setNftTexture] = useStore((state) => [state.setNftTexture]);
    const [setGroundTexture] = useStore((state) => [state.setGroundTexture]);
    const [setEquip] = useStore((state) => [state.setEquip]);

    // useEffect(() => {
    //     setEquip(toggleEquip);
    // }, []);

    return (
        <>
            {
                <>
                {/* F-3 : UI 만들기. */}
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
                        {
                            toggleInventory.inventoryVis ? (
                                <div className="invenTest">
                                    <h3>인벤토리</h3>
                                    <br/><br/>
                                    <h5>타일</h5>
                                    <button
                                        onClick={(e) => {
                                            setTileTexture('dirt');
                                        }}
                                    >
                                        dirt
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setTileTexture('grass');
                                        }}
                                    >
                                        grass
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setTileTexture('glass');
                                        }}
                                    >
                                        glass
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setTileTexture('wood');
                                        }}
                                    >
                                        wood
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setTileTexture('log');
                                        }}
                                    >
                                        log
                                    </button>
                                    <br/><br/><br/><br/>
                                    <h5>아이템</h5>
                                    <button
                                        onClick={(e) => {
                                            setItemTexture('tree_oak');
                                        }}
                                    >
                                        tree_oak_item
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setItemTexture('stone');
                                        }}
                                    >
                                        stone_item
                                    </button>
                                    <br/><br/><br/><br/>
                                    <h5>NFT</h5>
                                    <button
                                        onClick={(e) => {
                                            setNftTexture('glass');
                                        }}
                                    >
                                        glass_nft
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setNftTexture('dirt');
                                        }}
                                    >
                                        dirt_nft
                                    </button>
                                    <br/><br/><br/><br/>
                                    <h5>그라운드</h5>
                                    <button
                                        onClick={(e) => {
                                            setGroundTexture('grass');
                                        }}
                                    >
                                        graa_ground
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setGroundTexture('wood');
                                        }}
                                    >
                                        wood_ground
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