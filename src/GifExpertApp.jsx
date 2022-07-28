import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['BTS']);

  const onAddCategory = newCategory => {
    //categories.push('Astro'); No es recomendale usar push en react porque hace mutaciones
    //setCategories([ ...categories, 'Astro']);
    // validar que no se repita la categoria (no distingue entre mayuscula)
    if (categories.includes(newCategory)) return;

    setCategories(cate => [newCategory, ...categories]);
    //console.log(newCategory)
  }
  return (
    <>
      {/*Titulo*/}
      <h1>GifExpertApp</h1>

      {/*Input*/}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />


      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category} />
        )
        )
      }
      
    </>
  )
}
