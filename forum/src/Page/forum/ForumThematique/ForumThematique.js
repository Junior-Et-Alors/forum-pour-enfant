import React from 'react';

import './ForumThematique.scss';


function ForumThematique() {
    return (
        <>
            <div className="ArticleThematique">

                <section className="ArticlePresentation">
                    <div className="ArticleResum">
                        <h1 className="TitleArticle">Titre de l'article</h1>
                        <p className="Team"> TeamName, date, country</p>
                        <p className="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                    <div className="ArticleResum">
                        <h1 className="TitleArticle">Titre de l'article</h1>
                        <p className="Team">TeamName, date, country</p>
                        <p className="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                    <div className="ArticleResum">

                        <h1 className="TitleArticle">Titre de l'article</h1>
                        <p className="Team"> TeamName, date, country</p>
                        <p className="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>
                    <div className="ArticleResum">
                        <h1 className="TitleArticle">Titre de l'article</h1>
                        <p className="Team"> TeamName, date, country</p>
                        <p className="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                    <div className="ArticleResum">
                        <h1 className="TitleArticle">Titre de l'article</h1>
                        <p className="Team">TeamName, date, country</p>
                        <p className="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>


                </section>



                <div className="buttonCategories">
                    <Button className="Category City "> Ma ville </Button>
                    <Button className="Category Food"> Chez moi, on mange </Button>
                    <Button className="Category Fun"> Ce que j'aime faire </Button>
                    <Button className="Category Habits"> La ou je vis </Button>
                    <Button className="Category Country"> Dans mon pays, il y a </Button>
                    <Button className="Category Party"> La fete chez moi </Button>

                </div>
            </div>

        </>
    );
}

export default ForumThematique;