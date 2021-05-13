import React,{useEffect,useState} from 'react';
import {Category} from '../Category/index';
import {List, Item} from './styles';

function useCategoriesData(){
    const [categories,setCategories] = useState([]);
    const [showFixed,setShowFixed] = useState(false);
    useEffect(function(){
        window.fetch('https://petgram-chrockny.vercel.app/categories')
        .then(res => res.json())
        .then(response =>{
            setCategories(response)
        })
        .catch(e=>console.log(e))
    },[])
    return {categories};
}

export const ListOfCategories = () =>{
    const {categories}= useCategoriesData();
    const [showFixed,setShowFixed] = useState(false);

    useEffect(function(){
        const onScroll = e=>{
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        }
        document.addEventListener('scroll',onScroll);

        return()=>document.removeEventListener('scroll',onScroll);
    })

    const renderList = (fixed) =>(
    <List fixed={fixed}>
        {
        categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
        }
    </List>   
    )
    return(
        <>
        {renderList()}
        {showFixed && renderList(true)}
        </>
    )
}
