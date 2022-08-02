import React from 'react';

import './button.scss';


function ButtonCategory() {
    return (
        <>

<div className="buttonCategories">
    <Button className="Category Food"> Chez moi, on mange </Button>
    <Button className="Category Fun"> Ce que j'aime faire </Button>
    <Button className="Category Habits"> La ou je vis </Button>
    <Button className="Category Country"> Dans mon pays, il y a </Button>
    <Button className="Category Party"> La fete chez moi </Button>
    <Button className="Category City "> Ma ville </Button>

</div>

           
</>
);
}

export default ButtonCategory;