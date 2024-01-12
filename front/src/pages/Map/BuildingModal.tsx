import { useState } from "react";
import { building } from "../../scripts/interfaces/building";
import Building from "../Buildings/Building";
import { useInfoContext } from "../../scripts/Context";

import pb from "../../scripts/pb/pb";
import { collections } from "../../scripts/pb/collections";
import { RecordSubscription } from "pocketbase";

const BuildingModal = ({ data }: { data: building }) => {
    const infos = useInfoContext();
    const [bData, setBData] = useState<building>(data);

    const getInfos = async () => {
        pb.collection(collections.buildings).subscribe(
            bData.id,
            (e: RecordSubscription<building>) => {
                setBData(e.record);
            }
        );
    };

    return (
        <Building
            buildingKey={bData.type}
            building={bData}
            invalidate={getInfos}
            info={infos.get(data.type)}
        />
    );
};

export default BuildingModal;
