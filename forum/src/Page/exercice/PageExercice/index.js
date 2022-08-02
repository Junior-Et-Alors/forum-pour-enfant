import React from 'react';

import './PageExercice.scss';


function PageExercice() {
    return (
        <>
                 <div className="Exercice__Header">
                <div className= "Exercice__Header__Presentation"> 
                <h1 className="Exercice__Header__Title">Blablbla</h1>
                    <p className="Exercice__Header__AuthorName">bloblibloublu</p>
                </div>
                <div>
                    <Button className="Category"> Ma ville </Button>
                </div>
            </div>

            <section className="Article" >
                <main className="Exercice__Text">
                    Lorem 111111111111111111111111111111111111111111111111111111 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                </main>
                <img className="Exercice__Image"></img>
            </section>

            <section className="Questions">
                <div className="Question">
                    <p className="Question__Text"> blabla</p>
                    <ul>
                    <li className="Question__Text__Reponse" id="un"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </li>
                    <li className="Question__Text__Reponse" id="deux"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </li>
                    <li className="Question__Text__Reponse" id="trois"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </li>
                    </ul>
                </div>
                <div className="Question">
                    <p className="Question__Text"> blabla</p>
                    <ul>
                    <li className="Question__Text__Reponse" id="un"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </li>
                    <li className="Question__Text__Reponse" id="deux"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </li>
                    <li className="Question__Text__Reponse" id="trois"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </li>
                    </ul>
                </div>

            </section>
<div className='Result'>
    <Button>Valider</Button>
    <div  className='Result__Comment'>
        <p className='Result__Comment__Text'></p>
        <p className='Result__Comment__Percent'></p>
        </div>
    
    </div>

        </>
    );
}

export default PageExercice;