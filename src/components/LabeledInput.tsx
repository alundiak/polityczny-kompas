import { getLabelFromKey } from "../common/helpers";
import { LabeledCheckboxProps } from "../common/models";

import "./labeledInput.css";

const LabeledCheckbox: React.FC<LabeledCheckboxProps> = (props) => {
  return (
    <label className="flex items-center">
      <input
        className="h-5 w-5"
        type="checkbox"
        name={props.scatterId}
        checked={props.isChecked}
        onChange={() => props.onChangeHandler(props.scatterId)}
      />
      &nbsp;
      {getLabelFromKey(props.scatterId)}
    </label>
  );
};

export default LabeledCheckbox;
