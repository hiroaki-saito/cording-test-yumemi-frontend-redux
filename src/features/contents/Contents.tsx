import React from "react";
import PrefectureCheckUnit from "./PrefectureCheckUnit";

const Contents = (props: any) => {
  const onClickChekbox = props.onClickChekbox;
  return (
    <div>
      <h2>ι½ιεΊη</h2>
      <PrefectureCheckUnit
        onClickChekbox={onClickChekbox}
      ></PrefectureCheckUnit>
    </div>
  );
};

export default Contents;
