import React from 'react';

const MainContent = ({ windowWidth, onClickCB, activeComp: ActiveComponent }) => {
    return (
        ActiveComponent && <ActiveComponent />
    )
}

export default MainContent;