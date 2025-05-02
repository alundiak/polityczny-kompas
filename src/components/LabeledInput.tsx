import { getLabelFromKey } from "../common/helpers";
import { LabeledCheckboxProps } from "../common/models";

import "./labeledInput.css";

const LabeledCheckbox: React.FC<LabeledCheckboxProps> = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        name={props.scatterId}
        checked={props.isChecked}
        onChange={() => props.onChangeHandler(props.scatterId)}
      />
      {getLabelFromKey(props.scatterId)}
    </label>
  );
};

export default LabeledCheckbox;
