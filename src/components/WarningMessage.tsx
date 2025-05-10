import { useState, useEffect } from "react";
import { WarningMessageProps } from "../common/models";

import "./warningMessage.css";

const WarningMessage = (props: WarningMessageProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const list = props.duplicateCoordinates
    ?.map((item) => item.lastName)
    .toString();

  return (
    visible && (
      <div className="warning">
        <span>⚠️</span>People with same political coordinates: {list}
      </div>
    )
  );
};

export default WarningMessage;
