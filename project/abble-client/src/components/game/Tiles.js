import { useInterval } from '../../hooks/useInterval';
import { useStore } from '../../hooks/useStore';
import Tile from './Tile';

export default function Tiles() {
    const [tiles, addTile, removeTile, saveTile] = useStore((state) => [
        state.tiles,
        state.addTile,
        state.removeTile,
        state.saveTile,
    ]);

    useInterval(
        () => {
            saveTile(tiles);
        },
        // 10초 텀, 이거 꼭 자세히 설명드려야 한다. 게임 제작할때 세이브 타이밍은 데이터 변경 시점이다. 걍 모든 게임이 다그렇다. 이렇게 인터벌 돌리면 안됨. 지금은 세이브 테스트할 시간이 없어서 일단 넘김.
        10000,
    );

    return tiles.map((tile) => {
        return (
            <Tile
                key={tile.key}
                tileTexture={tile.tileTexture}
                position={tile.pos}
                addTile={addTile}
                removeTile={removeTile}
            />
        )
    })

}