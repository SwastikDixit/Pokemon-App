import React from "react";
import './Style.css';
const Card=({pokemon,loading,infoPokemon})=>{
    console.log(pokemon);
    return(
        <> {
            loading ? <h1>Loading...</h1>:
             pokemon.map((item)=>{
                 return(
                    <>
                     <div className="Card" key={item.id} onClick={()=>infoPokemon(item)}>
                      <h2>{item.id}</h2>
                     <div className="Image">
                     <img src={item.sprites.front_default} alt="" />
                     </div>
                     {'\n'}
                    <h2>{item.name}</h2>
                      </div>
                    </>
                 )
             })
         }
        </>
    )
}
export default Card;
