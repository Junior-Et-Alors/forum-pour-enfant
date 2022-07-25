import React from 'react';

import './ArticleByThematique.scss';


function ArticleByThematique() {
    return (
        <>
            <div className="ArticleThematique">

                <Button className="Category City Principal"> Ma ville </Button>


                <section className="ArticlePresentation">
                    <div className="ArticleResum">
                        <div className="TextPresentation">
                            <h1 className="TitleArticle">Titre de l'article</h1>
                            <p className="Team"> School, TeamName, date, country</p>
                        </div>
                        <p className="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                    <div className="ArticleResum">
                        <div className="TextPresentation">
                            <h1 className="TitleArticle">Titre de l'article</h1>
                            <p className="Team"> School, TeamName, date, country</p>
                        </div>
                        <p className="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                    <div className="ArticleResum">
                        <div className="TextPresentation">
                            <h1 className="TitleArticle">Titre de l'article</h1>
                            <p className="Team"> School, TeamName, date, country</p>
                        </div>
                        <p className="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                </section>


            </div>
            <div className="buttonCategories">
                <Button className="Category Food"> Chez moi, on mange </Button>
                <Button className="Category Fun"> Ce que j'aime faire </Button>
                <Button className="Category Habits"> La ou je vis </Button>
                <Button className="Category Country"> Dans mon pays, il y a </Button>
                <Button className="Category Party"> La fete chez moi </Button>

            </div>
        </>
    );
}

export default ArticleByThematique;