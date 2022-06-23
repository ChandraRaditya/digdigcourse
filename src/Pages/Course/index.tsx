import './index.css'
import ButtonCourse from '../../Component/ButtonCourse'
import {Link} from 'react-router-dom';

const Course = () => {
    return (
        <div className='course-wrapper'>
            <div className="course-title">
                <h1>HTML Course</h1>
            </div>
            <div className="course-content">
                <div className="course-item">
                    <h1>Modul belajar</h1>
                    {[...new Array(6)]
                        .map(
                            () => <ButtonCourse 
                            desc='modul'
                            link='/question'
                        />
                        )}
                </div>
                <div className="course-description">
                    <h1 className='course-description-title'>course</h1>
                    <p style={{ fontSize: '24px' }}>
                        {[...new Array(6)]
                            .map(
                                () => `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam corrupti porro possimus quae doloribus. Totam debitis ad, 
                                quasi cumque possimus sed eius necessitatibus earum, a aut odio, porro obcaecati voluptas.`,
                            )
                            .join('\n')}
                    </p>
                    <div className="course-action">
                        <Link to='/question' className='btn-course-action'>Selanjutnya</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Course;