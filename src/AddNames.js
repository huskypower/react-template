import React from "react";
import { ReactReduxContext } from "react-redux";

export const AddNames = (props) => {

    const [name, serName] = useState("");
        
    const handleOnChangeName = (e) => {
        console.log(e);
        
        setName (e.target).va
    };
    
    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Name:
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={name}
                          onChange={handleOnChangeName}
                        />
                    </label>
                </div>
            </form>
        </React.Fragment>
    )
}