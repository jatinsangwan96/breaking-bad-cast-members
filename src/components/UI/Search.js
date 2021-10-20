import { useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    };

    const textChangeHandler = (event) => {
        onChange(event.target.value);
    };

    return (
        <section className='search'>
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search characters"
                    value={text}
                    onChange={textChangeHandler}
                    autoFocus
                />    
            </form>
        </section>
    );
};

export default Search;