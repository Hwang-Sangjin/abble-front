import { useInterval } from '../hooks/useInterval';
import { useStore } from '../hooks/useStore';
import Model from './Model';

export default function Models() {
    const [models, addModel, removeModel, saveWorld] = useStore((state) => [
        state.models,
        state.addModel,
        state.removeModel,
        state.saveWorld,
    ]);

    useInterval(
        () => {
            saveWorld(models);
        },
        // 10초 텀, 이거 꼭 자세히 설명드려야 한다. 게임 제작할때 세이브 타이밍은 데이터 변경 시점이다. 걍 모든 게임이 다그렇다. 이렇게 인터벌 돌리면 안됨. 지금은 세이브 테스트할 시간이 없어서 일단 넘김.
        10000,
    );

    return models.map((model) => {
        return (
            <Model
                key={model.key}
                texture={model.texture}
                nft={model.nft}
                position={model.pos}
                addModel={addModel}
                removeModel={removeModel}
            />
        )
    })

}