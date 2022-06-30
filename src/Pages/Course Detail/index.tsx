import About from '../../Component/About';
import Materi from '../../Component/Materi';
import './index.css';

const CourseDetail = () => {
    return (
        <div>
            <div className='container'>
                <div className='container-wrap'>
                <h1 className='title'>HTML</h1>
                    <div className='button'>
                        <p>Pemula</p>
                        <p>16 Jam Belajar</p>
                        <p>HTML</p>
                        </div>
                        <br /> <br />
                    <p><span>Mulai Belajar</span></p>
                </div>
            </div>
            <div className='silabus'>
                <div className='silabus-button'>
                    <p>Lihat Silabus</p>
                </div>
            </div>
            <About />
            <Materi />

        </div>
    )
}

export default CourseDetail