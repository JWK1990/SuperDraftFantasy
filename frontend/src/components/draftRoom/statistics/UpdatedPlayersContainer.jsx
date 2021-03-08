import React from "react";
import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./TestStyles.css";

const Row = ({ index, style }) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        Row {index}
    </div>
);

export default function Example() {
    return (
        <div className="playerSearch">
            <AutoSizer>
                {({height, width}) => (
                    <FixedSizeList
                        className="List"
                        height={height}
                        itemCount={1000}
                        itemSize={35}
                        width={width}
                    >
                        {Row}
                    </FixedSizeList>
                )}
            </AutoSizer>
        </div>
    )
};
