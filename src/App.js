import react,{useState} from "react";
 function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    // For example, you might make an API call to save the user's information
    // Once the submission is successful, set the success message
    setSuccessMessage("Submission successful");
  };

  return (
    <main>
      <h1>Hi, I'm Harison1224</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Newsletter Form */}
      <h3>Newsletter Signup</h3>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label>
          Interests:
          <br />
          <input type="checkbox" id="interest1" name="interest" value="Interest 1" />
          <label htmlFor="interest1">Interest 1</label>
          <br />
          <input type="checkbox" id="interest2" name="interest" value="Interest 2" />
          <label htmlFor="interest2">Interest 2</label>
          <br />
          <input type="checkbox" id="interest3" name="interest" value="Interest 3" />
          <label htmlFor="interest3">Interest 3</label>
        </label>

        <button type="submit">Submit</button>
      </form>

      {/* Render the success message */}
      {successMessage && <p>{successMessage}</p>}

    </main>
  )};
export default App;
