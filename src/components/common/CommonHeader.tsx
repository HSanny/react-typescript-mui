import { Divider } from '@mui/material';
import * as React from 'react';

interface CommonHeaderProps {
    title: string;
    showDivider?: boolean;
    isSub?: boolean;
}

export default function CommonHeader({ title, isSub = false, showDivider = true}: CommonHeaderProps) {
    return (
        <>
            <h1 className={isSub ? 'pageSubHeader' : 'pageHeader'}>{title}</h1>
            {showDivider ? <Divider /> : null}
        </>
    ); 
}