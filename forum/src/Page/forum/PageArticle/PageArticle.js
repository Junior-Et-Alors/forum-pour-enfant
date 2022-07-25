import React from 'react';

import './PageArticle.scss';


function PageArticle() {
    return (
        <>
            <div className="ArticleHeader">
                <div className="PresentArticle"> <h1 className="ArticleTitle">Blablbla</h1>
                    <p className="AuthorName">bloblibloublu</p>
                </div>
                <div>
                    <Button className="Category"> Ma ville </Button>
                </div>
            </div>

            <section className="Article" >
                <main className="ArticleText">
                    Lorem 111111111111111111111111111111111111111111111111111111 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                </main>
                <img className="ArticleImage"></img>
            </section>

            <section className="Comments">
                <div className="CommentText">
                    <p className="Team"> School, TeamName, date</p>
                    <p className="TeamComment"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                </div>
                <div className="CommentText">
                    <p className="Team"> School, TeamName, date</p>
                    <p className="TeamComment"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                </div>

            </section>

            <section className="WritingComment">
                <h2 className="TitleWritingComment">Ecris ton commentaire</h2>
                <input type="text" className="TextAreaComment" />
            </section>
        </>
    );
}

export default PageArticle;