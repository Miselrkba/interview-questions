export const data = [
  {
    id: "h1",
    language: "Html",
    question: `What is HTML question 1?
    The odds are that you won’t be asked this directly, but it can’t hurt to remind yourself what HTML stands for: Hyper Text Markup Language.
     This means that an HTML document, written in plain text, is used to describe the structure and content of web pages, with links to other pages and resources. In its most basic form, you can define blocks of content, which are displayed depending on the type of block you used.`,
    answer: `Html Answer1 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "h2",
    language: "Html",
    question: `What is the difference between HTML elements and tags question 2?
    Elements
    Each part of a web page, such as a paragraph, an image, a link or anything else you can interact with, is an element. Each type of element has its own behavior - for answer you can click on links, or type in text boxes.
    
    Tags
    An HTML document is a simple, plain text document, which you are able to open with any text editor on your computer. When you open one, you’ll see the document is made up of tags, which are keywords surrounded by angled brackets, each of which describes an HTML element. Here you can see HTML tags telling the browser how to render the text element inside:`,
    answer: `Html Answer2 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "h3",
    language: "Html",
    question: `What are attributes and how do you use them Qeustion 3?
    Each tag can also have additional attributes, which change the way the tag behaves or is displayed. For answer, an <input> tag has a type attribute, which you can use to specify whether it’s a text field, checkbox, radio button or one of many more options.
    
    Attributes are specified directly after the name of the tag, inside the two angled brackets. They should only ever appear in opening tags or in self-closing tags - they can never be in closing tags. They are followed by an equals sign = and the chosen value in double quotes ". Take care not to include any spaces before and after the equals sign! Multiple attributes can be defined on a single tag, separated by a space.`,
    answer: `Html Answer3 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "c1",
    language: "Css",
    question: `What is CSS question 1?

    CSS outlines the style of an HTML webpage. It is a language by which we can set the behavior of an HTML webpage. It describes how the HTML content will be shown on screen.
    
    CSS controls the layout of several HTML web pages. CSS is referred to as the Cascading Style Sheet.`,
    answer: `Css Answer1 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "c2",
    language: "Css",
    question: `radom CSS question 2`,
    answer: `Css Answer2 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "c3",
    language: "Css",
    question: `random css questio 3`,
    answer: `ACss nswer3 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `random JS questio 1`,
    answer: `Js Answer1 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "j2",
    language: "JavaScript",
    question: `random JS question 2`,
    answer: `Js Answer2 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "j3",
    language: "JavaScript",
    question: `random JS question 3`,
    answer: `Js Answer3 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "r1",
    language: "React",
    question: `1. What is React?`,
    answer: `React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.`,
  },
  {
    id: "r2",
    language: "React",
    question: `2. What are the major features of React?`,
    answer: `The major features of React are:

    It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
    Supports server-side rendering.(SSR)
    Follows Unidirectional data flow or data binding.
    Uses reusable/composable UI components to develop the view.`,
  },
  {
    id: "r3",
    language: "React",
    question: `3. What is JSX?`,
    answer: `JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of 
    JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. 
    This file makes applications robust and boosts its performance. `,
  },
  {
    id: "r3",
    language: "React",
    question: `4. What is the difference between Element and Component?`,
    answer: `An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.
    Whereas a component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree`,
  },
  {
    id: "r1",
    language: "React",
    question: `5. How to create components in React?`,
    answer: `Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as first parameter and return React elements. Class Components: You can also use ES6 class to define a component.`,
  },
  {
    id: "r2",
    language: "React",
    question: `6. When to use a Class Component over a Function Component?`,
    answer: `If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component.`,
  },
  {
    id: "r3",
    language: "React",
    question: `7. What is state in React?`,
    answer: `State of a component is an object that holds some information that may change over the lifetime of the component. State is similar to props, but it is private and fully controlled by the component. i.e, It is not accessible to any component other than the one that owns and sets it. We should always try to make our state as simple as possible and minimize the number of stateful components.`,
  },
  {
    id: "r3",
    language: "React",
    question: `8. What are props in React?`,
    answer: `Props is the shorthand for Properties in React. 
    They are read-only components which must be kept pure i.e. immutable. 
    They are always passed down from the parent to the child components throughout the application. 
    A child component can never send a prop back to the parent component.
    This help in maintaining the unidirectional data flow and are generally
     used to render the dynamically generated data.`,
  },
  {
    id: "r1",
    language: "React",
    question: `9. What is the difference between state and props? `,
    answer: `Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.`,
  },
  {
    id: "r2",
    language: "React",
    question: `10. Why should we not update the state directly?`,
    answer: ` you try to update state directly then it won't re-render the component. nstead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering. `,
  },
  {
    id: "r3",
    language: "React",
    question: `11. What is the difference between HTML and React event handling?`,
    answer: `In HTML, the event name should be in lowercase:

    <button onclick='activateLasers()'>
    Whereas in React it follows camelCase convention:
    
    <button onClick={activateLasers}>`,
  },
  {
    id: "r3",
    language: "React",
    question: `12. How to bind methods or event handlers in JSX callbacks? `,
    answer: `1. Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor. 
    2.Arrow functions in callbacks `,
  },
  {
    id: "r3",
    language: "React",
    question: `13. What are inline conditional expressions? `,
    answer: `You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.
    {
      messages.length > 0 && !isLogin?
        <h2>
            You have {messages.length} unread messages.
        </h2>
        :
        <h2>
            You don't have unread messages.
        </h2>
  } `,
  },
  {
    id: "r3",
    language: "React",
    question: `14. What is "key" prop and what is the benefit of using it in arrays of elements?`,
    answer: `A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed.

    Most often we use ID from our data as key `,
  },
  {
    id: "r3",
    language: "React",
    question: `15. What is the use of refs?`,
    answer: `The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component  `,
  },
  {
    id: "r3",
    language: "React",
    question: `16. How to create refs?`,
    answer: `Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property within constructor.

    class MyComponent extends React.Component {
      constructor(props) {
        super(props)
        this.myRef = React.createRef()
      }
      render() {
        return <div ref={this.myRef} />
      }
    }`,
  },
  {
    id: "r3",
    language: "React",
    question: `17.What is Virtual DOM?  `,
    answer: `Document Object Model. A virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.
    This Virtual DOM works in three simple steps.
    
    Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.Virtual DOM 1 - What Is ReactJS? - Edureka
    Then the difference between the previous DOM representation and the new one is calculated.Virtual DOM 2 - React Interview Questions - Edureka
    Once the calculations are done, the real DOM will be updated with only the things that have actually changed. Virtual DOM 3 - React Interview Questions - Edureka `,
  },
  {
    id: "r3",
    language: "React",
    question: `18. What do you know about controlled and uncontrolled components?`,
    answer: `Controlled Components - 1. They do not maintain their own state, 2. Data is controlled by the parent component, 3.3. They take in the current values through props and then notify the changes via callbacks. Example: handleChange(event) {
      this.setState({value: event.target.value.toUpperCase()})
    }
    Uncontrolled Components- 1. They maintain their own state, 2. Data is controlled by the DOM, 3.3. Refs are used to get their current values. Example: <input type="text" ref={this.input} />  `,
  },
  {
    id: "r3",
    language: "React",
    question: `19. What is Lifting State Up in React?`,
    answer: `When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components. `,
  },
  {
    id: "r3",
    language: "React",
    question: `20. What are the different phases of component lifecycle? `,
    answer: `The component lifecycle has three distinct lifecycle phases:

    Mounting: The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.
    
    Updating: In this phase, the component get updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.
    
    Unmounting: In this last phase, the component is not needed and get unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.
    
    It's worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows
    
    Render The component will render without any side-effects. This applies for Pure components and in this phase, React can pause, abort, or restart the render.
    
    Pre-commit Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the getSnapshotBeforeUpdate().
    
    Commit React works with the DOM and executes the final lifecycles respectively componentDidMount() for mounting, componentDidUpdate() for updating, and componentWillUnmount() for unmounting. `,
  },
  {
    id: "r3",
    language: "React",
    question: `21.What are the lifecycle methods of React? `,
    answer: `getDerivedStateFromProps: Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need derived state. Worth reading if you need derived state.
    componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
    shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
    getSnapshotBeforeUpdate: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
    componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
    componentWillUnmount It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component. `,
  },
  {
    id: "r3",
    language: "React",
    question: `22. What are Higher-Order Components? `,
    answer: `A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

    We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.
    
    const EnhancedComponent = higherOrderComponent(WrappedComponent)
    HOC can be used for many use cases:
    
    Code reuse, logic and bootstrap abstraction.
    Render hijacking.
    State abstraction and manipulation.
    Props manipulation. `,
  },
  {
    id: "r3",
    language: "React",
    question: `23.How to create props proxy for HOC component? `,
    answer: `You can add/edit props passed to the component using props proxy pattern like this:

    function HOC(WrappedComponent) {
      return class Test extends Component {
        render() {
          const newProps = {
            title: 'New Header',
            footer: false,
            showFeatureX: false,
            showFeatureY: true
          }
    
          return <WrappedComponent {...this.props} {...newProps} />
        }
      }
    } `,
  },
  {
    id: "r3",
    language: "React",
    question: `24. What is context?`,
    answer: `Context provides a way to pass data through the component tree without having to pass props down manually at every level.

    For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.
    
    const {Provider, Consumer} = React.createContext(defaultValue) `,
  },
  {
    id: "r3",
    language: "React",
    question: `25. What is children prop?`,
    answer: `Children is a prop (this.props.children) that allow you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop.

    There are a number of methods available in the React API to work with this prop. These include React.Children.map, React.Children.forEach, React.Children.count, React.Children.only, React.Children.toArray.
    
    A simple usage of children prop looks as below,
    
    const MyDiv = React.createClass({
      render: function() {
        return <div>{this.props.children}</div>
      }
    })
    
    ReactDOM.render(
      <MyDiv>
        <span>{'Hello'}</span>
        <span>{'World'}</span>
      </MyDiv>,
      node
    ) `,
  },
  {
    id: "r3",
    language: "React",
    question: `26. How to write comments in React? `,
    answer: `{/* Single-line comments(In vanilla JavaScript, the single-line comments are represented by double slash(//)) */} `,
  },
  {
    id: "r3",
    language: "React",
    question: `27. What is the purpose of using super constructor with props argument? `,
    answer: `A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() call is to access this.props in your child constructors.

    Passing props:
    
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)
    
        console.log(this.props) // prints { name: 'John', age: 42 }
      }
    } `,
  },
  {
    id: "r3",
    language: "React",
    question: `28. What is reconciliation? `,
    answer: `When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation. `,
  },
  {
    id: "r3",
    language: "React",
    question: `29. What would be the common mistake of function being called every time the component renders? `,
    answer: `You need to make sure that function is not being called while passing the function as a parameter.

    render() {
      // Wrong: handleClick is called instead of passed as a reference!
      return <button onClick={this.handleClick()}>{'Click Me'}</button>
    }
    Instead, pass the function itself without parenthesis: `,
  },
  {
    id: "r3",
    language: "React",
    question: `30.Why React uses className over class attribute? `,
    answer: `class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses className instead of class. Pass a string as the className prop.

    render() {
      return <span className={'menu navigation-menu'}>{'Menu'}</span>
    } `,
  },
  {
    id: "r3",
    language: "React",
    question: `31. What are fragments? `,
    answer: `It's common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.  Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
    Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
    The DOM Inspector is less cluttered.`,
  },
  {
    id: "r3",
    language: "React",
    question: `32. What are stateless components? `,
    answer: `If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether. `,
  },
  {
    id: "r3",
    language: "React",
    question: `33. What are stateful components? `,
    answer: `If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. Hooks let you use state and other React features without writing classes. `,
  },
  {
    id: "r3",
    language: "React",
    question: `34. How to apply validation on props in React? `,
    answer: `PropTypes.number
    PropTypes.string
    PropTypes.array
    PropTypes.object
    PropTypes.func
    PropTypes.node
    PropTypes.element
    PropTypes.bool
    PropTypes.symbol
    PropTypes.any.  import PropTypes from 'prop-types'   class User extends React.Component {
      static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
      }
    
      render() {
        return (
          <>
            <h1>{{this.props.name}}</h1>
            <h2>{{this.props.age}}</h2>
          </>
        )
      }
    } `,
  },
  {
    id: "r3",
    language: "React",
    question: `35. What are error boundaries? `,
    answer: `Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

    A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error, info) or static getDerivedStateFromError()  `,
  },
  {
    id: "r3",
    language: "React",
    question: `36. What is the use of react-dom package? `,
    answer: `The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

    render()
    hydrate()
    unmountComponentAtNode()
    findDOMNode()
    createPortal() `,
  },
  {
    id: "r3",
    language: "React",
    question: `37. What is the purpose of render method of react-dom? `,
    answer: `This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes. `,
  },
  {
    id: "r3",
    language: "React",
    question: `38. How to use styles in React? `,
    answer: `The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. `,
  },
  {
    id: "r3",
    language: "React",
    question: `39. How do you conditionally render components? `,
    answer: `In some cases you want to render different components depending on some state. {address
      ? <p>{address}</p>
      : <p>{'Address is not available'}</p>
    } `,
  },
  {
    id: "r3",
    language: "React",
    question: `40. Why we need to pass a function to setState()? `,
    answer: `The reason behind for this is that setState() is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after setState() is called. That means you should not rely on the current state when calling setState() since you can't be sure what that state will be. The solution is to pass a function to setState(), with the previous state as an argument. By doing this you can avoid issues with the user getting the old state value on access due to the asynchronous nature of setState().

    Let's say the initial count value is zero. After three consecutive increment operations, the value is going to be incremented only by one.
    
    // assuming this.state.count === 0
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    // this.state.count === 1, not 3
    If we pass a function to setState(), the count gets incremented correctly.
    
    this.setState((prevState, props) => ({
      count: prevState.count + props.increment
    }))
    // this.state.count === 3 as expected `,
  },
  {
    id: "r3",
    language: "React",
    question: `41. What is strict mode in React? `,
    answer: `React.StrictMode is a useful component for highlighting potential problems in an application. Just like <Fragment>, <StrictMode> does not render any extra DOM elements. It activates additional checks and warnings for its descendants.  `,
  },
];
