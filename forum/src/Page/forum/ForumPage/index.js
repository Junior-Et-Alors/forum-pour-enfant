import React from 'react';

import './ArticleByThematique.scss';


function ArticleByThematique() {
    return (
        <>
            <div className="ArticleThematique">

                <Button className="Category City Principal"> Ma ville </Button>


                <section className="Article__Presentation">
                    <div className="Article__Presentation__TextPresentation">
                        <div className="Article__Presentation__TitleArticle">Titre de l'article</h1>
                            <p className="Article__Presentation__Team"> School, TeamName, date, country</p>
                        </div>
                        <p className="Article__Presentation__Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                    <div className="Article__Presentation__Article">
                        <div className="Article__Presentation__TextPresentation">
                            <h1 className="Article__Presentation__TitleArticle">Titre de l'article</h1>
                            <p className="Article__Presentation__Team"> School, TeamName, date, country</p>
                        </div>
                        <p className="Article__Presentation__Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                    <div className="Article__Presentation__Article">
                        <div className="Article__Presentation__TextPresentation">
                            <h1 className=" Article__Presentation__TitleArticle">Titre de l'article</h1>
                            <p className="Article__Presentation__Team"> School, TeamName, date, country</p>
                        </div>
                        <p className="Article__Presentation__Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                </section>


           
        </>
    );
}

export default ArticleByThematique;