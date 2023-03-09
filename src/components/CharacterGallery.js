import mydata from  "../data/characterData.json"
import Character from  "./Character"

function CharacterGallery() {

    return (
<div data-test="component-char-gallery">

<p>blah blah blah</p>
{mydata.map(c => {
            return <Character key={c._id} {...c} />
})}




</div>

    )
}

export default CharacterGallery