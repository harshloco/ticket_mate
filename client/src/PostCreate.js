import React, {useState} from "react";
import axios from "axios";

export default () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    };
    return (
    <div>
<form onSubmit={onSubmit} className="row g-3">
    <div className="form-group">
        <label>Title</label>
        <input 
        value = {title} 
        onChange={e => setTitle(e.target.value)}
        className="form-control"
        />
    </div>
    <div className="col-auto">
    <button className="btn btn-primary">Submit</button>
    </div>
   
</form>
    </div>
    );
};