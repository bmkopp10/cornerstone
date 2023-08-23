import styles from './hero.module.css'
import HeroBanner from './HeroBanner';

const Hero = () => {

    //const backgroundImage = 'https://static.wixstatic.com/media/2563c4_af3cea2103e44385b2c0ea341edc2c43~mv2.jpg/v1/fill/w_3000,h_1331,fp_0.50_0.50,q_90,enc_auto/2563c4_af3cea2103e44385b2c0ea341edc2c43~mv2.jpg'
    const backgroundImage = 'https://traveler.marriott.com/wp-content/uploads/2022/03/lake-michigan-skyline-milwaukee-wisconsin.jpg'

    return (
        <div className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div style={{alignSelf: 'flex-end', width: '100%'}}>
                <HeroBanner />
            </div>
        </div>
    )
}
export default Hero;