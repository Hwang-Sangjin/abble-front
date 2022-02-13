import { useKeyboardControls } from "../../hooks/useKeyboardControls"

export const Player = (props) => {
    // 사용자 행동 종류 나열해야됨. useKeyboardControls에서 이벤트를 받음.
    const {
        toggleInventory,
        toggleNFTMarket,
        toggleEquip,
    } = useKeyboardControls();

    console.log("Player.js : " + toggleInventory);

    return (
        <>
        </>
    )
}