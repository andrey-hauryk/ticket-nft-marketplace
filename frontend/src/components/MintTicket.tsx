import React, { useState } from "react";
import CardUI from "./ui/CardUI";

function MintTicket() {
  const title = "Creating of Ticket";

  const description = "You can create a ticket here";

  const [ticketName, setTicketName] = useState<string>(""); 

  const handleSubmit = () => {

  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTicketName(event.target.value);
  }

  return (
    <CardUI 
      title={title}
      description={description}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ticket Name"
          value={ticketName}
          className="w-full p-2 border rounded-lg"
          onInput={handleInput}
          required
        ></input>
        <button 
          type="submit" 
          className="mt-2 w-full bg-blue-500 text-black p-2 rounded-lg hover:bg-blue-600"
        >
          Create Ticket
        </button>
      </form>
    </CardUI>
  );
}

export default MintTicket;