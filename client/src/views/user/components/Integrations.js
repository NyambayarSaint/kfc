import React from 'react';
import {AiTwotoneCalendar} from 'react-icons/ai'

const Integrations = () => {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4"><div className="chartjs-size-monitor" style={{position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1}}><div className="chartjs-size-monitor-expand" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1}}><div style={{position: 'absolute', width: '1000000px', height: '1000000px', left: 0, top: 0}} /></div><div className="chartjs-size-monitor-shrink" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -1}}><div style={{position: 'absolute', width: '200%', height: '200%', left: 0, top: 0}} /></div></div>

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Integrations</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                    <button className="btn btn-sm btn-outline-secondary">Share</button>
                    <button className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <AiTwotoneCalendar/>
                    This week
                    </button>
                </div>
            </div>
            
        </main>
    );
};

export default Integrations;