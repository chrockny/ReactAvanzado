import React,{useEffect,useRef,useState} from 'react';
import {ImgWrapper,Article,Img,Button} from './styles';
import {FiHeart} from 'react-icons/fi';

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({id,likes = 0,src = DEFAULT_IMAGE}) =>{

    const element = useRef(null);
    const [show,setShow] = useState(false);

    useEffect(()=>{
        const observer = new window.IntersectionObserver(entries=>{
            const {isIntersecting} = entries[0];
            console.log(isIntersecting);
            if(isIntersecting){
                console.log('si');
                setShow(true);
                observer.disconnect();
            }
        });
        observer.observe(element.current)
    },[element]);

    return (
        <Article ref={element}>
            {
                show && <>
<a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} alt="img"/>
                </ImgWrapper>
                <Button>
                    <FiHeart size='32px'/>
                    {likes} likes!
                </Button>
            </a>
                </>
            }
        </Article>
    )
}