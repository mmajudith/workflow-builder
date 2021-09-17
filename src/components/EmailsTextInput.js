import React,{ useState } from 'react'

function EmailsTextInput() {

    const [emails, setEmails] = useState('');
    const [multEmail, setMultEmail] = useState([]);

    const handleKeyDown = (event) =>{
      if(["Enter","Tab",","].includes(event.key)){
        event.preventDefault();

        console.log(emails.value)

        // let email = emails.value.trim();

        // if(email){
        //   setMultEmail([...multEmail, email])
        // }
    }
  }
  
  return (
    <div>
        {/* {
            multEmail.map((el,id) => {
                <div key={id} style={{width: '100%', height:300}}>
                    <span>{el}</span>
                    <button>&times;</button>
                </div>
            })
        } */}
      <input 
        type="text" 
        placeholder="Type email addressses and press `Enter`" 
        value={emails} 
        className="multiple-email" 
        onChange={event => setEmails(event.target.value)}
        onKeyDown={handleKeyDown}
        />
    </div>
  )
}

export default EmailsTextInput
