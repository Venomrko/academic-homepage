import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';

export function HeaderTools() {
  return <div className="header-tools">
    <ThemeSwitch mode="light-dark-system" />
  </div>;
}
