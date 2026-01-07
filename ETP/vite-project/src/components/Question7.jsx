// Q7. Implement a form in React that submits data using a POST request via Fetch API.

function PostForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Test", body: "Hello" })
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return <button onClick={handleSubmit}>Submit</button>;
}

export default PostForm;