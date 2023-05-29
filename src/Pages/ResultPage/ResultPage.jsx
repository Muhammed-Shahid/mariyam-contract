import React from 'react'
import './ResultPage.css'

function ResultPage() {
  return (
    <div>

        <div className="container">
          <div style={{marginTop:'8rem'}} className="title">
            <h2>
              Your Presentation Is Ready!!
            </h2>
          </div>
            <div className="showFile">
                <div className="fileBox">
                    <p>

                    Open File In Google Slides
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResultPage