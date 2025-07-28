import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="">
            <h1>🎓 AI Career Counselor</h1>
            <p>Find your perfect career path using AI and Machine Learning.</p>
            <div className="btn-group">
                <button className='p-1 m-4 border-2 rounded' onClick={() => navigate('/register')}>Register</button>
                <button className='p-1 m-4 border-2 rounded' onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>
    );
};

export default WelcomePage;
