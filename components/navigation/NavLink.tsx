import Link, { LinkProps } from 'next/link'
import styles from './navigation.module.css';

interface Props extends LinkProps {
    text: string;
    active?: boolean;
}

const NavLink: React.FC<Props> = (props) => {

    return (
        <Link href={props.href} className={styles.navigationLink}>{props.text}</Link>
    )

}

export default NavLink