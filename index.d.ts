// index.d.ts

// Import types
import { BadgeProps } from './app/components/Badge/Badge';
import { ButtonProps }  from './app/components/Button/Button';
import { CheckboxProps } from './app/components/Checkbox/Checkbox';
import { DestructiveButtonProps } from './app/components/DestructiveButton/DestructiveButton';
import { ChipProps } from './app/components/Chip/Chip';
import { FilterProps } from './app/components/Filter/Filter';
import { InputDropdownProps } from './app/components/InputDropdown/InputDropdown';
import { InputFieldProps } from './app/components/InputField/InputField';
import { ModeSwitchProps } from './app/components/ModeSwitch/ModeSwitch';
import { TabProps } from './app/components/Tab/Tab';
import { TabTextProps } from './app/components/TabText/TabText';
import { TextAreaProps } from './app/components/TextArea/TextArea';
import { ToastProps } from './app/components/Toast/Toast';

// Export types
export {
  BadgeProps,
  ButtonProps,
  CheckboxProps,
  DestructiveButtonProps,
  ChipProps,
  FilterProps,
  InputDropdownProps,
  InputFieldProps,
  ModeSwitchProps,
  TabProps,
  TabTextProps,
  TextAreaProps,
  ToastProps
};

// Declare modules for components
declare module './app/components/Badge/Badge' {
  export default function Badge(props: BadgeProps): JSX.Element;
}

declare module './app/components/Button/Button' {
  export default function Button(props: ButtonProps): JSX.Element;
}

declare module './app/components/Checkbox/Checkbox' {
  export default function Checkbox(props: CheckboxProps): JSX.Element;
}

declare module './app/components/DestructiveButton/DestructiveButton' {
  export default function DestructiveButton(props: DestructiveButtonProps): JSX.Element;
}

declare module './app/components/Chip/Chip' {
  export default function Chip(props: ChipProps): JSX.Element;
}

declare module './app/components/Filter/Filter' {
  export default function Filter(props: FilterProps): JSX.Element;
}

declare module './app/components/InputDropdown/InputDropdown' {
  export default function InputDropdown(props: InputDropdownProps): JSX.Element;
}

declare module './app/components/InputField/InputField' {
  export default function InputField(props: InputFieldProps): JSX.Element;
}

declare module './app/components/ModeSwitch/ModeSwitch' {
  export default function ModeSwitch(props: ModeSwitchProps): JSX.Element;
}

declare module './app/components/Tab/Tab' {
  export default function Tab(props: TabProps): JSX.Element;
}

declare module './app/components/TabText/TabText' {
  export default function TabText(props: TabTextProps): JSX.Element;
}

declare module './app/components/TextArea/TextArea' {
  export default function TextArea(props: TextAreaProps): JSX.Element;
}

declare module './app/components/Toast/Toast' {
  export default function Toast(props: ToastProps): JSX.Element;
}
