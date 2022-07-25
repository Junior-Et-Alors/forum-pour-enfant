import React from 'react';

import './ForumThematique.scss';


function ForumThematique() {
    return (
        <>
            <div class="ArticleThematique">

                <section class="ArticlePresentation">
                    <div class="ArticleResum">
                        <h1 class="TitleArticle">Titre de l'article</h1>
                        <p class="Team"> TeamName, date, country</p>
                        <p class="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                    <div class="ArticleResum">
                        <h1 class="TitleArticle">Titre de l'article</h1>
                        <p class="Team">TeamName, date, country</p>
                        <p class="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                    <div class="ArticleResum">

                        <h1 class="TitleArticle">Titre de l'article</h1>
                        <p class="Team"> TeamName, date, country</p>
                        <p class="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>
                    <div class="ArticleResum">
                        <h1 class="TitleArticle">Titre de l'article</h1>
                        <p class="Team"> TeamName, date, country</p>
                        <p class="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>

                    <div class="ArticleResum">
                        <h1 class="TitleArticle">Titre de l'article</h1>
                        <p class="Team">TeamName, date, country</p>
                        <p class="Resum"> blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </p>
                    </div>


                </section>



                <div class="buttonCategories">
                    <Button class="Category City "> Ma ville </Button>
                    <Button class="Category Food"> Chez moi, on mange </Button>
                    <Button class="Category Fun"> Ce que j'aime faire </Button>
                    <Button class="Category Habits"> La ou je vis </Button>
                    <Button class="Category Country"> Dans mon pays, il y a </Button>
                    <Button class="Category Party"> La fete chez moi </Button>

                </div>
            </div>

        </>
    );
}

export default ForumThematique;