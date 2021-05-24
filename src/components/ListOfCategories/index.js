import React,{useEffect,useState} from 'react';
import {Category} from '../Category/index';
import {List, Item} from './styles';

function useCategoriesData(){
    const [categories,setCategories] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        window.fetch('https://petgram-chrockny.vercel.app/categories')
        .then(res => res.json())
        .then(response =>{
            setCategories(response)
            setLoading(false);
        })
        .catch(e=>console.log(e))
    },[])
    return {categories,loading};
}

export const ListOfCategories = () =>{
    const {categories,loading}= useCategoriesData();
    const [showFixed,setShowFixed] = useState(false);

    useEffect(function(){
        const onScroll = e=>{
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        }
        document.addEventListener('scroll',onScroll);

        return document.removeEventListener('scroll',onScroll);
    })
    

    const renderList = (fixed) =>(
    <List fixed={fixed}>  
        {
        loading ? 
        [1,2,3,4,5,6].map(categoryloading => <Item key={categoryloading.id}><Category {...categoryloading}/></Item>)
        :
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
