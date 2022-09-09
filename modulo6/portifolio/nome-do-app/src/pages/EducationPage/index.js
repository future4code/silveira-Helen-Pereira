import React from 'react';
import { Courses } from './Courses';
import { MyKnowledge } from './MyKnowledge';
import { EducationContainer } from './styled';

export const EducationPage = () => {
    return (
        <EducationContainer>
            <MyKnowledge />
            <Courses />
        </EducationContainer>
    );
};