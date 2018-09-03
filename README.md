Build with React, HTML, CSS and Firebase as a Back-End.

This app was created to track Job Applications for the job hunter. 

It's a simple app that allows you to write down which jobs you applied and which ones are your favorite. As anyone knows, job hunting can seem daughnting at time but this apps helps make it easier

Try it out at: https://job-tracker-e27df.firebaseapp.com/

Lessons Learned:
This was my first attempt at making a React app. It allowed me to understand primarily about components, state and props.

Looked at the difference between createRef to grab the value from the input form vs using value={this.state}

There are several ways you can make a method. It is primariy due to the context of 'this'.
1. .bind is required on the constructor function when the method is example() {
    It's required to do this.example = this.example.bind(this) so 'this' is pointing to the class object instead of the global     object.
2. You can use a callback function inside the even handler, which in turn it is not necessary to use .bind
3. The newest way is: example = () => {. You do not need to use .bind.

