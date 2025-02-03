import React from 'react'
import '../github/github.css'
const Github = () => {
    return (
        <div>
            <div className="headr-git1">
                <h1 style={{ textAlign: "center", marginTop: "40px", fontSize: "2.1rem" }}>My Github</h1>
            </div>
            <div className="github">

                <div className="github-info">
                    <div className="headr-git1">
                        <h1>My Statistics</h1>
                    </div>
                    <div className="git1-image">
                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lokeshkumawat2003"
                            alt=""
                        />
                        <br />
                        <img
                            src="https://github-readme-stats.vercel.app/api?username=Lokeshkumawat2003&show_icons=true&locale=en"
                            alt=""
                        />
                        <br />
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com/?user=Lokeshkumawat2003&"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="github2">
                <div className="github-info2">
                    <div className="headr-git2">
                        <h1>My Github Calender</h1>
                    </div>
                    <div className="git2-image">
                        <img src="https://ghchart.rshah.org/Lokeshkumawat2003" alt="" />
                        <br />
                        <img
                            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Lokeshkumawat2003&theme=github_dark"
                            alt=""
                        />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github
