import { ComponentPropsWithRef } from "react";
import { switchStyle, toggleHandleStyle } from "./styles.css";

interface SwitchProps extends ComponentPropsWithRef<"input"> {
  isLightMode: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ isLightMode, onChange, ...props }: SwitchProps) => {
  return (
    <div className={switchStyle({ mode: isLightMode ? "light" : "dark" })}>
      <input
        type="checkbox"
        role="switch"
        checked={isLightMode}
        onChange={onChange}
        className={toggleHandleStyle()}
        {...props}
      />
    </div>
  );
};

export default Switch;
