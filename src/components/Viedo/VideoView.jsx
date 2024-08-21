import './VideoView.css'

const VideoView = () => {
  return (
    <section className='VideoView' id='VideoView'>
        <div className="image-container">
            <img src="./images/img.jpg" alt="VideoView" />
        </div>
        <div className="content-container">
            <div className="text-container">
                <span>VideoView</span>
                <h3>Get Closer View & Different Feeling</h3>
            </div>
            <div className="video-container">
                <img src="./images/video-frame.jpg" alt="video-frame" />
                <div className="play-video-icon">
                    <i className="fa-solid fa-play"></i>
                </div>
            </div>
            <div className="box-container">
                <div className="boxes">

                    <div className="box">
                        <span id='circle'></span>
                        <span>34</span>
                        <p>Buildings Finished Now</p>
                    </div>
                    
                    <div className="box">
                        <span id='circle'></span>
                        <span>12</span>
                        <p>Years Experience</p>
                    </div>

                    <div className="box">
                        <span id='circle'></span>
                        <span>24</span>
                        <p>Awwards Won 2023</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default VideoView