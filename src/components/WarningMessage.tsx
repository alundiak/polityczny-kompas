import { useState, useEffect } from "react";

import "./warningMessage.css";

const WarningMessage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div className="warning">
        <span>⚠️</span>
        There are People with same political coordinates. Review your data.
      </div>
    )
  );
};

export default WarningMessage;
