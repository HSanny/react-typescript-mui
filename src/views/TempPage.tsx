import { Skeleton } from '@mui/material';
import * as React from 'react';

export default function TempPage() {
    return (
        <div>
            <Skeleton variant="text" width={200} height={50} animation={false}/>
            <Skeleton variant="rectangular" height={500} animation={false}/>
        </div>
    );
}