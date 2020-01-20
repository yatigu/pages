import React, {useState} from 'react';
import './station.css';

const Station = () => {
    const [names, setNames] = useState([
        { id:1 , text: '서울역' },
        { id:2 , text: '부산역' },
        { id:3 , text: '평택역' }, 
        { id:4 , text: '천안역'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const nameList = names.map(name => <option value = {name.text} key= { name.id }>{name.text}</option>);
    return ( 
        <div>
            <td valgn="top" className = "sel-box">
                <select>
                    <option value={nameList} >{nameList}</option>
                </select>
            </td>
        </div>
    );
};

export default Station;