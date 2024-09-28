import { ComponentPropsWithRef } from "react";
import { backgroundStyle, switchStyle } from "./styles.css";

interface SwitchProps extends ComponentPropsWithRef<"input"> {
  mode: "dark" | "light";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ mode, onChange, ...props }: SwitchProps) => {
  return (
    <div className={backgroundStyle({ mode: mode })}>
      <input
        type="checkbox"
        role="switch"
        checked={mode === "light"}
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
