import React from 'react';

import './PageArticle.scss';


function PageArticle() {
    return (
        <>
            < <div className="Article__Header">
                <div className="Article__Header__Presentation">
                    <h1 className="Article__Header__Title">Blablbla</h1>
                    <p className="Article__Header__AuthorName">bloblibloublu</p>
                </div>
                <div>
                    <Button className="Category"> Ma ville </Button>
                </div>
            </div>

            <section className="Article" >
                <main className="Article__Text">
                    Lorem 111111111111111111111111111111111111111111111111111111 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                </main>
                <img className="Article__Image"></img>
            </section>

            <section className="Comments">
                <div className="Comment__Text">
                    <p className="Comment__Text__Team"> School, TeamName, date</p>
                    <p className="Comment__Text__Comment"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                </div>
                <div className="Comment__Text">
                    <p className="Comment__Text__Team"> School, TeamName, date</p>
                    <p className="Comment__Text__Comment"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                </div>

            </section>

            <section className="Writing__Comment">
                <h2 className="Writing__Comment__Title">Ecris ton commentaire</h2>
                <input type="text" className="TextAreaComment" />
            </section>
        </>
    );
}

export default PageArticle;