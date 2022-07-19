import Nav from '../components/Nav/Nav';
import img from '../data/fotografie.json'
import Gallery from 'react-grid-gallery';

import styles from "../styles/images.module.scss";




const Fotografien= () => {

    return (
        <main>
            <Nav />
            <div className={styles.Fotografien}>
                <Gallery images={img}/>
            </div>
        </main>
    )
}

export default Fotografien;