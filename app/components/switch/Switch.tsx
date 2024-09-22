import { ComponentPropsWithRef } from "react";
import { backgroundStyle, switchStyle } from "./styles.css";

interface SwitchProps extends ComponentPropsWithRef<"input"> {
  isLightMode: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ isLightMode, onChange, ...props }: SwitchProps) => {
  return (
    <div className={backgroundStyle({ mode: isLightMode ? "light" : "dark" })}>
      <input
        type="checkbox"
        role="switch"
        checked={isLightMode}
        onChange={onChange}
        aria-label="switch"
        aria-checked="true"
        className={switchStyle()}
        {...props}
      />
    </div>
  );
};

export default Switch;
