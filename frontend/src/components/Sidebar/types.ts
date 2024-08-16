export interface NavItem {
    title: string;
    href: string;
    icon: React.ElementType;
    color?: string;
    isChidren?: boolean;
    children?: NavItem[];
}
