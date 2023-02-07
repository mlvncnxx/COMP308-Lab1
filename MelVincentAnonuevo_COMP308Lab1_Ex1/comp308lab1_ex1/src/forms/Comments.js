import React, {useState} from 'react';
import { useParams, NavLink } from 'react-router-dom';

function Comments() {
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setcourseName] = useState('');
    const [comments, setComments] = useState('');
    const [profName, setProfName] = useState('');
    const [favTopic, setFavTopic] = useState('');
    const {studentEmail} = useParams();

    const handleCourseCode = (event) => {
        setCourseCode(event.target.value);
    }

    const handleCourseName = (event) => {
        setcourseName(event.target.value);
    }

    const handleComments = (event) => {
        setComments(event.target.value);
    }

    const handleProfName = (event) => {
        setProfName(event.target.value);
    }

    const handleFavTopic = (event) => {
        setFavTopic(event.target.value);
    }

    return (
        <React.Fragment>
            <div>
                <form>
                    <b>
                        <label>
                        Course Code:
                        <input
                            type="text"
                            name="courseCode"
                            id="courseCode"
                            value={courseCode}
                            onChange={handleCourseCode}
                        />
                        </label>
                        <br/>
                        <br/>
                    </b>
                    <b>
                        <label>
                        Course Name:
                        <input
                            type="text"
                            name="courseName"
                            id="courseName"
                            value={courseName}
                            onChange={handleCourseName}
                        />
                        </label>
                        <br/>
                        <br/>
                    </b>
                    <b>
                        <label>
                        Student Email:
                        <input
                            type="email"
                            name="studentEmail"
                            id="studentEmail"
                            value={studentEmail}
                        />
                        </label>
                        <br/>
                        <br/>
                    </b>
                    <b>
                        <label>
                        Professor Name:
                        <input
                            type="text"
                            name="profName"
                            id="profName"
                            value={profName}
                            onChange={handleProfName}
                        />
                        </label>
                        <br/>
                        <br/>
                    </b>
                    <b>
                        <label>
                        Favorite Topic:
                        <input
                            type="text"
                            name="favTopic"
                            id="favTopic"
                            value={favTopic}
                            onChange={handleFavTopic}
                        />
                        </label>
                        <br/>
                        <br/>
                    </b>
                    <b>
                        <label>
                        Your Comments:
                        <textarea
                            name="comments"
                            id="comments"
                            value={comments}
                            onChange={handleComments}
                        />
                        </label>
                        <br/>
                        <br/>
                    </b>
                </form>
                <NavLink exact to ={'/ThankYou/${studentEmail}/${comments}'}>
                    <button type="submit" value="submit-btn" id="submit-btn">Submit</button>
                </NavLink>
            </div>
        </React.Fragment>
    );
}

export default Comments;