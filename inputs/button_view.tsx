import { useAsyncValue } from "ergo-hex";
import React, { useRef } from "react";
import { useFocusSync } from "../foundation/react/hooks/use_focus_sync";
import { useForkRef } from "../foundation/react/hooks/use_fork_ref";
import { ButtonPresenter } from "./button_presenter";

export interface ButtonViewProps extends React.AriaAttributes {
  presenter: ButtonPresenter;
  children: React.ReactNode;
  role?: React.AriaRole;
}

export const ButtonView = React.forwardRef<HTMLButtonElement, ButtonViewProps>(
  function ButtonView({ presenter, children, ...props }: ButtonViewProps, ref) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const isFocused = useAsyncValue(presenter.isFocusedBroadcast);
    const isActive = useAsyncValue(presenter.isActiveBroadcast);
    const isDisabled = useAsyncValue(presenter.isDisabledBroadcast);
    const forkedRef = useForkRef(ref, buttonRef);

    useFocusSync(buttonRef, isFocused);

    return (
      <button
        {...props}
        ref={forkedRef}
        disabled={isDisabled}
        onClick={presenter.execute}
        onMouseDown={presenter.activate}
        onMouseLeave={presenter.deactivate}
        onMouseUp={presenter.deactivate}
        onFocus={focus}
        onBlur={blur}
      >
        {children}
      </button>
    );
  }
);
