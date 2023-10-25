// index.d.ts

// Import types
import { BadgeProps } from './app/components/Badge/Badge';
import { ButtonProps }  from './app/components/Button/Button';
import { CheckboxProps } from './app/components/Checkbox/Checkbox';
import { DestructiveButtonProps } from './app/components/DestructiveButton/DestructiveButton';
import { ModeSwitchProps } from './app/components/ModeSwitch/ModeSwitch';
import { TabProps } from './app/components/Tab/Tab';
import { TabTextProps } from './app/components/TabText/TabText';
import { TextAreaProps } from './app/components/TextArea/TextArea';

// Export types
export {
  BadgeProps,
  ButtonProps,
  CheckboxProps,
  DestructiveButtonProps,
  ModeSwitchProps,
  TabProps,
  TabTextProps,
  TextAreaProps,
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
