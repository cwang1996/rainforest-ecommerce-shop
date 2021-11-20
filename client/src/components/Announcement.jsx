import React from 'react';
import styled from 'styled-components';

const AnnouncementContainer = styled.div`
    height: 40px;
    background-color: #172D52;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <AnnouncementContainer>
            Free shipping, at any time.
        </AnnouncementContainer>
    )
}

export default Announcement
