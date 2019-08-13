import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            
            <header>
                <h2>
                    Contact
                </h2>
                <p> 
                    Phone: 555 867 5309
                    Email: 123fake@gmail.com
                </p>
                <form>
                    <label> 
                        <input type="text" name="name" placeholder="First name:"/>
                    </label>
                </form>
                <form>
                    <label> 
                        <input type="text" name="name" placeholder="Last name"/>
                    </label>
                </form>
                 <form>
                    <label> 
                        <input type="text" name="name" placeholder="Best Impression"/>
                    </label>
                </form>
                
            </header>
            
        )
    }
}

export default Contact;