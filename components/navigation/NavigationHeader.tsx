import styles from './navigation.module.css';
import Image from 'next/image'
import NavLink from './NavLink';

type Props = {
    height: number
}

const NavigationHeader: React.FC<Props> = (props) => {
    return (
        <div style={{height: props.height}} className={styles.navigationHeader}>
            <div>
                <Image
                    priority
                    src="/images/logo.png"
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '60px' }}
                />
            </div>
            <div>
                <NavLink text='Home' href={''}/>
                <NavLink text='Appraisals' href={''}/>
                <NavLink text='Review' href={''}/>
                <NavLink text='Consulation' href={''}/>
            </div>
        </div>
    )
}
export default NavigationHeader