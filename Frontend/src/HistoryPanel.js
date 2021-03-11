import React from 'react';
import { useSelector, } from 'react-redux';
import { selectHistory } from './redux/actions';

function HistoryItem(text) {
    return (
        <div key={text} className="m_panel">
            <p className="m_title">{text.item}</p>
        </div>
    )
}


function HistoryPanel() {

    const history = useSelector(selectHistory);

    return (
        <div id="historyPanel">
            <h4 className="header">Top history</h4>
            <div className="history_wrap">
                {history.map((text) => <HistoryItem item={text} />)}
            </div>

        </div>
    );
}

export default HistoryPanel;
