- [ ] Why would you use class component over function components (removing hooks from the question)?

    -   A good use for class components that I can think of is that you have a lot more control over which part of the life cycle you can choose to run a specific function, as well as compatibility for comparing against previous state and previous props is built in.

- [ ] Name three lifecycle methods and their purposes.

    -   componentDidMount: Its purpose is to run a function only after the component has loaded
    -   componentDidUpdate: Its purpose is to run a function after the component has updated somehow
    -   render(): Its purpose is to inspect props and state and then return something, usually JSX

- [ ] What is the purpose of a custom hook?

    -   A custom hook saves us from writing complicated code repeatedly and can serve whatever purpose we write it to do

- [ ] Why is it important to test our apps?

    -   It reduces our total debug time to have tests running in the background
