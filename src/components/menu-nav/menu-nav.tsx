import styles from "./menu-nav.module.scss";

export type MenuNavProps = Readonly<{
  items: Array<{
    label: string;
  }>;
}>;

export const MenuNav = ({ items }: MenuNavProps) => (
  <div className={styles.menuNav}>
    {items.map((item, index) => (
      <a key={index} className={styles.menuNavItem}>
        {item.label}
      </a>
    ))}
  </div>
);
