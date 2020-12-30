import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainJumbotron from '../../components/MainJumbotron'
import Tests from './Tests'
import Quiz from './Quiz'

function Resources() {
    return (
        <>
        <MainJumbotron
            title="Aptitute Test"
            subtitle="Ea voluptate cupidatat adipisicing labore sint est elit culpa Lorem incididunt consectetur pariatur amet esse. Pariatur occaecat ea sint magna. Aliqua Lorem in nisi aute duis nisi dolor occaecat sit sint. Commodo sunt culpa occaecat non aliqua ipsum esse."
            image="assets/Resources/banner.png"
        />
        <Routes>
            <Route path="/" element={<Tests />}></Route>
            <Route path=":quizName" element={<Quiz />}></Route>
        </Routes>
        </>
    );
}

export default Resources;